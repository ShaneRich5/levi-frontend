import * as types from '../../mutation-types';

/* eslint-disable no-param-reassign */
/* eslint-disable space-before-function-paren */
export default {
  [types.NATIONAL_OFFICES_LOADED] (state, nationalOffices) {
    state.nationalOffices = [...nationalOffices];
  },
  [types.DISTRICT_OFFICES_LOADED] (state, districtOffices) {
    state.districtOffices = [...districtOffices];
  },
  [types.CHURCHES_LOADED] (state, churches) {
    state.churches = [...churches];
  },
  [types.NATIONAL_OFFICE_LOADED] (state, nationalOffice) {
    state.nationalOffices = [nationalOffice];
  },
  [types.DISTRICT_OFFICE_LOADED] (state, districtOffice) {
    state.districtOffices = [districtOffice];
  },
  [types.CHURCH_LOADED] (state, church) {
    state.churches = [church];
  },
};
