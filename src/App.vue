<template>
  <div class="layout">
    <aside class="aside" :class="{ open: menuOpen }">
      <div class="aside-inner">
        <header class="profile">
          <img class="avatar" src="/images/avatar.gif" alt="梅友飞" width="60" height="60" />
          <div class="profile-text">
            <h1 class="name">梅友飞</h1>
            <p class="role">全栈开发工程师</p>
          </div>
        </header>

        <p class="tagline">前端为主，全栈落地。</p>

        <nav class="nav" aria-label="主导航">
          <button
            v-for="item in navItems"
            :key="item.id"
            type="button"
            class="nav-btn"
            :class="{ active: activePane === item.id }"
            @click="selectPane(item.id)"
          >
            <span class="nav-line" aria-hidden="true"></span>
            <span class="nav-label">{{ item.label }}</span>
            <span class="nav-en" aria-hidden="true">{{ item.en }}</span>
          </button>
        </nav>

        <footer class="aside-foot">
          <a href="mailto:18737582236@163.com" class="foot-link">
            18737582236@163.com
          </a>
          <span class="foot-copyright">© {{ year }} · Build. Ship. Iterate.</span>
        </footer>
      </div>
    </aside>

    <button
      type="button"
      class="menu-toggle"
      :aria-expanded="menuOpen"
      aria-label="打开菜单"
      @click="menuOpen = !menuOpen"
    >
      <span></span>
      <span></span>
    </button>

    <div v-if="menuOpen" class="scrim" @click="menuOpen = false"></div>

    <main class="main">
      <transition name="pane" mode="out-in">
        <About v-if="activePane === 'about'" key="about" />
        <Skills v-else-if="activePane === 'skills'" key="skills" />
        <Projects v-else-if="activePane === 'projects'" key="projects" />
        <Evaluation v-else-if="activePane === 'evaluation'" key="evaluation" />
        <Contact v-else-if="activePane === 'contact'" key="contact" />
      </transition>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { createCursorTrail } from './utils/bubbleCursor.js';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Evaluation from './components/Evaluation.vue';
import Contact from './components/Contact.vue';

// 鼠标特效切换：'bubble' 气泡 | 'image' 图片轨迹
const CURSOR_TRAIL_MODE = 'bubble';

const navItems = [
  { id: 'about', label: '关于', en: 'About' },
  { id: 'skills', label: '技能', en: 'Skills' },
  { id: 'projects', label: '项目', en: 'Work' },
  { id: 'evaluation', label: '评价', en: 'Words' },
  { id: 'contact', label: '联系', en: 'Contact' }
];

const activePane = ref('about');
const menuOpen = ref(false);
const year = new Date().getFullYear();
let cursorTrail = null;

function selectPane(id) {
  activePane.value = id;
  menuOpen.value = false;
  if (id === 'projects' && !window.location.hash.startsWith('#projects')) {
    history.replaceState(null, '', '#projects');
  }
}

onMounted(() => {
  const hash = window.location.hash;
  if (hash.startsWith('#projects')) {
    activePane.value = 'projects';
  }

  cursorTrail = createCursorTrail(
    CURSOR_TRAIL_MODE === 'image'
      ? {
          mode: 'image',
          imageSrc: '/images/tongluoshao.svg', // 也可换成 /images/xingxing.svg
          size: 28, // 图片边长（px）
          minDistance: 28, // 两次生成至少移动多少像素（越小越密）
          maxParticles: 16, // 同时存在的粒子上限
          spawnChance: 0.65 // 满足距离后生成概率 0~1（越大越密）
        }
      : {
          mode: 'bubble',
          minDistance: 6, // 两次生成至少移动多少像素（越小越密）
          maxParticles: 28, // 同时存在的粒子上限
          spawnChance: 0.75 // 满足距离后生成概率 0~1（越大越密）
        }
  );
});

onUnmounted(() => {
  cursorTrail?.destroy();
});
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: minmax(260px, 300px) 1fr;
  min-height: 100vh;
  background: var(--bg);
}

.aside {
  position: sticky;
  top: 0;
  height: 100vh;
  border-right: 1px solid var(--line);
  background: var(--bg);
  z-index: 20;
}

.aside-inner {
  height: 100%;
  padding: 56px 34px 30px;
  display: flex;
  flex-direction: column;
}

/* ---- profile ---- */
.profile {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 26px;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--panel);
  box-shadow: 0 0 0 1px var(--line), 0 6px 16px rgba(0, 0, 0, 0.06);
  flex-shrink: 0;
}

.name {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.2;
}

.role {
  color: var(--muted);
  font-size: 0.95rem;
  margin-top: 2px;
}

.tagline {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.85;
  padding-bottom: 30px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--line);
}

/* ---- nav ---- */
.nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  padding-top: 10px;
}

.nav-btn {
  appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 13px 4px;
  color: var(--muted);
  text-align: left;
  transition: color 0.25s ease;
}

.nav-line {
  width: 22px;
  height: 1.5px;
  background: currentColor;
  opacity: 0.45;
  flex-shrink: 0;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;
}

.nav-label {
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  transition: letter-spacing 0.3s ease;
}

.nav-en {
  margin-left: auto;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.nav-btn:hover {
  color: var(--ink);
}

.nav-btn:hover .nav-line {
  width: 34px;
  opacity: 0.8;
}

.nav-btn:hover .nav-en {
  opacity: 0.4;
  transform: translateX(0);
}

.nav-btn.active {
  color: var(--ink);
}

.nav-btn.active .nav-line {
  width: 48px;
  opacity: 1;
  height: 2px;
  background: var(--accent);
}

.nav-btn.active .nav-label {
  letter-spacing: 0.2em;
  font-weight: 700;
}

.nav-btn.active .nav-en {
  opacity: 0.7;
  transform: translateX(0);
  color: var(--accent);
}

/* ---- footer ---- */
.aside-foot {
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.foot-link {
  color: var(--ink);
  font-size: 0.85rem;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
  width: fit-content;
  border-bottom: 1px solid transparent;
}

.foot-link:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.foot-copyright {
  color: var(--muted);
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  opacity: 0.75;
}

/* ---- main ---- */
.main {
  background: var(--panel);
  padding: clamp(40px, 8vh, 72px) clamp(24px, 5vw, 64px) 64px;
  min-height: 100vh;
}

.pane-enter-active,
.pane-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.pane-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.pane-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.menu-toggle,
.scrim {
  display: none;
}

@media (max-width: 860px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .aside {
    position: fixed;
    left: 0;
    top: 0;
    width: min(300px, 84vw);
    transform: translateX(-105%);
    transition: transform 0.28s ease;
  }

  .aside.open {
    transform: translateX(0);
    box-shadow: 16px 0 48px rgba(0, 0, 0, 0.1);
  }

  .menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 30;
    width: 42px;
    height: 42px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--panel);
    cursor: pointer;
    padding: 0 11px;
  }

  .menu-toggle span {
    display: block;
    height: 1.5px;
    background: var(--ink);
    border-radius: 2px;
  }

  .scrim {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(22, 22, 22, 0.28);
    z-index: 15;
  }

  .main {
    padding-top: 72px;
    min-height: 100vh;
  }
}
</style>
