<template>
  <div id="particles-js"></div>
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
</template>

<script setup>
import { onMounted } from 'vue';
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
          value: '#2563eb'
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
          color: '#2563eb',
          opacity: 0.4,
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
  // 初始化粒子效果
  initParticles();
  
  // 初始检查淡入效果
  checkFade();
  
  // 监听滚动事件
  window.addEventListener('scroll', checkFade);
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
</script>

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
  font-size: 2.5rem;
  position: relative;
  display: inline-block;
}

.section-title h2::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 60px;
  height: 4px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  transform: translateX(-50%);
  border-radius: 2px;
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