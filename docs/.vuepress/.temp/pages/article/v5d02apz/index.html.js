import comp from "C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/article/v5d02apz/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/v5d02apz/\",\"title\":\"Foo Note\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Foo Note\",\"createTime\":\"2025/09/30 14:02:33\",\"permalink\":\"/article/v5d02apz/\"},\"readingTime\":{\"minutes\":0.04,\"words\":13},\"git\":{},\"filePathRelative\":\"demo/foo.md\",\"headers\":[],\"categoryList\":[{\"id\":\"fe01ce\",\"sort\":10000,\"name\":\"demo\"}]}")
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
