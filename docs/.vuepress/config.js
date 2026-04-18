import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/',
  bundler: viteBundler(),
  theme: plumeTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'blog', link: '/blog/' },
      { text: 'docs', link: '/docs/' },
    ],
    plugins: {
      markdownPower: {
        bilibili: true,
      },
    },
    collections: [
      {type: 'post', dir: 'blog', title: 'blog'}
    ],
    collections: [
      {type: 'doc', dir: 'docs', title: 'docs'}
    ],
  }),
  title: 'Physicscw'
})