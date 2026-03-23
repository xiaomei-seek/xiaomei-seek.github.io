<template>
  <div class="about-content">
    <div class="about-code-display fade-in">
      <CodeEditor customClass="about-code-editor">
        <div class="code-line">
          <span class="line-number">1</span>
          <span class="token-keyword">const&nbsp;</span> aboutMe <span class="token-operator">=</span> {
        </div>
        <div class="code-line">
          <span class="line-number">2</span>
          <span>&nbsp;&nbsp;name:</span> <span class="token-string">"梅友飞"</span>,
        </div>
        <div class="code-line">
          <span class="line-number">3</span>
          <span>&nbsp;&nbsp;passion:</span> <span class="token-string">"前端开发"</span>,
        </div>
        <div class="code-line">
          <span class="line-number">4</span>
          <span>&nbsp;&nbsp;expertise:</span> [<span class="token-string">"Vue"</span>, <span
            class="token-string">"Next.js"</span>, <span class="token-string">"全栈开发"</span>],
        </div>
        <div class="code-line">
          <span class="line-number">5</span>
          <span>&nbsp;&nbsp;education:</span> <span class="token-string">"本科，平顶山学院"</span>,
        </div>
        <div class="code-line">
          <span class="line-number">6</span>
          <span>&nbsp;&nbsp;experience:</span> <span class="token-string">"3 年专业经验"</span>,
        </div>
        <div class="code-line">
          <span class="line-number">7</span>
          <span>&nbsp;&nbsp;goals:</span> <span class="token-string">"不断学习与创新"</span>
        </div>
        <div class="code-line">
          <span class="line-number">8</span>
          };
        </div>
      </CodeEditor>
    </div>
    <div class="about-info fade-in">
      <h3>前端开发工程师</h3>
      <p>我是梅友飞，一名充满激情的前端开发工程师，拥有扎实的技术基础和3年的实际项目经验。我喜欢探索新技术，并将其应用到实际项目中，为用户创造流畅、直观的交互体验。</p>
      <p>我的技术栈涵盖前端和后端，能够独立完成从需求分析到部署上线的全流程开发。同时，我对AI技术有浓厚兴趣，并已在实际项目中进行了深度实践。</p>
      <div class="info-list">
        <div class="info-item">
          <i class="fas fa-user"></i>
          <div>
            <span>姓名:</span> 梅友飞
          </div>
        </div>
        <div class="info-item">
          <i class="fas fa-calendar"></i>
          <div>
            <span>出生日期:</span> 2002.11.02
          </div>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <div>
            <span>邮箱:</span> 18737582236@163.com
          </div>
        </div>
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <div>
            <span>电话/微信:</span> 187 3758 2236
          </div>
        </div>
        <div class="info-item">
          <i class="fas fa-graduation-cap"></i>
          <div>
            <span>学历:</span> 本科，平顶山学院
          </div>
        </div>
        <div class="info-item">
          <i class="fas fa-briefcase"></i>
          <div>
            <span>工作经验:</span>3年
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CodeEditor from './CodeEditor.vue';
</script>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  padding: 0 100px;
}

.about-code-display {
  position: relative;
}

.about-info {
  position: relative;
}

.about-info h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
  background: linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-info p {
  margin-bottom: 15px;
  color: var(--gray);
}

.info-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
}

.info-item {
  display: flex;
  align-items: flex-start;
}

.info-item i {
  color: var(--neon-cyan);
  font-size: 20px;
  margin-right: 10px;
  filter: drop-shadow(0 0 6px rgba(0, 255, 247, 0.4));
}

.info-item span {
  font-weight: 600;
  margin-right: 5px;
  color: var(--light);
}

@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .info-list {
    grid-template-columns: 1fr;
  }
}
</style>