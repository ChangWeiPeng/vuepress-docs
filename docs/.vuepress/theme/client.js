import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/Layout.vue'
import NotFound from './layouts/NotFound.vue'
import 'katex/dist/katex.min.css'

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,
  },
})
