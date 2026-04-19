export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Physicscw\",\"description\":\"Updates on my research, notes, and other topics. By Physicscw.\",\"head\":[[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.googleapis.com\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.gstatic.com\",\"crossorigin\":\"anonymous\"}],[\"link\",{\"href\":\"https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&display=swap\",\"rel\":\"stylesheet\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
