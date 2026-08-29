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
  const flavorsModal = document.querySelector('#flavors-modal');
  const flavorsTrigger = document.querySelector('[data-open-flavors]');
  const flavorsClose = document.querySelector('[data-close-flavors]');

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

  menuToggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  flavorsTrigger?.addEventListener('click', () => flavorsModal?.showModal());
  flavorsClose?.addEventListener('click', () => flavorsModal?.close());
  flavorsModal?.addEventListener('click', (event) => {
    if (event.target === flavorsModal) flavorsModal.close();
  });
  flavorsModal?.addEventListener('close', () => flavorsTrigger?.focus());

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
