import * as types from '../../mutation-types';

/* eslint-disable no-param-reassign */
/* eslint-disable space-before-function-paren */
export default {
  [types.NATIONAL_OFFICES_LOADED] (state, churches) {
    state.nationalOffices = churches;
  },
  [types.DISTRICT_OFFICES_LOADED] (state, churches) {
    state.districtOffices = churches;
  },
  [types.CHURCHES_LOADED] (state, churches) {
    state.churches = churches;
  },
};
