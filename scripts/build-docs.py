#!/usr/bin/env python3
"""Generate static documentation using only the Python standard library."""
import json
from html import escape
from html.parser import HTMLParser
from pathlib import Path
from string import Template
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
SOURCE = DOCS / "content"
SITE = "https://lyraos.com.br/docs/"


class ArticleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.headings = []
        self.heading = None

    def handle_starttag(self, tag, attrs):
        if tag == "h2":
            self.heading = [dict(attrs)["id"], ""]

    def handle_data(self, data):
        self.text.append(data)
        if self.heading is not None:
            self.heading[1] += data

    def handle_endtag(self, tag):
        if tag == "h2" and self.heading is not None:
            self.headings.append(self.heading)
            self.heading = None


def prefix(locale):
    return f'{locale["dir"]}/' if locale["dir"] else ''


def relative(source, target):
    """Relative path from a page in `source` locale to the docs folder of `target`."""
    return ('../' if source["dir"] else '') + prefix(target)


def format_date(value, locale):
    year, month, day = value.split("-")
    if locale["months"]:
        return f'{locale["months"][int(month) - 1]} {int(day)}, {year}'
    return f'{day}/{month}/{year}'


def load(locale, source_articles=None):
    folder = SOURCE / locale["dir"]
    articles = json.loads((folder / "catalog.json").read_text())
    if source_articles is not None:
        slugs = [a["slug"] for a in source_articles]
        assert [a["slug"] for a in articles] == slugs, f'{folder}/catalog.json: slugs must match the Portuguese catalog in order'
        originals = {a["slug"]: a for a in source_articles}
        for article in articles:
            article["outdated"] = article["source_reviewed"] < originals[article["slug"]]["reviewed"]
            if article["outdated"]:
                print(f'Warning: {locale["code"]} translation of {article["slug"]} is older than the Portuguese source.')
    for article in articles:
        article["source_path"] = f'docs/content/{prefix(locale)}{article["slug"]}.html'
        article["content"] = (folder / f'{article["slug"]}.html').read_text()
        parsed = ArticleParser()
        parsed.feed(article["content"])
        article["headings"] = parsed.headings
        article["text"] = " ".join(" ".join(parsed.text).split())
    return articles


def build_locale(locale, locales, articles, template):
    s = locale["strings"]
    out = DOCS / locale["dir"]
    out.mkdir(exist_ok=True)
    root = '../../' if locale["dir"] else '../'
    home_page = root + 'index.html' + (f'?lang={locale["site_lang"]}' if locale["site_lang"] else '')
    download = home_page + '#download'
    groups = list(dict.fromkeys(a["group"] for a in articles))
    search = [{"title": a["title"], "description": a["description"], "url": f'{a["slug"]}.html', "text": a["text"]} for a in articles]

    cards = []
    for group in groups:
        items = ''.join(f'<a class="doc-card" href="{a["slug"]}.html"><span class="doc-card-type">{escape(a["kind"])}</span><h3>{escape(a["title"])}</h3><p>{escape(a["description"])}</p><span class="doc-card-arrow" aria-hidden="true">↗</span></a>' for a in articles if a["group"] == group)
        cards.append(f'<section class="doc-category"><h2>{escape(group)}</h2><div class="doc-cards">{items}</div></section>')
    intro = f'<a class="docs-start" href="instalacao.html"><span><small>{escape(s["start_small"])}</small><strong>{escape(s["start_title"])}</strong><span>{escape(s["start_text"])}</span></span><span aria-hidden="true">→</span></a>'
    home = {"slug": "index", "title": s["home_title"], "description": s["home_description"],
            "content": intro + ''.join(cards), "group": s["home_eyebrow"], "headings": []}
    js_strings = {key: s[key] for key in ("search_one", "search_many", "search_none")}
    js_strings.update({"Ativar tema claro": s["theme_light"], "Ativar tema escuro": s["theme_dark"]})

    for article in [home, *articles]:
        slug = article["slug"]
        is_home = slug == "index"
        filename = f'{slug}.html'
        navigation = []
        for group in groups:
            items = ''.join(f'<li><a href="{a["slug"]}.html"' + (' aria-current="page"' if a["slug"] == slug else '') + f'>{escape(a["title"])}</a></li>' for a in articles if a["group"] == group)
            navigation.append(f'<p class="docs-nav-group">{escape(group)}</p><ul>{items}</ul>')
        languages = ''.join(f'<a href="{relative(locale, other)}{filename}" lang="{other["code"]}" hreflang="{other["code"]}" title="{escape(other["name"])}"' + (' aria-current="page"' if other is locale else '') + f'><abbr title="{escape(other["name"])}">{other["short"]}</abbr></a>' for other in locales)
        alternates = '\n'.join(f'  <link rel="alternate" hreflang="{other["code"]}" href="{SITE}{prefix(other)}{filename}">' for other in locales)
        alternates += f'\n  <link rel="alternate" hreflang="x-default" href="{SITE}{filename}">'
        toc = ''
        if article["headings"]:
            toc = f'<nav class="docs-toc" aria-label="{escape(s["on_this_page"])}"><strong>{escape(s["on_this_page"])}</strong><ul>' + ''.join(f'<li><a href="#{escape(anchor)}">{escape(title)}</a></li>' for anchor, title in article["headings"]) + '</ul></nav>'
        metadata = footer = note = ''
        if not is_home:
            reviewed = f'<span>{escape(s["reviewed"])}: <time datetime="{article["reviewed"]}">{format_date(article["reviewed"], locale)}</time></span>'
            if "source_reviewed" in article:
                reviewed += f'<span>{escape(s["translated_from"])} <time datetime="{article["source_reviewed"]}">{format_date(article["source_reviewed"], locale)}</time></span>'
                if article["outdated"]:
                    note = '<div class="doc-note doc-warning">' + Template(s["outdated"]).substitute(source=f'../{filename}') + '</div>'
            metadata = f'<div class="docs-meta"><span>{escape(article["kind"])}</span><span>{escape(article["scope"])}</span>{reviewed}</div>'
            edit = f'https://github.com/lyra-os-linux/site/edit/main/{article["source_path"]}'
            history = f'https://github.com/lyra-os-linux/site/commits/main/{article["source_path"]}'
            footer = f'<footer class="doc-article-footer"><p>{escape(s["footer_prompt"])}</p><div><a href="{edit}">{escape(s["suggest_edit"])} ↗</a><a href="{history}">{escape(s["history"])} ↗</a><a href="contribuir.html">{escape(s["how_to_contribute"])}</a></div></footer>'
        values = {key: escape(value) for key, value in s.items() if key not in ("outdated",)}
        output = template.substitute(values, lang=locale["code"], og_locale=locale["og_locale"], root=root, home=home_page, download=download,
            canonical=f'{SITE}{prefix(locale)}{filename}', alternates=alternates, languages=languages,
            js_strings=json.dumps(js_strings, ensure_ascii=False).replace('</', '<\\/'),
            title=escape(article["title"]), description=escape(article["description"]),
            navigation=''.join(navigation), breadcrumb='' if is_home else f'<span aria-hidden="true">/</span><span aria-current="page">{escape(article["title"])}</span>',
            eyebrow=escape(article["group"]), metadata=metadata, translation_note=note, toc=toc, content=article["content"], article_footer=footer)
        output = '\n'.join(line.rstrip() for line in output.splitlines() if line.strip()) + '\n'
        (out / filename).write_text('<!-- Gerado por scripts/build-docs.py. Edite docs/content/ ou scripts/docs-template.html. -->\n' + output)
    (out / 'search-index.js').write_text('// Gerado por scripts/build-docs.py.\nwindow.LyraDocsIndex = ' + json.dumps(search, ensure_ascii=False) + ';\n')
    return [f'{SITE}{prefix(locale)}{a["slug"]}.html' for a in [home, *articles]]


def build():
    locales = json.loads((SOURCE / "locales.json").read_text())
    template = Template((ROOT / "scripts/docs-template.html").read_text())
    source = load(locales[0])
    urls = []
    for locale in locales:
        articles = source if not locale["dir"] else load(locale, source)
        urls += build_locale(locale, locales, articles, template)

    namespace = 'http://www.sitemaps.org/schemas/sitemap/0.9'
    ET.register_namespace('', namespace)
    sitemap = ET.parse(ROOT / 'sitemap.xml')
    for url in list(sitemap.getroot()):
        if (url.findtext(f'{{{namespace}}}loc') or '').startswith(SITE):
            sitemap.getroot().remove(url)
    for loc in urls:
        url = ET.SubElement(sitemap.getroot(), f'{{{namespace}}}url')
        ET.SubElement(url, f'{{{namespace}}}loc').text = loc
    ET.indent(sitemap, space='  ')
    sitemap.write(ROOT / 'sitemap.xml', encoding='UTF-8', xml_declaration=True)
    print(f'Generated {len(urls)} documentation pages in {len(locales)} languages, search indexes and sitemap.')


if __name__ == '__main__':
    build()
