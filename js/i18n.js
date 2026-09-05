(() => {
  const DEFAULT_LOCALE = 'pt-BR';
  const LOCALES = ['pt-BR', 'en-US', 'es-ES'];
  const labels = {
    'pt-BR': 'Português', 'en-US': 'English', 'es-ES': 'Español',
  };

  const catalogs = {
    'en-US': {
      'Pular para o conteúdo': 'Skip to content', 'Abrir menu': 'Open menu', 'Sobre': 'About', 'Homenagem': 'Tribute', 'A base': 'Foundation',
      'Ecossistema': 'Ecosystem', 'Experiência': 'Experience', 'Livro': 'Book', 'Cronograma': 'Roadmap', 'Requisitos': 'Requirements', 'Download': 'Download', 'Tema': 'Theme',
      'Ativar tema claro': 'Enable light theme', 'Ativar tema escuro': 'Enable dark theme', 'Navegação principal': 'Main navigation', 'Idioma do site': 'Site language',
      'Lyra OS, início': 'Lyra OS, home', 'Informações da versão atual': 'Current version information', 'Rolar para a seção Sobre': 'Scroll to the About section',
      'A Alpha 6 já está disponível': 'Alpha 6 is now available', 'Conheça o': 'Meet',
      'Marca Lyra OS e destaque da versão Alpha 6': 'Lyra OS brand and Alpha 6 release highlight',
      'Um sistema feito para encontrar o equilíbrio entre potência, estabilidade e liberdade — no desktop e no servidor.': 'A system built to balance power, stability, and freedom — on desktop and server.',
      'Harmonia. Performance. Liberdade.': 'Harmony. Performance. Freedom.', 'Harmonia · Performance · Liberdade': 'Harmony · Performance · Freedom',
      'Escolher edição': 'Choose edition', 'Descobrir o projeto': 'Discover the project', 'Versão atual': 'Current version',
      'Base do sistema': 'System base', 'Disponível': 'Available', 'agora': 'now', 'Ver downloads': 'View downloads',
      'role para explorar': 'scroll to explore', '01 / A ideia': '01 / The idea', 'Um sistema que': 'A system that',
      'não fica no caminho.': 'stays out of your way.',
      'Lyra OS é um projeto pessoal independente de': 'Lyra OS is an independent personal project by',
      ', criado para transformar o desktop Linux em um lugar mais coerente, acolhedor e confiável.': ', created to make the Linux desktop more coherent, welcoming, and reliable.',
      'O nome vem da constelação de Lyra: um pequeno desenho no céu com uma identidade marcante. É dessa mesma ideia de clareza e proporção que nasce cada escolha do sistema.': 'The name comes from the Lyra constellation: a small pattern in the sky with a distinctive identity. Every system choice grows from that same sense of clarity and proportion.',
      'Uma faísca em 2005': 'A spark in 2005', 'Algumas ideias levam anos': 'Some ideas take years', 'para encontrar sua forma.': 'to find their form.',
      'Em 2005, assisti a uma palestra de': 'In 2005, I attended a talk by', '. Sua defesa apaixonada do software livre mudou a maneira como eu enxergava tecnologia, comunidade e liberdade.': '. His passionate advocacy for free software changed the way I saw technology, community, and freedom.',
      'O Lyra OS nasceu muitos anos depois, mas carrega algo daquele encontro.': 'Lyra OS was born many years later, but it carries something from that encounter.', 'Obrigado, maddog, por acender essa estrela.': 'Thank you, maddog, for lighting this star.',
      'Conhecer a trajetória de Jon “maddog” Hall': 'Discover Jon “maddog” Hall’s story',
      'Jon “maddog” Hall no palco diante do público durante uma palestra na CaFeCONF 2005': 'Jon “maddog” Hall on stage before the audience during a talk at CaFeCONF 2005', 'Jon “maddog” Hall na CaFeCONF 2005': 'Jon “maddog” Hall at CaFeCONF 2005', 'Foto:': 'Photo:', '· imagem redimensionada': '· resized image',
      'ciclo previsível': 'predictable cycle', 'estabilidade': 'stability', 'open source': 'open source', '02 / A fundação': '02 / The foundation',
      'A estabilidade': 'Stability', 'como ponto de partida.': 'as the starting point.',
      'Lyra OS escolhe o': 'Lyra OS chooses',
      'como sua base. Uma decisão intencional por uma fundação madura, com ciclo de lançamento previsível e foco em consistência.': 'as its base. An intentional choice of a mature foundation, with a predictable release cycle and a focus on consistency.',
      'Em um cenário dominado por bases Arch, Ubuntu e Fedora, o Leap traz uma alternativa sólida para quem quer usar o desktop com tranquilidade — sem abrir mão de performance ou liberdade.': 'In a landscape dominated by Arch, Ubuntu, and Fedora bases, Leap offers a solid alternative for people who want a worry-free desktop without giving up performance or freedom.',
      'Conhecer o openSUSE': 'Discover openSUSE', '03 / O coração': '03 / The heart', 'Tudo encontra seu centro.': 'Everything finds its center.',
      'O Vega organiza o essencial e dá ao sistema um ponto de partida simples, claro e humano.': 'Vega organizes the essentials and gives the system a simple, clear, human starting point.',
      'O centro de controle do Lyra OS, pré-instalado e desenhado para deixar as decisões importantes sempre ao alcance.': 'The Lyra OS control center, preinstalled and designed to keep important choices within easy reach.',
      'Vega é a estrela mais brilhante da constelação de Lyra — o coração que orienta todo o sistema.': 'Vega is the brightest star in the Lyra constellation — the heart that guides the entire system.',
      'O Lyra OS vem com o': 'Lyra OS comes with', 'pré-instalado: uma coleção de ferramentas em uma interface gráfica simples e prática, pronta para facilitar tarefas e configurações do dia a dia.': 'preinstalled: a collection of tools in a simple, practical graphical interface, ready to make everyday tasks and configuration easier.',
      'Conhecer o LinuxToys': 'Discover LinuxToys',
      'O ecossistema cresce com cuidado. Os demais componentes seguem em desenvolvimento e validação para versões futuras.': 'The ecosystem grows carefully. Other components remain under development and validation for future releases.',
      '04 / A experiência': '04 / The experience', 'Familiar por natureza.': 'Familiar by nature.', 'Lyra por escolha.': 'Lyra by choice.',
      'Um GNOME limpo, com o branding do Lyra aplicado com intenção. Menos ruído visual, mais espaço para aquilo que você quer fazer.': 'A clean GNOME desktop with intentional Lyra branding. Less visual noise, more room for what you want to do.',
      'GNOME e KDE Plasma com o branding do Lyra aplicado com intenção. Duas experiências oficiais, com a mesma identidade e liberdade de escolha.': 'GNOME and KDE Plasma with intentional Lyra branding. Two official experiences with the same identity and freedom of choice.',
      'Interface clara e consistente': 'Clear, consistent interface', 'Base sólida para o seu dia a dia': 'A solid base for everyday use',
      'Liberdade para personalizar': 'Freedom to customize', 'Bom dia, Rodrigo': 'Good morning, Rodrigo', 'Seu sistema,': 'Your system,', 'em harmonia.': 'in harmony.', 'Em breve': 'Coming soon',
      'VEGA / CENTRO DE CONTROLE': 'VEGA / CONTROL CENTER',
      'Área de trabalho do Lyra OS Desktop Alpha 6: GNOME com painel superior, dock lateral de aplicativos e o papel de parede Odisseia.': 'The Lyra OS Desktop Alpha 6 desktop: GNOME with a top panel, an application dock on the left, and the Odisseia wallpaper.',
      'Lyra OS Desktop Alpha 6 · GNOME com o papel de parede Odisseia': 'Lyra OS Desktop Alpha 6 · GNOME with the Odisseia wallpaper',
      'carrossel': 'carousel', 'Ambientes de trabalho do Lyra OS': 'Lyra OS desktop environments',
      'Lyra OS Desktop · GNOME com o papel de parede Odisseia': 'Lyra OS Desktop · GNOME with the Odisseia wallpaper',
      'Área de trabalho do Lyra OS KDE Plasma com o menu de aplicativos aberto e o papel de parede Odisseia.': 'Lyra OS KDE Plasma desktop with the application menu open and the Odisseia wallpaper.',
      'Lyra OS Desktop · KDE Plasma com o papel de parede Odisseia': 'Lyra OS Desktop · KDE Plasma with the Odisseia wallpaper',
      'Imagem anterior': 'Previous image', 'Próxima imagem': 'Next image', 'Escolher ambiente de trabalho': 'Choose desktop environment',
      'Mostrar GNOME': 'Show GNOME', 'Mostrar KDE Plasma': 'Show KDE Plasma',
      '05 / Para ir além': '05 / Go further', 'O livro oficial': 'The official book', 'do Lyra OS.': 'of Lyra OS.',
      'Um guia completo de instalação, utilização e administração — do primeiro contato ao domínio do sistema, escrito por Rodrigo Brito.': 'A complete guide to installation, use, and administration — from first contact to mastering the system, written by Rodrigo Brito.',
      'Capa do livro Lyra OS: Do primeiro contato ao domínio do sistema, por Rodrigo Brito': 'Cover of the book Lyra OS: From First Contact to System Mastery, by Rodrigo Brito',
      'Idiomas da publicação': 'Publication languages', 'Português e inglês.': 'Portuguese and English only.',
      'Em desenvolvimento — lançamento em breve': 'In development — coming soon', '06 / Roadmap': '06 / Roadmap',
      'Cronograma completo': 'Complete release', 'de releases.': 'roadmap.',
      'O número de iterações por estágio é um teto, não uma promessa fixa. A promoção acontece por critério de saída — sem itens críticos abertos no gate de release — e não apenas pela data. As janelas abaixo consideram o uso de todo o tempo previsto.': 'The number of iterations per stage is a ceiling, not a fixed promise. Promotion depends on exit criteria — no open critical release-gate items — not just the date. The windows below assume all planned time is used.',
      'Alpha 5–8 fecham o Desktop · feature freeze a partir da Beta 1': 'Alpha 5–8 complete Desktop · feature freeze starts at Beta 1',
      'As Alphas restantes avançam por gates: P0/P1 não passa para a etapa seguinte. Toda implementação funcional fecha até 25/09/2026; a Alpha 8 automatiza os gates e sua última semana é exclusiva para estabilização.': 'The remaining Alphas advance through gates: P0/P1 issues do not move to the next stage. All feature implementation closes by Sep 25, 2026; Alpha 8 automates the gates and its final week is reserved for stabilization.',
      'Política de internacionalização e congelamento funcional': 'Internationalization and feature-freeze policy',
      'Política de suporte do Lyra OS': 'Lyra OS support policy',
      'Lyra OS com suporte até uma política formal': 'Lyra OS supported through a formal policy',
      'A linha Lyra OS baseada em openSUSE Leap 16 terá suporte até uma política formal. Cada release (1.1, uma release futura...) mantém seu próprio ciclo de suporte e pode exigir a migração para um release mais recente.': 'The Lyra OS line based on openSUSE Leap 16 will be supported through a formal policy. Each release (1.1, uma release futura...) has its own support cycle and may require an upgrade to a newer release.',
      '“1.1” e “uma release futura” são as versões canônicas dos ciclos no padrão MAJOR.MINOR.PATCH (estilo Ubuntu), inclusive nos metadados internos de release. O Lyra OS terá suporte até uma política formal.': '“1.1” and “uma release futura” are the canonical cycle versions in the MAJOR.MINOR.PATCH pattern (Ubuntu-style), including internal release metadata. Lyra OS will be supported through a formal policy.',
      'LANÇADA': 'RELEASED', 'ENTREGUE': 'DELIVERED', 'PUBLICAÇÃO · 14 AGO': 'RELEASE · AUG 14', '2 SEMANAS': '2 WEEKS', '2 SEMANAS · ESTABILIZAÇÃO': '2 WEEKS · STABILIZATION',
      'VERSÃO ATUAL · ENTREGUE': 'CURRENT VERSION · DELIVERED',
      '2 SEMANAS + HARDENING': '2 WEEKS + HARDENING', '4 SEMANAS': '4 WEEKS', '3 SEMANAS': '3 WEEKS', 'VERSÃO ESTÁVEL': 'STABLE RELEASE',
      'DISPENSADA': 'SKIPPED', 'Não foi necessária: a fase Alpha fechou na Alpha 2.': 'Not required: the Alpha stage closed at Alpha 2.',
      '3 SEMANAS · SE NECESSÁRIA': '3 WEEKS · IF NEEDED', 'FEATURE FREEZE · 4 SEMANAS': 'FEATURE FREEZE · 4 WEEKS', 'UPGRADE + HARDENING': 'UPGRADE + HARDENING', 'LANÇAMENTO': 'RELEASE',
      'Fechamento do instalador e da publicação.': 'Installer and publishing completion.',
      'Antes rotulada Beta 1.': 'Previously labeled Beta 1.', 'Antes rotulada Beta 2.': 'Previously labeled Beta 2.',
      'i18n base, instalador em três idiomas e primeira onda de pacotes.': 'Base i18n, three-language installer, and first package wave.',
      'Descrição: o Lyra OS 1.1 oferece en-US, pt-BR e es-ES; outros idiomas ficam para ciclos futuros. O fluxo NVIDIA segue para a Alpha 5.': 'Description: Lyra OS 1.1 provides en-US, pt-BR, and es-ES; other languages are deferred to future cycles. The NVIDIA flow moves to Alpha 5.',
      'Bloqueadores do instalador e release; contratos do Lyra Upgrade e do controle parental no Vega.': 'Installer and release blockers; Lyra Upgrade and Vega parental-control contracts.',
      'Descrição: inclui análise jurídica, referência do BigLinux, qualificação upstream, UX e arquitetura do controle parental; a implementação só começa após esses gates.': 'Description: includes legal analysis, the BigLinux reference, upstream qualification, UX, and parental-control architecture; implementation starts only after these gates.',
      'Core e serviço do Lyra Upgrade; serviço de políticas de controle parental.': 'Lyra Upgrade core and service; parental-control policy service.',
      'Interface e upgrade entre releases; configuração parental e autorização de aplicativos no Vega.': 'Interface and cross-release upgrade; parental configuration and app authorization in Vega.',
      'Gates automatizados de update, upgrade, rollback e ECA Digital; depois, somente estabilização.': 'Automated update, upgrade, rollback, and ECA Digital gates; stabilization only afterward.',
      '2 SEMANAS · BACKEND': '2 WEEKS · BACKEND', '2 SEMANAS · PRODUTO COMPLETO': '2 WEEKS · COMPLETE PRODUCT', 'GATE + ESTABILIZAÇÃO': 'GATE + STABILIZATION',
      'Congelamento funcional e correção de bugs.': 'Feature freeze and bug fixes.', 'Estabilidade, atualizações e regressões.': 'Stability, updates, and regressions.',
      'QA linguístico e correções finais.': 'Language QA and final fixes.', 'Somente bloqueadores P0/P1 e repetição do gate.': 'P0/P1 blockers and gate reruns only.',
      'Descrição: Nenhuma feature, idioma, componente ou infraestrutura nova. Somente correções de bugs, regressões, segurança, desempenho e traduções existentes.': 'Description: No new features, languages, components, or infrastructure. Only bug, regression, security, performance, and existing-translation fixes.',
      'Descrição: Nenhuma feature nova.': 'Description: No new features.',
      'Descrição: Corrigir catálogos e traduções existentes; não criar infraestrutura, traduzir novo componente nem adicionar idioma.': 'Description: Fix existing catalogs and translations; do not create infrastructure, translate new components, or add languages.',
      'ciclo com gate independente': 'independent gated cycle',
      'Alpha 5, Alpha 6, Alpha 7 e Alpha 8 são obrigatórias e possuem gates próprios. Um P0/P1 interrompe a ampliação de escopo da Alpha corrente. A semana de 06–13/10 recebe somente estabilização; sem gate verde, a fase Alpha continua.': 'Alpha 5, Alpha 6, Alpha 7, and Alpha 8 are mandatory and have their own gates. A P0/P1 issue stops scope expansion in the current Alpha. Oct 6–13 is reserved for stabilization; without a green gate, the Alpha stage continues.',
      'O Server possui ciclo e gate independentes, mas segue a mesma cadência e os mesmos critérios de qualidade do Desktop. Desktop e Server não precisam ser publicados no mesmo dia.': 'Server has an independent cycle and gate while following the same quality criteria as Desktop. Desktop and Server do not need to ship on the same day.',
      'Fim de suporte da Lyra OS 1.1': 'End of support for Lyra OS 1.1', 'Fim de suporte da Lyra OS Server 1.1': 'End of support for Lyra OS Server 1.1',
      'Suporte encerra em 31 de outubro de 2027, junto com o fim de vida da base openSUSE Leap 16.x; a migração para a Lyra OS uma release futura (base Leap 16.x) deve ocorrer antes dessa data.': 'Support ends on October 31, 2027, alongside the end of life of the openSUSE Leap 16.x base; migration to Lyra OS uma release futura (Leap 16.x base) must take place before that date.',
      'Suporte encerra em 31 de outubro de 2027, junto com o fim de vida da base openSUSE Leap 16.x; a migração para a Lyra OS Server uma release futura (base Leap 16.x) deve ocorrer antes dessa data.': 'Support ends on October 31, 2027, alongside the end of life of the openSUSE Leap 16.x base; migration to Lyra OS Server uma release futura (Leap 16.x base) must take place before that date.',
      'Objetivo: repetir a instalação completa e produzir candidato rastreável.': 'Objective: repeat the complete installation and produce a traceable candidate.',
      'Objetivo: fechar Secure Boot, primeiro boot, DHCP, SSH, firewall, vegad e vega-web com evidências.': 'Objective: complete Secure Boot, first boot, DHCP, SSH, firewall, vegad, and vega-web with evidence.',
      'Objetivo: resolver bloqueadores restantes e ampliar hardware, sem adicionar novo escopo.': 'Objective: resolve remaining blockers and expand hardware coverage without adding new scope.',
      'Objetivo: congelamento funcional do fluxo disco inteiro/ext4.': 'Objective: feature freeze for the whole-disk/ext4 flow.',
      'Objetivo: estabilidade, atualizações, rede e administração remota.': 'Objective: stability, updates, networking, and remote administration.',
      'Objetivo: QA linguístico dos componentes já internacionalizados e correções finais; nenhuma feature nova.': 'Objective: language QA for already internationalized components and final fixes; no new features.',
      'Objetivo: candidato completo e assinado, validado em máquina virtual e hardware.': 'Objective: a complete, signed candidate validated on virtual machines and hardware.',
      'Objetivo: somente correções bloqueantes e repetição integral do gate.': 'Objective: blocker fixes only and a full gate rerun.',
      'Objetivo: publicação e verificação dos artefatos baixados.': 'Objective: publish and verify downloaded artifacts.',
      'Alvo interno: janeiro; fevereiro é a margem de segurança. Se a fase Alpha terminar na Alpha 2, sem pendências críticas e com todas as evidências do gate, a versão final pode sair por volta de 26 de janeiro de 2027. O Server possui gate independente e não precisa ser publicado no mesmo dia que o Desktop.': 'Internal target: January; February is the safety margin. If the Alpha stage ends at Alpha 2 with no critical issues and all gate evidence complete, the final release may ship around January 26, 2027. Server has an independent gate and does not need to ship on the same day as Desktop.',
      'O ciclo começa cerca de um mês após a versão 1.1. A mudança de base exige revalidar pacotes, ABI, shim de Secure Boot e a matriz de hardware.': 'The cycle begins about one month after version 1.1. The base change requires revalidating packages, ABI, the Secure Boot shim, and the hardware matrix.',
      'EOL · ESTIMATIVA': 'EOL · ESTIMATE', 'Fim de suporte da Lyra OS uma release futura': 'End of support for Lyra OS uma release futura', 'Fim de suporte da Lyra OS Server uma release futura': 'End of support for Lyra OS Server uma release futura',
      'O openSUSE Leap 16.x ainda não tem data oficial de lançamento nem de fim de vida. Esta data é uma projeção baseada no padrão histórico de 24 meses de suporte por versão minor do Leap e está sujeita a confirmação.': 'openSUSE Leap 16.x does not yet have an official release or end-of-life date. This date is a projection based on the historical pattern of 24 months of support per Leap minor release and is subject to confirmation.',
      'Ciclo independente do Desktop, com requalificação da base, do boot seguro, da rede e das ferramentas de administração remota.': 'A cycle independent from Desktop, with requalification of the base, secure boot, networking, and remote-administration tools.',
      '06 ago 2026': 'Aug 6, 2026', 'base openSUSE Leap 16.x': 'openSUSE Leap 16.x base',
      '14 ago 2026': 'Aug 14, 2026', '17 ago 2026': 'Aug 17, 2026', '25 ago 2026': 'Aug 25, 2026', '28 ago – 11 set 2026': 'Aug 28 – Sep 11, 2026',
      '11 – 25 set 2026': 'Sep 11–25, 2026', '25 set – 13 out 2026': 'Sep 25 – Oct 13, 2026', '13 out – 10 nov 2026': 'Oct 13 – Nov 10, 2026',
      '10 nov – 08 dez 2026': 'Nov 10 – Dec 8, 2026', '08 dez 2026 – 05 jan 2027': 'Dec 8, 2026 – Jan 5, 2027',
      '05 – 19 jan 2027': 'Jan 5–19, 2027', '19 jan – 02 fev 2027': 'Jan 19 – Feb 2, 2027', '20 fev 2027': 'Feb 20, 2027', '31 out 2027': 'Oct 31, 2027',
      '01 – 22 set 2026': 'Sep 1–22, 2026', '22 set – 13 out 2026': 'Sep 22 – Oct 13, 2026',
      '01 – 15 mar 2027': 'Mar 1–15, 2027', '15 – 29 mar 2027': 'Mar 15–29, 2027', '29 mar – 12 abr 2027': 'Mar 29 – Apr 12, 2027',
      '12 – 26 abr 2027': 'Apr 12–26, 2027', '26 abr – 10 mai 2027': 'Apr 26 – May 10, 2027', '10 – 24 mai 2027': 'May 10–24, 2027',
      '24 mai – 07 jun 2027': 'May 24 – Jun 7, 2027', '07 – 21 jun 2027': 'Jun 7–21, 2027', '21 jun – 19 jul 2027': 'Jun 21 – Jul 19, 2027',
      '19 jul – 16 ago 2027': 'Jul 19 – Aug 16, 2027', '16 ago – 13 set 2027': 'Aug 16 – Sep 13, 2027', '13 – 27 set 2027': 'Sep 13–27, 2027',
      '27 set – 11 out 2027': 'Sep 27 – Oct 11, 2027', '~25 out 2027': '~Oct 25, 2027', '~out 2028': '~Oct 2028',
      '01 – 22 mar 2027': 'Mar 1–22, 2027', '22 mar – 12 abr 2027': 'Mar 22 – Apr 12, 2027', '12 abr – 03 mai 2027': 'Apr 12 – May 3, 2027',
      '03 – 31 mai 2027': 'May 3–31, 2027', '31 mai – 28 jun 2027': 'May 31 – Jun 28, 2027', '28 jun – 26 jul 2027': 'Jun 28 – Jul 26, 2027',
      '26 jul – 09 ago 2027': 'Jul 26 – Aug 9, 2027', '09 – 23 ago 2027': 'Aug 9–23, 2027', '~out 2027': '~Oct 2027',
      'VERSÃO ATUAL · 3 SEMANAS': 'CURRENT VERSION · 3 WEEKS', 'rebase para openSUSE Leap 16.x': 'rebase to openSUSE Leap 16.x',
      'Em publicação': 'Publishing in progress', 'Tente novamente em instantes.': 'Please try again shortly.',
      '07 / Uma nova etapa': '07 / A new stage', 'Escolha sua': 'Choose your', 'edição do Lyra.': 'Lyra edition.',
      'O Lyra OS Desktop Alpha 7 com GNOME, KDE Plasma e XFCE e o Server Beta 1 já estão disponíveis.': 'Lyra OS Desktop Alpha 7 with GNOME, KDE Plasma and XFCE and Server Beta 1 are now available.',
      'As imagens do Lyra OS para desktop e servidor estão em publicação. Tente novamente em instantes.': 'The Lyra OS desktop and server images are being published. Please try again shortly.',
      'O Lyra OS está disponível para desktop e servidor, com imagens para arquitetura x86_64.': 'Lyra OS is available for desktop and server, with x86_64 images.',
      'Para computadores pessoais, com ambiente gráfico e experiência completa do Lyra OS.': 'For personal computers, with a graphical desktop and the complete Lyra OS experience.',
      'Baixar Desktop': 'Download Desktop', 'Para servidores e infraestrutura, com uma base enxuta voltada à administração de serviços.': 'For servers and infrastructure, with a lean base focused on service administration.',
      'Fechar opções de download': 'Close download options', 'Lyra OS Desktop': 'Lyra OS Desktop',
      'Escolha seu': 'Choose your', 'ambiente de trabalho.': 'desktop environment.',
      'As três opções oferecem a mesma base do Lyra OS, com experiências de uso diferentes.': 'All three options share the same Lyra OS base, with different user experiences.',
      'Moderno e direto, com uma experiência focada, fluida e integrada ao Lyra OS.': 'Modern and direct, with a focused, fluid experience integrated into Lyra OS.',
      'Visual flexível e familiar, com ampla personalização e integração essencial do Lyra.': 'A flexible, familiar interface with extensive customization and essential Lyra integration.',
      'Leve e eficiente, ideal para máquinas modestas ou para quem prefere simplicidade.': 'Lightweight and efficient, ideal for modest hardware or anyone who prefers simplicity.',
      'Baixar o Lyra OS': 'Download Lyra OS', 'Baixar GNOME': 'Download GNOME', 'Baixar KDE': 'Download KDE', 'Baixar XFCE': 'Download XFCE',
      'Baixar Server': 'Download Server', 'Downloads hospedados no SourceForge.': 'Downloads hosted on SourceForge.', 'Tutorial de instalação': 'Installation tutorial',
      'Instale a Alpha 2 passo a passo.': 'Install Alpha 2 step by step.', 'Assistir no YouTube': 'Watch on YouTube',
      'Instale o Desktop Alpha 4 passo a passo.': 'Install Desktop Alpha 4 step by step.', 'Como instalar o Lyra OS Desktop Alpha 2': 'How to install Lyra OS Desktop Alpha 2',
      'Instale o Server Alpha 2 passo a passo.': 'Install Server Alpha 2 step by step.', 'Como instalar o Lyra OS Server Alpha 2': 'How to install Lyra OS Server Alpha 2',
      'Projeto pessoal independente de Rodrigo Brito.': 'An independent personal project by Rodrigo Brito.', 'Feito com curiosidade, cuidado e software livre.': 'Made with curiosity, care, and free software.',
      'Voltar ao topo': 'Back to top', 'Voltar ao início': 'Back to the beginning', 'Página inicial': 'Home', 'Contato': 'Contact', 'Galeria': 'Gallery',
      'Recursos oficiais · 2026': 'Official resources · 2026', 'Tudo o que você precisa para conhecer, testar e divulgar o Lyra OS.': 'Everything you need to learn about, test, and cover Lyra OS.',
      'Media Kit': 'Media kit', 'Versão de avaliação': 'Preview release', '01 / O projeto': '01 / The project', 'Linux brasileiro.': 'Brazilian Linux.', 'Visão global.': 'Global vision.',
      'O Lyra OS é uma distribuição Linux brasileira baseada no openSUSE Leap 16.x, desenvolvida para oferecer uma experiência moderna, elegante e extremamente estável.': 'Lyra OS is a Brazilian Linux distribution based on openSUSE Leap 16.x, built to provide a modern, elegant, and highly stable experience.',
      'Estabilidade': 'Stability', 'Simplicidade': 'Simplicity', 'Performance': 'Performance', 'Elegância': 'Elegance',
      'Baseado no openSUSE Leap.': 'Based on openSUSE Leap.', 'Ferramentas intuitivas.': 'Intuitive tools.', 'Sistema leve e otimizado.': 'Lightweight, optimized system.',
      'Experiência visual consistente do início ao fim.': 'A consistent visual experience from start to finish.', '02 / O nome': '02 / The name', 'Por que': 'Why',
      '03 / Para quem': '03 / For whom', 'Feito para trabalhar.': 'Built for work.', 'Pronto para explorar.': 'Ready to explore.',
      'Desenvolvedores': 'Developers', 'Profissionais de TI': 'IT professionals', 'Empresas': 'Businesses', 'Estudantes': 'Students', 'Quem busca estabilidade': 'People who value stability',
      '04 / Destaques': '04 / Highlights', 'O essencial,': 'The essentials,', 'Uma base madura, previsível e confiável.': 'A mature, predictable, reliable base.',
      'GNOME personalizado': 'Customized GNOME', 'Uma experiência coesa, familiar e refinada.': 'A cohesive, familiar, refined experience.',
      'Gerenciamento centralizado e integrado.': 'Centralized, integrated management.', 'Tema próprio': 'Custom theme', 'Ícones exclusivos': 'Exclusive icons',
      'Atualizações simples': 'Simple updates', 'Alta estabilidade': 'High stability', 'Excelente desempenho': 'Excellent performance',
      '05 / Conheça o Vega': '05 / Meet Vega', 'em um só lugar.': 'in one place.', 'O Vega é o centro de gerenciamento do Lyra OS.': 'Vega is the Lyra OS management center.',
      'Administração': 'Administration', 'Configuração': 'Configuration', 'Manutenção': 'Maintenance', 'VISÃO GERAL': 'OVERVIEW',
      'Tudo em harmonia': 'Everything in harmony', 'Seu sistema está atualizado.': 'Your system is up to date.', 'Atualizações': 'Updates', 'Sistema em dia': 'System up to date',
      'Software': 'Software', 'Gerenciar apps': 'Manage apps', 'Sistema': 'System', 'Configurações': 'Settings', '06 / Screenshots': '06 / Screenshots',
      'Veja o Lyra OS': 'See Lyra OS', 'em contexto.': 'in context.', 'Ficha técnica.': 'Fact sheet.', '07 / Especificações': '07 / Specifications',
      'Sistema de pacotes': 'Package system', 'Gerenciador': 'Package manager', 'Arquitetura': 'Architecture', 'Licença': 'License',
      '08 / Roadmap': '08 / Roadmap', 'Próximos passos.': 'Next steps.', 'Cronograma completo de releases.': 'Complete release roadmap.',
      'Ver cronograma completo até a versão final': 'View the complete roadmap through the final release', 'ENTREGUE': 'DELIVERED', 'PUBLICAÇÃO ANTECIPADA': 'EARLY RELEASE',
      'CADÊNCIA · 2 SEMANAS': 'CADENCE · 2 WEEKS', 'CADÊNCIA · 2 SEMANAS + HARDENING': 'CADENCE · 2 WEEKS + HARDENING',
      'CADÊNCIA · 4 SEMANAS': 'CADENCE · 4 WEEKS', 'CADÊNCIA · 3 SEMANAS': 'CADENCE · 3 WEEKS',
      'Fundador e desenvolvedor': 'Founder and developer', '09 / Sobre o desenvolvedor': '09 / About the developer', 'Uma jornada que': 'A journey that', 'começou em 1998.': 'began in 1998.',
      'Perfil no GitHub': 'GitHub profile', '10 / Imprensa & contato': '10 / Press & contact', 'Vamos conversar': "Let's talk", 'sobre o Lyra.': 'about Lyra.',
      'Email': 'Email', 'País': 'Country', 'Brasil': 'Brazil', 'Obrigado pelo interesse no Lyra OS.': 'Thank you for your interest in Lyra OS.',
      'Compartilhar publicação': 'Share coverage'
    },
    'es-ES': {}
  };

  // Spanish reuses the complete English catalog as a safe fallback; overrides
  // below cover all primary navigation and public-facing summaries.
  Object.assign(catalogs['es-ES'], catalogs['en-US'], {
    'Pular para o conteúdo':'Saltar al contenido','Abrir menu':'Abrir menú','Sobre':'Acerca de','Homenagem':'Homenaje','A base':'La base','Ecossistema':'Ecosistema','Experiência':'Experiencia','Livro':'Libro','Cronograma':'Hoja de ruta','Requisitos':'Requisitos','Tema':'Tema',
    'A Alpha 6 já está disponível':'Alpha 6 ya está disponible','Marca Lyra OS e destaque da versão Alpha 6':'Marca Lyra OS y destaque de la versión Alpha 6','Conheça o':'Conoce','Um sistema feito para encontrar o equilíbrio entre potência, estabilidade e liberdade — no desktop e no servidor.':'Un sistema creado para equilibrar potencia, estabilidad y libertad, tanto en escritorio como en servidor.','Antes rotulada Beta 1.':'Antes denominada Beta 1.','Antes rotulada Beta 2.':'Antes denominada Beta 2.',
    'Harmonia. Performance. Liberdade.':'Armonía. Rendimiento. Libertad.','Harmonia · Performance · Liberdade':'Armonía · Rendimiento · Libertad','Escolher edição':'Elegir edición','Descobrir o projeto':'Descubrir el proyecto','Versão atual':'Versión actual','Base do sistema':'Base del sistema',
    '01 / A ideia':'01 / La idea','Um sistema que':'Un sistema que','não fica no caminho.':'no se interpone.','02 / A fundação':'02 / La base','A estabilidade':'La estabilidad','como ponto de partida.':'como punto de partida.','03 / O coração':'03 / El corazón','Tudo encontra seu centro.':'Todo encuentra su centro.',
    'Uma faísca em 2005':'Una chispa en 2005','Algumas ideias levam anos':'Algunas ideas tardan años','para encontrar sua forma.':'en encontrar su forma.','Em 2005, assisti a uma palestra de':'En 2005, asistí a una conferencia de','Sua defesa apaixonada do software livre mudou a maneira como eu enxergava tecnologia, comunidade e liberdade.':'Su apasionada defensa del software libre cambió mi manera de ver la tecnología, la comunidad y la libertad.','O Lyra OS nasceu muitos anos depois, mas carrega algo daquele encontro.':'Lyra OS nació muchos años después, pero conserva algo de aquel encuentro.','Obrigado, maddog, por acender essa estrela.':'Gracias, maddog, por encender esta estrella.','Conhecer a trajetória de Jon “maddog” Hall':'Conocer la trayectoria de Jon “maddog” Hall',
    'Jon “maddog” Hall no palco diante do público durante uma palestra na CaFeCONF 2005':'Jon “maddog” Hall en el escenario ante el público durante una conferencia en CaFeCONF 2005','Jon “maddog” Hall na CaFeCONF 2005':'Jon “maddog” Hall en CaFeCONF 2005','Foto:':'Foto:','imagem redimensionada':'imagen redimensionada',
    'O centro de controle do Lyra OS, pré-instalado e desenhado para deixar as decisões importantes sempre ao alcance.':'El centro de control de Lyra OS, preinstalado y diseñado para mantener las decisiones importantes siempre al alcance.','O Lyra OS vem com o':'Lyra OS incluye','pré-instalado: uma coleção de ferramentas em uma interface gráfica simples e prática, pronta para facilitar tarefas e configurações do dia a dia.':'preinstalado: una colección de herramientas con una interfaz gráfica sencilla y práctica, lista para facilitar las tareas y configuraciones cotidianas.','Conhecer o LinuxToys':'Conocer LinuxToys',
    '04 / A experiência':'04 / La experiencia','Familiar por natureza.':'Familiar por naturaleza.','Lyra por escolha.':'Lyra por elección.','05 / Para ir além':'05 / Para ir más allá','O livro oficial':'El libro oficial','do Lyra OS.':'de Lyra OS.','Idiomas da publicação':'Idiomas de publicación','Português e inglês.':'Solo portugués e inglés.','Cronograma completo':'Hoja de ruta','de releases.':'completa.',
    'Alpha 5–8 fecham o Desktop · feature freeze a partir da Beta 1':'Alpha 5–8 completan Desktop · congelación funcional desde Beta 1','As Alphas restantes avançam por gates: P0/P1 não passa para a etapa seguinte. Toda implementação funcional fecha até 25/09/2026; a Alpha 8 automatiza os gates e sua última semana é exclusiva para estabilização.':'Las Alphas restantes avanzan mediante controles: los P0/P1 no pasan a la etapa siguiente. Toda implementación funcional termina el 25/09/2026; Alpha 8 automatiza los controles y su última semana queda reservada para estabilización.','Bloqueadores do instalador e release; contratos do Lyra Upgrade e do controle parental no Vega.':'Bloqueadores del instalador y de la publicación; contratos de Lyra Upgrade y del control parental en Vega.','Descrição: inclui análise jurídica, referência do BigLinux, qualificação upstream, UX e arquitetura do controle parental; a implementação só começa após esses gates.':'Descripción: incluye análisis jurídico, referencia de BigLinux, calificación upstream, UX y arquitectura del control parental; la implementación solo comienza después de estos controles.','Core e serviço do Lyra Upgrade; serviço de políticas de controle parental.':'Núcleo y servicio de Lyra Upgrade; servicio de políticas de control parental.','Interface e upgrade entre releases; configuração parental e autorização de aplicativos no Vega.':'Interfaz y actualización entre versiones; configuración parental y autorización de aplicaciones en Vega.','Gates automatizados de update, upgrade, rollback e ECA Digital; depois, somente estabilização.':'Controles automatizados de actualización, upgrade, reversión y ECA Digital; después, solo estabilización.','2 SEMANAS · BACKEND':'2 SEMANAS · BACKEND','2 SEMANAS · PRODUTO COMPLETO':'2 SEMANAS · PRODUCTO COMPLETO','GATE + ESTABILIZAÇÃO':'CONTROL + ESTABILIZACIÓN','07 / Uma nova etapa':'07 / Una nueva etapa','Escolha sua':'Elige tu','edição do Lyra.':'edición de Lyra.','Em publicação':'Publicación en curso','Tente novamente em instantes.':'Inténtalo de nuevo en unos instantes.','As imagens do Lyra OS para desktop e servidor estão em publicação. Tente novamente em instantes.':'Las imágenes de Lyra OS para escritorio y servidor se están publicando. Inténtalo de nuevo en unos instantes.','Baixar Desktop':'Descargar Desktop','Baixar Server':'Descargar Server',
    'Política de suporte do Lyra OS':'Política de soporte de Lyra OS','Lyra OS com suporte até uma política formal':'Lyra OS con soporte hasta una política formal','A linha Lyra OS baseada em openSUSE Leap 16 terá suporte até uma política formal. Cada release (1.1, uma release futura...) mantém seu próprio ciclo de suporte e pode exigir a migração para um release mais recente.':'La línea Lyra OS basada en openSUSE Leap 16 tendrá soporte hasta una política formal. Cada versión (1.1, uma release futura...) mantiene su propio ciclo de soporte y puede requerir la actualización a una versión más reciente.','“1.1” e “uma release futura” são as versões canônicas dos ciclos no padrão MAJOR.MINOR.PATCH (estilo Ubuntu), inclusive nos metadados internos de release. O Lyra OS terá suporte até uma política formal.':'“1.1” y “uma release futura” son las versiones canónicas de los ciclos con el patrón MAJOR.MINOR.PATCH (al estilo Ubuntu), incluso en los metadatos internos de la versión. Lyra OS tendrá soporte hasta una política formal.',
    'Contato':'Contacto','Galeria':'Galería','Recursos oficiais · 2026':'Recursos oficiales · 2026','Tudo o que você precisa para conhecer, testar e divulgar o Lyra OS.':'Todo lo necesario para conocer, probar y difundir Lyra OS.','01 / O projeto':'01 / El proyecto','Linux brasileiro.':'Linux brasileño.','Visão global.':'Visión global.','Estabilidade':'Estabilidad','Simplicidade':'Simplicidad','Elegância':'Elegancia',
    '02 / O nome':'02 / El nombre','Por que':'¿Por qué','03 / Para quem':'03 / Para quién','Feito para trabalhar.':'Hecho para trabajar.','Pronto para explorar.':'Listo para explorar.','Desenvolvedores':'Desarrolladores','Profissionais de TI':'Profesionales de TI','Empresas':'Empresas','Estudantes':'Estudiantes','Quem busca estabilidade':'Quienes valoran la estabilidad',
    '04 / Destaques':'04 / Destacados','O essencial,':'Lo esencial,','05 / Conheça o Vega':'05 / Conoce Vega','Seu sistema,':'Tu sistema,','em um só lugar.':'en un solo lugar.','Administração':'Administración','Configuração':'Configuración','Manutenção':'Mantenimiento','06 / Screenshots':'06 / Capturas','Veja o Lyra OS':'Mira Lyra OS','em contexto.':'en contexto.','07 / Especificações':'07 / Especificaciones','Ficha técnica.':'Ficha técnica.','Próximos passos.':'Próximos pasos.','Cronograma completo de releases.':'Hoja de ruta completa de versiones.','09 / Sobre o desenvolvedor':'09 / Sobre el desarrollador','10 / Imprensa & contato':'10 / Prensa y contacto','Obrigado pelo interesse no Lyra OS.':'Gracias por tu interés en Lyra OS.'
    ,'VEGA / CENTRO DE CONTROLE':'VEGA / CENTRO DE CONTROL','VERSÃO ATUAL · ENTREGUE':'VERSIÓN ACTUAL · ENTREGADA'
    ,'14 ago 2026':'14 ago 2026','17 ago 2026':'17 ago 2026','25 ago 2026':'25 ago 2026','28 ago – 11 set 2026':'28 ago – 11 sept 2026','11 – 25 set 2026':'11–25 sept 2026','25 set – 13 out 2026':'25 sept – 13 oct 2026','13 out – 10 nov 2026':'13 oct – 10 nov 2026','10 nov – 08 dez 2026':'10 nov – 8 dic 2026','08 dez 2026 – 05 jan 2027':'8 dic 2026 – 5 ene 2027','05 – 19 jan 2027':'5–19 ene 2027','19 jan – 02 fev 2027':'19 ene – 2 feb 2027','20 fev 2027':'20 feb 2027','31 out 2027':'31 oct 2027'
    ,'01 – 22 set 2026':'1–22 sept 2026','22 set – 13 out 2026':'22 sept – 13 oct 2026','01 – 15 mar 2027':'1–15 mar 2027','15 – 29 mar 2027':'15–29 mar 2027','29 mar – 12 abr 2027':'29 mar – 12 abr 2027','12 – 26 abr 2027':'12–26 abr 2027','26 abr – 10 mai 2027':'26 abr – 10 may 2027','10 – 24 mai 2027':'10–24 may 2027','24 mai – 07 jun 2027':'24 may – 7 jun 2027','07 – 21 jun 2027':'7–21 jun 2027','21 jun – 19 jul 2027':'21 jun – 19 jul 2027','19 jul – 16 ago 2027':'19 jul – 16 ago 2027','16 ago – 13 set 2027':'16 ago – 13 sept 2027','13 – 27 set 2027':'13–27 sept 2027','27 set – 11 out 2027':'27 sept – 11 oct 2027','~25 out 2027':'~25 oct 2027','~out 2028':'~oct 2028'
    ,'01 – 22 mar 2027':'1–22 mar 2027','22 mar – 12 abr 2027':'22 mar – 12 abr 2027','12 abr – 03 mai 2027':'12 abr – 3 may 2027','03 – 31 mai 2027':'3–31 may 2027','31 mai – 28 jun 2027':'31 may – 28 jun 2027','28 jun – 26 jul 2027':'28 jun – 26 jul 2027','26 jul – 09 ago 2027':'26 jul – 9 ago 2027','09 – 23 ago 2027':'9–23 ago 2027','~out 2027':'~oct 2027'
  });

  // Complete Spanish coverage for every source string currently visible on the home page.
  Object.assign(catalogs['es-ES'], {
    'Lyra OS, início':'Lyra OS, inicio','Navegação principal':'Navegación principal','Download':'Descarga','Ativar tema claro':'Activar tema claro','Ativar tema escuro':'Activar tema oscuro','Idioma do site':'Idioma del sitio',
    'Informações da versão atual':'Información de la versión actual','Disponível':'Disponible','agora':'ahora','Ver downloads':'Ver descargas','Rolar para a seção Sobre':'Desplazarse a la sección Acerca de','role para explorar':'desplázate para explorar',
    'Lyra OS é um projeto pessoal independente de':'Lyra OS es un proyecto personal independiente de',', criado para transformar o desktop Linux em um lugar mais coerente, acolhedor e confiável.':', creado para convertir el escritorio Linux en un lugar más coherente, acogedor y confiable.',
    'O nome vem da constelação de Lyra: um pequeno desenho no céu com uma identidade marcante. É dessa mesma ideia de clareza e proporção que nasce cada escolha do sistema.':'El nombre proviene de la constelación de Lyra: un pequeño dibujo en el cielo con una identidad distintiva. De esa misma idea de claridad y proporción nace cada decisión del sistema.',
    '· imagem redimensionada':'· imagen redimensionada','. Sua defesa apaixonada do software livre mudou a maneira como eu enxergava tecnologia, comunidade e liberdade.':'. Su apasionada defensa del software libre cambió mi manera de ver la tecnología, la comunidad y la libertad.',
    'ciclo previsível':'ciclo previsible','estabilidade':'estabilidad','open source':'código abierto','Lyra OS escolhe o':'Lyra OS elige',
    'como sua base. Uma decisão intencional por uma fundação madura, com ciclo de lançamento previsível e foco em consistência.':'como su base. Una decisión deliberada por una base madura, con un ciclo de lanzamientos previsible y centrado en la consistencia.',
    'Em um cenário dominado por bases Arch, Ubuntu e Fedora, o Leap traz uma alternativa sólida para quem quer usar o desktop com tranquilidade — sem abrir mão de performance ou liberdade.':'En un escenario dominado por bases Arch, Ubuntu y Fedora, Leap ofrece una alternativa sólida para quienes desean usar el escritorio con tranquilidad, sin renunciar al rendimiento ni a la libertad.',
    'Conhecer o openSUSE':'Conocer openSUSE','O Vega organiza o essencial e dá ao sistema um ponto de partida simples, claro e humano.':'Vega organiza lo esencial y brinda al sistema un punto de partida sencillo, claro y humano.',
    'Vega é a estrela mais brilhante da constelação de Lyra — o coração que orienta todo o sistema.':'Vega es la estrella más brillante de la constelación de Lyra: el corazón que guía todo el sistema.',
    'O ecossistema cresce com cuidado. Os demais componentes seguem em desenvolvimento e validação para versões futuras.':'El ecosistema crece con cuidado. Los demás componentes continúan en desarrollo y validación para versiones futuras.',
    'Um GNOME limpo, com o branding do Lyra aplicado com intenção. Menos ruído visual, mais espaço para aquilo que você quer fazer.':'Un GNOME limpio, con la identidad de Lyra aplicada con intención. Menos ruido visual y más espacio para lo que quieres hacer.',
    'GNOME e KDE Plasma com o branding do Lyra aplicado com intenção. Duas experiências oficiais, com a mesma identidade e liberdade de escolha.':'GNOME y KDE Plasma con la identidad de Lyra aplicada con intención. Dos experiencias oficiales con la misma identidad y libertad de elección.',
    'Interface clara e consistente':'Interfaz clara y consistente','Base sólida para o seu dia a dia':'Una base sólida para el día a día','Liberdade para personalizar':'Libertad para personalizar',
    'Área de trabalho do Lyra OS Desktop Alpha 6: GNOME com painel superior, dock lateral de aplicativos e o papel de parede Odisseia.':'Escritorio de Lyra OS Desktop Alpha 6: GNOME con panel superior, dock lateral de aplicaciones y el fondo de pantalla Odisseia.','Lyra OS Desktop Alpha 6 · GNOME com o papel de parede Odisseia':'Lyra OS Desktop Alpha 6 · GNOME con el fondo de pantalla Odisseia','Bom dia, Rodrigo':'Buenos días, Rodrigo','em harmonia.':'en armonía.','Em breve':'Próximamente',
    'carrossel':'carrusel','Ambientes de trabalho do Lyra OS':'Entornos de escritorio de Lyra OS','Lyra OS Desktop · GNOME com o papel de parede Odisseia':'Lyra OS Desktop · GNOME con el fondo de pantalla Odisseia','Área de trabalho do Lyra OS KDE Plasma com o menu de aplicativos aberto e o papel de parede Odisseia.':'Escritorio KDE Plasma de Lyra OS con el menú de aplicaciones abierto y el fondo de pantalla Odisseia.','Lyra OS Desktop · KDE Plasma com o papel de parede Odisseia':'Lyra OS Desktop · KDE Plasma con el fondo de pantalla Odisseia','Imagem anterior':'Imagen anterior','Próxima imagem':'Imagen siguiente','Escolher ambiente de trabalho':'Elegir entorno de escritorio','Mostrar GNOME':'Mostrar GNOME','Mostrar KDE Plasma':'Mostrar KDE Plasma',
    'Capa do livro Lyra OS: Do primeiro contato ao domínio do sistema, por Rodrigo Brito':'Portada del libro Lyra OS: Del primer contacto al dominio del sistema, por Rodrigo Brito',
    'Um guia completo de instalação, utilização e administração — do primeiro contato ao domínio do sistema, escrito por Rodrigo Brito.':'Una guía completa de instalación, uso y administración, desde el primer contacto hasta el dominio del sistema, escrita por Rodrigo Brito.',
    'Em desenvolvimento — lançamento em breve':'En desarrollo — lanzamiento próximamente','06 / Roadmap':'06 / Hoja de ruta',
    'O número de iterações por estágio é um teto, não uma promessa fixa. A promoção acontece por critério de saída — sem itens críticos abertos no gate de release — e não apenas pela data. As janelas abaixo consideram o uso de todo o tempo previsto.':'El número de iteraciones por etapa es un límite, no una promesa fija. El avance depende de criterios de salida, sin elementos críticos abiertos en el control de publicación, y no solo de la fecha. Los periodos siguientes contemplan todo el tiempo previsto.',
    'Política de internacionalização e congelamento funcional':'Política de internacionalización y congelación funcional',
    'LANÇADA':'PUBLICADA','Fechamento do instalador e da publicação.':'Finalización del instalador y de la publicación.','ENTREGUE':'ENTREGADA',
    'i18n base, instalador em três idiomas e primeira onda de pacotes.':'Base de i18n, instalador en tres idiomas y primera tanda de paquetes.',
    'Descrição: o Lyra OS 1.1 oferece en-US, pt-BR e es-ES; outros idiomas ficam para ciclos futuros. O fluxo NVIDIA segue para a Alpha 5.':'Descripción: Lyra OS 1.1 ofrece en-US, pt-BR y es-ES; los demás idiomas quedan para ciclos futuros. El flujo de NVIDIA pasa a Alpha 5.',
    'FEATURE FREEZE · 4 SEMANAS':'CONGELACIÓN FUNCIONAL · 4 SEMANAS','Congelamento funcional e correção de bugs.':'Congelación funcional y corrección de errores.',
    'Descrição: Nenhuma feature, idioma, componente ou infraestrutura nova. Somente correções de bugs, regressões, segurança, desempenho e traduções existentes.':'Descripción: ninguna funcionalidad, idioma, componente o infraestructura nuevos. Solo correcciones de errores, regresiones, seguridad, rendimiento y traducciones existentes.',
    '4 SEMANAS':'4 SEMANAS','Estabilidade, atualizações e regressões.':'Estabilidad, actualizaciones y regresiones.','Descrição: Nenhuma feature nova.':'Descripción: ninguna funcionalidad nueva.',
    'QA linguístico e correções finais.':'Control de calidad lingüístico y correcciones finales.','Descrição: Corrigir catálogos e traduções existentes; não criar infraestrutura, traduzir novo componente nem adicionar idioma.':'Descripción: corregir catálogos y traducciones existentes; no crear infraestructura, traducir componentes nuevos ni añadir idiomas.',
    '2 SEMANAS':'2 SEMANAS','Somente bloqueadores P0/P1 e repetição do gate.':'Solo bloqueadores P0/P1 y repetición del control.','LANÇAMENTO':'LANZAMIENTO'
  });

  Object.assign(catalogs['es-ES'], {
    'Fim de suporte da Lyra OS 1.1':'Fin del soporte de Lyra OS 1.1','Suporte encerra em 31 de outubro de 2027, junto com o fim de vida da base openSUSE Leap 16.x; a migração para a Lyra OS uma release futura (base Leap 16.x) deve ocorrer antes dessa data.':'El soporte termina el 31 de octubre de 2027, junto con el fin de vida de la base openSUSE Leap 16.x; la migración a Lyra OS uma release futura (base Leap 16.x) debe realizarse antes de esa fecha.',
    'Alpha 5, Alpha 6, Alpha 7 e Alpha 8 são obrigatórias e possuem gates próprios. Um P0/P1 interrompe a ampliação de escopo da Alpha corrente. A semana de 06–13/10 recebe somente estabilização; sem gate verde, a fase Alpha continua.':'Alpha 5, Alpha 6, Alpha 7 y Alpha 8 son obligatorias y tienen controles propios. Un P0/P1 detiene la ampliación del alcance de la Alpha actual. La semana del 6 al 13 de octubre se reserva exclusivamente para estabilización; sin un control aprobado, la fase Alpha continúa.',
    'ciclo com gate independente':'ciclo con control independiente','O Server possui ciclo e gate independentes, mas segue a mesma cadência e os mesmos critérios de qualidade do Desktop. Desktop e Server não precisam ser publicados no mesmo dia.':'Server tiene un ciclo y un control independientes, pero sigue la misma cadencia y los mismos criterios de calidad que Desktop. Desktop y Server no necesitan publicarse el mismo día.',
    'Objetivo: repetir a instalação completa e produzir candidato rastreável.':'Objetivo: repetir la instalación completa y producir un candidato trazable.','Objetivo: fechar Secure Boot, primeiro boot, DHCP, SSH, firewall, vegad e vega-web com evidências.':'Objetivo: completar Secure Boot, el primer arranque, DHCP, SSH, el firewall, vegad y vega-web con evidencias.',
    'DISPENSADA':'OMITIDA','Não foi necessária: a fase Alpha fechou na Alpha 2.':'No fue necesaria: la fase Alpha se cerró en Alpha 2.',
    '3 SEMANAS · SE NECESSÁRIA':'3 SEMANAS · SI ES NECESARIA','Objetivo: resolver bloqueadores restantes e ampliar hardware, sem adicionar novo escopo.':'Objetivo: resolver los bloqueadores restantes y ampliar la cobertura de hardware sin añadir alcance nuevo.',
    'Objetivo: congelamento funcional do fluxo disco inteiro/ext4.':'Objetivo: congelación funcional del flujo de disco completo/ext4.','Objetivo: estabilidade, atualizações, rede e administração remota.':'Objetivo: estabilidad, actualizaciones, red y administración remota.',
    'Objetivo: QA linguístico dos componentes já internacionalizados e correções finais; nenhuma feature nova.':'Objetivo: control de calidad lingüístico de los componentes ya internacionalizados y correcciones finales; ninguna funcionalidad nueva.',
    'Objetivo: candidato completo e assinado, validado em máquina virtual e hardware.':'Objetivo: candidato completo y firmado, validado en máquina virtual y hardware.','Objetivo: somente correções bloqueantes e repetição integral do gate.':'Objetivo: solo correcciones bloqueantes y repetición completa del control.','Objetivo: publicação e verificação dos artefatos baixados.':'Objetivo: publicación y verificación de los artefactos descargados.',
    'Fim de suporte da Lyra OS Server 1.1':'Fin del soporte de Lyra OS Server 1.1','Suporte encerra em 31 de outubro de 2027, junto com o fim de vida da base openSUSE Leap 16.x; a migração para a Lyra OS Server uma release futura (base Leap 16.x) deve ocorrer antes dessa data.':'El soporte termina el 31 de octubre de 2027, junto con el fin de vida de la base openSUSE Leap 16.x; la migración a Lyra OS Server uma release futura (base Leap 16.x) debe realizarse antes de esa fecha.',
    'Alvo interno: janeiro; fevereiro é a margem de segurança. Se a fase Alpha terminar na Alpha 2, sem pendências críticas e com todas as evidências do gate, a versão final pode sair por volta de 26 de janeiro de 2027. O Server possui gate independente e não precisa ser publicado no mesmo dia que o Desktop.':'Objetivo interno: enero; febrero es el margen de seguridad. Si la fase Alpha termina en Alpha 2, sin asuntos críticos pendientes y con todas las evidencias del control, la versión final podría publicarse alrededor del 26 de enero de 2027. Server tiene un control independiente y no necesita publicarse el mismo día que Desktop.',
    'rebase para openSUSE Leap 16.x':'cambio de base a openSUSE Leap 16.x','O ciclo começa cerca de um mês após a versão 1.1. A mudança de base exige revalidar pacotes, ABI, shim de Secure Boot e a matriz de hardware.':'El ciclo comienza aproximadamente un mes después de la versión 1.1. El cambio de base exige volver a validar paquetes, ABI, el shim de Secure Boot y la matriz de hardware.',
    'VERSÃO ESTÁVEL':'VERSIÓN ESTABLE','EOL · ESTIMATIVA':'FIN DE VIDA · ESTIMACIÓN','Fim de suporte da Lyra OS uma release futura':'Fin del soporte de Lyra OS uma release futura',
    'O openSUSE Leap 16.x ainda não tem data oficial de lançamento nem de fim de vida. Esta data é uma projeção baseada no padrão histórico de 24 meses de suporte por versão minor do Leap e está sujeita a confirmação.':'openSUSE Leap 16.x aún no tiene una fecha oficial de lanzamiento ni de fin de vida. Esta fecha es una proyección basada en el patrón histórico de 24 meses de soporte por versión menor de Leap y está sujeta a confirmación.',
    'Ciclo independente do Desktop, com requalificação da base, do boot seguro, da rede e das ferramentas de administração remota.':'Ciclo independiente de Desktop, con recalificación de la base, el arranque seguro, la red y las herramientas de administración remota.','3 SEMANAS':'3 SEMANAS','Fim de suporte da Lyra OS Server uma release futura':'Fin del soporte de Lyra OS Server uma release futura',
    'O Lyra OS está disponível para desktop e servidor, com imagens para arquitetura x86_64.':'Lyra OS está disponible para escritorio y servidor, con imágenes para la arquitectura x86_64.','Para computadores pessoais, com ambiente gráfico e experiência completa do Lyra OS.':'Para computadoras personales, con entorno gráfico y la experiencia completa de Lyra OS.','Para servidores e infraestrutura, com uma base enxuta voltada à administração de serviços.':'Para servidores e infraestructura, con una base ligera orientada a la administración de servicios.',
    'Downloads hospedados no SourceForge.':'Descargas alojadas en SourceForge.','Tutorial de instalação':'Tutorial de instalación','Instale o Desktop Alpha 4 passo a passo.':'Instala Desktop Alpha 4 paso a paso.','Como instalar o Lyra OS Desktop Alpha 2':'Cómo instalar Lyra OS Desktop Alpha 2','Assistir no YouTube':'Ver en YouTube','Instale o Server Alpha 2 passo a passo.':'Instala Server Alpha 2 paso a paso.','Como instalar o Lyra OS Server Alpha 2':'Cómo instalar Lyra OS Server Alpha 2',
    'Voltar ao início':'Volver al inicio','Projeto pessoal independente de Rodrigo Brito.':'Proyecto personal independiente de Rodrigo Brito.','Feito com curiosidade, cuidado e software livre.':'Hecho con curiosidad, cuidado y software libre.','Voltar ao topo':'Volver arriba','06 ago 2026':'6 ago 2026','base openSUSE Leap 16.x':'base openSUSE Leap 16.x'
  });

  Object.assign(catalogs['en-US'], {
    'Política de melhorias e congelamento funcional':'Improvement and feature-freeze policy','Melhorias liberadas nas Betas da 1.1 · congelamento estrito na RC1':'Improvements allowed in 1.1 Betas · strict freeze at RC1','Desktop e Server podem receber melhorias durante as Betas quando os ganhos compensarem os riscos, com análise, testes de regressão e plano de reversão. P0/P1 não passa para a etapa seguinte.':'Desktop and Server may receive improvements during Betas when benefits outweigh risks, with analysis, regression tests, and a rollback plan. P0/P1 issues do not move to the next stage.',
    'MELHORIAS QUALIFICADAS · 4 SEMANAS':'QUALIFIED IMPROVEMENTS · 4 WEEKS','Estabilização e melhorias com análise de risco, testes e reversão.':'Stabilization and improvements with risk analysis, tests, and rollback.','Estabilidade, atualizações e melhorias qualificadas.':'Stability, updates, and qualified improvements.','QA linguístico, correções finais e últimas melhorias antes da RC1.':'Language QA, final fixes, and the last improvements before RC1.','Objetivo: estabilizar o fluxo disco inteiro/ext4 e qualificar melhorias aprovadas.':'Objective: stabilize the whole-disk/ext4 flow and qualify approved improvements.',
    'A linha Lyra OS baseada em openSUSE Leap 16 terá suporte até uma política formal. Cada release (1.1...) mantém seu próprio ciclo de suporte e pode exigir a migração para um release mais recente.':'The Lyra OS line based on openSUSE Leap 16 will be supported through a formal policy. Each release (1.1...) has its own support cycle and may require an upgrade to a newer release.',
    '“1.1” é a versão canônica do ciclo no padrão MAJOR.MINOR.PATCH (estilo Ubuntu), inclusive nos metadados internos de release. O Lyra OS terá suporte até uma política formal.':'“1.1” is the canonical cycle version in the MAJOR.MINOR.PATCH pattern, including internal release metadata. Lyra OS will be supported through a formal policy.',
    'migração para openSUSE Leap 16.x na Alpha 7':'migration to openSUSE Leap 16.x in Alpha 7','migração para openSUSE Leap 16.x na Beta 2':'migration to openSUSE Leap 16.x in Beta 2',
    '2 SEMANAS · REBASE + PRODUTO COMPLETO':'2 WEEKS · REBASE + COMPLETE PRODUCT','Migração para Leap 16.x Beta 1 e requalificação integral; interface e upgrade entre releases; configuração parental e autorização de aplicativos no Vega.':'Migration to Leap 16.x Beta 1 and full requalification; interface and cross-release upgrade; parental configuration and app authorization in Vega.',
    '4 SEMANAS · REBASE':'4 WEEKS · REBASE','Objetivo: migrar para Leap 16.x e requalificar build, instalação, Secure Boot, atualizações, rede e administração remota.':'Objective: migrate to Leap 16.x and requalify the build, installation, Secure Boot, updates, networking, and remote administration.',
    'Estimativa sujeita à confirmação do ciclo de suporte do openSUSE Leap 16.x.':'Estimate subject to confirmation of the openSUSE Leap 16.x support lifecycle.'
  });

  Object.assign(catalogs['es-ES'], {
    'Política de melhorias e congelamento funcional':'Política de mejoras y congelación funcional','Melhorias liberadas nas Betas da 1.1 · congelamento estrito na RC1':'Mejoras permitidas en las Betas de 1.1 · congelación estricta en RC1','Desktop e Server podem receber melhorias durante as Betas quando os ganhos compensarem os riscos, com análise, testes de regressão e plano de reversão. P0/P1 não passa para a etapa seguinte.':'Desktop y Server pueden recibir mejoras durante las Betas cuando los beneficios compensen los riesgos, con análisis, pruebas de regresión y plan de reversión. Los P0/P1 no pasan a la siguiente etapa.',
    'MELHORIAS QUALIFICADAS · 4 SEMANAS':'MEJORAS CALIFICADAS · 4 SEMANAS','Estabilização e melhorias com análise de risco, testes e reversão.':'Estabilización y mejoras con análisis de riesgos, pruebas y reversión.','Estabilidade, atualizações e melhorias qualificadas.':'Estabilidad, actualizaciones y mejoras calificadas.','QA linguístico, correções finais e últimas melhorias antes da RC1.':'Control lingüístico, correcciones finales y últimas mejoras antes de RC1.','Objetivo: estabilizar o fluxo disco inteiro/ext4 e qualificar melhorias aprovadas.':'Objetivo: estabilizar el flujo de disco completo/ext4 y calificar las mejoras aprobadas.',
    'A linha Lyra OS baseada em openSUSE Leap 16 terá suporte até uma política formal. Cada release (1.1...) mantém seu próprio ciclo de suporte e pode exigir a migração para um release mais recente.':'La línea Lyra OS basada en openSUSE Leap 16 tendrá soporte hasta una política formal. Cada versión (1.1...) mantiene su propio ciclo de soporte y puede requerir una actualización.',
    '“1.1” é a versão canônica do ciclo no padrão MAJOR.MINOR.PATCH (estilo Ubuntu), inclusive nos metadados internos de release. O Lyra OS terá suporte até uma política formal.':'“1.1” es la versión canónica del ciclo con el patrón MAJOR.MINOR.PATCH (al estilo Ubuntu), incluso en los metadatos internos de la versión. Lyra OS tendrá soporte hasta una política formal.',
    'migração para openSUSE Leap 16.x na Alpha 7':'migración a openSUSE Leap 16.x en Alpha 7','migração para openSUSE Leap 16.x na Beta 2':'migración a openSUSE Leap 16.x en Beta 2',
    '2 SEMANAS · REBASE + PRODUTO COMPLETO':'2 SEMANAS · CAMBIO DE BASE + PRODUCTO COMPLETO','Migração para Leap 16.x Beta 1 e requalificação integral; interface e upgrade entre releases; configuração parental e autorização de aplicativos no Vega.':'Migración a Leap 16.x Beta 1 y recalificación integral; interfaz y actualización entre versiones; configuración parental y autorización de aplicaciones en Vega.',
    '4 SEMANAS · REBASE':'4 SEMANAS · CAMBIO DE BASE','Objetivo: migrar para Leap 16.x e requalificar build, instalação, Secure Boot, atualizações, rede e administração remota.':'Objetivo: migrar a Leap 16.x y recalificar la compilación, instalación, Secure Boot, actualizaciones, red y administración remota.',
    'Estimativa sujeita à confirmação do ciclo de suporte do openSUSE Leap 16.x.':'Estimación sujeta a la confirmación del ciclo de soporte de openSUSE Leap 16.x.'
  });

  Object.assign(catalogs['en-US'], {
    'Requisitos de sistema':'System requirements','Antes de instalar.':'Before installing.',
    'Confira o perfil adequado para cada edição. Os valores mínimos permitem a instalação; os recomendados oferecem margem para atualizações, aplicativos e serviços.':'Check the appropriate profile for each edition. Minimum values allow installation; recommended values leave room for updates, applications, and services.',
    'Mínimos':'Minimum','Recomendados':'Recommended','CPU:':'CPU:','Memória:':'Memory:','Armazenamento:':'Storage:','Vídeo:':'Display:','Rede:':'Network:',
    'x86_64, 2 núcleos':'x86_64, 2 cores','4 GiB de RAM':'4 GiB RAM','24 GiB':'24 GiB','tela 1024 × 768':'1024 × 768 display',
    'x86_64, 4 núcleos':'x86_64, 4 cores','8 GiB de RAM':'8 GiB RAM','SSD de 40 GiB ou mais':'40 GiB SSD or larger','tela Full HD':'Full HD display',
    'x86_64, 1 núcleo':'x86_64, 1 core','2 GiB de RAM':'2 GiB RAM','8 GiB':'8 GiB','Ethernet com DHCP':'Ethernet with DHCP',
    'x86_64, 2 ou mais núcleos':'x86_64, 2 or more cores','4 GiB de RAM ou mais':'4 GiB RAM or more','SSD de 20 GiB ou mais':'20 GiB SSD or larger','Ethernet Gigabit':'Gigabit Ethernet',
    'Para ambas as edições:':'For both editions:','firmware UEFI, mídia USB para instalação e conexão com a internet para atualizações. Secure Boot é suportado. A instalação usa o disco inteiro; no Server 1.1, o instalador ainda não oferece RAID nem LVM. Requisitos provisórios, sujeitos à ampliação da matriz de hardware durante a Beta.':'UEFI firmware, a USB installation drive, and an internet connection for updates. Secure Boot is supported. Installation uses the entire disk; in Server 1.1, the installer does not yet offer RAID or LVM. These requirements are provisional and subject to broader hardware qualification during Beta.'
  });

  Object.assign(catalogs['es-ES'], {
    'Requisitos de sistema':'Requisitos del sistema','Antes de instalar.':'Antes de instalar.',
    'Confira o perfil adequado para cada edição. Os valores mínimos permitem a instalação; os recomendados oferecem margem para atualizações, aplicativos e serviços.':'Consulta el perfil adecuado para cada edición. Los valores mínimos permiten la instalación; los recomendados dejan margen para actualizaciones, aplicaciones y servicios.',
    'Mínimos':'Mínimos','Recomendados':'Recomendados','CPU:':'CPU:','Memória:':'Memoria:','Armazenamento:':'Almacenamiento:','Vídeo:':'Pantalla:','Rede:':'Red:',
    'x86_64, 2 núcleos':'x86_64, 2 núcleos','4 GiB de RAM':'4 GiB de RAM','24 GiB':'24 GiB','tela 1024 × 768':'pantalla de 1024 × 768',
    'x86_64, 4 núcleos':'x86_64, 4 núcleos','8 GiB de RAM':'8 GiB de RAM','SSD de 40 GiB ou mais':'SSD de 40 GiB o más','tela Full HD':'pantalla Full HD',
    'x86_64, 1 núcleo':'x86_64, 1 núcleo','2 GiB de RAM':'2 GiB de RAM','8 GiB':'8 GiB','Ethernet com DHCP':'Ethernet con DHCP',
    'x86_64, 2 ou mais núcleos':'x86_64, 2 núcleos o más','4 GiB de RAM ou mais':'4 GiB de RAM o más','SSD de 20 GiB ou mais':'SSD de 20 GiB o más','Ethernet Gigabit':'Ethernet Gigabit',
    'Para ambas as edições:':'Para ambas ediciones:','firmware UEFI, mídia USB para instalação e conexão com a internet para atualizações. Secure Boot é suportado. A instalação usa o disco inteiro; no Server 1.1, o instalador ainda não oferece RAID nem LVM. Requisitos provisórios, sujeitos à ampliação da matriz de hardware durante a Beta.':'firmware UEFI, unidad USB de instalación y conexión a internet para actualizaciones. Secure Boot es compatible. La instalación utiliza todo el disco; en Server 1.1, el instalador aún no ofrece RAID ni LVM. Estos requisitos son provisionales y están sujetos a una validación de hardware más amplia durante la Beta.'
  });

  Object.assign(catalogs['en-US'], {
    'Lyra OS 1.1 em desenvolvimento':'Lyra OS 1.1 in development',
    'Versão do produto':'Product version','Base tecnológica':'Technology base',
    'Suporte comunitário':'Community support',
    'O Lyra OS 1.1 terá suporte comunitário. A geração pode evoluir por releases 1.x com caminhos suportados de atualização. O suporte da base openSUSE e o ciclo de cada release Lyra são informações distintas; não há promessa de prazo ou EOL sem uma política formal.':'Lyra OS 1.1 will have community support. The generation may evolve through 1.x releases with supported upgrade paths. openSUSE base support and each Lyra release lifecycle are separate; no support term or EOL is promised without a formal policy.',
    'LANÇAMENTO PREVISTO · SUJEITO AO GATE':'PLANNED RELEASE · SUBJECT TO THE GATE','20 fev 2027':'Feb 20, 2027',
    'Desktop · GNOME':'Desktop · GNOME','Desktop · KDE Plasma':'Desktop · KDE Plasma','Desktop · XFCE':'Desktop · XFCE','Desktop · GNOME e KDE Plasma':'Desktop · GNOME and KDE Plasma',
    '20 GiB':'20 GiB','SSD de 32 GiB ou mais':'32 GiB SSD or more',
    'Para todas as edições do Desktop:':'For all Desktop editions:',
    'firmware UEFI, mídia USB para instalação e conexão com a internet para atualizações. Secure Boot é suportado. GNOME e KDE Plasma usam o mesmo perfil-base; XFCE reduz o consumo esperado, mas mantém margem para atualizações. A instalação usa o disco inteiro; no Server 1.1, o instalador ainda não oferece RAID nem LVM. Requisitos provisórios, sujeitos à validação do gate e da matriz de hardware.':'UEFI firmware, a USB installation drive, and an internet connection for updates. Secure Boot is supported. GNOME and KDE Plasma use the same baseline profile; XFCE lowers expected resource use while retaining update headroom. Installation uses the entire disk; Server 1.1 does not yet offer RAID or LVM. Requirements are provisional and subject to gate and hardware-matrix validation.',
    'O Lyra OS usa versionamento próprio MAJOR.MINOR.PATCH. A numeração é independente da versão do openSUSE Leap; Odisseia identifica toda a geração Lyra OS 1.x. Uma versão é publicada quando atende aos critérios de qualidade, não porque uma data chegou.':'Lyra OS uses its own MAJOR.MINOR.PATCH versioning. Its numbering is independent from openSUSE Leap; Odisseia identifies the entire Lyra OS 1.x generation. A release ships when it meets the quality criteria, not because a date arrived.',
    'quando o gate estiver verde':'when the gate is green'
  });
  Object.assign(catalogs['es-ES'], {
    'Lyra OS 1.1 em desenvolvimento':'Lyra OS 1.1 en desarrollo',
    'Versão do produto':'Versión del producto','Base tecnológica':'Base tecnológica',
    'Suporte comunitário':'Soporte comunitario',
    'O Lyra OS 1.1 terá suporte comunitário. A geração pode evoluir por releases 1.x com caminhos suportados de atualização. O suporte da base openSUSE e o ciclo de cada release Lyra são informações distintas; não há promessa de prazo ou EOL sem uma política formal.':'Lyra OS 1.1 tendrá soporte comunitario. La generación puede evolucionar mediante versiones 1.x con rutas de actualización compatibles. El soporte de la base openSUSE y el ciclo de cada versión Lyra son distintos; no se promete un plazo ni EOL sin una política formal.',
    'LANÇAMENTO PREVISTO · SUJEITO AO GATE':'LANZAMIENTO PREVISTO · SUJETO AL CONTROL','20 fev 2027':'20 feb 2027',
    'Desktop · GNOME':'Desktop · GNOME','Desktop · KDE Plasma':'Desktop · KDE Plasma','Desktop · XFCE':'Desktop · XFCE','Desktop · GNOME e KDE Plasma':'Desktop · GNOME y KDE Plasma',
    '20 GiB':'20 GiB','SSD de 32 GiB ou mais':'SSD de 32 GiB o más',
    'Para todas as edições do Desktop:':'Para todas las ediciones de Desktop:',
    'Fechar opções de download':'Cerrar opciones de descarga','Lyra OS Desktop':'Lyra OS Desktop',
    'Escolha seu':'Elige tu','ambiente de trabalho.':'entorno de escritorio.',
    'As três opções oferecem a mesma base do Lyra OS, com experiências de uso diferentes.':'Las tres opciones comparten la misma base de Lyra OS, con experiencias de uso diferentes.',
    'Moderno e direto, com uma experiência focada, fluida e integrada ao Lyra OS.':'Moderno y directo, con una experiencia enfocada, fluida e integrada en Lyra OS.',
    'Visual flexível e familiar, com ampla personalização e integração essencial do Lyra.':'Una interfaz flexible y familiar, con amplia personalización e integración esencial de Lyra.',
    'Leve e eficiente, ideal para máquinas modestas ou para quem prefere simplicidade.':'Ligero y eficiente, ideal para equipos modestos o para quien prefiere la simplicidad.',
    'O Lyra OS Desktop Alpha 7 com GNOME, KDE Plasma e XFCE e o Server Beta 1 já estão disponíveis.':'Lyra OS Desktop Alpha 7 con GNOME, KDE Plasma y XFCE y Server Beta 1 ya están disponibles.',
    'Baixar o Lyra OS':'Descargar Lyra OS','Baixar GNOME':'Descargar GNOME','Baixar KDE':'Descargar KDE','Baixar XFCE':'Descargar XFCE',
    'firmware UEFI, mídia USB para instalação e conexão com a internet para atualizações. Secure Boot é suportado. GNOME e KDE Plasma usam o mesmo perfil-base; XFCE reduz o consumo esperado, mas mantém margem para atualizações. A instalação usa o disco inteiro; no Server 1.1, o instalador ainda não oferece RAID nem LVM. Requisitos provisórios, sujeitos à validação do gate e da matriz de hardware.':'firmware UEFI, unidad USB de instalación y conexión a internet para actualizaciones. Secure Boot es compatible. GNOME y KDE Plasma usan el mismo perfil base; XFCE reduce el consumo esperado y conserva margen para actualizaciones. La instalación utiliza todo el disco; Server 1.1 aún no ofrece RAID ni LVM. Los requisitos son provisionales y están sujetos al gate y a la matriz de hardware.',
    'O Lyra OS usa versionamento próprio MAJOR.MINOR.PATCH. A numeração é independente da versão do openSUSE Leap; Odisseia identifica toda a geração Lyra OS 1.x. Uma versão é publicada quando atende aos critérios de qualidade, não porque uma data chegou.':'Lyra OS utiliza su propio versionado MAJOR.MINOR.PATCH. Su numeración es independiente de openSUSE Leap; Odisseia identifica toda la generación Lyra OS 1.x. Una versión se publica cuando cumple los criterios de calidad, no porque llegue una fecha.',
    'quando o gate estiver verde':'cuando el gate esté verde'
  });

  const readLocale = () => {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (LOCALES.includes(fromUrl)) return fromUrl;
    try { const saved = localStorage.getItem('lyra-locale'); if (LOCALES.includes(saved)) return saved; } catch {}
    return DEFAULT_LOCALE;
  };
  let locale = readLocale();
  const sourceText = new WeakMap();
  const sourceAttrs = new WeakMap();
  const t = (value) => locale === DEFAULT_LOCALE ? value : (catalogs[locale]?.[value] || value);

  const translate = () => {
    document.documentElement.lang = locale;
    document.querySelectorAll('body *:not(script):not(style)').forEach((element) => {
      element.childNodes.forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE || !node.nodeValue.trim()) return;
        if (!sourceText.has(node)) sourceText.set(node, node.nodeValue);
        const original = sourceText.get(node);
        const trimmed = original.trim();
        node.nodeValue = original.replace(trimmed, t(trimmed));
      });
      ['aria-label', 'title', 'alt'].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        let originals = sourceAttrs.get(element);
        if (!originals) { originals = {}; sourceAttrs.set(element, originals); }
        if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
        element.setAttribute(attribute, t(originals[attribute]));
      });
    });
    const titles = {
      'pt-BR': 'Lyra OS — Harmonia. Performance. Liberdade.',
      'en-US': 'Lyra OS — Harmony. Performance. Freedom.',
      'es-ES': 'Lyra OS — Armonía. Rendimiento. Libertad.'
    };
    document.title = titles[locale];
    document.querySelector('.language-select')?.setAttribute('aria-label', t('Idioma do site'));
    window.dispatchEvent(new CustomEvent('lyra:locale-changed', { detail: { locale } }));
  };

  const installSelector = () => {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;
    const wrapper = document.createElement('label'); wrapper.className = 'language-picker';
    wrapper.innerHTML = '<span class="sr-only">Idioma do site</span><span aria-hidden="true">文/A</span><select class="language-select"></select>';
    const select = wrapper.querySelector('select');
    LOCALES.forEach((value) => { const option = document.createElement('option'); option.value = value; option.textContent = labels[value]; select.append(option); });
    select.value = locale;
    select.addEventListener('change', () => {
      locale = select.value; try { localStorage.setItem('lyra-locale', locale); } catch {}
      const url = new URL(location.href); if (locale === DEFAULT_LOCALE) url.searchParams.delete('lang'); else url.searchParams.set('lang', locale);
      history.replaceState(null, '', url);
      translate();
    });
    nav.insertBefore(wrapper, nav.querySelector('.theme-toggle'));
  };

  window.LyraI18n = { t, get locale() { return locale; }, locales: LOCALES };
  document.addEventListener('DOMContentLoaded', () => { installSelector(); translate(); });
})();
