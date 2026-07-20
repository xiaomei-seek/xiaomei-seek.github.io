<template>
  <div class="fx-grain" aria-hidden="true"></div>
  <div ref="glowCyanRef" class="ambient-glow glow-cyan" aria-hidden="true"></div>
  <div ref="glowMagentaRef" class="ambient-glow glow-magenta" aria-hidden="true"></div>
  <div id="particles-js"></div>
  <div class="app-surface">
    <Header />
    <div class="hero-fixed-slot">
      <Hero id="home" />
    </div>
    <main class="content-over-hero">
      <div class="drawer-handle" aria-hidden="true"></div>
      <section id="about" class="section ">
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
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const glowCyanRef = ref(null);
const glowMagentaRef = ref(null);

let glowAnimId = 0;
let glowTime = 0;
let fadeObserver = null;

function onMouseMoveGlow(e) {
  const el = glowCyanRef.value;
  if (!el) return;
  el.style.left = `${e.clientX - 300}px`;
  el.style.top = `${e.clientY - 300}px`;
}

function animateGlowMagenta() {
  glowTime += 0.01;
  const intensity = 0.07 + Math.sin(glowTime) * 0.025;
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

function initFadeAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  if (!fadeElements.length) return;

  if (!('IntersectionObserver' in window)) {
    checkFade();
    window.addEventListener('scroll', checkFade);
    return;
  }

  fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16,
    rootMargin: '0px 0px -80px 0px'
  });

  fadeElements.forEach(element => fadeObserver.observe(element));
}

// 初始化粒子效果
function initParticles() {
  if (window.particlesJS) {
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 42,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#7dd3fc'
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
          value: 0.28,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 2,
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
          color: '#7dd3fc',
          opacity: 0.08,
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
  initFadeAnimations();
  window.addEventListener('mousemove', onMouseMoveGlow);
  animateGlowMagenta();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href === '#' || href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkFade);
  window.removeEventListener('mousemove', onMouseMoveGlow);
  if (fadeObserver) fadeObserver.disconnect();
  cancelAnimationFrame(glowAnimId);
});
</script>

<style>
:root {
  --neon-cyan: #7dd3fc;
  --neon-magenta: #c084fc;
  --neon-orange: #f59e0b;
  --primary: #7dd3fc;
  --primary-dark: #38bdf8;
  --secondary: #c084fc;
  --dark: #182033;
  --darker: #111827;
  --light: #f1f5f9;
  --gray: #bac7d5;
  --success: #7dd3fc;
  --panel-bg: rgba(24, 32, 51, 0.76);
  --border-radius: 6px;
  --box-shadow: 0 18px 44px rgba(15, 23, 42, 0.22);
  --accent-line: linear-gradient(90deg, rgba(125, 211, 252, 0.7), rgba(192, 132, 252, 0.42), transparent);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

body {
  background:
    radial-gradient(circle at 18% 12%, rgba(125, 211, 252, 0.12), transparent 28%),
    linear-gradient(180deg, #172033 0%, #111827 55%, #141b2b 100%);
  color: var(--light);
  line-height: 1.6;
  overflow-x: hidden;
  cursor: default;
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
  background: #162033;
}

::-webkit-scrollbar-thumb {
  background: #6fbde4;
  border: 2px solid #162033;
  border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dark);
}

.fx-grain {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  animation: grain-shift 0.8s steps(3) infinite;
}

@keyframes grain-shift {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(-2%, -2%); }
  66% { transform: translate(1%, 1%); }
}

.ambient-glow {
  position: fixed;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  filter: blur(150px);
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.5s ease;
}

.glow-cyan {
  background: var(--neon-cyan);
  left: -200px;
  top: -200px;
  opacity: 0.08;
}

.glow-magenta {
  background: var(--neon-magenta);
  bottom: -180px;
  left: -180px;
  opacity: 0.07;
}

#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.12;
}

.app-surface {
  position: relative;
  z-index: 2;
}

.hero-fixed-slot {
  height: 100vh;
}

.content-over-hero {
  position: relative;
  z-index: 3;
  border-radius: 24px 24px 0 0;
  border-top: 1px solid rgba(186, 199, 213, 0.14);
  box-shadow: 0 -16px 40px rgba(15, 23, 42, 0.22);
  background:
    radial-gradient(ellipse 90% 55% at 50% -8%, rgba(125, 211, 252, 0.16), transparent 52%),
    radial-gradient(circle at 88% 18%, rgba(192, 132, 252, 0.07), transparent 38%),
    linear-gradient(180deg, #1f2b44 0%, #1a2438 42%, #162033 100%);
}

.drawer-handle {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: 5px;
  border-radius: 999px;
  background: rgba(186, 199, 213, 0.42);
  box-shadow: 0 0 12px rgba(125, 211, 252, 0.18);
  z-index: 4;
  pointer-events: none;
}

section.section {
  position: relative;
  padding: 96px 0;
  overflow: hidden;
}

section.section > .container {
  position: relative;
  z-index: 1;
}

/* 板块之间：极淡交替底色 */
.content-over-hero > section.section:nth-of-type(even) {
  background: rgba(125, 211, 252, 0.028);
}

.content-over-hero > section.section:nth-of-type(odd) {
  background: transparent;
}

.section-title {
  text-align: center;
  margin-bottom: clamp(56px, 7vw, 80px);
  position: relative;
}

.section-title h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 700;
  letter-spacing: 0.04em;
  position: relative;
  display: inline-block;
  color: var(--light);
}

.section-title h2::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 140%;
  height: 120%;
  background: radial-gradient(ellipse at center, rgba(125, 211, 252, 0.12), transparent 68%);
  transform: translate(-50%, -50%);
  z-index: -1;
}

.section-title h2::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -18px;
  width: 132px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-cyan), var(--neon-magenta), transparent);
  transform: translateX(-50%);
}

@media (max-width: 768px) {
  section.section {
    padding: 64px 0;
  }

  .section-title h2 {
    font-size: 2rem;
  }
}
</style>
