import { createRouter, createWebHistory } from "vue-router"

const routers = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    component: () => import('@/views/home/index'),
  },
  {
    path: '/page1',
    component: () => import('@/views/page/page1')
  },
  {
    path: '/page2',
    component: () => import('@/views/page/page2')
  },
  {
    path: '/page3',
    component: () => import('@/views/page/page3')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers
})

export default router;