<template>
  <section class="section" :id="id">
    <div class="container">
      <div class="section-title fade-in">
        <h2>自我评价</h2>
      </div>
      <div class="evaluation-container fade-in">
        <div class="evaluation-items">
          <div v-for="(item, index) in evaluationItems" :key="index" class="evaluation-item">
            <i class="fas fa-check-circle"></i>
            <div class="evaluation-text">
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  id: {
    type: String,
    default: 'evaluation'
  }
});

const evaluationItems = [
  '全栈能力突出，能独立完成从需求分析到部署上线的全流程开发',
  '对AI技术有深度实践，熟悉大模型应用开发',
  '技术视野广阔，持续学习新技术并应用到实际项目中'
];
</script>

<style scoped>
.evaluation-container {
  background-color: var(--dark);
  border-radius: var(--border-radius);
  padding: 40px;
  box-shadow: var(--box-shadow);
}

.evaluation-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 20px;
}

.evaluation-item {
  display: flex;
  align-items: flex-start;
}

.evaluation-item i {
  color: var(--success);
  font-size: 24px;
  margin-right: 15px;
  margin-top: 5px;
}

.evaluation-text p {
  color: var(--gray);
}

@media (max-width: 768px) {
  .evaluation-items {
    grid-template-columns: 1fr;
  }
  
  .evaluation-container {
    padding: 30px 20px;
  }
}
</style>