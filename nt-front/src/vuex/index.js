import Vuex from 'vuex';
import Vue from 'vue';
import VuexPersist from 'vuex-persist';
Vue.use(Vuex);

let vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

let actions = {
  clearAuth({commit}){
    commit('logout')
  }
};
let mutations = {
  user(state, payload) {
    state.user = payload;
  },
  logout(state, payload) {
    state.user = null;
  }
};
let getters = {
  user: state => state.user
};

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  actions,
  mutations,
  getters,
  state: {
    user: {}
  },
  modules: {

  },
  strict: true,
});