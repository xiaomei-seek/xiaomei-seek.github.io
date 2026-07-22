/**
 * 鼠标轨迹特效：支持气泡（canvas 画圆）与图片（如铜锣烧 SVG）两种模式。
 *
 * @param {'bubble' | 'image'} options.mode
 */
export function createCursorTrail(options = {}) {
  const {
    mode = 'bubble',
    imageSrc = '/images/tongluoshao.svg',
    size = 28,
    minDistance = 28,
    maxParticles = 16,
    spawnChance = 0.65,
    fillColor = 'rgba(230, 241, 247, 0.55)',
    strokeColor = 'rgba(58, 146, 197, 0.45)'
  } = options;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches) {
    return { destroy() {} };
  }

  let width = window.innerWidth;
  let height = window.innerHeight;
  const cursor = { x: width / 2, y: height / 2 };
  let lastSpawn = { x: cursor.x, y: cursor.y };
  const particles = [];
  let rafId = 0;
  let ready = mode === 'bubble';

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:9999;';
  document.body.appendChild(canvas);
  canvas.width = width;
  canvas.height = height;

  let img = null;
  if (mode === 'image') {
    img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      ready = true;
    };
  }

  function onMove(e) {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    if (!ready) return;

    const dx = cursor.x - lastSpawn.x;
    const dy = cursor.y - lastSpawn.y;
    if (Math.hypot(dx, dy) < minDistance) return;
    if (Math.random() > spawnChance) {
      lastSpawn = { x: cursor.x, y: cursor.y };
      return;
    }
    if (particles.length >= maxParticles) particles.shift();
    particles.push(createParticle(cursor.x, cursor.y));
    lastSpawn = { x: cursor.x, y: cursor.y };
  }

  function onResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    for (let i = particles.length - 1; i >= 0; i -= 1) {
      particles[i].update(ctx);
      if (particles[i].lifeSpan < 0) particles.splice(i, 1);
    }
    rafId = requestAnimationFrame(tick);
  }

  function createParticle(x, y) {
    return mode === 'image' ? new ImageParticle(x, y) : new BubbleParticle(x, y);
  }

  function BubbleParticle(x, y) {
    const life = Math.floor(Math.random() * 40 + 50);
    this.initialLifeSpan = life;
    this.lifeSpan = life;
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 12),
      y: -1 * Math.random() - 0.35
    };
    this.position = { x, y };
    this.baseDimension = 3.5;
    this.update = (c) => {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.velocity.x += (2 * (Math.random() < 0.5 ? -1 : 1)) / 90;
      this.velocity.y -= Math.random() / 700;
      this.lifeSpan -= 1;
      const scale = 0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;
      const r = this.baseDimension * scale;
      c.fillStyle = fillColor;
      c.strokeStyle = strokeColor;
      c.beginPath();
      c.arc(this.position.x, this.position.y, r, 0, Math.PI * 2);
      c.fill();
      c.stroke();
      c.closePath();
    };
  }

  function ImageParticle(x, y) {
    const life = Math.floor(Math.random() * 35 + 45);
    this.initialLifeSpan = life;
    this.lifeSpan = life;
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10),
      y: -0.4 * Math.random() - 0.25
    };
    this.position = { x, y };
    this.rotation = (Math.random() - 0.5) * 0.6;
    this.spin = (Math.random() - 0.5) * 0.08;
    this.update = (c) => {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.velocity.x += (2 * (Math.random() < 0.5 ? -1 : 1)) / 100;
      this.velocity.y -= Math.random() / 800;
      this.rotation += this.spin;
      this.lifeSpan -= 1;

      const progress = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
      const s = size * (0.45 + progress * 0.55);

      c.save();
      c.globalAlpha = Math.min(progress * 1.2, 0.9);
      c.translate(this.position.x, this.position.y);
      c.rotate(this.rotation);
      c.drawImage(img, -s / 2, -s / 2, s, s);
      c.restore();
    };
  }

  window.addEventListener('mousemove', onMove, { passive: true });
  window.addEventListener('resize', onResize);
  tick();

  return {
    destroy() {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      canvas.remove();
      particles.length = 0;
    }
  };
}

/** @deprecated 兼容旧调用名 */
export function createBubbleCursor(options) {
  return createCursorTrail({ mode: 'bubble', ...options });
}
