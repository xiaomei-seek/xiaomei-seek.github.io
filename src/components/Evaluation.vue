<template>
  <section class="pane">
    <h2 class="pane-title">自我评价</h2>
    <ul class="list">
      <li v-for="(item, index) in evaluationItems" :key="index">
        <span class="num">{{ String(index + 1).padStart(2, '0') }}</span>
        <p>{{ item }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
const evaluationItems = [
  '全栈能力突出，能独立完成从需求分析到部署上线的全流程开发',
  '对 AI 技术有深度实践，熟悉大模型应用开发',
  '技术视野广阔，持续学习新技术并应用到实际项目中'
];
</script>

<style scoped>
.pane {
  max-width: 640px;
}

.pane-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-bottom: 28px;
}

.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

li {
  display: grid;
  grid-template-columns: 2.2rem 1fr;
  gap: 14px;
  align-items: start;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--line);
}

li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.num {
  color: var(--muted);
  font-size: 0.9rem;
  padding-top: 3px;
  font-variant-numeric: tabular-nums;
}

p {
  color: #2a2a2a;
  font-size: 1.05rem;
  line-height: 1.75;
}
</style>
