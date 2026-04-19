<template>
  <div class="site-wrapper">
    <Navbar />
    <div class="not-found-body">
      <div class="not-found-inner">
        <h1 class="not-found-title">404</h1>
        <p class="not-found-msg">Page not found.</p>
        <a href="/" class="not-found-link">← Return to Home</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSiteData } from 'vuepress/client'
import Navbar from '../components/Navbar.vue'
const siteData = useSiteData()
</script>

<style>
@import '../styles/global.css';
</style>

<style scoped>
.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
}

.not-found-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found-inner {
  text-align: center;
  padding: 3rem 2rem;
}

.not-found-title {
  font-family: var(--font-serif);
  font-size: 5rem;
  font-weight: 700;
  color: var(--color-divider);
  margin: 0 0 0.5rem;
  line-height: 1;
}

.not-found-msg {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  color: var(--color-text-3);
  margin: 0 0 1.5rem;
}

.not-found-link {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--color-link);
  text-decoration: none;
}
.not-found-link:hover {
  text-decoration: underline;
}
</style>
