#!/usr/bin/env python3
"""Check published documentation links, anchors and basic page structure."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids = set()
        self.links = []
        self.h1 = 0
        self.path = path
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, f'{self.path}: duplicate ID {attrs["id"]}'
            self.ids.add(attrs['id'])
        self.h1 += tag == 'h1'
        if tag in ('a', 'link') and 'href' in attrs:
            self.links.append(attrs['href'])
        if tag in ('script', 'img') and 'src' in attrs:
            self.links.append(attrs['src'])


pages = {path: Page(path) for path in [ROOT / 'index.html', *sorted(p for p in (ROOT / 'docs').rglob('*.html') if 'content' not in p.relative_to(ROOT / 'docs').parts)]}
count = 0
for path, page in list(pages.items()):
    assert page.h1 == 1, f'{path}: expected one h1, found {page.h1}'
    for href in page.links:
        url = urlsplit(href)
        if url.scheme or url.netloc:
            continue
        target = ((ROOT / unquote(url.path.lstrip('/'))) if url.path.startswith('/') else (path.parent / unquote(url.path))).resolve() if url.path else path
        if target.is_dir():
            target /= 'index.html'
        assert target.is_file(), f'{path}: missing local target {href}'
        if url.fragment and target.suffix == '.html':
            if target not in pages:
                pages[target] = Page(target)
            assert unquote(url.fragment) in pages[target].ids, f'{path}: missing anchor {href}'
        count += 1
print(f'Checked {len(pages)} pages and {count} local links/assets/anchors.')
