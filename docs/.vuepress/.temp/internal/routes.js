export const redirects = JSON.parse("{\"/blog/A%20Look%20Back%20at%20the%202026%20Douyin%20Innovators%20Competition.html\":\"/blog/2026/04/18/A_Look_Back_at_the_2026_Douyin_Innovators_Competition/\",\"/blog/Computing%20Higher-Order%20Moments%20of%20a%201D%20Random%20Walk%20Position.html\":\"/blog/2026/04/18/Computing_Higher-Order_Moments_of_a_1D_Random_Walk_Position/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/29657/vuepress-starter/docs/README.md"), meta: {} }],
  ["/archives/", { loader: () => import(/* webpackChunkName: "archives_index.html" */"C:/Users/29657/vuepress-starter/docs/archives/index.md"), meta: {} }],
  ["/blog/2026/04/18/A_Look_Back_at_the_2026_Douyin_Innovators_Competition/", { loader: () => import(/* webpackChunkName: "blog_2026_04_18_A_Look_Back_at_the_2026_Douyin_Innovators_Competition_index.html" */"C:/Users/29657/vuepress-starter/docs/blog/A Look Back at the 2026 Douyin Innovators Competition.md"), meta: {} }],
  ["/blog/2026/04/18/Computing_Higher-Order_Moments_of_a_1D_Random_Walk_Position/", { loader: () => import(/* webpackChunkName: "blog_2026_04_18_Computing_Higher-Order_Moments_of_a_1D_Random_Walk_Position_index.html" */"C:/Users/29657/vuepress-starter/docs/blog/Computing Higher-Order Moments of a 1D Random Walk Position.md"), meta: {} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/29657/vuepress-starter/docs/.vuepress/.temp/pages/404.html.vue"), meta: {} }],
]);
