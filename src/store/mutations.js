import * as types from './mutation-types';

const calculateMonthlyTotalRaised = (fields) => {
  const values = Object.values(fields).map(value => parseFloat(value));
  return values.reduce((valueA, valueB) => valueA + valueB);
};

/* eslint-disable no-param-reassign */
/* eslint-disable space-before-function-paren */
export default {
  [types.UPDATE_MONTHLY_FIELD] (state, { id, field, value }) {
    state.monthly[id].raised = { ...state.monthly[id].raised, [field]: value };
  },
  [types.CALCULATE_MONTHLY_TOTAL_RAISED] (state, { id }) {
    const fields = state.monthly[id].raised;
    const total = calculateMonthlyTotalRaised({ ...fields, total: 0 });
    state.monthly[id].raised = { ...state.monthly[id].raised, total };
  },
};
