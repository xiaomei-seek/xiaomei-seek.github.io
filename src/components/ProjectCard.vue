<template>
  <div class="project-card fade-in">
    <div class="project-header">
      <h3 class="project-title">{{ project.title }}</h3>
      <div class="project-subtitle">{{ project.subtitle }}</div>
    </div>
    <div class="project-body">
      <div class="project-description">
        <p>{{ project.description }}</p>
      </div>
      <div class="project-tech">
        <h4>技术栈</h4>
        <div class="tech-stack">
          <span v-for="(tech, index) in project.techStack" :key="index" class="tech-tag">{{ tech }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.project-card {
  background-color: var(--dark);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-header {
  padding: 20px;
  position: relative;
  background: linear-gradient(to right, var(--primary-dark), var(--primary));
}

.project-title {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: var(--light);
}

.project-subtitle {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.project-body {
  padding: 20px;
  flex-grow: 1;
}

.project-description {
  margin-bottom: 15px;
  color: var(--gray);
}

.project-tech {
  margin-top: 15px;
}

.project-tech h4 {
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: var(--light);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tech-tag {
  padding: 4px 10px;
  background-color: rgba(37, 99, 235, 0.2);
  border-radius: 20px;
  font-size: 0.75rem;
  color: var(--primary);
}
</style>