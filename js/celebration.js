(() => {
  // Comemoração do lançamento da 16.1: aparece só na primeira visita.
  const KEY = 'lyra-celebracao-16.1';
  try {
    if (localStorage.getItem(KEY)) return;
    localStorage.setItem(KEY, '1');
  } catch { return; /* sem armazenamento, não dá para mostrar só uma vez */ }

  const translate = (value) => (window.LyraI18n?.t || ((text) => text))(value);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const overlay = document.createElement('div');
  overlay.className = 'celebration';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'celebration-title');
  overlay.innerHTML = `
    <canvas class="celebration-canvas" aria-hidden="true"></canvas>
    <div class="celebration-message">
      <p class="celebration-title" id="celebration-title"></p>
      <p class="celebration-subtitle"></p>
      <div class="celebration-actions">
        <a class="celebration-cta" href="#download"></a>
        <button class="celebration-close" type="button"></button>
      </div>
    </div>`;
  const title = overlay.querySelector('.celebration-title');
  const subtitle = overlay.querySelector('.celebration-subtitle');
  const cta = overlay.querySelector('.celebration-cta');
  const closeButton = overlay.querySelector('.celebration-close');
  const setTexts = () => {
    title.textContent = translate('Lyra OS chegou!!!!');
    subtitle.textContent = translate('Lyra OS 16.1 já está disponível');
    cta.textContent = translate('Baixar o Lyra OS');
    closeButton.textContent = translate('Fechar');
  };

  const canvas = overlay.querySelector('canvas');
  const context = canvas.getContext('2d');
  const colors = ['#ced3f3', '#8c9cf4', '#546bcf', '#f0f1f7', '#ffd479', '#ff8fa3'];
  const rockets = [];
  const sparks = [];
  let animation;
  let launcher;

  const resize = () => {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = innerWidth * ratio;
    canvas.height = innerHeight * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const launch = () => {
    rockets.push({
      x: innerWidth * (0.15 + Math.random() * 0.7),
      y: innerHeight,
      vy: -(innerHeight / 75) * (0.85 + Math.random() * 0.3),
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  const explode = (rocket) => {
    const count = 60 + Math.floor(Math.random() * 30);
    for (let i = 0; i < count; i += 1) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = 2 + Math.random() * 3;
      sparks.push({
        x: rocket.x, y: rocket.y,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        life: 70 + Math.random() * 30, age: 0, color: rocket.color,
      });
    }
  };

  const draw = () => {
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = rockets.length - 1; i >= 0; i -= 1) {
      const rocket = rockets[i];
      rocket.y += rocket.vy;
      rocket.vy += 0.12;
      context.fillStyle = rocket.color;
      context.fillRect(rocket.x - 1.5, rocket.y, 3, 10);
      if (rocket.vy >= -1.5) { explode(rocket); rockets.splice(i, 1); }
    }
    for (let i = sparks.length - 1; i >= 0; i -= 1) {
      const spark = sparks[i];
      spark.age += 1;
      spark.x += spark.vx;
      spark.y += spark.vy;
      spark.vx *= 0.98;
      spark.vy = spark.vy * 0.98 + 0.04;
      context.globalAlpha = Math.max(0, 1 - spark.age / spark.life);
      context.fillStyle = spark.color;
      context.beginPath();
      context.arc(spark.x, spark.y, 2, 0, Math.PI * 2);
      context.fill();
      if (spark.age >= spark.life) sparks.splice(i, 1);
    }
    context.globalAlpha = 1;
    animation = requestAnimationFrame(draw);
  };

  const previousFocus = document.activeElement;
  const close = () => {
    clearInterval(launcher);
    cancelAnimationFrame(animation);
    window.removeEventListener('resize', resize);
    window.removeEventListener('lyra:locale-changed', setTexts);
    document.removeEventListener('keydown', onKey);
    overlay.classList.add('is-leaving');
    setTimeout(() => overlay.remove(), 400);
    if (previousFocus instanceof HTMLElement) previousFocus.focus();
  };
  const onKey = (event) => {
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') {
      event.preventDefault();
      (document.activeElement === cta ? closeButton : cta).focus();
    }
  };

  const start = () => {
    setTexts();
    document.body.append(overlay);
    closeButton.focus();
    closeButton.addEventListener('click', close);
    cta.addEventListener('click', close);
    overlay.addEventListener('click', (event) => { if (event.target === overlay || event.target === canvas) close(); });
    document.addEventListener('keydown', onKey);
    window.addEventListener('lyra:locale-changed', setTexts);
    if (reduceMotion) return;
    resize();
    window.addEventListener('resize', resize);
    launch();
    launcher = setInterval(() => { launch(); if (Math.random() < 0.5) launch(); }, 650);
    draw();
    setTimeout(() => { clearInterval(launcher); }, 7000);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
