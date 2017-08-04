import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import reports from './modules/reports';
import indicators from './modules/indicators';
import organizations from './modules/organizations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {};

const store = new Vuex.Store({
  state,
  strict: debug,
  modules: {
    auth,
    reports,
    indicators,
    organizations,
  },
});

export default store;
