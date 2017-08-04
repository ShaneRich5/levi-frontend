import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

const state = {
  sources: [],
  expenses: [],
};

const module = {
  state,
  getters,
  actions,
  mutations,
};

export default module;
