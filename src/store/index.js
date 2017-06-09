import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';
import auth from './modules/auth';
import status from './modules/status';
import reports from './modules/reports';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  nationalOffices: [],
  districtOffices: [],
  churches: [],
  journals: [],
  districtReports: [],
  churchReports: [],
  sources: [],
  expenses: [],
  districts: [],
};

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: debug,
  modules: {
    auth,
    status,
    reports,
  },
});

export default store;
