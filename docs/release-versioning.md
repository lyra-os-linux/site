# Versionamento e roadmap do Lyra OS

## Identidade da geração atual

- Produto: **Lyra OS 1 — Odisseia**
- Primeira versão estável planejada: **Lyra OS 1.0**
- Base tecnológica da 1.0: **openSUSE Leap 16.1**
- Estado: em desenvolvimento

Desktop e Server pertencem à mesma geração Odisseia. Cada edição conserva seu
próprio gate e pode publicar candidatas em momentos diferentes, mas não recebe
codename próprio.

## Política de versão

O Lyra OS usa versionamento próprio `MAJOR.MINOR.PATCH`:

- `MAJOR` identifica uma nova geração do produto;
- `MINOR` identifica evolução relevante e compatível na mesma geração;
- `PATCH` identifica manutenção ou respin sem mudança da geração funcional.

A versão do openSUSE Leap é registrada separadamente como base tecnológica.
Uma atualização do Leap pode motivar uma release minor, mas não determina
automaticamente o número do Lyra OS.

Pré-releases usam `1.0-alpha.1`, `1.0-beta.1` e `1.0-rc.1` em identificadores
técnicos; a comunicação usa “Lyra OS 1.0 Alpha 1”, “Beta 1” e “RC1”. Datas
identificam builds e janelas do roadmap, nunca a versão comercial.

## Roadmap atual

| Lyra OS | Geração | Base | Status |
|---|---|---|---|
| 1.0 | Odisseia | openSUSE Leap 16.1 | Em desenvolvimento |

Não há versões posteriores anunciadas. Elas não serão inferidas a partir das
futuras versões do Leap.

As etapas Alpha, Beta e RC continuam promovidas por critérios de saída. Uma
data prevista não autoriza publicar uma candidata incompleta; se o gate não
estiver verde, a versão mantém o mesmo número e o lançamento é adiado.

## Suporte e EOL

O suporte da base openSUSE, o suporte de uma release Lyra e o ciclo de vida da
geração 1.x são políticas distintas. O projeto não publica promessa de EOL ou
de suporte prolongado para o Lyra OS enquanto a capacidade correspondente não
estiver formalmente definida. A geração poderá evoluir por releases 1.x com
caminhos suportados de atualização.

O Lyra OS 1.0 terá suporte comunitário, sem prazo contratual ou EOL prometido.
Seu lançamento está previsto para **20 de fevereiro de 2027**, condicionado ao
gate completo; a data não promove uma candidata que ainda tenha bloqueadores.

## Histórico

Artefatos, tags, evidências e release notes já publicados com identificadores
calendário permanecem como registros históricos. Eles serão republicados sob
nomes semânticos, preservando checksums, assinaturas e proveniência para deixar
explícito quando dois nomes representam o mesmo conteúdo. Eles não definem a política
das novas candidatas e não devem ser usados para inferir uma equivalência entre
versões do Lyra OS e do openSUSE Leap.
