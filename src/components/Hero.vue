<template>
  <section class="hero" :id="id">
    <div class="container">
      <div class="hero-content">
        <h1>你好，我是梅友飞</h1>
        <p>2年经验的前端开发工程师，专注于构建现代、高性能的Web应用程序。拥有全栈能力，熟悉Vue、Next.js等前端框架，以及Node.js、Python等后端技术。</p>
        <a href="#contact" class="btn">联系我</a>
      </div>
      
      <CodeEditor>
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
          <span>&nbsp;&nbsp;experience:</span> <span class="token-string">"2年"</span>,
        </div>
        <div class="code-line">
          <span class="line-number">5</span>
          <span>&nbsp;&nbsp;skills:</span> [<span class="token-string">"Vue"</span>, <span
            class="token-string">"Next.js"</span>, <span class="token-string">"TypeScript"</span>, <span
            class="token-string">"Node.js"</span>],
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
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #2563eb 0%, transparent 70%);
  opacity: 0.1;
  border-radius: 50%;
  z-index: -1;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -10%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);
  opacity: 0.1;
  border-radius: 50%;
  z-index: -1;
}

.hero-content {
  max-width: 650px;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 20px;
  line-height: 1.2;
  background: linear-gradient(to right, #2563eb, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 1s ease;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #64748b;
  animation: fadeInUp 1s 0.2s ease both;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(to right, #2563eb, #8b5cf6);
  color: #f8fafc;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  animation: fadeInUp 1s 0.4s ease both;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
}

.scroll-down {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: #64748b;
  font-size: 14px;
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