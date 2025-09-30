import comp from "C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/archives/index.html.vue"
const data = JSON.parse("{\"path\":\"/archives/\",\"title\":\"Archives\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0,\"words\":1},\"git\":{},\"filePathRelative\":\"archives/index.md\",\"headers\":[],\"categoryList\":[{\"id\":\"1a5572\",\"sort\":10000,\"name\":\"archives\"}]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
