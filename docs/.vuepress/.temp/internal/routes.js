export const redirects = JSON.parse("{\"/blog/A%20Look%20Back%20at%20the%202026%20Douyin%20Innovators%20Competition.html\":\"/blog/2026/04/18/A_Look_Back_at_the_2026_Douyin_Innovators_Competition/\",\"/blog/Computing%20Higher-Order%20Moments%20of%20a%201D%20Random%20Walk%20Position.html\":\"/blog/2026/04/18/Computing_Higher-Order_Moments_of_a_1D_Random_Walk_Position/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {} }],
  ["/blog/2026/04/18/A_Look_Back_at_the_2026_Douyin_Innovators_Competition/", { loader: () => import(/* webpackChunkName: "blog_2026_04_18_A_Look_Back_at_the_2026_Douyin_Innovators_Competition_index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/blog/2026/04/18/A_Look_Back_at_the_2026_Douyin_Innovators_Competition/index.html.js"), meta: {} }],
  ["/blog/2026/04/18/Computing_Higher-Order_Moments_of_a_1D_Random_Walk_Position/", { loader: () => import(/* webpackChunkName: "blog_2026_04_18_Computing_Higher-Order_Moments_of_a_1D_Random_Walk_Position_index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/blog/2026/04/18/Computing_Higher-Order_Moments_of_a_1D_Random_Walk_Position/index.html.js"), meta: {} }],
  ["/archives/", { loader: () => import(/* webpackChunkName: "archives_index.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/archives/index.html.js"), meta: {} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {} }],
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
