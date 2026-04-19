import comp from "C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/blog/Test file.html.vue"
const data = JSON.parse("{\"path\":\"/blog/Test%20file.html\",\"title\":\"Test file\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Test file\",\"permalink\":null,\"createTime\":\"2026/04/19 19:24:23\"}}")
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
