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


def link(article, label=None):
    return f'<a href="{article["slug"]}.html">{escape(label or article["title"])}</a>'


def build():
    articles = json.loads((SOURCE / "catalog.json").read_text())
    template = Template((ROOT / "scripts/docs-template.html").read_text())
    groups = list(dict.fromkeys(a["group"] for a in articles))
    search = []
    for article in articles:
        article["content"] = (SOURCE / f'{article["slug"]}.html').read_text()
        parsed = ArticleParser()
        parsed.feed(article["content"])
        article["headings"] = parsed.headings
        search.append({"title": article["title"], "description": article["description"],
                       "url": f'{article["slug"]}.html', "text": " ".join(" ".join(parsed.text).split())})

    cards = []
    for group in groups:
        items = ''.join(f'<a class="doc-card" href="{a["slug"]}.html"><span class="doc-card-type">{escape(a["kind"])}</span><h3>{escape(a["title"])}</h3><p>{escape(a["description"])}</p><span class="doc-card-arrow" aria-hidden="true">↗</span></a>' for a in articles if a["group"] == group)
        cards.append(f'<section class="doc-category"><h2>{escape(group)}</h2><div class="doc-cards">{items}</div></section>')
    intro = '<a class="docs-start" href="instalacao.html"><span><small>SEU PRIMEIRO LYRA</small><strong>Da imagem ISO ao primeiro boot.</strong><span>Comece pelo guia de instalação do Desktop.</span></span><span aria-hidden="true">→</span></a>'
    home = {"slug": "index", "title": "Um lugar para aprender e consultar.",
            "description": "Instale, conheça e cuide do seu Lyra OS. Guias para os primeiros passos, tarefas do dia a dia e administração do sistema.",
            "content": intro + ''.join(cards), "group": "Documentação / Lyra OS", "headings": []}
    for article in [home, *articles]:
        is_home = article["slug"] == "index"
        navigation = []
        for group in groups:
            items = ''.join(f'<li><a href="{a["slug"]}.html"' + (' aria-current="page"' if a["slug"] == article["slug"] else '') + f'>{escape(a["title"])}</a></li>' for a in articles if a["group"] == group)
            navigation.append(f'<p class="docs-nav-group">{escape(group)}</p><ul>{items}</ul>')
        toc = ''
        if article["headings"]:
            toc = '<nav class="docs-toc" aria-label="Nesta página"><strong>Nesta página</strong><ul>' + ''.join(f'<li><a href="#{escape(anchor)}">{escape(title)}</a></li>' for anchor, title in article["headings"]) + '</ul></nav>'
        metadata = ''
        footer = ''
        if not is_home:
            metadata = f'<div class="docs-meta"><span>{escape(article["kind"])}</span><span>{escape(article["scope"])}</span><span>Revisão documental: <time datetime="{article["reviewed"]}">{"/".join(reversed(article["reviewed"].split("-")))}</time></span></div>'
            edit = f'https://github.com/lyra-os-linux/site/edit/main/docs/content/{article["slug"]}.html'
            history = f'https://github.com/lyra-os-linux/site/commits/main/docs/content/{article["slug"]}.html'
            footer = f'<footer class="doc-article-footer"><p>Este guia pode melhorar com a sua experiência.</p><div><a href="{edit}">Sugerir edição ↗</a><a href="{history}">Histórico ↗</a><a href="contribuir.html">Como contribuir</a></div></footer>'
        output = template.substitute(title=escape(article["title"]), description=escape(article["description"]), filename=f'{article["slug"]}.html',
            navigation=''.join(navigation), breadcrumb='' if is_home else f'<span aria-hidden="true">/</span><span aria-current="page">{escape(article["title"])}</span>',
            eyebrow=escape(article["group"]), metadata=metadata, toc=toc, content=article["content"], article_footer=footer)
        output = '\n'.join(line.rstrip() for line in output.splitlines()) + '\n'
        (DOCS / f'{article["slug"]}.html').write_text('<!-- Gerado por scripts/build-docs.py. Edite docs/content/ ou scripts/docs-template.html. -->\n' + output)
    (DOCS / 'search-index.js').write_text('// Gerado por scripts/build-docs.py.\nwindow.LyraDocsIndex = ' + json.dumps(search, ensure_ascii=False) + ';\n')
    namespace = 'http://www.sitemaps.org/schemas/sitemap/0.9'
    ET.register_namespace('', namespace)
    sitemap = ET.parse(ROOT / 'sitemap.xml')
    for url in list(sitemap.getroot()):
        if (url.findtext(f'{{{namespace}}}loc') or '').startswith('https://lyraos.com.br/docs/'):
            sitemap.getroot().remove(url)
    for article in [home, *articles]:
        url = ET.SubElement(sitemap.getroot(), f'{{{namespace}}}url')
        ET.SubElement(url, f'{{{namespace}}}loc').text = f'https://lyraos.com.br/docs/{article["slug"]}.html'
    ET.indent(sitemap, space='  ')
    sitemap.write(ROOT / 'sitemap.xml', encoding='UTF-8', xml_declaration=True)
    print(f'Generated {len(articles) + 1} documentation pages, search index and sitemap.')


if __name__ == '__main__':
    build()
