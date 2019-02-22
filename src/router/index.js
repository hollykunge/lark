import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

// 引入layout
import LarkLayout from '@/layout/LarkLayout'
import Update from '@/components/Update'

import {
  setToken,
  getToken,
  canTurnTo
} from '@/utils/libs/util'
import config from '@/conf/cookie'

/**
 * 路由配置项说明
 * declare type RouteConfig = {
  path: string;
  component?: Component;
  name?: string; // 命名路由
  components?: { [name: string]: Component }; // 命名视图组件
  redirect?: string | Location | Function;
  props?: boolean | string | Function;
  alias?: string | Array<string>;
  children?: Array<RouteConfig>; // 嵌套路由
  beforeEnter?: (to: Route, from: Route, next: Function) => void;
  meta?: any; // 可以加一些附加的属性

  // vue-router 2.6.0+
  caseSensitive?: boolean; // 匹配规则是否大小写敏感？(默认值：false)
  pathToRegexpOptions?: Object; // 编译正则的选项
}
 */
const {
  homeName
} = config

export const routerMap = [{
  path: '/index',
  name: '_home',
  component: LarkLayout,
  children: [{
    path: '/home',
    name: 'home',
    component: () => import('@/view/dashboard/index')
    // children: dashboard
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/view/chat/index'),
    children: [
      {
        path: '/chatBox',
        name: 'chatBox',
        component: () => import('@/view/chat/ChatBox')
      }
    ]
  },
  {
    path: '/task',
    name: 'task',
    redirect: { name: 'projects' },
    component: () => import('@/view/task/index'),
    children: [
      {
        path: '/task/task/:projectId',
        name: 'project',
        component: () => import('@/view/task/task/index')
      },
      {
        path: '/task/projects',
        name: 'projects',
        component: () => import('@/view/task/project/index')
      }
    ]
  },
  {
    path: '/data',
    name: 'data',
    component: () => import('@/view/data/index')
      // children: data
  },
  {
    path: '/tool',
    name: 'tool',
    component: () => import('@/view/tool/index')
      // children: tool
  },
  {
    path: '/knowledge',
    name: 'knowledge',
    component: () => import('@/view/knowledge/index')
      // children: knowledge
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/view/search/index')
      // children: search
  },
  {
    path: '/401',
    name: 'error_401',
    component: () => import('@/view/error/page_401')
  }
  ]
},
{
  path: '/update',
  name: 'update',
  component: Update
},
{
  path: '/',
  name: 'login',
  component: () => import('@/view/login')
}
  // ,
  // {
  //   path: '/500',
  //   name: 'error_500',
  //   component: () => import('@/view/error/500')
  // },
  // {
  //   path: '*',
  //   name: 'error_404',
  //   component: () => import('@/view/error/404')
  // }
]

const router = new Router({
  routes: routerMap
  // mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'
const turnTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routerMap)) {
    console.log(to.name + access + '有权限，可访问')
    next()
  } else {
    next({
      replace: true,
      name: 'error_401'
    })
  } // 无权限，重定向到401页面
}
router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start()
  const token = getToken()
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: homeName // 跳转到homeName页
    })
  } else {
    if (store.state.user.hasGetInfo) {
      console.log('有userinfo')
      turnTo(to, store.state.user.access, next)
    } else {
      console.log('没有userinfo')
      store.dispatch('getUserInfo').then(user => {
        // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
        turnTo(to, user.access, next)
      }).catch(() => {
        setToken('')
        next({
          name: 'login'
        })
      })
    }
  }
})
export default router
