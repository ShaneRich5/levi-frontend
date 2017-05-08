import * as types from './mutation-types';

export const createExpense = ({ commit }, payload) => {
  commit(types.CREATE_EXPENSE, payload);
};

export const updateExpense = ({ commit }, payload) => {
  const { name, cost } = payload;
  if (name === '' || isNaN(cost)) {
    return;
  }
  commit(types.UPDATE_EXPENSE, payload);
};

export const updateMonthlyField = ({ commit }, payload) => {
  const { value } = payload;

  if (value < 0) {
    return;
  }

  commit(types.UPDATE_MONTHLY_FIELD, payload);
  commit(types.CALCULATE_MONTHLY_TOTAL_RAISED, payload);
};

export const switchThread = ({ commit }, payload) => {
  commit(types.UPDATE_MONTHLY_FIELD, payload);
};
