<template>
  <section class="pane">
    <h2 class="pane-title">关于我</h2>
    <p class="lead">
      我是梅友飞，一名全栈开发工程师，拥有扎实的技术基础和 3 年实际项目经验。喜欢探索新技术，并将其落到真实产品里，做出流畅、直观的交互体验。
    </p>
    <p>
      技术栈覆盖前后端，能独立完成从需求分析到部署上线的全流程。对 AI 技术有浓厚兴趣，并已在多个项目中实践。
    </p>

    <dl class="meta">
      <div v-for="item in meta" :key="item.label" class="meta-item">
        <dt>{{ item.label }}</dt>
        <dd>{{ item.value }}</dd>
      </div>
    </dl>
  </section>
</template>

<script setup>
const meta = [
  { label: '姓名', value: '梅友飞' },
  { label: '出生', value: '2002.11.02' },
  { label: '学历', value: '本科 · 平顶山学院' },
  { label: '经验', value: '3 年' },
  { label: '邮箱', value: '18737582236@163.com' },
  { label: '电话 / 微信', value: '187 3758 2236' }
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
  margin-bottom: 24px;
}

.lead {
  font-size: 1.08rem;
  color: #2a2a2a;
  margin-bottom: 14px;
}

p {
  color: #333;
  margin-bottom: 14px;
  font-size: 1.02rem;
}

.meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 28px;
  margin-top: 36px;
  padding-top: 28px;
  border-top: 1px solid var(--line);
}

.meta-item dt {
  color: var(--muted);
  font-size: 0.85rem;
  margin-bottom: 2px;
  letter-spacing: 0.04em;
}

.meta-item dd {
  font-size: 1.02rem;
  font-weight: 500;
}

@media (max-width: 560px) {
  .meta {
    grid-template-columns: 1fr;
  }
}
</style>
