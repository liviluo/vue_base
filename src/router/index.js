import { createRouter, createWebHistory } from "vue-router"

const routers = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    component: () => import('@/views/home/index'),
  },


  {
    path: '/about',
    component: () => import('@/views/about/index'),
    children: [

      {
        path: '/user',
        component: () => import('@/views/about/user/index'),
        children: [
          {
            path: "/name",
            component: () => import('@/views/about/user/children/name'),
          },
          {
            path: "/age",
            component: () => import('@/views/about/user/children/age'),
          }
        ]
      },

      {
        path: '/admin',
        component: () => import('@/views/about/admin/index'),
        children: [
          {
            path: "/auth",
            component: () => import('@/views/about/admin/children/auth'),
          },
          {
            path: "/create",
            component: () => import('@/views/about/admin/children/create'),
          }
        ]
      }

    ]
  },


  {
    path: '/page',
    component: () => import('@/views/page/index'),
    children: [
      {
        path: "/1",
        component: () => import('@/views/page/children/page1'),
      },
      {
        path: "/2",
        component: () => import('@/views/page/children/page2'),
      },
      {
        path: "/3",
        component: () => import('@/views/page/children/page3'),
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes: routers
})

export default router;