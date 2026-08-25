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
nome de produto `1.0` passa a ser **`27.02`** (lançamento final em ~fev/2027)
e o antigo `1.1` passa a ser **`27.10`** (lançamento final em ~out/2027). Não
existe mais o conceito de "versão maior 1.x" agrupando releases — cada
release é numerada pelo próprio ano.mês de lançamento, como no Ubuntu.

## Política de suporte

O Lyra OS, na linha baseada em openSUSE Leap 16, terá suporte até **outubro
de 2032**. Cada release (`27.02`, `27.10`, ...) mantém seu próprio ciclo de
suporte e pode exigir a migração para um release mais recente.

## Cronograma — Lyra OS 27.02 “Odisseia” (base openSUSE Leap 16.0)

| Estágio | Cadência | Janela | Política |
|---|---|---|---|
| Alpha 3 | concluída | 11 ago 2026 | Fechamento do instalador e da publicação. |
| Alpha 4 | snapshot antecipado | 14 ago 2026 | Infraestrutura de internacionalização, instalador em três idiomas e primeira onda de pacotes. |
| Alpha 5 | 2 semanas | 14 ago 2026 – 28 ago 2026 | Estabilização dos bloqueadores herdados; contratos do Lyra Upgrade; análise jurídica, referência BigLinux, qualificação upstream, UX e ADR do controle parental no Vega. |
| Alpha 6 | 2 semanas | 28 ago 2026 – 11 set 2026 | Core, preflight, estado durável e serviço privilegiado do Lyra Upgrade; backend de políticas parentais. |
| Alpha 7 | 2 semanas | 11 set 2026 – 25 set 2026 | Interface e upgrade entre releases; configuração parental e autorização de aplicativos no Vega. Toda implementação funcional encerra nesta etapa. |
| Alpha 8 | 2 semanas e 4 dias | 25 set 2026 – 13 out 2026 | Gates automatizados de update, upgrade, rollback e ECA Digital; semana de 06–13/10 exclusiva para estabilização. Nenhuma feature nova. |
| Beta 1 | 4 semanas | 13 out 2026 – 10 nov 2026 | **Feature freeze:** nenhuma feature, idioma, componente ou infraestrutura nova. Somente correções de bugs, regressões, segurança, desempenho e traduções existentes. |
| Beta 2 | 4 semanas | 10 nov 2026 – 08 dez 2026 | Estabilidade, atualizações e regressões. Nenhuma feature nova. |
| Beta 3 | 4 semanas | 08 dez 2026 – 05 jan 2027 | QA linguístico e correções finais. Corrigir catálogos e traduções existentes; não criar infraestrutura, traduzir novo componente nem adicionar idioma. |
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
a fase Alpha continua em vez de iniciar a Beta 1.

### Distribuição das Alphas restantes

- **Alpha 5 — estabilização e contratos:** corrigir primeiro os bloqueadores do
  instalador e do pipeline de release; aprovar arquitetura, segurança e
  contratos do Lyra Upgrade. Para o ECA Digital, concluir o enquadramento
  jurídico, auditar a referência do BigLinux, qualificar a base upstream,
  especificar a experiência no Vega e aprovar a ADR. A governança regulatória
  LTS também recebe sua baseline. A ISO NVIDIA dedicada foi cancelada: existe
  somente uma ISO Desktop e o fluxo pós-instalação pelo Vega já foi validado.
- **Alpha 6 — backend:** implementar core, preflight, plano, estado durável,
  serviço privilegiado e update seguro dentro da mesma release; implementar
  separadamente o serviço autenticado e persistente de políticas parentais.
- **Alpha 7 — produto completo:** entregar a interface e o upgrade controlado
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

## Cronograma — Lyra OS 27.10 “Ilíada” (rebase para openSUSE Leap 16.1)

Início em março de 2027, cerca de 1 mês após a final da 27.02. A base muda de
Leap 16.0 para Leap 16.1 (GA em 3 nov 2026), exigindo revalidação de
disponibilidade de pacotes, ABI, shim de Secure Boot e matriz de hardware —
não é um bump cosmético. O funil é mais enxuto que o da 27.02 porque o tooling
de release e o processo de gate já existem; só a base precisa de
requalificação.

| Estágio | Cadência | Janela |
|---|---|---|
| Alpha 1 | 2 semanas | 01 mar 2027 – 15 mar 2027 |
| Alpha 2 | 2 semanas | 15 mar 2027 – 29 mar 2027 |
| Alpha 3 | 2 semanas | 29 mar 2027 – 12 abr 2027 |
| Alpha 4 | 2 semanas | 12 abr 2027 – 26 abr 2027 |
| Alpha 5 | 2 semanas | 26 abr 2027 – 10 mai 2027 |
| Alpha 6 | 2 semanas | 10 mai 2027 – 24 mai 2027 |
| Alpha 7 | 2 semanas | 24 mai 2027 – 07 jun 2027 |
| Alpha 8 | 2 semanas | 07 jun 2027 – 21 jun 2027 |
| Beta 1 | 4 semanas | 21 jun 2027 – 19 jul 2027 |
| Beta 2 | 4 semanas | 19 jul 2027 – 16 ago 2027 |
| Beta 3 | 4 semanas | 16 ago 2027 – 13 set 2027 |
| RC 1 | 2 semanas | 13 set 2027 – 27 set 2027 |
| RC 2 | 2 semanas | 27 set 2027 – 11 out 2027 |
| **Final estável — Lyra OS 27.10 “Ilíada”** | buffer 2 semanas | **~25 out 2027** |

## Cronograma — Lyra OS Server 27.10 “Tebas”

O Server segue um ciclo e um gate independentes do Desktop. O rebase para
openSUSE Leap 16.1 exige requalificar boot, Secure Boot, rede, firewall,
armazenamento ext4 e as interfaces `vega-cli`, `vegad` e `vega-web`.

| Estágio | Cadência | Janela |
|---|---|---|
| Alpha 1 | 3 semanas | 01 mar 2027 – 22 mar 2027 |
| Alpha 2 | 3 semanas | 22 mar 2027 – 12 abr 2027 |
| Alpha 3 | 3 semanas | 12 abr 2027 – 03 mai 2027 |
| Beta 1 | 4 semanas | 03 mai 2027 – 31 mai 2027 |
| Beta 2 | 4 semanas | 31 mai 2027 – 28 jun 2027 |
| Beta 3 | 4 semanas | 28 jun 2027 – 26 jul 2027 |
| RC 1 | 2 semanas | 26 jul 2027 – 09 ago 2027 |
| RC 2 | 2 semanas | 09 ago 2027 – 23 ago 2027 |
| **Final estável — Lyra OS Server 27.10 “Tebas”** | buffer 2 semanas | **~06 set 2027** |

## Observação de nomenclatura

"27.02" e "27.10" são os nomes de produto dos ciclos de release, no padrão
ano.mês (estilo Ubuntu) referente à data prevista do lançamento final. Essa
numeração é distinta da versão de calendário completa (`AAAA.MM`) usada
internamente pelo `release.toml`. Não existe hoje um campo formal de versão
semântica major.minor no schema de release — isso ainda é uma decisão em
aberto, caso o site precise expor esse número de forma estruturada (ex.: JSON
de roadmap consumido pela página).
