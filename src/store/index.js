import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  state: {
    churches: [],
  },
  mutations: {
  },
  strict: debug,
});

export default store;
