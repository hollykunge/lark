import Vue from "vue";
import Router from "vue-router";
import iView from 'iview'
Vue.use(Router);

// 引入layout
import LarkLayout from '@/layout/LarkLayout'
import Update from '@/components/Update'

// 引入模块
import chat from "./modules/chat.js";
import dashboard from "./modules/dashboard.js";
import data from "./modules/data.js";
import knowledge from "./modules/knowledge.js";
import task from "./modules/task.js";
import tool from "./modules/tool.js";
import search from "./modules/search.js";
import {
  setToken,
  getToken
} from '@/utils/libs/util'
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

export const routerMap = [{
    path: "/index",
    name: "landing-page",
    component: LarkLayout,
    children: [{
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/view/dashboard/index"),
        children: dashboard
      },
      {
        path: '/chat',
        name: 'chat',
        component: () => import('@/view/chat/index'),
        children: chat
      },
      {
        path: '/task',
        name: 'task',
        component: () => import('@/view/task/index'),
        children: task
      },
      {
        path: '/data',
        name: 'data',
        component: () => import('@/view/data/index'),
        children: data
      },
      {
        path: '/tool',
        name: 'tool',
        component: () => import('@/view/tool/index'),
        children: tool
      },
      {
        path: '/knowledge',
        name: 'knowledge',
        component: () => import('@/view/knowledge/index'),
        children: knowledge
      }
    ]
  },
  {
    path: '/update',
    name: 'update',
    component: Update
  },
  {
    path: "/",
    name: "login",
    component: () => import("@/view/login")
  }
]

const router = new Router({
  routes: routerMap
  // mode: 'history'
});
const LOGIN_PAGE_NAME = 'login'
// router.beforeEach((to, from, next) => {});
// router.afterEach((to, from, next) => {});
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
      turnTo(to, store.state.user.access, next)
    } else {
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
export default router;
