import { getDirname, path } from 'vuepress/utils'
import { searchPlugin } from '@vuepress/plugin-search'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

const __dirname = getDirname(import.meta.url)

export default {
  name: 'vuepress-theme-tao',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    NotFound: path.resolve(__dirname, 'layouts/NotFound.vue'),
  },
  plugins: [
    searchPlugin({
      maxSuggestions: 10,
      isSearchable: (page) => page.path !== '/',
      getExtraFields: (page) => {
        const tags = page.frontmatter.tags ?? []
        const categories = page.frontmatter.categories ?? []
        return [...tags, ...categories]
      },
    }),
    markdownMathPlugin({ type: 'katex' }),
  ],
  clientConfigFile: path.resolve(__dirname, 'client.js'),
}
