import * as types from '../../mutation-types';

/* eslint-disable no-param-reassign */
/* eslint-disable space-before-function-paren */
export default {
  [types.SOURCE_CREATED] (state, source) {
    state.sources = [...state.sources, source];
  },
  [types.EXPENSE_CREATED] (state, expense) {
    state.expenses = [...state.expenses, expense];
  },
  [types.SOURCES_LOADED] (state, sources) {
    state.sources = [...sources];
  },
  [types.EXPENSES_LOADED] (state, expenses) {
    state.expenses = [...expenses];
  },
  [types.SOURCE_LOADED] (state, source) {
    state.sources = state.sources.concat(source);
  },
  [types.EXPENSE_LOADED] (state, expense) {
    state.expenses = state.expenses.concat(expense);
  },
  [types.SOURCES_CLEARED] (state) {
    state.sources = [];
  },
  [types.EXPENSES_CLEARED] (state) {
    state.expenses = [];
  },
  [types.SOURCE_UPDATED] (state, updatedSource) {
    const index = state.sources.findIndex(source => +source.id === +updatedSource.id);
    if (index === -1) return;
    state.sources = [
      ...state.sources.slice(0, index),
      updatedSource,
      ...state.sources.slice(index + 1)];
  },
  [types.EXPENSE_UPDATED] (state, updatedExpense) {
    const index = state.expenses.findIndex(expense => +expense.id === +updatedExpense.id);
    if (index === -1) return;
    state.expenses = [
      ...state.expenses.slice(0, index),
      updatedExpense,
      ...state.expenses.slice(index + 1)];
  },
};
