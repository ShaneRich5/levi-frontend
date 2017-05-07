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
    1: { name: 'DistrictA', churches: [1, 3] },
    2: { name: 'DistrictB', churches: [2] },
  },
  churches: {
    1: { name: 'ChurchA', 'national-office': 20, 'district-yced': 30, 'district-fund': 15, total: 100, district: 1 },
    2: { name: 'ChurchB', 'national-office': 20, 'district-yced': 30, 'district-fund': 15, total: 100, district: 2 },
    3: { name: 'ChurchC', 'national-office': 20, 'district-yced': 30, 'district-fund': 15, total: 100, district: 1 },
  },
  monthly: {
    1: { church: 1, balance: 0, raised: { tithes: 0, 'sunday-school': 0, fth: 0, 'youth-fellowship': 0, 'women-ministry': 0, offering: 0, rally: 0, missions: 0, loans: 0, rent: 0, other: 0, 'pension-church': 0, 'pension-minister': 0, total: 0 } },
    2: { church: 2, balance: 0, raised: { tithes: 0, 'sunday-school': 0, fth: 0, 'youth-fellowship': 0, 'women-ministry': 0, offering: 0, rally: 0, missions: 0, loans: 0, rent: 0, other: 0, 'pension-church': 0, 'pension-minister': 0, total: 0 } },
    3: { church: 3, balance: 0, raised: { tithes: 0, 'sunday-school': 0, fth: 0, 'youth-fellowship': 0, 'women-ministry': 0, offering: 0, rally: 0, missions: 0, loans: 0, rent: 0, other: 0, 'pension-church': 0, 'pension-minister': 0, total: 0 } },
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
