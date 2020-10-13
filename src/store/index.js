import Vue from 'vue';
import Vuex from 'vuex';
import branches from './modules/branches';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    branches,
  },
});

console.log(store.state.branches);

export default store;
