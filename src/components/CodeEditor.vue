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
  background: rgba(8, 8, 16, 0.95);
  border: 1px solid rgba(0, 255, 247, 0.25);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 28px rgba(0, 255, 247, 0.12);
  transform: rotate(8deg);
  z-index: -1;
  opacity: 0.85;
}

.code-editor-header {
  height: 30px;
  background: rgba(5, 5, 12, 0.98);
  border-bottom: 1px solid rgba(255, 42, 109, 0.2);
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
  font-family: 'Share Tech Mono', 'Fira Code', monospace;
  font-size: 12px;
  color: #c8c8d2;
  line-height: 1.5;
  overflow-wrap: anywhere;
  word-break: break-word;
}

/* 供About组件调用的样式 */
.about-code-editor {
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(8, 8, 16, 0.95);
  border: 1px solid rgba(0, 255, 247, 0.22);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 32px rgba(0, 255, 247, 0.1);
  transform: none;
  opacity: 1;
  z-index: 1;
}

.code-editor.hero-code-editor {
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 380px;
  height: auto;
  min-height: 300px;
  transform: rotate(4deg);
  z-index: 0;
  opacity: 1;
  justify-self: end;
  overflow-x: hidden;
  overflow-y: visible;
}

@media (max-width: 960px) {
  .code-editor.hero-code-editor {
    justify-self: center;
    margin-top: 12px;
    transform: rotate(2deg);
    max-width: min(380px, 100%);
  }
}

@media (max-width: 768px) {
  .code-editor.hero-code-editor {
    display: none;
  }
}

/* 代码高亮样式 - 将在全局生效 */
</style>

<style>
/* 非scoped样式，以便这些类可以在其他组件中使用 */
.code-line {
  position: relative;
  margin-bottom: 5px;
  padding-left: 32px;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.line-number {
  position: absolute;
  left: 0;
  top: 0;
  color: #5a6a78;
  width: 22px;
  text-align: right;
}

.token-keyword {
  color: #ff2a6d;
}

.token-operator {
  color: #ff6b35;
}

.token-string {
  color: #00fff7;
}

.token-function {
  color: #7af0ff;
}

.token-comment {
  color: #6b7280;
}

.typing-animation {
  border-right: 2px solid var(--neon-cyan, #00fff7);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: var(--neon-cyan, #00fff7);
  }
}
</style>