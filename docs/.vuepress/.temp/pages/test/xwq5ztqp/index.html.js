import comp from "C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/test/xwq5ztqp/index.html.vue"
const data = JSON.parse("{\"path\":\"/test/xwq5ztqp/\",\"title\":\"test1\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"test1\",\"createTime\":\"2026/04/19 15:23:47\",\"permalink\":\"/test/xwq5ztqp/\"}}")
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
