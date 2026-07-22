<template>
  <ProjectDetail
    v-if="activeProject"
    :project="activeProject"
    @back="closeDetail"
  />

  <section v-else class="pane">
    <h2 class="pane-title">项目经验</h2>
    <p class="intro">简历精选 {{ featuredProjects.length }} 项，点击进入详情。</p>

    <div class="list">
      <article
        v-for="(project, index) in featuredProjects"
        :key="project.id"
        class="proj"
        @click="openDetail(project.id)"
      >
        <div class="proj-head">
          <span class="idx">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="proj-meta">
            <h3 class="proj-title">{{ project.title }}</h3>
            <p class="proj-period">{{ project.period }}</p>
          </div>
          <span class="proj-link">详情 →</span>
        </div>
        <p class="proj-sub">{{ project.subtitle }}</p>
        <p class="proj-desc">{{ project.summary }}</p>
        <div class="proj-tags">
          <span v-for="tech in project.techStack.slice(0, 5)" :key="tech" class="tag">{{ tech }}</span>
          <span v-if="project.techStack.length > 5" class="tag tag-more">+{{ project.techStack.length - 5 }}</span>
        </div>
      </article>
    </div>

    <div v-if="moreProjects.length" class="more">
      <h3 class="more-title">更多项目</h3>
      <div class="more-list">
        <button
          v-for="project in moreProjects"
          :key="project.id"
          type="button"
          class="more-item"
          @click="openDetail(project.id)"
        >
          <span class="more-name">{{ project.title }}</span>
          <span class="more-sub">{{ project.subtitle }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import ProjectDetail from './ProjectDetail.vue';
import { featuredProjects, moreProjects, getProjectById } from '../data/projects.js';

const activeId = ref(null);

const activeProject = computed(() =>
  activeId.value ? getProjectById(activeId.value) : null
);

function openDetail(id) {
  activeId.value = id;
  syncHash(id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeDetail() {
  activeId.value = null;
  syncHash(null);
}

function syncHash(id) {
  const base = '#projects';
  const next = id ? `${base}/${id}` : base;
  if (window.location.hash !== next) {
    history.replaceState(null, '', next);
  }
}

function readHash() {
  const match = window.location.hash.match(/^#projects\/([a-z0-9-]+)$/);
  if (match && getProjectById(match[1])) {
    activeId.value = match[1];
    return;
  }
  if (!window.location.hash.startsWith('#projects/')) {
    activeId.value = null;
  }
}

onMounted(() => {
  readHash();
  window.addEventListener('hashchange', readHash);
});

onUnmounted(() => {
  window.removeEventListener('hashchange', readHash);
});
</script>

<style scoped>
.pane {
  max-width: 720px;
}

.pane-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
}

.intro {
  color: var(--muted);
  margin-bottom: 28px;
  font-size: 0.98rem;
}

.list {
  border-top: 1px solid var(--line);
}

.proj {
  padding: 24px 4px;
  border-bottom: 1px solid var(--line);
  cursor: pointer;
  transition: background 0.18s ease;
}

.proj:hover {
  background: var(--soft);
}

.proj-head {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.idx {
  font-size: 0.82rem;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  padding-top: 4px;
}

.proj-meta {
  flex: 1;
  min-width: 0;
}

.proj-title {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  transition: color 0.18s ease;
}

.proj:hover .proj-title {
  color: var(--accent);
}

.proj-period {
  font-size: 0.82rem;
  color: var(--accent);
  margin-top: 2px;
  font-variant-numeric: tabular-nums;
}

.proj-link {
  font-size: 0.85rem;
  color: var(--accent);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
  padding-top: 6px;
}

.proj:hover .proj-link {
  opacity: 1;
  transform: translateX(0);
}

.proj-sub {
  color: var(--muted);
  font-size: 0.92rem;
  margin: 6px 0 0;
  padding-left: calc(0.82rem + 12px);
}

.proj-desc {
  color: #333;
  font-size: 0.95rem;
  line-height: 1.65;
  margin: 10px 0 12px;
  padding-left: calc(0.82rem + 12px);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  padding-left: calc(0.82rem + 12px);
}

.tag {
  font-size: 0.78rem;
  padding: 3px 9px;
  border: 1px solid var(--line);
  border-radius: 4px;
  color: #555;
}

.tag-more {
  color: var(--muted);
  border-style: dashed;
}

.more {
  margin-top: 40px;
}

.more-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--muted);
  letter-spacing: 0.08em;
  margin-bottom: 12px;
}

.more-list {
  border-top: 1px solid var(--line);
}

.more-item {
  width: 100%;
  appearance: none;
  border: none;
  background: transparent;
  text-align: left;
  font: inherit;
  padding: 14px 4px;
  border-bottom: 1px solid var(--line);
  cursor: pointer;
  display: grid;
  gap: 2px;
  transition: background 0.18s ease;
}

.more-item:hover {
  background: var(--soft);
}

.more-name {
  font-weight: 600;
  font-size: 1rem;
}

.more-item:hover .more-name {
  color: var(--accent);
}

.more-sub {
  font-size: 0.88rem;
  color: var(--muted);
}

@media (max-width: 560px) {
  .proj-sub,
  .proj-desc,
  .proj-tags {
    padding-left: 0;
  }
}
</style>
