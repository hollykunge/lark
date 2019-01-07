import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入layout
import LarkLayout from '@/layout/LarkLayout'
import Update from '@/components/Update'

// 引入模块
import chat from './modules/chat.js'
import dashboard from './modules/dashboard.js'
import data from './modules/data.js'
import knowledge from './modules/knowledge.js'
import task from './modules/task.js'
import tool from './modules/tool.js'

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

export const routerMap = [
  {
    path: '/',
    name: 'layout',
    component: LarkLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/view/dashboard/index'),
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
  }
]

const router = new Router({
  routes: routerMap,
  mode: 'history'
})

// router.beforeEach((to, from, next) => {})
// router.afterEach((to, from, next) => {})

export default router
