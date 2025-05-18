<template>
  <section class="hero" :id="id">
    <div class="container">
      <div class="hero-content">
        <h1>你好，我是梅友飞</h1>
        <p>2年经验的前端开发工程师，专注于构建现代、高性能的Web应用程序。拥有全栈能力，熟悉Vue、Next.js等前端框架，以及Node.js、Python等后端技术。</p>
        <a href="#contact" class="btn">联系我</a>
      </div>
      
      <CodeEditor>
        <div v-for="(line, index) in codeLines" :key="index" class="code-line">
          <span class="line-number">{{ index + 1 }}</span>
          <span v-html="line"></span>
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

const codeLines = [
  `<span class="token-keyword">const</span> developer <span class="token-operator">=</span> {`,
  `<span>&nbsp;&nbsp;name:</span> <span class="token-string">"梅友飞"</span>,`,
  `<span>&nbsp;&nbsp;role:</span> <span class="token-string">"前端开发工程师"</span>,`,
  `<span>&nbsp;&nbsp;experience:</span> <span class="token-string">"2年"</span>,`,
  `<span>&nbsp;&nbsp;skills:</span> [<span class="token-string">"Vue"</span>, <span class="token-string">"Next.js"</span>, <span class="token-string">"TypeScript"</span>, <span class="token-string">"Node.js"</span>],`,
  `<span>&nbsp;&nbsp;learning:</span> <span class="token-string">"AI开发与应用"</span>,`,
  `<span>&nbsp;&nbsp;passion:</span> <span class="token-function">() =></span> <span class="token-string">"创造优秀的用户体验"</span><span class="typing-animation"></span>`,
  `};`,
  `<span class="token-comment">// 我的代码，我的世界</span>`
];
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
  background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
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
  background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);
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
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 1s ease;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: var(--gray);
  animation: fadeInUp 1s 0.2s ease both;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  color: var(--light);
  border: none;
  border-radius: var(--border-radius);
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
  color: var(--gray);
  font-size: 14px;
  text-align: center;
  animation: bounce 2s infinite;
}

.scroll-down i {
  display: block;
  font-size: 24px;
  margin-top: 5px;
}

.code-line {
  display: flex;
  margin-bottom: 5px;
}

.line-number {
  color: #6272a4;
  width: 20px;
  text-align: right;
  margin-right: 10px;
}

.token-keyword {
  color: #ff79c6;
}

.token-operator {
  color: #ff79c6;
}

.token-string {
  color: #f1fa8c;
}

.token-function {
  color: #8be9fd;
}

.token-comment {
  color: #6272a4;
}

.typing-animation {
  border-right: 2px solid #f8f8f2;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #f8f8f2;
  }
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