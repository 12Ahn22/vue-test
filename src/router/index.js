import { createRouter, createWebHistory } from 'vue-router'

// VIEW PAGES
import HomeView from '../views/HomeView.vue'
import BoardView from '../views/BoardView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path:'/board/:id',
    name:'board',
    component: BoardView,
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound 
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
