import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from 'vuepress/utils'
import { searchPlugin } from '@vuepress/plugin-search'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { blogIndexPlugin } from './theme/plugin-blog-index.js'

const __dirname = getDirname(import.meta.url)

/**
 * Preprocessor plugin: ensure $$ math blocks are surrounded by blank lines
 * so markdown-math can recognize them as block-level formulas.
 */
function markdownFixPlugin() {
  return {
    name: 'vuepress-plugin-markdown-fix',
    extendsMarkdown(md) {
      const originalRender = md.render.bind(md)
      md.render = function(src, env) {
        let fixed = src
          // Add blank line before $$ if preceded by non-empty line
          .replace(/([^\n])\n(\$\$)/g, '$1\n\n$2')
          // Add blank line after $$ if followed by non-empty line
          .replace(/(\$\$)\n([^\n$])/g, '$1\n\n$2')
        return originalRender(fixed, env)
      }
    },
  }
}

export default defineUserConfig({
  lang: 'en-US',
  title: 'Physicscw',
  description: 'Updates on my research, notes, and other topics. By Physicscw.',
  base: '/',
  bundler: viteBundler(),

  // Google Fonts preconnect
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&display=swap', rel: 'stylesheet' }],
  ],

  // Plugins
  plugins: [
    blogIndexPlugin(),
    markdownFixPlugin(),
    searchPlugin({
      maxSuggestions: 10,
      getExtraFields: (page) => {
        const tags = page.frontmatter.tags ?? []
        const categories = page.frontmatter.categories ?? []
        return [
          ...(Array.isArray(tags) ? tags : [tags]),
          ...(Array.isArray(categories) ? categories : [categories]),
        ]
      },
    }),
    markdownMathPlugin({ type: 'katex' }),
  ],

  // Local custom theme
  theme: {
    name: 'vuepress-theme-tao',
    layouts: {
      Layout: path.resolve(__dirname, 'theme/layouts/Layout.vue'),
      NotFound: path.resolve(__dirname, 'theme/layouts/NotFound.vue'),
    },
    clientConfigFile: path.resolve(__dirname, 'theme/client.js'),
    themeConfig: {
      navbar: [
        { text: 'Home', link: '/' },
        { text: 'Blog', link: '/blog/' },
        { text: 'Articles', link: '/article/' },
      ],
    },
  },
})
