import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 引入模块
import app from "./modules/app";
import user from "./modules/user";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    user
  }
});
