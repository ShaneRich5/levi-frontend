import * as types from '../../mutation-types';

/* eslint-disable no-param-reassign */
/* eslint-disable space-before-function-paren */
export default {
  [types.CLEAR_ALL_REPORTS] (state) {
    state.journals = [];
    state.districtReports = [];
    state.churchReports = [];
  },
  [types.JOURNALS_LOADED] (state, journals) {
    state.journals = [...journals];
  },
  [types.JOURNAL_LOADED] (state, journal) {
    state.journals = [...state.journals, Object.assign({}, journal)];
  },
  [types.DISTRICT_REPORTS_LOADED] (state, districtReports) {
    state.districtReports = [...districtReports];
  },
  [types.DISTRICT_REPORT_LOADED] (state, districtReport) {
    state.districtReports = [...state.districtReports, Object.assign({}, districtReport)];
  },
  [types.CHURCH_REPORTS_LOADED] (state, churchReports) {
    state.churchReports = [...churchReports];
  },
  [types.CHURCH_REPORT_LOADED] (state, churchReport) {
    state.churchReports = [...state.churchReports, Object.assign({}, churchReport)];
  },
  // [types.DISTRICT_REPORT_OPENING_FUND_UPDATED] (state, { id, amount }) {
  //   const index = state.districtReports.findIndex(report => +report.id === +id);
  //   if (index === -1) return;
  //   const report = Object.assign({}, state.districtReports[index], { opening_fund: amount });
  //   state.districtReports = [...state.districtReports.split(0, index),
  //     report,
  //     ...state.districtReports.split(index + 1)];
  // },
  // [types.CHURCH_REPORT_UPDATED] (state, churchReport) {
  //   const index = state.churchReports.findIndex(report => report.id === +churchReport.id);
  //   if (index === -1) return;
  //   state.churchReports = [...state.churchReports.slice(0, index),
  //     churchReport,
  //     ...state.churchReports.slice(index + 1)];
  // },
};
