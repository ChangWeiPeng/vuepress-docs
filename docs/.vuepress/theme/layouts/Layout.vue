<template>
  <div class="site-wrapper">
    <!-- Top navigation / branding -->
    <Navbar />

    <!-- Main two-column layout -->
    <div class="site-body">
      <div class="site-inner">

        <!-- Left sidebar (blog widgets) -->
        <Sidebar />

        <!-- Right: main content area -->
        <main class="site-main">
          <!-- Home: post feed -->
          <PostFeed v-if="isHome" />

          <!-- Blog post page -->
          <PostPage v-else-if="isBlogPost" />

          <!-- Doc / article page -->
          <DocPage v-else />
        </main>

      </div>
    </div>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-inner">
        <p>
          &copy; {{ new Date().getFullYear() }}
          <a :href="'/'">{{ siteData.title }}</a>.
          Powered by <a href="https://vuepress.vuejs.org" target="_blank" rel="noopener">VuePress</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePageData, useSiteData } from 'vuepress/client'
import { useRoute } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import PostFeed from '../components/PostFeed.vue'
import PostPage from '../components/PostPage.vue'
import DocPage from '../components/DocPage.vue'

const page = usePageData()
const siteData = useSiteData()
const route = useRoute()

const isHome = computed(() => route.path === '/')
const isBlogPost = computed(() =>
  route.path.startsWith('/blog/') && route.path !== '/blog/'
)
</script>

<style>
/* Import global styles */
@import '../styles/global.css';

/* Google Fonts - Lora serif */
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
</style>

<style scoped>
.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
}

.site-body {
  flex: 1;
  padding: 0 0 2rem;
}

.site-inner {
  max-width: calc(var(--sidebar-width) + var(--content-max-width) + 6rem);
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
}

.site-main {
  flex: 1;
  min-width: 0;
  max-width: var(--content-max-width);
}

/* Footer */
.site-footer {
  border-top: 1px solid var(--color-divider);
  background: var(--color-bg-soft);
  padding: 1.2rem 0;
}

.footer-inner {
  max-width: calc(var(--sidebar-width) + var(--content-max-width) + 6rem);
  margin: 0 auto;
  padding: 0 2rem;
  font-family: var(--font-sans);
  font-size: 0.82rem;
  color: var(--color-text-muted);
  text-align: center;
}

.footer-inner p {
  margin: 0;
}

.footer-inner a {
  color: var(--color-link);
  text-decoration: none;
}
.footer-inner a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .site-inner {
    flex-direction: column;
    padding: 0 1rem;
  }

  .site-main {
    max-width: 100%;
  }
}
</style>
