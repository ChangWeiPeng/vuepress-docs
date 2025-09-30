export const redirects = JSON.parse("{\"/preview/article.html\":\"/article/96et46ru/\",\"/preview/markdown.html\":\"/article/xob5qevk/\",\"/preview/%E8%AE%B02025%E6%95%B0%E6%A8%A1.html\":\"/article/9mvvnwka/\",\"/notes/bar.html\":\"/article/8shysvx2/\",\"/notes/foo.html\":\"/article/v5d02apz/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/archives/", { loader: () => import(/* webpackChunkName: "archives_index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/archives/index.html.js"), meta: {"title":"Archives"} }],
  ["/article/96et46ru/", { loader: () => import(/* webpackChunkName: "article_96et46ru_index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/article/96et46ru/index.html.js"), meta: {"title":"Sample Article"} }],
  ["/article/xob5qevk/", { loader: () => import(/* webpackChunkName: "article_xob5qevk_index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/article/xob5qevk/index.html.js"), meta: {"title":"Markdown Guide"} }],
  ["/article/9mvvnwka/", { loader: () => import(/* webpackChunkName: "article_9mvvnwka_index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/article/9mvvnwka/index.html.js"), meta: {"title":"记2025数模"} }],
  ["/article/8shysvx2/", { loader: () => import(/* webpackChunkName: "article_8shysvx2_index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/article/8shysvx2/index.html.js"), meta: {"title":"Bar Note"} }],
  ["/article/v5d02apz/", { loader: () => import(/* webpackChunkName: "article_v5d02apz_index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/article/v5d02apz/index.html.js"), meta: {"title":"Foo Note"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
