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
};
