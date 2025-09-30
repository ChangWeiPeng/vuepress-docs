export const blogPostData = [{"path":"/article/xob5qevk/","title":"Markdown Guide","categoryList":[{"id":"5ebeb6","sort":10001,"name":"preview"}],"createTime":"2025/09/30 14:03:28","lang":"zh-CN","excerpt":""},{"path":"/article/96et46ru/","title":"Sample Article","categoryList":[{"id":"5ebeb6","sort":10001,"name":"preview"}],"createTime":"2025/09/30 14:03:28","lang":"zh-CN","excerpt":""},{"path":"/article/9mvvnwka/","title":"记2025数模","categoryList":[{"id":"5ebeb6","sort":10001,"name":"preview"}],"tags":["Essays"],"createTime":"2025/09/29 23:06:18","lang":"zh-CN","excerpt":""}]

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
