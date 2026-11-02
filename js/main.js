(() => {
  const root = document.documentElement;
  const storage = {
    get(key, fallback) {
      try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, value); } catch { /* file:// e navegadores restritivos */ }
    },
  };
  const themeToggle = document.querySelector('.theme-toggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  const updateThemeButton = () => {
    const isLight = root.dataset.theme === 'light';
    const translate = window.LyraI18n?.t || ((value) => value);
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', translate(isLight ? 'Ativar tema escuro' : 'Ativar tema claro'));
    themeToggle.querySelector('.theme-icon').textContent = isLight ? '☾' : '☼';
  };

  themeToggle?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    storage.set('lyra-theme', root.dataset.theme);
    updateThemeButton();
  });
  updateThemeButton();
  window.addEventListener('lyra:locale-changed', updateThemeButton);

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
        launch.querySelector('.launch-text').textContent = (window.LyraI18n?.t || ((value) => value))('Lyra OS 16.1 já está disponível');
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
})();
