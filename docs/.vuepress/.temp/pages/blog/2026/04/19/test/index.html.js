import comp from "C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/blog/2026/04/19/test/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/2026/04/19/test/\",\"title\":\"test\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"test\",\"permalink\":\"/blog/2026/04/19/test/\",\"createTime\":\"2026/04/19 19:08:35\"}}")
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
