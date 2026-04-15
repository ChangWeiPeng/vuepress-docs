import comp from "C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"config\":[{\"type\":\"profile\",\"name\":\"Physicscw\",\"description\":\"A student majoring in Physics at Wuhan University (graduating in 2028).Click Blog to explore this website!\",\"avatar\":\"/icon.jpg\"}],\"pageLayout\":\"home\"},\"readingTime\":{\"minutes\":0.09,\"words\":27},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[],\"categoryList\":[]}")
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
