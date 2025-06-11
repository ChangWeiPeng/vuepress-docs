
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  base: '/',
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [{ text: 'Home', link: '/' }, { text: 'Archives', link: '/archives/' }],
  }),
  title: 'Physicscw Docs'
})