# Documentação do Lyra OS: estudo e direção editorial

Pesquisa realizada em 27 de setembro de 2026. Este documento orienta a manutenção
do site; não é um manual de uso do sistema.

## O que aprendemos com outras distribuições

| Projeto | Organização observada | Aplicação ao Lyra |
|---|---|---|
| Debian | Portal reúne instalação, FAQ, referência e notas de versão; diferencia manuais de usuários e de desenvolvedores. O projeto de documentação mantém fontes em Git e exige manutenção ativa. | Uma entrada clara para iniciantes, documentos de versão separados e fontes rastreáveis. |
| Ubuntu | O manual do Server usa Diátaxis: tutoriais, procedimentos, referência e explicações. Declara a versão-alvo e oferece feedback e edição por página. | Classificar pelo objetivo do leitor, identificar o escopo e facilitar correções. |
| openSUSE | Portal organiza documentação por versão do Leap e por manual. A disponibilidade de manuais e formatos varia entre versões. | Mostrar edição e versão cobertas; consultar a base correta, sem aplicar automaticamente instruções de outro Leap. |
| Fedora | Mantém documentação de usuários em um portal próprio e usa a wiki como espaço de colaboração dos contribuidores. Quick Docs oferece artigos curtos de tarefas e dúvidas. | Separar orientação de uso, diagnóstico e planejamento interno. Guias pequenos, com objetivo definido. |
| Arch | A ArchWiki tem regras de organização, seções, comandos, categorias e tradução; contribuição inclui acompanhamento dos artigos e sinalização de problemas de precisão. | Padronizar os artigos, usar links entre assuntos e tratar revisão como trabalho contínuo. |

Fontes primárias:

- [Debian Documentation](https://www.debian.org/doc/) e [Debian Documentation Project](https://www.debian.org/doc/ddp).
- [Ubuntu Server: organização e contribuição](https://ubuntu.com/server/docs/) e [Ubuntu Desktop](https://ubuntu.com/desktop/docs/en/latest/).
- [openSUSE Documentation](https://doc.opensuse.org/).
- [Fedora Project Wiki: finalidade da wiki](https://fedoraproject.org/wiki/Fedora_Project_Wiki) e [Fedora Start: Quick Docs](https://fedoraproject.org/start/).
- [ArchWiki: Help:Style](https://wiki.archlinux.org/title/Help:Style), [Contributing](https://wiki.archlinux.org/title/ArchWiki:Contributing) e [Template:Accuracy](https://wiki.archlinux.org/title/Template:Accuracy).
- [Diátaxis: quatro necessidades de documentação](https://diataxis.fr/).

Limite da pesquisa: algumas páginas da ArchWiki e Fedora Docs bloquearam a
abertura automatizada. Nesses casos, usamos o conteúdo indexado das próprias
páginas e outras páginas oficiais acessíveis. Não foi feita uma auditoria
completa dos processos internos ou da infraestrutura de publicação.

## Decisão para esta primeira implementação

A recomendação é uma central oficial em `/docs/`, com colaboração por Git e
revisão de alterações. A busca, o sumário e os links cruzados oferecem a consulta
por assunto característica de uma wiki. Uma wiki editável com contas, moderação
e serviço próprio poderá ser avaliada quando houver comunidade para mantê-la.

A estrutura editorial segue as necessidades do Diátaxis, com nomes familiares:

1. **Comece aqui:** tutoriais de primeiros passos, instalação Desktop e Server.
2. **Guias práticos:** tarefas de software, atualizações e diagnóstico.
3. **Referência:** requisitos, termos e dados para consulta.
4. **Entenda o Lyra:** Vega, versões e suporte.
5. **Contribua:** correções e processo de edição.

O tutorial deve levar a um resultado verificável. O procedimento deve resolver
uma tarefa delimitada. A referência deve ser consultável sem leitura sequencial.
A explicação deve esclarecer o funcionamento e as decisões. Artigos que cresçam
misturando essas funções devem ser divididos e ligados entre si.

## Contrato dos artigos

Cada entrada do catálogo possui título, resumo, categoria, tipo de conteúdo,
edição/versão coberta e data de revisão documental. A data registra conferência
das fontes e do texto; **não significa teste do procedimento em hardware**.
Quando existir teste, registrar separadamente versão, ambiente, resultado e
evidência. Não atribuir essa validação apenas por ter lido o código.

Procedimentos devem informar pré-requisitos, efeitos das ações, passos, resultado
esperado e como investigar falhas. Comandos destrutivos exigem contexto sobre o
destino e os dados afetados. Não colocar prompts `$` ou `#` nos comandos para
copiar. Não transformar uma funcionalidade planejada em instrução de uso.

Prioridade das fontes: notas da imagem publicada e seus limites, documentação do
componente correspondente, implementação compatível com essa versão. Havendo
divergência, explicitar o limite e abrir uma correção; não reunir silenciosamente
comportamentos de releases diferentes. Documentação upstream é referência para
componentes comuns, mas não substitui as instruções do instalador e ferramentas
próprias do Lyra.

## Implementação e manutenção

O site atual é HTML/CSS/JavaScript estático, publicado pelo GitHub Pages. Nesta
etapa, os artigos são fragmentos HTML sem layout em `docs/content/`, com metadados
em `catalog.json`. Um template compartilhado gera as páginas e a busca local com
Python, sem dependências externas. Não há novo servidor, banco ou rastreador de
buscas. Conteúdo e navegação continuam acessíveis sem JavaScript.

Essa escolha preserva a infraestrutura existente; **não é uma recomendação de
usar HTML manual em um acervo grande**. Quando o volume de artigos, traduções ou
versões justificar, avaliar um gerador consolidado com Markdown ou AsciiDoc,
mantendo URLs, metadados e separação entre texto e apresentação. O modelo
editorial não depende dessa migração.

Fluxo: editar fonte → gerar → verificar links e navegação → revisar a alteração
→ publicar pelo fluxo existente. O CI gera e verifica as páginas. Cada artigo
oferece edição e histórico. A mudança de uma funcionalidade deve trazer a revisão
do guia afetado; cada candidata deve revisar instalação, atualização e recuperação.

Português é o idioma de origem. As traduções para inglês, espanhol e italiano
registram no catálogo a revisão do original usada (`source_reviewed`) e são
sinalizadas quando o original fica mais recente; devem ser revisadas junto dele. Quando houver mais de uma linha efetivamente
documentada, introduzir seleção de versão e arquivo histórico, preservando links.
Não criar seletores sem conteúdo correspondente.

Não copiar textos de outras distribuições: a pesquisa orienta estrutura e
processo. Uma política explícita de licença documental para contribuições futuras
deve ser definida pelo mantenedor antes de incorporar conteúdo de terceiros.

## Próximas ampliações de conteúdo

- Guias separados para rede, backups e restauração, com execução validada.
- Capturas do instalador vinculadas à candidata correspondente.
- Referência das interfaces do Vega conforme versões efetivamente distribuídas.
- Notas de versão navegáveis e arquivo de procedimentos superados.
- Traduções completas e identificação de artigos que precisam de revisão.

Esses itens são planejamento editorial, não recursos anunciados como entregues.
