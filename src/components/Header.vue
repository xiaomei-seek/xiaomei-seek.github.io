<template>
  <header :class="{ 'scrolled': scrolled }">
    <div class="container">
      <nav class="navbar">
        <a href="#" class="logo">&lt;梅友飞/&gt;</a>
        <div class="menu-toggle" @click="toggleMenu">
          <i class="fas fa-bars"></i>
        </div>
        <div class="nav-links" :class="{ 'active': menuActive }">
          <a href="#home" @click="closeMenu">首页</a>
          <a href="#about" @click="closeMenu">关于我</a>
          <a href="#skills" @click="closeMenu">技能</a>
          <a href="#projects" @click="closeMenu">项目经验</a>
          <a href="#evaluation" @click="closeMenu">自我评价</a>
          <a href="#contact" @click="closeMenu">联系方式</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);
const menuActive = ref(false);

// 切换菜单
const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};

// 关闭菜单
const closeMenu = () => {
  menuActive.value = false;
};

// 点击外部关闭菜单
const handleClickOutside = (event) => {
  if (!event.target.closest('.navbar')) {
    menuActive.value = false;
  }
};

// 处理滚动
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(2, 6, 23, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 0;
  box-shadow: none;
}

header.scrolled {
  padding: 5px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: var(--light);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 16px;
}

.nav-links a:hover {
  color: var(--primary);
}

.menu-toggle {
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--primary);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: var(--darker);
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transform: translateY(-150%);
    transition: transform 0.3s ease;
    z-index: 999;
  }

  .nav-links.active {
    transform: translateY(0);
  }

  .navbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .nav-links {
    gap: 15px;
  }
}
</style>