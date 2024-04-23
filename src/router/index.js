import { createRouter, createWebHistory } from 'vue-router'

// LAYOUTS
import Layout1 from '../layouts/Layout1.vue'
import Layout2 from '../layouts/Layout2.vue'

// VIEW PAGES
import HomeView from '../views/HomeView.vue'
import BoardView from '../views/BoardView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: Layout1,
    },
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: Layout1,
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path:'/board/:id',
    name:'board',
    meta: {
      layout: Layout1
    },
    component: BoardView,
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      layout: Layout2
    },
    component: NotFound 
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
