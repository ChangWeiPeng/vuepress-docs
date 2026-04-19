import comp from "C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/blog/原子化笔记的写作经验.html.vue"
const data = JSON.parse("{\"path\":\"/blog/%E5%8E%9F%E5%AD%90%E5%8C%96%E7%AC%94%E8%AE%B0%E7%9A%84%E5%86%99%E4%BD%9C%E7%BB%8F%E9%AA%8C.html\",\"title\":\"Atom writing(test)\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Atom writing(test)\",\"permalink\":null,\"createTime\":\"2026/04/19 19:31:05\"}}")
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
