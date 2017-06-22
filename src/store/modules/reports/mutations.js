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
  [types.DISTRICT_REPORTS_LOADED] (state, districtReports) {
    state.districtReports = [...districtReports];
  },
  [types.DISTRICT_REPORT_LOADED] (state, districtReport) {
    state.districtReports = [Object.assign({}, districtReport)];
  },
  [types.DISTRICT_REPORT_OPENING_FUND_UPDATED] (state, { id, amount }) {
    const index = state.districtReports.findIndex(report => +report.id === +id);
    if (index === -1) return;
    const report = Object.assign({}, state.districtReports[index], { opening_fund: amount });
    state.districtReports = [...state.districtReports.split(0, index),
      report,
      ...state.districtReports.split(index + 1)];
  },
  [types.SOURCES_LOADED] (state, sources) {
    state.sources = [...sources];
  },
  [types.EXPENSES_LOADED] (state, expenses) {
    state.expenses = [...expenses];
  },
  [types.EXPENSE_ADDED] (state, expense) {
    state.expenses = state.expenses.concat(expense);
  },
  [types.SOURCE_NAME_UPDATED] (state, source) {
    const index = state.sources.findIndex(s => s.id === +source.id);
    if (index === -1) return;
    state.sources = [...state.sources.split(0, index), source, ...state.sources.split(index + 1)];
  },
  [types.SOURCE_AMOUNT_UPDATED] (state, source) {
    const index = state.sources.findIndex(s => s.id === +source.id);
    if (index === -1) return;
    state.sources = [...state.sources.slice(0, index),
      source,
      ...state.sources.slice(index + 1)];
  },
  [types.SOURCE_UPDATED] (state, source) {
    const index = state.sources.findIndex(s => s.id === +source.id);
    if (index === -1) return;
    state.sources = [...state.sources.slice(0, index),
      source,
      ...state.sources.slice(index + 1)];
  },
  [types.EXPENSE_UPDATED] (state, expense) {
    const index = state.expenses.findIndex(s => s.id === +expense.id);
    if (index === -1) return;
    state.expenses = [...state.expenses.slice(0, index),
      expense,
      ...state.expenses.slice(index + 1)];
  },
  [types.CHURCH_REPORT_UPDATED] (state, churchReport) {
    const index = state.churchReports.findIndex(report => report.id === +churchReport.id);
    if (index === -1) return;
    state.churchReports = [...state.churchReports.slice(0, index),
      churchReport,
      ...state.churchReports.slice(index + 1)];
  },
};
