import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from './plugins/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  state: {
    districts: {
      1: { name: 'DistrictA', churches: [1, 3] },
      2: { name: 'DistrictB', churches: [2] },
    },
    churches: {
      1: { name: 'ChurchA', 'national-office': 20, 'district-yced': 30, 'district-fund': 15, total: 100, district: 1 },
      2: { name: 'ChurchB', 'national-office': 20, 'district-yced': 30, 'district-fund': 15, total: 100, district: 2 },
      3: { name: 'ChurchC', 'national-office': 20, 'district-yced': 30, 'district-fund': 15, total: 100, district: 1 },
    },
  },
  getters: {
    getDistrictById: state => id => state.districts[id],
    getChurchById: state => id => state.churches[id],
  },
  mutations: {
  },
  strict: debug,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : [],
});

export default store;
