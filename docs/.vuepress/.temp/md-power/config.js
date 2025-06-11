import { defineClientConfig } from 'vuepress/client'
import Tabs from 'C:/Users/29657/vuepress-starter/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'C:/Users/29657/vuepress-starter/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'C:/Users/29657/vuepress-starter/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from 'C:/Users/29657/vuepress-starter/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'

import 'C:/Users/29657/vuepress-starter/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
    
  }
})
