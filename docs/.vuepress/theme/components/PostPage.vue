<template>
  <article class="post-page">
    <!-- Post header -->
    <header class="post-header">
      <h1 class="post-title">{{ page.title }}</h1>
      <div class="post-meta">
        <span class="post-date">{{ formatDate(page.frontmatter?.date || page.frontmatter?.createTime) }}</span>
        <span v-if="categories.length" class="post-cats">
          in
          <span v-for="(cat, i) in categories" :key="cat">
            <a :href="'/?category=' + encodeURIComponent(cat)" class="cat-link">{{ cat }}</a><span v-if="i < categories.length - 1">, </span>
          </span>
        </span>
        <span v-if="tags.length" class="post-tags">
          | Tags:
          <span v-for="(tag, i) in tags" :key="tag">
            <a :href="'/?tag=' + encodeURIComponent(tag)" class="tag-link">{{ tag }}</a><span v-if="i < tags.length - 1">, </span>
          </span>
        </span>
      </div>
    </header>

    <!-- Post body -->
    <div class="post-content">
      <Content />
    </div>

    <!-- Post navigation -->
    <nav class="post-nav">
      <a href="/" class="back-link">← Back to Home</a>
    </nav>

    <!-- Comment section placeholder -->
    <!-- To enable comments: replace this div with <GiscusComment /> or <WalineComment /> -->
    <section
      class="comment-section"
      :data-post-path="page.path"
      :data-post-title="page.title"
      aria-label="Comments"
    >
      <!-- Comment widget will be mounted here in the future -->
    </section>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { usePageData, Content } from 'vuepress/client'

const page = usePageData()

const categories = computed(() => {
  const c = page.value.frontmatter?.categories
  if (!c) return []
  return Array.isArray(c) ? c : [c]
})

const tags = computed(() => {
  const t = page.value.frontmatter?.tags
  if (!t) return []
  return Array.isArray(t) ? t : [t]
})

function formatDate(raw) {
  if (!raw) return ''
  const d = new Date(String(raw).replace(/\//g, '-'))
  if (isNaN(d.getTime())) return raw
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>
.post-page {
  flex: 1;
  min-width: 0;
  padding-top: 1.2rem;
}

.post-header {
  margin-bottom: 1.2rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--color-divider);
}

.post-title {
  font-family: var(--font-serif);
  font-size: 1.9rem;
  font-weight: 600;
  color: var(--color-brand);
  margin: 0 0 0.4rem;
  line-height: 1.25;
}

.post-meta {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  color: var(--color-text-3);
  line-height: 1.5;
}

.cat-link,
.tag-link {
  color: var(--color-link);
  text-decoration: none;
}
.cat-link:hover,
.tag-link:hover {
  text-decoration: underline;
}

/* Post navigation */
.post-nav {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-divider);
  font-family: var(--font-sans);
  font-size: 0.88rem;
}

.back-link {
  color: var(--color-link);
  text-decoration: none;
}
.back-link:hover {
  text-decoration: underline;
}

/* Comment section */
.comment-section {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-divider);
  min-height: 1px;
}
</style>
