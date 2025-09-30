
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
      { text: 'Archives', link: '/archives/' },
      { text: 'Notes', link: '/notes/' },
      { text: 'Preview', link: '/preview/' }
    ]
  }),
  title: 'Physicscw'
})