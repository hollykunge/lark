// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import iView from "iview";
import "iview/dist/styles/iview.css";
import { library } from "@fortawesome/fontawesome-svg-core";
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
  faTimes,
  faCog,
  faBook,
  faUserGraduate,
  faBookOpen,
  faBookReader

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;
Vue.use(iView);
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
  faTimes,
  faCog,
  faBook,
  faUserGraduate,
  faBookOpen,
  faBookReader
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
// fontawesome.library.add(solid)
// Vue.component('font-awesome-icon', FontAwesomeIcon)
// for auto update
import { checkUpdate } from "@/utils/update.js";
checkUpdate();

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
