<template>
  <div class="post-feed">

    <!-- No filters active -->
    <p v-if="!query && !archive" class="no-posts">Enter a search term or click an archive month on the left.</p>

    <!-- No results -->
    <p v-else-if="results.length === 0" class="no-posts">
      No results found<span v-if="archive"> in <strong>{{ archive }}</strong></span><span v-if="query"> for <strong>{{ query }}</strong></span>.
    </p>

    <!-- Results -->
    <template v-else>
      <article v-for="post in results" :key="post.path" class="post-entry">
        <header class="post-header">
          <h2 class="post-title">
            <a :href="post.path">{{ post.title }}</a>
          </h2>
          <div class="post-meta">
            <span class="post-date">{{ formatDate(post.date) }}</span>
            <span v-if="post.categories && post.categories.length" class="post-cats">
              in
              <span v-for="(cat, i) in post.categories" :key="cat">
                <span class="cat-name">{{ cat }}</span><span v-if="i < post.categories.length - 1">, </span>
              </span>
            </span>
          </div>
        </header>

        <!-- Full post content with math rendered -->
        <div class="post-content">
          <Content :path="post.routePath" />
        </div>

        <footer class="post-footer">
          <a :href="post.path" class="read-more">Read more →</a>
        </footer>
      </article>
    </template>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Content } from 'vuepress/client'
import { blogPosts } from '@temp/blog-index.js'

const query = ref('')
const archive = ref('')

onMounted(() => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    query.value = params.get('q') || ''
    archive.value = params.get('archive') || ''
  }
})

function getMonthLabel(raw) {
  if (!raw) return ''
  const d = new Date(String(raw).replace(/\//g, '-'))
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
}

const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  const arc = archive.value.trim()
  return blogPosts.filter(post => {
    if (arc && getMonthLabel(post.date) !== arc) return false
    if (q) {
      const terms = q.split(/\s+/).filter(Boolean)
      const haystack = [
        post.title || '',
        post.excerpt || '',
        ...(post.tags || []),
        ...(post.categories || []),
      ].join(' ').toLowerCase()
      if (!terms.every(term => haystack.includes(term))) return false
    }
    return true
  })
})

function formatDate(raw) {
  if (!raw) return ''
  const d = new Date(String(raw).replace(/\//g, '-'))
  if (isNaN(d.getTime())) return String(raw)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>
.post-feed {
  flex: 1;
  min-width: 0;
  padding-top: 1.2rem;
}

.post-entry {
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--color-divider);
  margin-bottom: 2.5rem;
}
.post-entry:last-of-type {
  border-bottom: none;
}

.post-header {
  margin-bottom: 1rem;
}

.post-title {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 0 0.3rem;
  line-height: 1.25;
}
.post-title a {
  color: var(--color-brand);
  text-decoration: none;
}
.post-title a:hover {
  text-decoration: underline;
}

.post-meta {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  color: var(--color-text-3);
  line-height: 1.5;
}

.cat-name {
  color: var(--color-link);
}

.post-footer {
  margin-top: 0.8rem;
  font-family: var(--font-sans);
  font-size: 0.82rem;
}
.read-more {
  color: var(--color-text-muted);
  text-decoration: none;
}
.read-more:hover {
  color: var(--color-link);
  text-decoration: underline;
}

.no-posts {
  padding: 2rem 0;
  color: var(--color-text-muted);
  font-style: italic;
  font-family: var(--font-sans);
}
</style>
