# router demo

## 简介
嵌套路由

## 说明
- 一级路由
```
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    component: () => import('@/views/home/index'),
  },
```

- 二级路由
```
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
```

- 三级路由
```
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
```

## 跳转
```
<router-link to="page/1">page 1</router-link>
<router-link to="page/2">page 2</router-link>
<router-link to="page/3">page 3</router-link>
<router-view />
```

