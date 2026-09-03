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
  const desktopDownloadModal = document.querySelector('#desktop-download-modal');
  const desktopDownloadTrigger = document.querySelector('[data-open-desktop-download]');
  const desktopDownloadClose = document.querySelector('[data-close-desktop-download]');

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

  desktopDownloadTrigger?.addEventListener('click', () => desktopDownloadModal?.showModal());
  desktopDownloadClose?.addEventListener('click', () => desktopDownloadModal?.close());
  desktopDownloadModal?.addEventListener('click', (event) => {
    if (event.target === desktopDownloadModal) desktopDownloadModal.close();
  });
  desktopDownloadModal?.addEventListener('close', () => desktopDownloadTrigger?.focus());

  document.querySelectorAll('.desktop-carousel').forEach((carousel) => {
    const slides = [...carousel.querySelectorAll('[data-carousel-slide]')];
    const dots = [...carousel.querySelectorAll('[data-carousel-dot]')];
    let current = 0;
    const show = (index) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === current;
        slide.hidden = !active;
        slide.classList.toggle('is-active', active);
      });
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === current;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-selected', String(active));
      });
    };
    carousel.querySelector('[data-carousel-previous]')?.addEventListener('click', () => show(current - 1));
    carousel.querySelector('[data-carousel-next]')?.addEventListener('click', () => show(current + 1));
    dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)));
    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
    });
    show(0);
  });

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
