<template>
  <div class="fx-scanlines" aria-hidden="true"></div>
  <div class="fx-grain" aria-hidden="true"></div>
  <div ref="rainEl" class="fx-rain" aria-hidden="true"></div>
  <div ref="glowCyanRef" class="ambient-glow glow-cyan" aria-hidden="true"></div>
  <div ref="glowMagentaRef" class="ambient-glow glow-magenta" aria-hidden="true"></div>
  <div id="particles-js"></div>
  <div class="app-surface">
    <Header />
    <Hero id="home" />
    <section id="about" class="section">
      <div class="container">
        <div class="section-title fade-in">
          <h2>关于我</h2>
        </div>
        <About />
      </div>
    </section>
    <Skills id="skills" />
    <Projects id="projects" />
    <Evaluation id="evaluation" />
    <Contact id="contact" />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const rainEl = ref(null);
const glowCyanRef = ref(null);
const glowMagentaRef = ref(null);

let glowAnimId = 0;
let glowTime = 0;

function createRain() {
  const rain = rainEl.value;
  if (!rain) return;
  rain.innerHTML = '';
  const drops = 90;
  for (let i = 0; i < drops; i++) {
    const drop = document.createElement('div');
    drop.className = 'rain-drop';
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.height = `${Math.random() * 20 + 10}px`;
    drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    drop.style.animationDelay = `${Math.random() * 2}s`;
    rain.appendChild(drop);
  }
}

function onMouseMoveGlow(e) {
  const el = glowCyanRef.value;
  if (!el) return;
  el.style.left = `${e.clientX - 300}px`;
  el.style.top = `${e.clientY - 300}px`;
}

function animateGlowMagenta() {
  glowTime += 0.01;
  const intensity = 0.12 + Math.sin(glowTime) * 0.05;
  const mag = glowMagentaRef.value;
  if (mag) mag.style.opacity = String(intensity);
  glowAnimId = requestAnimationFrame(animateGlowMagenta);
}
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Evaluation from './components/Evaluation.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

// 滚动动画
function checkFade() {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);

    if (isVisible) {
      element.classList.add('active');
    }
  });
}

// 初始化粒子效果
function initParticles() {
  if (window.particlesJS) {
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#00fff7'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#00fff7',
          opacity: 0.25,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
}

onMounted(() => {
  initParticles();
  createRain();
  checkFade();
  window.addEventListener('scroll', checkFade);
  window.addEventListener('mousemove', onMouseMoveGlow);
  animateGlowMagenta();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMoveGlow);
  cancelAnimationFrame(glowAnimId);
});
</script>

<style>
:root {
  --neon-cyan: #00fff7;
  --neon-magenta: #ff2a6d;
  --neon-orange: #ff6b35;
  --primary: #00fff7;
  --primary-dark: #00ccc0;
  --secondary: #ff2a6d;
  --dark: #0a0a12;
  --darker: #050508;
  --light: #e0e0e0;
  --gray: #888;
  --success: #00fff7;
  --panel-bg: rgba(10, 10, 20, 0.85);
  --border-radius: 4px;
  --box-shadow: 0 0 30px rgba(0, 255, 247, 0.12);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Share Tech Mono', 'Fira Code', ui-monospace, monospace;
}

body {
  background: #0a0a0f;
  color: var(--light);
  line-height: 1.6;
  overflow-x: hidden;
  cursor: crosshair;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }

  40% {
    transform: translateX(-50%) translateY(-10px);
  }

  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.fade-in.active {
  opacity: 1;
  transform: translateY(0);
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--darker);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--neon-cyan), var(--neon-magenta));
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  opacity: 0.9;
}

.fx-scanlines {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.12) 0px,
    rgba(0, 0, 0, 0.12) 1px,
    transparent 1px,
    transparent 2px
  );
}

.fx-scanlines::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.35) 100%);
}

.fx-grain {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  pointer-events: none;
  z-index: 9998;
  opacity: 0.07;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  animation: grain-shift 0.3s steps(3) infinite;
}

@keyframes grain-shift {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(-2%, -2%); }
  66% { transform: translate(1%, 1%); }
}

.fx-rain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.rain-drop {
  position: absolute;
  width: 1px;
  background: linear-gradient(to bottom, transparent, var(--neon-cyan), transparent);
  opacity: 0.35;
  animation: rain-fall linear infinite;
}

@keyframes rain-fall {
  0% { transform: translateY(-100vh); }
  100% { transform: translateY(100vh); }
}

.ambient-glow {
  position: fixed;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.5s ease;
}

.glow-cyan {
  background: var(--neon-cyan);
  left: -200px;
  top: -200px;
  opacity: 0.12;
}

.glow-magenta {
  background: var(--neon-magenta);
  bottom: -180px;
  left: -180px;
  opacity: 0.12;
}

#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.22;
}

.app-surface {
  position: relative;
  z-index: 2;
}

section.section {
  position: relative;
}

section.section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(255, 42, 109, 0.025) 50%, transparent 100%);
  pointer-events: none;
  z-index: 0;
}

section.section > .container {
  position: relative;
  z-index: 1;
}
</style>

<style scoped>
.section {
  padding: 100px 0;
  overflow: hidden;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.section-title h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  position: relative;
  display: inline-block;
  color: var(--light);
}

.section-title h2::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -14px;
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-cyan), transparent);
  transform: translateX(-50%);
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
}
</style>