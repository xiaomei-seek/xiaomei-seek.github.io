<template>
  <footer>
    <div class="container">
      <div class="footer-logo">梅友飞</div>
      <p class="footer-line">&copy; {{ currentYear }} — 前端开发工程师</p>
      <p class="footer-tag">Build. Ship. Iterate.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
footer {
  text-align: center;
  padding: 56px 20px;
  background: var(--darker);
  border-top: 1px solid rgba(0, 255, 247, 0.12);
}

.footer-logo {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  background: linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}

.footer-line {
  color: var(--gray);
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.footer-tag {
  color: var(--neon-cyan);
  font-size: 0.8rem;
  opacity: 0.65;
  letter-spacing: 0.15em;
}
</style>