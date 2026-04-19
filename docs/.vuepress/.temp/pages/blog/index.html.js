import comp from "C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog//\",\"title\":\"记2026抖音创变者大赛\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"记2026抖音创变者大赛\",\"permalink\":\"/blog//\",\"createTime\":\"2026/04/18 22:54:30\",\"tags\":[\"diary\"]}}")
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
