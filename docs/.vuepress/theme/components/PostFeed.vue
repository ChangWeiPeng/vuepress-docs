<template>
  <div class="post-feed">

    <!-- Post list -->
    <article
      v-for="post in currentPagePosts"
      :key="post.path"
      class="post-entry"
    >
      <!-- Post header -->
      <header class="post-header">
        <h2 class="post-title">
          <a :href="post.path">{{ post.title }}</a>
        </h2>
        <div class="post-meta">
          <span class="post-date">{{ formatDate(post.date) }}</span>
          <span v-if="post.categories && post.categories.length" class="post-cats">
            in
            <span v-for="(cat, i) in post.categories" :key="cat">
              <a :href="'/?category=' + encodeURIComponent(cat)" class="cat-link">{{ cat }}</a><span v-if="i < post.categories.length - 1">, </span>
            </span>
          </span>
          <span v-if="post.tags && post.tags.length" class="post-tags">
            | Tags:
            <span v-for="(tag, i) in post.tags" :key="tag">
              <a :href="'/?tag=' + encodeURIComponent(tag)" class="tag-link">{{ tag }}</a><span v-if="i < post.tags.length - 1">, </span>
            </span>
          </span>
        </div>
      </header>

      <!-- Full post content rendered inline -->
      <div class="post-content">
        <Content :path="post.routePath" />
      </div>

      <!-- Post footer -->
      <footer class="post-footer">
        <a :href="post.path" class="permalink">Permalink</a>
      </footer>
    </article>

    <!-- Pagination controls -->
    <nav class="pagination" v-if="allPosts.length > PAGE_SIZE">
      <button
        v-if="currentPage > 0"
        class="page-btn"
        @click="goNewer"
      >← Newer Posts</button>

      <span class="page-info">
        Page {{ currentPage + 1 }} of {{ totalPages }}
      </span>

      <button
        v-if="hasOlderPosts"
        class="page-btn"
        @click="goOlder"
      >Older Posts →</button>
    </nav>

    <!-- Empty state -->
    <div v-if="allPosts.length === 0" class="no-posts">
      <p>No posts yet.</p>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Content } from 'vuepress/client'
import { blogPosts } from '@temp/blog-index.js'

const PAGE_SIZE = 5
const currentPage = ref(0)

const allPosts = blogPosts

const totalPages = computed(() => Math.max(1, Math.ceil(allPosts.length / PAGE_SIZE)))
const hasOlderPosts = computed(() => currentPage.value < totalPages.value - 1)

const currentPagePosts = computed(() => {
  const start = currentPage.value * PAGE_SIZE
  return allPosts.slice(start, start + PAGE_SIZE)
})

function formatDate(raw) {
  if (!raw) return ''
  const d = new Date(String(raw).replace(/\//g, '-'))
  if (isNaN(d.getTime())) return String(raw)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function goOlder() {
  if (hasOlderPosts.value) {
    currentPage.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function goNewer() {
  if (currentPage.value > 0) {
    currentPage.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.post-feed {
  flex: 1;
  min-width: 0;
  padding-top: 1.2rem;
}

/* ---- Individual post entry ---- */
.post-entry {
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--color-divider);
  margin-bottom: 2.5rem;
}
.post-entry:last-of-type {
  border-bottom: none;
}

/* ---- Post header ---- */
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

.cat-link,
.tag-link {
  color: var(--color-link);
  text-decoration: none;
}
.cat-link:hover,
.tag-link:hover {
  text-decoration: underline;
}

/* ---- Post content ---- */
.post-content {
  font-size: 16px;
  line-height: 1.85;
  color: var(--color-text);
}

/* ---- Post footer ---- */
.post-footer {
  margin-top: 1.2rem;
  font-family: var(--font-sans);
  font-size: 0.82rem;
}
.permalink {
  color: var(--color-text-muted);
  text-decoration: none;
}
.permalink:hover {
  color: var(--color-link);
  text-decoration: underline;
}

/* ---- Pagination ---- */
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0 2rem;
  border-top: 1px solid var(--color-divider);
  margin-top: 1rem;
}

.page-btn {
  font-family: var(--font-sans);
  font-size: 0.88rem;
  color: var(--color-link);
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 3px;
  padding: 0.4rem 0.9rem;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.page-btn:hover {
  background: var(--color-brand-light);
  color: var(--color-brand);
  border-color: var(--color-brand);
}

.page-info {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

/* ---- Empty state ---- */
.no-posts {
  padding: 2rem 0;
  color: var(--color-text-muted);
  font-style: italic;
}
</style>
