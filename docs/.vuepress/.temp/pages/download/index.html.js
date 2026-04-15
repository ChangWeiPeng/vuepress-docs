import comp from "C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/download/index.html.vue"
const data = JSON.parse("{\"path\":\"/download/\",\"title\":\"应用下载\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"应用下载\",\"permalink\":\"/download/\",\"createTime\":\"2026/03/28 19:05:30\"},\"readingTime\":{\"minutes\":0.85,\"words\":256},\"git\":{},\"filePathRelative\":\"blog/download.md\",\"headers\":[],\"categoryList\":[{\"id\":\"126ac9\",\"sort\":10002,\"name\":\"blog\"}]}")
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
