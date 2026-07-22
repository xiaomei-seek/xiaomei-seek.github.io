<template>
  <section ref="rootEl" class="easter-egg" :class="{ visible }" aria-label="页面彩蛋">
    <!-- <p class="egg-hint">{{ hintText }}</p> -->
    <pre class="egg-art" aria-hidden="true">{{ art }}</pre>
    <p class="egg-line">
      <span class="egg-prompt">$</span> {{ lineText }}<span class="egg-cursor" :class="{ blink: visible }">█</span>
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const art = [
  ' (  )   (   )  )',
  ' ) (   )  (  (',
  ' ( )  (    ) )',
  '_____________',
  '    <_____________> ___',
  '    |             |/ _ \\',
  '    |               | | |',
  '    |               |_| |',
  ' ___|             |\\___/',
  '/    \\___________/    \\',
  '\\_____________________/'
].join('\n');

const hintFull = '// you found the basement';
const lineFull = 'echo "EOF — thanks for scrolling this far."';

const rootEl = ref(null);
const visible = ref(false);
const hintText = ref('');
const lineText = ref('');

let observer = null;
let typeTimer = 0;

function typewrite(target, full, startDelay = 0) {
  return new Promise((resolve) => {
    let i = 0;
    const tick = () => {
      target.value = full.slice(0, i);
      i += 1;
      if (i <= full.length) {
        typeTimer = window.setTimeout(tick, 28);
      } else {
        resolve();
      }
    };
    typeTimer = window.setTimeout(tick, startDelay);
  });
}

async function play() {
  if (visible.value) return;
  visible.value = true;
  await typewrite(hintText, hintFull, 200);
  await typewrite(lineText, lineFull, 280);
}

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    play();
    return;
  }
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        play();
        observer?.disconnect();
      }
    },
    { threshold: 0.25 }
  );
  if (rootEl.value) observer.observe(rootEl.value);
});

onUnmounted(() => {
  observer?.disconnect();
  clearTimeout(typeTimer);
});
</script>

<style scoped>
.easter-egg {
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.easter-egg.visible {
  opacity: 1;
  transform: translateY(0);
}

.egg-hint {
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.82rem;
  color: var(--muted);
  letter-spacing: 0.03em;
  min-height: 1.2em;
  text-align: center;
}

.egg-art {
  margin: 0;
  max-width: 100%;
  overflow-x: auto;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: clamp(0.68rem, 1.6vw, 0.88rem);
  line-height: 1.2;
  color: #6a6a6a;
  text-align: center;
  user-select: none;
  -webkit-overflow-scrolling: touch;
}

.egg-line {
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: clamp(0.78rem, 1.6vw, 0.9rem);
  color: var(--ink);
  min-height: 1.4em;
  text-align: center;
}

.egg-prompt {
  color: var(--accent);
  margin-right: 8px;
}

.egg-cursor {
  display: inline-block;
  margin-left: 2px;
  color: var(--accent);
  opacity: 0;
}

.egg-cursor.blink {
  opacity: 0.7;
  animation: cursor-blink 1s steps(1) infinite;
}

@keyframes cursor-blink {
  50% { opacity: 0; }
}

@media (max-width: 480px) {
  .egg-art {
    font-size: 0.6rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .egg-cursor.blink {
    animation: none;
  }
}
</style>
