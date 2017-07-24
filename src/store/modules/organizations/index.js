import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

const state = {
  organizations: [],
  churches: [],
  districtOffices: [],
  nationalOffices: [],
};

const module = {
  state,
  mutations,
  getters,
  actions,
};

export default module;
