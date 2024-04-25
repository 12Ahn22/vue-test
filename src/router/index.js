import { createRouter, createWebHistory } from "vue-router"

// LAYOUTS
import Layout1 from "../layouts/Layout1.vue"
import Layout2 from "../layouts/Layout2.vue"

// VIEW PAGES
import HomeView from "../views/HomeView.vue"
import BoardView from "../views/BoardView.vue"
import AboutView from "../views/AboutView.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      layout: Layout1,
    },
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    meta: {
      layout: Layout1,
      requiresAuth: true,
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  {
    path: "/board/:id",
    name: "board",
    meta: {
      layout: Layout1,
      requiresAuth: true,
    },
    component: BoardView,
  },
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    meta: {
      layout: Layout2,
    },
    component: NotFound,
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   meta: {
  //     layout: Layout2,
  //   },
  //   component: NotFound,
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// ROUTER GUARD
// 다른 파일로 빼면 왜 작동 안하지?
router.beforeEach((to, from) => {
  console.log(`router: from: ${from.path} ==> to: ${to.path}`)

  // 로그인 정보 여부를 확인해서 막을 수 있다.
  if (to.meta.requiresAuth) { // 권한이 필요하다면
    // 여기서 로그인 권한이 존재하는 지 확인하고, 처리해준다.
    alert("로그인이 필요한 페이지")
    // return { path: "/"}
  }
})

export default router
