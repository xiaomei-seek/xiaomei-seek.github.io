<template>
  <div class="project-card fade-in" @click="viewProject">
    <div class="project-header">
      <h3 class="project-title">{{ project.title }}</h3>
      <div class="project-subtitle">{{ project.subtitle }}</div>
    </div>
    <div class="project-body">
      <div class="project-description">
        <p>{{ project.description }}</p>
      </div>
      
      <!-- 图片预览指示器，只有当有图片时才显示 -->
      <div v-if="project.images && project.images.length > 0" class="image-preview">
        <img :src="project.images[0]" :alt="`${project.title} 预览图`">
        <div class="image-preview-overlay">
          <i class="fas fa-images"></i>
          <span>{{ project.images.length }}张图片</span>
        </div>
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
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['view-project']);

function viewProject() {
  // 仅当项目有图片时才触发查看事件
  if (props.project.images && props.project.images.length > 0) {
    emit('view-project', props.project);
  }
}
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
  cursor: pointer;
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

/* 图片预览样式 */
.image-preview {
  position: relative;
  margin: 15px 0;
  height: 160px;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-preview-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
}

.image-preview-overlay i {
  color: var(--primary);
}

.project-card:hover .image-preview img {
  transform: scale(1.05);
}
</style>