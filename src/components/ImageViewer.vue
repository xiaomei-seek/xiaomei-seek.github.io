<template>
  <div class="image-viewer-backdrop" v-if="isVisible" @click.self="closeViewer">
    <div class="image-viewer-container">
      <div class="image-viewer-header">
        <h3>{{ project.title }}</h3>
        <button class="close-btn" @click="closeViewer">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="image-viewer-content">
        <button class="nav-btn prev-btn" @click="prevImage" :disabled="currentIndex === 0">
          <i class="fas fa-chevron-left"></i>
        </button>
        
        <div class="image-container">
          <img :src="currentImage" :alt="`${project.title} - 图片 ${currentIndex + 1}`">
        </div>
        
        <button class="nav-btn next-btn" @click="nextImage" :disabled="currentIndex === project.images.length - 1">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <div class="image-viewer-footer">
        <div class="image-count">{{ currentIndex + 1 }} / {{ project.images.length }}</div>
        <div class="image-description">{{ project.imageDescriptions?.[currentIndex] || "" }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  project: {
    type: Object,
    default: () => ({ images: [] })
  }
});

const emit = defineEmits(['close']);

const currentIndex = ref(0);

// 当项目改变时重置索引
watch(() => props.project, () => {
  currentIndex.value = 0;
});

// 计算当前显示的图片
const currentImage = computed(() => {
  if (!props.project || !props.project.images || props.project.images.length === 0) {
    return '';
  }
  return props.project.images[currentIndex.value];
});

// 切换到下一张图片
function nextImage() {
  if (currentIndex.value < props.project.images.length - 1) {
    currentIndex.value++;
  }
}

// 切换到上一张图片
function prevImage() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}

// 关闭查看器
function closeViewer() {
  emit('close');
  // 重置索引，以便下次打开时从第一张图片开始
  currentIndex.value = 0;
}
</script>

<style scoped>
.image-viewer-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
}

.image-viewer-container {
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  background-color: var(--dark);
  border-radius: var(--border-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.image-viewer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.image-viewer-header h3 {
  margin: 0;
  color: var(--light);
  font-size: 1.2rem;
}

.close-btn {
  background: none;
  border: none;
  color: var(--gray);
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s;
}

.close-btn:hover {
  color: var(--light);
}

.image-viewer-content {
  position: relative;
  display: flex;
  flex: 1;
  min-height: 0;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  max-height: 500px;
  overflow: hidden;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.nav-btn {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--light);
  margin: 0 10px;
  transition: all 0.2s ease;
}

.nav-btn:hover:not(:disabled) {
  background-color: var(--primary);
  transform: scale(1.1);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.image-viewer-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.image-count {
  color: var(--primary);
  font-weight: bold;
}

.image-description {
  color: var(--gray);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .image-container {
    height: 40vh;
  }
  
  .nav-btn {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
  
  .image-viewer-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
}
</style>