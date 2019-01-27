import Vue from "vue";
import Vuex from "vuex";

// 引入模块
import app from "./modules/app";
import user from "./modules/user";
import chat from "./chat";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    user,
    chat
  }
});
