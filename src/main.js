// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// import 'iview/dist/styles/iview.css'
// import './plugins/iview.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCoffee,
  faDove,
  faComment,
  faTasks,
  faTable,
  faToolbox,
  faSearch,
  faBell,
  faSyncAlt,
  faWindowMaximize,
  faWindowMinimize,
  faWindowClose,
  faTimes,
  faCog,
  faBook,
  faUserGraduate,
  faBookOpen,
  faBookReader,
  faThumbtack,
  faBong
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueFriendlyIframe from 'vue-friendly-iframe'

Vue.config.productionTip = false

library.add(
  faCoffee,
  faDove,
  faComment,
  faTasks,
  faTable,
  faToolbox,
  faSearch,
  faBell,
  faSyncAlt,
  faWindowMaximize,
  faWindowMinimize,
  faWindowClose,
  faTimes,
  faCog,
  faBook,
  faUserGraduate,
  faBookOpen,
  faBookReader,
  faThumbtack,
  faBong
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-friendly-iframe', VueFriendlyIframe)
Vue.config.productionTip = false
// fontawesome.library.add(solid)
// Vue.component('font-awesome-icon', FontAwesomeIcon)
// for auto update
import { checkUpdate } from '@/utils/update.js'
checkUpdate()
Vue.use(Antd)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
