import Vue from 'vue'
import Router from 'vue-router'
import LarkLayout from '@/layout/LarkLayout'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: LarkLayout
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    }
  ]
})
