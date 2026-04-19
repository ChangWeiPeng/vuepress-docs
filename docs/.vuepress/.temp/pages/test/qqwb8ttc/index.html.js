import comp from "C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/test/qqwb8ttc/index.html.vue"
const data = JSON.parse("{\"path\":\"/test/qqwb8ttc/\",\"title\":\"test2\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"test2\",\"createTime\":\"2026/04/19 15:23:58\",\"permalink\":\"/test/qqwb8ttc/\"}}")
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
