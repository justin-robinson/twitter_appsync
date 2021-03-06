import Vue from "vue";
import Vuex from "vuex";
import { get } from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      user: null,
      isLoggedIn: false
  },
  mutations: {
      setUser(state, user) {
          state.user = user;
          state.isLoggedIn = !!user;
      }
  },
  getters: {
      isLoggedIn(state): boolean {
        return state.isLoggedIn;
      },
      firstName(state): string {
        return get(state, 'user.attributes.given_name');
      },
      userId(state): string {
        return get(state, 'user.attributes.sub');
      }
  },
  actions: {},
  modules: {}
});
