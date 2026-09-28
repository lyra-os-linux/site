# Manutenção da documentação

Leia [o estudo e a direção editorial](documentation-strategy.md) antes de criar
novos guias. O conteúdo público está em `content/*.html`; títulos, categorias,
escopo e revisão ficam em `content/catalog.json`. O português é a origem; as
traduções ficam em `content/en/`, `content/es/` e `content/it/`, com catálogos
próprios, e os textos da interface de cada idioma em `content/locales.json`.
O template compartilhado está em `scripts/docs-template.html`. As páginas HTML
em `docs/`, `docs/en/`, `docs/es/` e `docs/it/` e os arquivos `search-index.js`
são gerados e devem acompanhar as fontes no commit.

Na raiz do repositório, execute:

```sh
python3 scripts/build-docs.py
python3 scripts/check-docs.py
python3 -m http.server 8000
```

Abra `http://localhost:8000/docs/`. Confira busca com e sem acentos, menu móvel,
tema claro/escuro, links internos e leitura sem JavaScript. O build atualiza
também o sitemap. A validação não executa os comandos ensinados nos artigos nem
confirma disponibilidade de sites externos.

Para adicionar um guia, crie um fragmento HTML e uma entrada no catálogo. Use
`h2` com IDs estáveis para o sumário automático; o título principal vem do
catálogo. Atualize `reviewed` quando revisar o texto e suas fontes. Não remova
URLs ou IDs publicados sem preservar o acesso anterior.

Ao revisar um guia em português, atualize as traduções no mesmo commit ou deixe
o `source_reviewed` delas como está: o build avisa e as páginas traduzidas
exibem um alerta com link para o original. Ao traduzir, preserve nomes de
arquivo, IDs dos `h2` e comandos, e atualize `source_reviewed` para a data de
`reviewed` do original usado.
