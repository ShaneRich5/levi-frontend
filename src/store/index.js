import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import status from './modules/status';
import reports from './modules/reports';
import organizations from './modules/organizations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  // nationalOffices: [],
  // districtOffices: [],
  // churches: [],
  // journals: [],
  // districtReports: [],
  // churchReports: [],
  // sources: [],
  // expenses: [],
  // districts: [],
};

const store = new Vuex.Store({
  state,
  strict: debug,
  modules: {
    auth,
    status,
    reports,
    organizations,
  },
});

export default store;
