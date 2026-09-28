(() => {
  const input = document.querySelector('#docs-search-input');
  const results = document.querySelector('#docs-search-results');
  const list = document.querySelector('#docs-search-list');
  const status = document.querySelector('#docs-search-status');
  const strings = { search_one: 'guia encontrado', search_many: 'guias encontrados',
    search_none: 'Nenhum guia encontrado. Tente outro termo ou navegue pelos assuntos.', ...window.LyraDocsStrings };
  const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const entries = (window.LyraDocsIndex || []).map((entry) => ({ ...entry,
    normalizedTitle: normalize(entry.title),
    haystack: normalize(`${entry.title} ${entry.description} ${entry.text}`),
  }));
  if (input && entries.length) {
    document.querySelector('.docs-search').hidden = false;
    input.addEventListener('input', () => {
      const query = normalize(input.value.trim());
      list.replaceChildren();
      results.hidden = !query;
      if (!query) { status.textContent = ''; return; }
      const terms = query.split(/\s+/);
      const matches = entries.filter((entry) => terms.every((term) => entry.haystack.includes(term)))
        .sort((a, b) => Number(b.normalizedTitle.includes(query)) - Number(a.normalizedTitle.includes(query)));
      status.textContent = matches.length ? `${matches.length} ${matches.length === 1 ? strings.search_one : strings.search_many}.` : strings.search_none;
      for (const entry of matches) {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = entry.url;
        const title = document.createElement('strong');
        title.textContent = entry.title;
        const description = document.createElement('p');
        description.textContent = entry.description;
        link.append(title, description);
        item.append(link);
        list.append(item);
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input, textarea, select, [contenteditable]')) {
        event.preventDefault(); input.focus();
      }
      if (event.key === 'Escape' && document.activeElement === input) {
        input.value = ''; input.dispatchEvent(new Event('input'));
      }
    });
  }
  const navigation = document.querySelector('.docs-navigation');
  if (navigation && window.matchMedia('(max-width: 700px)').matches) navigation.open = false;
})();
