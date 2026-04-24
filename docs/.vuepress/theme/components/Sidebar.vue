<template>
  <aside class="blog-sidebar" :class="{ 'sidebar-search': isSearch }">

    <!-- Recent Posts: hidden on search/archive page -->
    <section class="widget" v-if="!isSearch">
      <h3 class="widget-title">Recent Posts</h3>
      <ul class="widget-list">
        <li v-for="post in recentPosts" :key="post.path">
          <a :href="post.path">{{ post.title }}</a>
        </li>
      </ul>
    </section>

    <!-- Search box: always visible -->
    <section class="widget widget-search">
      <form class="search-form" @submit.prevent="doSearch">
        <input v-model="searchQuery" type="text" class="search-input" placeholder="Search…" aria-label="Search" />
        <button type="submit" class="search-btn">Search</button>
      </form>
    </section>

    <!-- Archives: always visible, clickable as filter links -->
    <section class="widget" v-if="Object.keys(archives).length > 0">
      <h3 class="widget-title">Archives</h3>
      <ul class="widget-list">
        <li v-for="(count, month) in archives" :key="month">
          <a :href="archiveLink(month)" :class="{ 'archive-active': activeArchive === month }" class="archive-link">
            {{ month }}
          </a>
          <span class="widget-count">({{ count }})</span>
        </li>
      </ul>
    </section>

    <!-- Categories: hidden on search/archive page -->
    <section class="widget" v-if="!isSearch && categories.length > 0">
      <h3 class="widget-title">Categories</h3>
      <ul class="widget-list">
        <li v-for="cat in categories" :key="cat.name">
          <span class="cat-name">{{ cat.name }}</span>
          <span class="widget-count">({{ cat.count }})</span>
        </li>
      </ul>
    </section>

  </aside>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { blogPosts } from '@temp/blog-index.js'

const route = useRoute()
const isSearch = computed(() => route.path.startsWith('/search'))

// Current active archive filter (read from URL)
const activeArchive = ref('')
onMounted(() => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    activeArchive.value = params.get('archive') || ''
    // Pre-fill search box if there's a q param
    const q = params.get('q') || ''
    if (q) searchQuery.value = q
  }
})

const searchQuery = ref('')

function doSearch() {
  const q = searchQuery.value.trim()
  // Preserve archive filter if active
  const archive = activeArchive.value
  let url = '/search/?'
  const parts = []
  if (q) parts.push('q=' + encodeURIComponent(q))
  if (archive) parts.push('archive=' + encodeURIComponent(archive))
  if (parts.length === 0) return
  window.location.href = url + parts.join('&')
}

function archiveLink(month) {
  // Preserve search query if active
  const q = searchQuery.value.trim()
  let url = '/search/?archive=' + encodeURIComponent(month)
  if (q) url += '&q=' + encodeURIComponent(q)
  return url
}

const recentPosts = blogPosts.slice(0, 8)

const archives = computed(() => {
  const map = {}
  blogPosts.forEach(p => {
    const raw = p.date
    if (!raw) return
    const d = new Date(String(raw).replace(/\//g, '-'))
    if (isNaN(d.getTime())) return
    const key = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
    map[key] = (map[key] || 0) + 1
  })
  return map
})

const categories = computed(() => {
  const map = {}
  blogPosts.forEach(p => {
    ;(p.categories || []).forEach(c => {
      if (c) map[c] = (map[c] || 0) + 1
    })
  })
  return Object.entries(map)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
})
</script>

<style scoped>
.blog-sidebar {
  width: var(--sidebar-width);
  flex-shrink: 0;
  font-family: var(--font-sans);
  font-size: 0.88rem;
  /* Push down so first link aligns with first article title
     (1.2rem feed padding + ~1.5rem widget-title height) */
  padding-top: 2.8rem;
}

/* On search/archive page: same alignment, search box is the first element */
.sidebar-search {
  padding-top: 2.8rem;
}

.widget {
  margin-bottom: 1.8rem;
}

.widget-search {
  margin-bottom: 1.4rem;
}

.search-form {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.search-input {
  font-family: var(--font-sans);
  font-size: 0.88rem;
  border: 1px solid var(--color-border);
  border-radius: 2px;
  background: #fff;
  color: var(--color-text);
  padding: 0.35em 0.6em;
  width: 100%;
  outline: none;
  box-sizing: border-box;
}
.search-input:focus {
  border-color: var(--color-brand);
}

.search-btn {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  background: var(--color-bg-soft);
  color: var(--color-text-2);
  border: 1px solid var(--color-border);
  border-radius: 2px;
  padding: 0.3em 0.8em;
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.15s, color 0.15s;
}
.search-btn:hover {
  background: var(--color-brand-light);
  color: var(--color-brand);
  border-color: var(--color-brand);
}

.widget-title {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-3);
  margin: 0 0 0.6rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--color-divider);
}

.widget-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.widget-list li {
  padding: 0.2rem 0;
  line-height: 1.4;
  word-break: break-word;
  overflow-wrap: break-word;
}

.widget-list a {
  color: var(--color-link);
  text-decoration: none;
  font-size: 0.88rem;
  display: inline;
  white-space: normal;
  word-break: break-word;
}
.widget-list a:hover {
  color: var(--color-link-hover);
  text-decoration: underline;
}

.archive-link {
  color: var(--color-link);
  cursor: pointer;
}
.archive-link:hover {
  color: var(--color-link-hover);
  text-decoration: underline;
}
.archive-active {
  font-weight: 700;
  color: var(--color-brand);
}

.archive-month,
.cat-name {
  color: var(--color-link);
  font-size: 0.88rem;
}

.widget-count {
  color: var(--color-text-muted);
  font-size: 0.82rem;
  margin-left: 0.25rem;
}
</style>
