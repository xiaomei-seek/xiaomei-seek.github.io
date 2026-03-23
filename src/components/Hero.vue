<template>
  <section class="hero" :id="id">
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
          <span class="line-number">7</span>
          <span>&nbsp;&nbsp;passion:</span> <span class="token-function">() =></span> <span
            class="token-string">"创造优秀的用户体验"</span><span class="typing-animation"></span>
        </div>
        <div class="code-line">
          <span class="line-number">8</span>
          };
        </div>
        <div class="code-line">
          <span class="line-number">9</span>
          <span class="token-comment">// 我的代码，我的世界</span>
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
import { defineProps } from 'vue';
import CodeEditor from './CodeEditor.vue';

defineProps({
  id: {
    type: String,
    default: 'home'
  }
});
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 45%, #0a0a0f 100%);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0, 255, 247, 0.06) 0%, transparent 55%);
  pointer-events: none;
  z-index: 0;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 20%, rgba(255, 42, 109, 0.08) 0%, transparent 45%);
  pointer-events: none;
  z-index: 0;
}

.hero .container {
  position: relative;
  z-index: 1;
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
  letter-spacing: 0.08em;
  margin-bottom: 20px;
  line-height: 1.15;
  background: linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta), var(--neon-cyan));
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 1s ease, hero-gradient 5s ease infinite;
  filter: drop-shadow(0 0 24px rgba(0, 255, 247, 0.35));
}

@keyframes hero-gradient {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}

.hero p {
  font-size: 1.05rem;
  margin-bottom: 30px;
  color: var(--gray);
  animation: fadeInUp 1s 0.2s ease both;
}

.btn {
  display: inline-block;
  padding: 12px 28px;
  background: transparent;
  color: var(--neon-cyan);
  border: 1px solid var(--neon-cyan);
  border-radius: 2px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  animation: fadeInUp 1s 0.4s ease both;
  box-shadow: 0 0 20px rgba(0, 255, 247, 0.15);
}

.btn:hover {
  transform: translateY(-2px);
  background: rgba(0, 255, 247, 0.12);
  box-shadow: 0 0 28px rgba(0, 255, 247, 0.35);
}

.scroll-down {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--neon-cyan);
  opacity: 0.65;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-align: center;
  animation: bounce 2s infinite;
}

.scroll-down i {
  display: block;
  font-size: 24px;
  margin-top: 5px;
}

@media (max-width: 768px) {
  .hero {
    text-align: center;
    height: auto;
    min-height: 100vh;
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