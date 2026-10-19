# Versionamento de releases do Lyra OS

## Política oficial

Desde a decisão do mantenedor em 13/10/2026, a versão do Lyra OS segue a
versão do openSUSE Leap usado como base. O formato é `MAJOR.MINOR[.PATCH]`:

- `MAJOR.MINOR`: idêntico ao Leap base (`16.1`, `16.2`, ...);
- `PATCH`: correção, manutenção ou respin da mesma release, de uso
  exclusivo do Lyra.

Uma versão nova do Leap determina a próxima versão minor do Lyra. Datas
pertencem ao roadmap ou ao `BUILD_ID`, nunca à versão comercial.

Até outubro de 2026 o ciclo era numerado `1.1`, com versionamento independente
do Leap. As imagens já publicadas com esse número (`1.1-alpha.8` do Desktop e
`1.1-beta.1.1` do Server) permanecem como registro histórico e não são
renomeadas; nenhuma candidata nova usa o esquema antigo.

## Geração atual

- geração: **Lyra OS 16** — Odisseia no Desktop, Delos no Server;
- primeira versão estável planejada: **Lyra OS 16.1**;
- base tecnológica da 16.1: **openSUSE Leap 16.1**;
- arquitetura inicial: **x86_64**.

O codename identifica toda a geração: qualquer release `16.x` continua sendo
Odisseia (Desktop) ou Delos (Server). Desktop e Server compartilham a versão,
mas possuem gates, tags e ciclos de publicação independentes.

## Pré-releases

Pré-releases usam `16.1-alpha.1`, `16.1-beta.1` e `16.1-rc.1` em identificadores
técnicos; a comunicação usa “Lyra OS 16.1 Alpha 1”, “Beta 1” e “RC1”. Datas
não fazem parte da versão. Uma revisão dentro do mesmo estágio acrescenta um
componente, como `16.1-beta.1.1`.

| Versão | Codename | Base | Situação |
|---|---|---|---|
| 16.1 | Odisseia (Desktop) / Delos (Server) | openSUSE Leap 16.1 | Em desenvolvimento (RC 1) |

## Calendário

- Desktop 16.1 RC 1 e Server 16.1 RC 1: publicação até 31/10/2026;
- openSUSE Leap 16.1 GA: 03/11/2026;
- Lyra OS Desktop 16.1: 05/11/2026;
- Lyra OS Server 16.1: 19/11/2026 (a RC 1 é promovida por tag quando o gate
  passa, sem novo build).

Uma versão é publicada quando passa pelos critérios de qualidade, não porque
uma data chegou.

## Suporte

O Lyra OS 16.1 terá suporte comunitário, sem prazo contratual ou EOL prometido.
O suporte da base openSUSE, o suporte de uma release Lyra e o ciclo da geração
16.x são políticas distintas. Artefatos legados serão preservados e republicados
com nomes semânticos, mantendo checksums, assinaturas e proveniência
verificáveis.
