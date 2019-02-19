// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './plugins/iview.js'
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
Vue.config.productionTip = false
// fontawesome.library.add(solid)
// Vue.component('font-awesome-icon', FontAwesomeIcon)
// for auto update
import { checkUpdate } from '@/utils/update.js'
checkUpdate()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
