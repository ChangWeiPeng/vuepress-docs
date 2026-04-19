<template>
  <aside class="blog-sidebar">

    <!-- Search -->
    <section class="widget widget-search">
      <SearchBox />
    </section>

    <!-- Recent Posts -->
    <section class="widget">
      <h3 class="widget-title">Recent Posts</h3>
      <ul class="widget-list">
        <li v-for="post in recentPosts" :key="post.path">
          <a :href="post.path">{{ post.title }}</a>
        </li>
      </ul>
    </section>

    <!-- Archives -->
    <section class="widget" v-if="Object.keys(archives).length > 0">
      <h3 class="widget-title">Archives</h3>
      <ul class="widget-list">
        <li v-for="(count, month) in archives" :key="month">
          <span class="archive-month">{{ month }}</span>
          <span class="widget-count">({{ count }})</span>
        </li>
      </ul>
    </section>

    <!-- Categories -->
    <section class="widget" v-if="categories.length > 0">
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
import { computed } from 'vue'
import { blogPosts } from '@temp/blog-index.js'
import { SearchBox } from '@vuepress/plugin-search/client'

// blogPosts already sorted by date descending
const recentPosts = blogPosts.slice(0, 8)

// Archives: group by "Month Year"
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

// Categories
const categories = computed(() => {
  const map = {}
  blogPosts.forEach(p => {
    (p.categories || []).forEach(c => {
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
  padding-top: 1.2rem;
}

.widget {
  margin-bottom: 1.8rem;
}

.widget-search {
  margin-bottom: 1.4rem;
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
  /* Allow long titles to wrap */
  word-break: break-word;
  overflow-wrap: break-word;
}

.widget-list a {
  color: var(--color-link);
  text-decoration: none;
  font-size: 0.88rem;
  /* Ensure wrapping, no overflow */
  display: inline;
  white-space: normal;
  word-break: break-word;
}
.widget-list a:hover {
  color: var(--color-link-hover);
  text-decoration: underline;
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
