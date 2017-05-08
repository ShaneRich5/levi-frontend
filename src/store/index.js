import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  districts: {
    1: { id: 1, name: 'DistrictA', churches: [1, 3] },
    2: { id: 1, name: 'DistrictB', churches: [2] },
  },
  churches: {
    1: { id: 1, name: 'ChurchA', dispursements: { 'island-office': 0.1, 'district-office': 0.1, departments: 0.1, minister: 0.1 }, district: 1, monthly: 1 },
    2: { id: 2, name: 'ChurchB', dispursements: { 'island-office': 0.1, 'district-office': 0.1, departments: 0.1, minister: 0.1 }, district: 2, monthly: 2 },
    3: { id: 3, name: 'ChurchC', dispursements: { 'island-office': 0.1, 'district-office': 0.1, departments: 0.1, minister: 0.1 }, district: 1, monthly: 3 },
    4: { id: 4, name: 'ChurchD', dispursements: { 'island-office': 0.1, 'district-office': 0.1, departments: 0.1, minister: 0.1 }, district: 1, monthly: 4 },
  },
  monthly: {
    1: { id: 1, church: 1, balance: 0, raised: { tithes: 0, 'sunday-school': 0, fth: 0, 'youth-fellowship': 0, 'women-ministry': 0, offering: 0, rally: 0, missions: 0, loans: 0, rent: 0, other: 0, 'pension-church': 0, 'pension-minister': 0, total: 0 } },
    2: { id: 2, church: 2, balance: 0, raised: { tithes: 0, 'sunday-school': 0, fth: 0, 'youth-fellowship': 0, 'women-ministry': 0, offering: 0, rally: 0, missions: 0, loans: 0, rent: 0, other: 0, 'pension-church': 0, 'pension-minister': 0, total: 0 } },
    3: { id: 3, church: 3, balance: 0, raised: { tithes: 0, 'sunday-school': 0, fth: 0, 'youth-fellowship': 0, 'women-ministry': 0, offering: 0, rally: 0, missions: 0, loans: 0, rent: 0, other: 0, 'pension-church': 0, 'pension-minister': 0, total: 0 } },
    4: { id: 4, church: 4, balance: 0, raised: { tithes: 0, 'sunday-school': 0, fth: 0, 'youth-fellowship': 0, 'women-ministry': 0, offering: 0, rally: 0, missions: 0, loans: 0, rent: 0, other: 0, 'pension-church': 0, 'pension-minister': 0, total: 0 } },
  },
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
