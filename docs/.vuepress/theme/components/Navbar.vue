<template>
  <header class="site-header">
    <div class="header-inner">
      <!-- Site title / branding -->
      <div class="site-branding">
        <a href="/" class="site-title">{{ siteData.title || 'My Blog' }}</a>
        <p v-if="siteData.description" class="site-description">{{ siteData.description }}</p>
      </div>

      <!-- Navigation -->
      <nav class="site-nav">
        <a
          v-for="item in navItems"
          :key="item.link"
          :href="item.link"
          class="nav-link"
          :class="{ active: isActive(item.link) }"
        >{{ item.text }}</a>
      </nav>
    </div>

    <!-- Divider -->
    <div class="header-divider"></div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useSiteData } from 'vuepress/client'
import { useRoute } from 'vue-router'

const siteData = useSiteData()
const route = useRoute()

const navItems = computed(() => {
  // Access themeConfig from siteData
  const themeConfig = siteData.value.themeConfig || {}
  return themeConfig.navbar || [
    { text: 'Home', link: '/' },
    { text: 'Blog', link: '/blog/' },
  ]
})

function isActive(link) {
  if (link === '/') return route.path === '/'
  return route.path.startsWith(link)
}
</script>

<style scoped>
.site-header {
  background: var(--color-bg);
  padding: 1.2rem 0 0;
}

.header-inner {
  max-width: calc(var(--sidebar-width) + var(--content-max-width) + 6rem);
  margin: 0 auto;
  padding: 0 2rem;
}

.site-branding {
  margin-bottom: 0.6rem;
}

.site-title {
  font-family: var(--font-serif);
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  letter-spacing: -0.01em;
}
.site-title:hover {
  color: var(--color-text);
  text-decoration: none;
}

.site-description {
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--color-text-3);
  font-size: 0.95rem;
  margin: 0.2rem 0 0;
  line-height: 1.5;
}

.site-nav {
  display: flex;
  gap: 0;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 0.88rem;
  color: var(--color-text-2);
  text-decoration: none;
  padding: 0.25rem 0.7rem;
  border-radius: 2px;
  transition: color 0.15s, background 0.15s;
}
.nav-link:first-child {
  padding-left: 0;
}
.nav-link:hover {
  color: var(--color-brand);
  text-decoration: none;
}
.nav-link.active {
  color: var(--color-brand);
  font-weight: 600;
}

.header-divider {
  border-top: 1px solid var(--color-divider);
  margin-top: 0.3rem;
}
</style>
