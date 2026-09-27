# Manutenção da documentação

Leia [o estudo e a direção editorial](documentation-strategy.md) antes de criar
novos guias. O conteúdo público está em `content/*.html`; títulos, categorias,
escopo e revisão ficam em `content/catalog.json`. O template compartilhado está
em `scripts/docs-template.html`. As páginas HTML diretamente em `docs/` e
`search-index.js` são geradas e devem acompanhar as fontes no commit.

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
