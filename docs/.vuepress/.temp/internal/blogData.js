export const blogPostData = [{"path":"/blog/algorithm/","title":"VocabShoot 核心算法","categoryList":[{"id":"126ac9","sort":10000,"name":"blog"}],"createTime":"2026/03/29 14:51:33","lang":"zh-CN","excerpt":""},{"path":"/blog/download/","title":"VocabShoot下载","categoryList":[{"id":"126ac9","sort":10000,"name":"blog"}],"createTime":"2026/03/28 19:05:30","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
