<template>
  <section class="pane">
    <h2 class="pane-title">专业技能</h2>
    <p class="intro">{{ skillsIntro }}</p>

    <div class="grid">
      <div v-for="(category, index) in skillCategories" :key="category.title" class="cat">
        <h3 class="cat-title">
          <span class="cat-idx">{{ String(index + 1).padStart(2, '0') }}</span>
          {{ category.title }}
        </h3>
        <ul>
          <li v-for="(skill, i) in category.skills" :key="i">
            <template v-for="(part, j) in parseBold(skill)" :key="j">
              <strong v-if="part.bold">{{ part.text }}</strong>
              <template v-else>{{ part.text }}</template>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillCategories, skillsIntro } from '../data/skills.js';

/** Split `**bold**` markers into plain / bold segments. */
function parseBold(text) {
  return text.split(/(\*\*[^*]+\*\*)/).filter(Boolean).map((part) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return { bold: true, text: part.slice(2, -2) };
    }
    return { bold: false, text: part };
  });
}
</script>

<style scoped>
.pane {
  max-width: 760px;
}

.pane-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
}

.intro {
  color: var(--muted);
  margin-bottom: 36px;
  font-size: 0.98rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px 48px;
}

.cat-title {
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid var(--ink);
}

.cat-idx {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}

ul {
  list-style: none;
}

li {
  position: relative;
  padding-left: 15px;
  margin-bottom: 9px;
  color: #444;
  font-size: 0.95rem;
  line-height: 1.65;
}

li strong {
  color: var(--ink);
  font-weight: 700;
  /* WenKai bold is subtle — marker highlight makes keywords scan */
  background-image: linear-gradient(transparent 58%, rgba(42, 95, 143, 0.28) 58%);
  padding: 0 0.08em;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--muted);
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
