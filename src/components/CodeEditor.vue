<template>
  <div class="code-editor" :class="customClass">
    <div class="code-editor-header">
      <div class="editor-btn red"></div>
      <div class="editor-btn yellow"></div>
      <div class="editor-btn green"></div>
    </div>
    <div class="code-editor-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  customClass: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.code-editor {
  position: absolute;
  top: -30px;
  right: -30px;
  width: 350px;
  height: 350px;
  background-color: var(--darker);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transform: rotate(8deg);
  z-index: -1;
  opacity: 0.7;
}

.code-editor-header {
  height: 30px;
  background-color: var(--dark);
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.editor-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
}

.red {
  background-color: #ff5f56;
}

.yellow {
  background-color: #ffbd2e;
}

.green {
  background-color: #27c93f;
}

.code-editor-body {
  padding: 15px;
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  color: #f8f8f2;
  line-height: 1.5;
}

/* 供About组件调用的样式 */
.about-code-editor {
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transform: none;
  opacity: 1;
  z-index: 1;
}

@media (max-width: 768px) {
  .code-editor {
    display: none;
  }
}
</style>