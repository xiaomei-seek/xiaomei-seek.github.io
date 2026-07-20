<template>
  <section ref="rootEl" class="easter-egg" :class="{ visible }" aria-label="页面彩蛋">
    <p class="egg-hint">{{ hintText }}</p>
    <pre class="egg-art" aria-hidden="true">{{ art }}</pre>
    <p class="egg-line">
      <span class="egg-prompt">$</span> {{ lineText }}<span class="egg-cursor" :class="{ blink: visible }">█</span>
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const art = [
  '   (  )   (   )  )',
  '  ) (   )  (  (',
  '  ( )  (    ) )',
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
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 80px 20px 100px;
  text-align: center;
  background:
    radial-gradient(ellipse 70% 50% at 50% 80%, rgba(125, 211, 252, 0.06), transparent 60%),
    linear-gradient(180deg, transparent 0%, rgba(8, 12, 22, 0.55) 40%, #0a101c 100%);
  border-top: 1px solid rgba(148, 163, 184, 0.1);
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.easter-egg.visible {
  opacity: 1;
  transform: translateY(0);
}

.egg-hint {
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.85rem;
  color: var(--neon-cyan);
  letter-spacing: 0.04em;
  opacity: 0.75;
  min-height: 1.2em;
}

.egg-art {
  margin: 0;
  max-width: 100%;
  overflow-x: auto;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: clamp(0.75rem, 2vw, 1rem);
  line-height: 1.2;
  letter-spacing: 0;
  color: rgba(186, 199, 213, 0.78);
  text-shadow: 0 0 18px rgba(125, 211, 252, 0.18);
  user-select: none;
  -webkit-overflow-scrolling: touch;
}

.egg-line {
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: clamp(0.8rem, 2vw, 0.95rem);
  color: var(--gray);
  min-height: 1.4em;
}

.egg-prompt {
  color: var(--neon-magenta);
  margin-right: 8px;
}

.egg-cursor {
  display: inline-block;
  margin-left: 2px;
  color: var(--neon-cyan);
  opacity: 0;
}

.egg-cursor.blink {
  opacity: 0.85;
  animation: cursor-blink 1s steps(1) infinite;
}

@keyframes cursor-blink {
  50% { opacity: 0; }
}

@media (max-width: 480px) {
  .easter-egg {
    min-height: 50vh;
    padding: 64px 12px 80px;
    gap: 20px;
  }

  .egg-art {
    font-size: 0.65rem;
  }
}
</style>
