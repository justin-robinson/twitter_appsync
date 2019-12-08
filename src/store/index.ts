import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      user: null
  },
  mutations: {
      setUser(state, user) {
          state.user = user;
      }
  },
  getters: {
      isLoggedIn(state) {
          return state.user !== null
      },
      firstName(state) {
          return state.user.attributes ? state.user.attributes.given_name : '';
      }
  },
  actions: {},
  modules: {}
});
