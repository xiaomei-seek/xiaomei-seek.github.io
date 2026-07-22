<template>
  <section class="pane">
    <h2 class="pane-title">联系方式</h2>
    <p class="intro">有机会聊聊项目或机会，欢迎联系。</p>

    <div class="rows">
      <div v-for="item in contacts" :key="item.label" class="row">
        <span class="label">{{ item.label }}</span>
        <a v-if="item.href" :href="item.href">{{ item.value }}</a>
        <span v-else>{{ item.value }}</span>
      </div>
    </div>

    <EasterEgg />
  </section>
</template>

<script setup>
import EasterEgg from './EasterEgg.vue';

const contacts = [
  { label: '电话 / 微信', value: '187 3758 2236' },
  { label: '邮箱', value: '18737582236@163.com', href: 'mailto:18737582236@163.com' },
  { label: '求职意向', value: '前端 / 全栈开发工程师' },
  { label: '学历', value: '本科，平顶山学院' }
];
</script>

<style scoped>
.pane {
  max-width: 560px;
}

.pane-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
}

.intro {
  color: var(--muted);
  margin-bottom: 36px;
  font-size: 0.98rem;
}

.rows {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid var(--line);
}

.row {
  display: grid;
  grid-template-columns: 7.5rem 1fr;
  gap: 16px;
  padding: 18px 0;
  border-bottom: 1px solid var(--line);
  font-size: 1.05rem;
  align-items: baseline;
}

.label {
  color: var(--muted);
  font-size: 0.92rem;
}

a {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 3px;
}

a:hover {
  color: var(--accent);
}

@media (max-width: 480px) {
  .row {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
</style>
