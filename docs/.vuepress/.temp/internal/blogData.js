export const blogPostData = [{"path":"/test/qqwb8ttc/","title":"test2","categoryList":[{"id":"098f6b","sort":10003,"name":"test"}],"createTime":"2026/04/19 15:23:58","lang":"zh-CN","excerpt":""},{"path":"/test/xwq5ztqp/","title":"test1","categoryList":[{"id":"098f6b","sort":10003,"name":"test"}],"createTime":"2026/04/19 15:23:47","lang":"zh-CN","excerpt":""},{"path":"/article/1q6kx0uq/","title":"数学符号太N啦！","categoryList":[{"id":"92a2b5","sort":10000,"name":"article"}],"createTime":"2026/04/19 02:05:33","lang":"zh-CN","excerpt":""},{"path":"/article/rux1492o/","title":"计算一维随机行走位置的高次均值","categoryList":[{"id":"92a2b5","sort":10000,"name":"article"}],"createTime":"2026/04/18 23:41:51","lang":"zh-CN","excerpt":""},{"path":"/blog/sytc5r6b/","title":"记2026抖音创变者大赛","categoryList":[{"id":"126ac9","sort":10001,"name":"blog"}],"tags":["diary"],"createTime":"2026/04/18 22:54:30","lang":"zh-CN","excerpt":""},{"path":"/blog/algorithm/","title":"VocabShoot 核心算法","categoryList":[{"id":"126ac9","sort":10001,"name":"blog"}],"createTime":"2026/03/29 14:51:33","lang":"zh-CN","excerpt":""},{"path":"/blog/download/","title":"VocabShoot下载","categoryList":[{"id":"126ac9","sort":10001,"name":"blog"}],"createTime":"2026/03/28 19:05:30","lang":"zh-CN","excerpt":""}]

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
