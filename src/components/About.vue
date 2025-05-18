<template>
  <div class="about-content">
    <div class="about-code-display fade-in">
      <CodeEditor customClass="about-code-editor">
        <div v-for="(line, index) in codeLines" :key="index" class="code-line">
          <span class="line-number">{{ index + 1 }}</span>
          <span v-html="line"></span>
        </div>
      </CodeEditor>
    </div>
    <div class="about-info fade-in">
      <h3>前端开发工程师</h3>
      <p>我是梅友飞，一名充满激情的前端开发工程师，拥有扎实的技术基础和2年的实际项目经验。我喜欢探索新技术，并将其应用到实际项目中，为用户创造流畅、直观的交互体验。</p>
      <p>我的技术栈涵盖前端和后端，能够独立完成从需求分析到部署上线的全流程开发。同时，我对AI技术有浓厚兴趣，并已在实际项目中进行了深度实践。</p>
      <div class="info-list">
        <div v-for="(item, index) in infoItems" :key="index" class="info-item">
          <i :class="item.icon"></i>
          <div>
            <span>{{ item.label }}:</span> {{ item.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CodeEditor from './CodeEditor.vue';

const codeLines = [
  `<span class="token-keyword">const&nbsp;</span> aboutMe <span class="token-operator">=</span> {`,
  `<span>&nbsp;&nbsp;name:</span> <span class="token-string">"梅友飞"</span>,`,
  `<span>&nbsp;&nbsp;passion:</span> <span class="token-string">"前端开发"</span>,`,
  `<span>&nbsp;&nbsp;expertise:</span> [<span class="token-string">"Vue"</span>, <span class="token-string">"Next.js"</span>, <span class="token-string">"全栈开发"</span>],`,
  `<span>&nbsp;&nbsp;education:</span> <span class="token-string">"本科，平顶山学院"</span>,`,
  `<span>&nbsp;&nbsp;experience:</span> <span class="token-string">"2 年专业经验"</span>,`,
  `<span>&nbsp;&nbsp;goals:</span> <span class="token-string">"不断学习与创新"</span>`,
  `};`
];

const infoItems = [
  { icon: 'fas fa-user', label: '姓名', value: '梅友飞' },
  { icon: 'fas fa-calendar', label: '出生日期', value: '2002.11.02' },
  { icon: 'fas fa-envelope', label: '邮箱', value: '18737582236@163.com' },
  { icon: 'fas fa-phone', label: '电话/微信', value: '187 3758 2236' },
  { icon: 'fas fa-graduation-cap', label: '学历', value: '本科，平顶山学院' },
  { icon: 'fas fa-briefcase', label: '工作经验', value: '2年' }
];
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
  font-size: 1.5rem;
  margin-bottom: 20px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  color: var(--primary);
  font-size: 20px;
  margin-right: 10px;
}

.info-item span {
  font-weight: 600;
  margin-right: 5px;
  color: var(--light);
}

/* 代码编辑器样式会从CodeEditor组件中继承 */

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