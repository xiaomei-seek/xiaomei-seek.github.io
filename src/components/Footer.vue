<template>
  <footer>
    <div class="container">
      <p>&copy; {{ currentYear }} 梅友飞 — 前端开发工程师</p>
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
  padding: 40px 0;
  color: var(--gray);
  font-size: 0.9rem;
}
</style>