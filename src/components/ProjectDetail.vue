<template>
  <section v-if="project" class="detail">
    <button type="button" class="back" @click="goBack">← 返回项目列表</button>

    <header class="head">
      <p class="period">{{ project.period }}</p>
      <h2 class="title">{{ project.title }}</h2>
      <p class="subtitle">{{ project.subtitle }}</p>
      <p v-if="project.role" class="role">{{ project.role }}</p>
    </header>

    <div class="tags">
      <span v-for="tech in project.techStack" :key="tech" class="tag">{{ tech }}</span>
    </div>

    <div class="block">
      <h3 class="block-title">项目描述</h3>
      <p v-for="(para, i) in project.description" :key="i" class="para">{{ para }}</p>
    </div>

    <div v-if="project.highlights?.length" class="block">
      <h3 class="block-title">亮点</h3>
      <ul class="highlights">
        <li v-for="(item, i) in project.highlights" :key="i">{{ item }}</li>
      </ul>
    </div>

    <div v-if="project.images?.length" class="block">
      <h3 class="block-title">截图</h3>
      <div class="gallery">
        <button
          v-for="(src, i) in project.images"
          :key="src"
          type="button"
          class="thumb"
          @click="openGallery(i)"
        >
          <img :src="src" :alt="project.imageDescriptions?.[i] || project.title" loading="lazy" />
          <span v-if="project.imageDescriptions?.[i]" class="thumb-cap">{{ project.imageDescriptions[i] }}</span>
        </button>
      </div>
    </div>

    <VueEasyLightbox
      :visible="lightboxVisible"
      :imgs="lightboxImgs"
      :index="lightboxIndex"
      @hide="lightboxVisible = false"
    />
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import VueEasyLightbox from 'vue-easy-lightbox';
import { getProjectById } from '../data/projects.js';

const route = useRoute();
const router = useRouter();

const project = computed(() => getProjectById(route.params.id));

watch(
  project,
  (value) => {
    if (!value) router.replace({ name: 'projects' });
  },
  { immediate: true }
);

const lightboxVisible = ref(false);
const lightboxIndex = ref(0);

const lightboxImgs = computed(() =>
  (project.value?.images ?? []).map((src, i) => ({
    src,
    title: project.value.imageDescriptions?.[i] || project.value.title
  }))
);

function openGallery(index) {
  lightboxIndex.value = index;
  lightboxVisible.value = true;
}

function goBack() {
  router.push({ name: 'projects' });
}
</script>

<style scoped>
.detail {
  max-width: 720px;
}

.back {
  appearance: none;
  border: none;
  background: transparent;
  color: var(--muted);
  font: inherit;
  font-size: 0.92rem;
  cursor: pointer;
  padding: 0;
  margin-bottom: 28px;
  transition: color 0.18s ease;
}

.back:hover {
  color: var(--accent);
}

.head {
  margin-bottom: 20px;
}

.period {
  font-size: 0.85rem;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
  margin-bottom: 8px;
  letter-spacing: 0.04em;
}

.title {
  font-size: clamp(1.6rem, 4vw, 2rem);
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.2;
  margin-bottom: 6px;
}

.subtitle {
  color: var(--muted);
  font-size: 1.02rem;
  margin-bottom: 8px;
}

.role {
  color: #444;
  font-size: 0.95rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--line);
}

.tag {
  font-size: 0.78rem;
  padding: 4px 10px;
  border: 1px solid var(--line);
  border-radius: 4px;
  color: #555;
}

.block {
  margin-bottom: 32px;
}

.block-title {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-bottom: 14px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--ink);
  display: inline-block;
}

.para {
  color: #333;
  font-size: 0.98rem;
  line-height: 1.75;
  margin-bottom: 12px;
}

.para:last-child {
  margin-bottom: 0;
}

.highlights {
  list-style: none;
}

.highlights li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 10px;
  color: #333;
  font-size: 0.96rem;
  line-height: 1.7;
}

.highlights li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 14px;
}

.thumb {
  appearance: none;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0;
  overflow: hidden;
  background: var(--soft);
  cursor: pointer;
  text-align: left;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}

.thumb:hover {
  border-color: rgba(42, 95, 143, 0.35);
  box-shadow: 0 8px 24px rgba(42, 95, 143, 0.08);
}

.thumb img {
  width: 100%;
  height: auto;
  display: block;
}

.thumb-cap {
  display: block;
  padding: 8px 10px;
  font-size: 0.8rem;
  color: var(--muted);
}
</style>
