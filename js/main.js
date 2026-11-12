(() => {
  const root = document.documentElement;
  // Só tema claro (12/11/2026): sem botão de tema.
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  const launch = document.querySelector('.launch-countdown[data-launch]');
  if (launch) {
    const target = Date.parse(launch.dataset.launch);
    const units = {
      hours: launch.querySelector('[data-unit="hours"]'),
      minutes: launch.querySelector('[data-unit="minutes"]'),
      seconds: launch.querySelector('[data-unit="seconds"]'),
    };
    let timer;
    const tick = () => {
      const left = Math.max(0, Math.floor((target - Date.now()) / 1000));
      if (left === 0) {
        clearInterval(timer);
        launch.classList.add('is-live');
        launch.querySelector('.launch-text').textContent = (window.LyraI18n?.t || ((value) => value))('Lyra OS 16.1 chega em instantes');
        return;
      }
      units.hours.textContent = String(Math.floor(left / 3600));
      units.minutes.textContent = String(Math.floor(left / 60) % 60).padStart(2, '0');
      units.seconds.textContent = String(left % 60).padStart(2, '0');
    };
    tick();
    timer = setInterval(tick, 1000);
    window.addEventListener('lyra:locale-changed', tick);
  }

  menuToggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  // Contador de downloads: total do projeto no SourceForge, todas as versões
  // e edições (a API responde com CORS aberto). Sem resposta, fica oculto.
  const downloadCount = document.querySelector('.download-count');
  if (downloadCount && window.fetch) {
    const today = new Date().toISOString().slice(0, 10);
    fetch(`https://sourceforge.net/projects/lyra/files/stats/json?start_date=2020-01-01&end_date=${today}`)
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((stats) => {
        if (!Number.isFinite(stats.total) || stats.total <= 0) return;
        const show = () => {
          // Arredonda para baixo, na centena, com "+" (como "2.700+").
          const shown = stats.total >= 1000 ? Math.floor(stats.total / 100) * 100 : stats.total;
          const number = shown.toLocaleString(window.LyraI18n?.locale || 'pt-BR');
          downloadCount.querySelector('.download-count-number').textContent = stats.total >= 1000 ? `${number}+` : number;
        };
        show();
        window.addEventListener('lyra:locale-changed', show);
        downloadCount.hidden = false;
      })
      .catch(() => { /* sem contador */ });
  }

  // Requisitos ficam num <details>: o link #requisitos abre o bloco.
  const openRequirements = () => {
    if (location.hash === '#requisitos') document.getElementById('requisitos')?.setAttribute('open', '');
  };
  openRequirements();
  window.addEventListener('hashchange', openRequirements);
})();
