<template>
  <div class="doc-layout">
    <!-- Doc sidebar: table of contents -->
    <aside class="doc-sidebar" v-if="headers.length > 0">
      <div class="toc-title">On this page</div>
      <nav class="toc">
        <ul>
          <li
            v-for="h in headers"
            :key="h.slug"
            :class="['toc-item', 'toc-h' + h.level]"
          >
            <a :href="'#' + h.slug" class="toc-link">{{ h.title }}</a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Doc content -->
    <article class="doc-content">
      <header class="doc-header" v-if="page.title">
        <h1 class="doc-title">{{ page.title }}</h1>
      </header>

      <div class="post-content">
        <Content />
      </div>
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePageData, Content } from 'vuepress/client'

const page = usePageData()

const headers = computed(() => {
  return (page.value.headers || []).filter(h => h.level <= 3)
})
</script>

<style scoped>
.doc-layout {
  display: flex;
  gap: 2rem;
  flex: 1;
  min-width: 0;
  padding-top: 1.2rem;
  align-items: flex-start;
}

/* ---- Doc sidebar (TOC) ---- */
.doc-sidebar {
  width: 200px;
  flex-shrink: 0;
  position: sticky;
  top: 1.5rem;
  max-height: calc(100vh - 3rem);
  overflow-y: auto;
  order: 2; /* TOC on the right */
}

.toc-title {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-3);
  margin-bottom: 0.6rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--color-divider);
}

.toc {
  font-family: var(--font-sans);
}

.toc ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.toc-item {
  line-height: 1.4;
  margin: 0.2rem 0;
}

.toc-h2 { padding-left: 0; }
.toc-h3 { padding-left: 0.8rem; }
.toc-h4 { padding-left: 1.6rem; }

.toc-link {
  font-size: 0.82rem;
  color: var(--color-text-3);
  text-decoration: none;
  display: block;
  padding: 0.1rem 0;
  transition: color 0.15s;
}
.toc-link:hover {
  color: var(--color-link);
  text-decoration: none;
}

/* ---- Doc content ---- */
.doc-content {
  flex: 1;
  min-width: 0;
  order: 1;
}

.doc-header {
  margin-bottom: 1.2rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--color-divider);
}

.doc-title {
  font-family: var(--font-serif);
  font-size: 1.9rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
  line-height: 1.25;
}

/* Responsive: hide TOC on small screens */
@media (max-width: 900px) {
  .doc-sidebar {
    display: none;
  }
}
</style>
