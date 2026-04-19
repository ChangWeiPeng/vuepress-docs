import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default {
  name: 'vuepress-theme-tao',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    NotFound: path.resolve(__dirname, 'layouts/NotFound.vue'),
  },
  clientConfigFile: path.resolve(__dirname, 'client.js'),
}
