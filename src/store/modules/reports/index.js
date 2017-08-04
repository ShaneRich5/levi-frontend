import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

const state = {
  journals: [],
  districtReports: [],
  churchReports: [],
};

const module = {
  state,
  getters,
  actions,
  mutations,
};

export default module;
