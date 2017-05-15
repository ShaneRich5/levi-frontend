import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  districts: [],
  churches: [],
  churchReports: [],
  districtReports: [],
  sources: [],
  expenses: [],
};

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: debug,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : [],
});

export default store;
