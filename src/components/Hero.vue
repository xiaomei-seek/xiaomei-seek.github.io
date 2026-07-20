<template>
  <section class="hero" :id="id">
    <div ref="rainEl" class="hero-rain" aria-hidden="true"></div>
    <div class="container hero-layout">
      <div class="hero-content">
        <h1>你好，我是梅友飞</h1>
        <p>3年经验的前端开发工程师，专注于构建现代、高性能的Web应用程序。拥有全栈能力，熟悉Vue、Next.js等前端框架，以及Node.js、Python等后端技术。</p>
        <a href="#contact" class="btn">联系我</a>
      </div>
      
      <CodeEditor custom-class="hero-code-editor">
        <div class="code-line">
          <span class="line-number">1</span>
          <span class="token-keyword">const</span> developer <span class="token-operator">=</span> {
        </div>
        <div class="code-line">
          <span class="line-number">2</span>
          <span>&nbsp;&nbsp;name:</span> <span class="token-string">"梅友飞"</span>,
        </div>
        <div class="code-line">
          <span class="line-number">3</span>
          <span>&nbsp;&nbsp;role:</span> <span class="token-string">"前端开发工程师"</span>,
        </div>
        <div class="code-line">
          <span class="line-number">4</span>
          <span>&nbsp;&nbsp;experience:</span> <span class="token-string">"3年"</span>,
        </div>
        <div class="code-line">
          <span class="line-number">5</span>
          <span>&nbsp;&nbsp;skills:</span> [<span class="token-string">"Vue"</span>, <span
            class="token-string">"Next.js"</span>, <span class="token-string">"TypeScript"</span>, <span
            class="token-string">"Node.js"</span>, <span class="token-string">"Python"</span>, <span class="token-string">"uniapp"</span>],
        </div>
        <div class="code-line">
          <span class="line-number">6</span>
          <span>&nbsp;&nbsp;learning:</span> <span class="token-string">"AI开发与应用"</span>,
        </div>
        <div class="code-line">
          <span class="line-number">8</span>
          };
        </div>
        <div class="code-line">
          <span class="line-number">9</span>
          <span class="token-comment">// seeking...</span>
        </div>
      </CodeEditor>
    </div>
    
    <div class="scroll-down">
      向下滚动了解更多
      <i class="fas fa-chevron-down"></i>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import CodeEditor from './CodeEditor.vue';

defineProps({
  id: {
    type: String,
    default: 'home'
  }
});

const rainEl = ref(null);
let rainPaused = false;

function createRain() {
  const rain = rainEl.value;
  if (!rain) return;
  rain.innerHTML = '';
  const drops = 40;
  for (let i = 0; i < drops; i++) {
    const drop = document.createElement('div');
    drop.className = 'rain-drop';
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.height = `${Math.random() * 18 + 8}px`;
    drop.style.animationDuration = `${Math.random() * 1.4 + 0.9}s`;
    drop.style.animationDelay = `${Math.random() * 2}s`;
    rain.appendChild(drop);
  }
}

function syncRainWithScroll() {
  const shouldPause = window.scrollY > window.innerHeight * 0.85;
  if (shouldPause === rainPaused || !rainEl.value) return;
  rainPaused = shouldPause;
  rainEl.value.style.animationPlayState = shouldPause ? 'paused' : 'running';
  rainEl.value.querySelectorAll('.rain-drop').forEach((drop) => {
    drop.style.animationPlayState = shouldPause ? 'paused' : 'running';
  });
}

onMounted(() => {
  createRain();
  syncRainWithScroll();
  window.addEventListener('scroll', syncRainWithScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', syncRainWithScroll);
});
</script>

<style scoped>
.hero {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  overflow: hidden;
  z-index: 1;
  background: linear-gradient(180deg, #1b2540 0%, #172033 52%, #111827 100%);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 50% at 50% 100%, rgba(125, 211, 252, 0.1) 0%, transparent 58%);
  pointer-events: none;
  z-index: 0;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 82% 18%, rgba(192, 132, 252, 0.08) 0%, transparent 42%);
  pointer-events: none;
  z-index: 0;
}

.hero-rain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.hero-rain :deep(.rain-drop) {
  position: absolute;
  top: 0;
  width: 1.5px;
  background: linear-gradient(to bottom, transparent, var(--neon-cyan), transparent);
  opacity: 0.45;
  animation: rain-fall linear infinite;
  will-change: transform;
}

@keyframes rain-fall {
  0% { transform: translateY(-20px); }
  100% { transform: translateY(110vh); }
}

.hero .container {
  position: relative;
  z-index: 2;
}

.hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 400px);
  gap: clamp(28px, 5vw, 56px);
  align-items: center;
}

.hero-content {
  max-width: 640px;
  min-width: 0;
}

@media (max-width: 960px) {
  .hero-layout {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }
}

.hero h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.02em;
  margin-bottom: 20px;
  line-height: 1.15;
  background: linear-gradient(90deg, #e0f2fe, var(--neon-cyan), #d8b4fe);
  background-size: 160% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 1s ease, hero-gradient 8s ease infinite;
  filter: drop-shadow(0 0 18px rgba(125, 211, 252, 0.22));
}

@keyframes hero-gradient {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}

.hero p {
  font-size: 1.05rem;
  margin-bottom: 30px;
  color: #d7e1eb;
  animation: fadeInUp 1s 0.2s ease both;
}

.btn {
  display: inline-block;
  padding: 12px 28px;
  background: transparent;
  color: var(--neon-cyan);
  border: 1px solid var(--neon-cyan);
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  animation: fadeInUp 1s 0.4s ease both;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.18);
}

.btn:hover {
  transform: translateY(-2px);
  background: rgba(125, 211, 252, 0.12);
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.24);
}

.scroll-down {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--neon-cyan);
  opacity: 0.72;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  animation: bounce 2s infinite;
  z-index: 2;
}

.scroll-down i {
  display: block;
  font-size: 24px;
  margin-top: 5px;
}

@media (max-width: 768px) {
  .hero {
    text-align: center;
    height: 100vh;
    padding-top: 100px;
    padding-bottom: 50px;
  }
  
  .hero-content {
    margin: 0 auto;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}
</style>
