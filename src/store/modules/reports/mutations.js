import * as types from '../../mutation-types';

/* eslint-disable no-param-reassign */
/* eslint-disable space-before-function-paren */
export default {
  [types.CHURCH_REPORTS_LOADED] (state, churchReports) {
    state.churchReports = [...churchReports];
  },
  [types.CHURCH_REPORT_LOADED] (state, churchReport) {
    state.churchReports = [Object.assign({}, churchReport)];
  },
  [types.SOURCES_LOADED] (state, sources) {
    state.sources = [...sources];
  },
};
