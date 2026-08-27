# Cronograma de releases do Lyra OS — prompt para atualização do site

Use este documento como prompt/fonte para atualização da página de roadmap do
site do Lyra OS.

O site possui interface em `pt-BR`, `en-US` e `es-ES`, com `pt-BR`
como padrão. Essa cobertura não se estende automaticamente ao livro oficial:
o livro será publicado somente em **português e inglês**. As interfaces em
espanhol deve informar esse limite explicitamente.

## Contexto

O Lyra OS está reorganizando seu esquema de versionamento. A build atual, que
era rotulada `Beta 2`, foi rebaixada para `Alpha 2` — reconhecendo que ainda
havia correções de funcionalidade core do instalador em andamento (partição
de disco, sudo, permissões pkexec), não apenas estabilização. A tag pública
já publicada `v2026.08-beta2-stable-20260809` permanece como registro
histórico; o próximo ciclo de beta recomeça em `beta1`.

O número de iterações por estágio abaixo é um teto, não uma promessa fixa: a
promoção de estágio é liberada por critério de saída (nenhum item crítico
aberto no gate de release do estágio), não apenas pela data. Se um estágio
fechar mais cedo, a próxima fase começa mais cedo — as datas assumem o
cenário em que todo o teto é usado.

## Novo padrão de versionamento (estilo Ubuntu)

O Lyra OS adota o padrão de versionamento por ano e mês usado pelo Ubuntu
(`AA.MM`, dois dígitos de ano e dois de mês do lançamento final). O antigo
nome de produto `1.0` passa a ser **`27.02`** (lançamento final em ~fev/2027).
Não existe mais o conceito de "versão maior 1.x" agrupando releases — cada
release é numerada pelo próprio ano.mês de lançamento, como no Ubuntu.

## Política de suporte

O Lyra OS, na linha baseada em openSUSE Leap 16, terá suporte até **outubro
de 2032**. Cada release (`27.02`, ...) mantém seu próprio ciclo de
suporte e pode exigir a migração para um release mais recente.

## Cronograma — Lyra OS 27.02 “Odisseia” (Desktop em openSUSE Leap 16.1 a partir da Alpha 7)

| Estágio | Cadência | Janela | Política |
|---|---|---|---|
| Alpha 3 | concluída | 11 ago 2026 | Fechamento do instalador e da publicação. |
| Alpha 4 | snapshot antecipado | 14 ago 2026 | Infraestrutura de internacionalização, instalador em três idiomas e primeira onda de pacotes. |
| Alpha 5 | 2 semanas | 14 ago 2026 – 28 ago 2026 | Estabilização dos bloqueadores herdados; contratos do Lyra Upgrade; análise jurídica, referência BigLinux, qualificação upstream, UX e ADR do controle parental no Vega. |
| Alpha 6 | 2 semanas | 28 ago 2026 – 11 set 2026 | Core, preflight, estado durável e serviço privilegiado do Lyra Upgrade; backend de políticas parentais. |
| Alpha 7 | 2 semanas | 11 set 2026 – 25 set 2026 | Rebase do Desktop para Leap 16.1 Beta 1 e requalificação integral; interface e upgrade entre releases; configuração parental e autorização de aplicativos no Vega. |
| Alpha 8 | 2 semanas e 4 dias | 25 set 2026 – 13 out 2026 | Gates automatizados de update, upgrade, rollback e ECA Digital; semana de 06–13/10 exclusiva para estabilização. Nenhuma feature nova. |
| Beta 1 | 4 semanas | 13 out 2026 – 10 nov 2026 | Estabilização e melhorias aprovadas com benefício, risco, testes e reversão registrados. |
| Beta 2 | 4 semanas | 10 nov 2026 – 08 dez 2026 | Estabilidade, atualizações e melhorias qualificadas sob os mesmos gates. |
| Beta 3 | 4 semanas | 08 dez 2026 – 05 jan 2027 | QA linguístico, correções finais e últimas melhorias qualificadas antes da RC1. |
| RC 1 | 2 semanas | 05 jan 2027 – 19 jan 2027 | Somente bloqueadores P0/P1 e repetição do gate. |
| RC 2 | 2 semanas | 19 jan 2027 – 02 fev 2027 | Somente bloqueadores P0/P1 e repetição do gate. |
| **Final — Lyra OS 27.02 “Odisseia”** | buffer 2 semanas | **~16 fev 2027** | Publicação condicionada ao gate de qualidade. |

O Lyra OS 27.02 oferece somente **en-US, pt-BR e es-ES** no instalador e na
seleção de idioma do sistema. Outros idiomas ficam fora do
escopo da 27.02 e só podem entrar em um ciclo futuro com catálogo, revisão e gate
próprios. Para os pacotes próprios cuja interface ainda não cobre os três,
**pt-BR e en-US** continuam sendo o gate mínimo obrigatório. Alpha 5,
Alpha 6, Alpha 7 e Alpha 8 são obrigatórias e possuem gates próprios. Um P0/P1
interrompe a ampliação de escopo da Alpha corrente e não é transferido por
conveniência. Toda implementação funcional e infraestrutura de i18n fecha até
25/09/2026; a Alpha 8 automatiza os gates e a semana de 06–13/10 recebe somente estabilização. Sem gate verde,
a fase Alpha continua em vez de iniciar a Beta 1. Por decisão do mantenedor,
Desktop e Server 27.02 podem receber melhorias durante as Betas quando o ganho
esperado compensar o risco, com benefício, impacto, testes de regressão e plano
de reversão registrados. A RC1 inicia o congelamento estrito.

### Distribuição das Alphas restantes

- **Alpha 5 — estabilização e contratos:** corrigir primeiro os bloqueadores do
  instalador e do pipeline de release; aprovar arquitetura, segurança e
  contratos do Lyra Upgrade. Para o ECA Digital, concluir o enquadramento
  jurídico, auditar a referência do BigLinux, qualificar a base upstream,
  especificar a experiência no Vega e aprovar a ADR. A governança regulatória
  também recebe sua baseline. A ISO NVIDIA dedicada foi cancelada: existe
  somente uma ISO Desktop e o fluxo pós-instalação pelo Vega já foi validado.
- **Alpha 6 — backend:** implementar core, preflight, plano, estado durável,
  serviço privilegiado e update seguro dentro da mesma release; implementar
  separadamente o serviço autenticado e persistente de políticas parentais.
- **Alpha 7 — rebase e produto completo:** migrar o Desktop para Leap 16.1
  Beta 1, reconstruir os RPMs e repetir os gates de ABI, instalação, Secure
  Boot, atualização, rollback e hardware; entregar a interface e o upgrade controlado
  entre releases; integrar no Vega a configuração parental e a autorização de
  aplicativos sobre o backend já estável. Toda implementação funcional encerra
  até 25/09.
- **Alpha 8 — gate e estabilização:** automatizar update, upgrade, reboot,
  rollback e a matriz de conformidade/regressão do ECA Digital. Nenhuma feature
  nova entra nesta etapa; a semana de 06–13/10 é somente para estabilização.

## Política do Lyra OS Server 27.02 “Delos”

O Server mantém ciclo e gate independentes. Seu inventário de pacotes não é
derivado automaticamente do Desktop. Na Beta 3, o objetivo é: **QA linguístico
dos componentes já internacionalizados e correções finais; nenhuma feature
nova.**

O Server migra para openSUSE Leap 16.1 na Beta 2. A Beta 1 publicada continua
reproduzível em Leap 16.0; a primeira candidata na base nova exige reconstruir
os RPMs e repetir integralmente os gates de instalação, Secure Boot, primeiro
boot, atualização, rollback, rede, firewall e administração remota. Essa
exceção de infraestrutura não reabre o escopo funcional.

## Observação de nomenclatura

`27.02` é a versão canônica do ciclo de release, no padrão
ano.mês (estilo Ubuntu), tanto na apresentação do produto quanto nos metadados
internos. O campo `calendar_version` usa diretamente `AA.MM`; não há uma
numeração `1.x` paralela.
