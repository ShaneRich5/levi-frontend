import * as types from './mutation-types';

const calculateMonthlyTotalRaised = (fields) => {
  const values = Object.values(fields).map(value => parseFloat(value));
  return values.reduce((valueA, valueB) => valueA + valueB);
};

/* eslint-disable no-param-reassign */
/* eslint-disable space-before-function-paren */
export default {
  [types.DISTRICT_DELETED] (state, index) {
    state.districts = [...state.districts.slice(0, index), ...state.districts.slice(index + 1)];
  },
  [types.DISTRICT_CHANGED] (state, updatedDistrict) {
    state.districts = state.districts.map((district) => {
      if (district.id === updatedDistrict.id) {
        return updatedDistrict;
      }
      return district;
    });
  },
  [types.DISTRICT_LOADED] (state, district) {
    state.districts = [...state.districts, district];
  },
  [types.UPDATE_EXPENSE] (state, { id, index, name, cost }) {
    const expenses = [...state.districts[id].expenses];
    expenses[index] = Object.assign({}, { name }, { cost: parseFloat(cost) });
    state.districts[id].expenses = expenses;
  },
  [types.CREATE_EXPENSE] (state, { id, name }) {
    const expense = { name, cost: 0 };
    const expenses = [...state.districts[id].expenses, expense];
    state.districts[id].expenses = expenses;
  },
  [types.UPDATE_MONTHLY_FIELD] (state, { id, field, value }) {
    state.monthly[id].raised = { ...state.monthly[id].raised, [field]: value };
  },
  [types.CALCULATE_MONTHLY_TOTAL_RAISED] (state, { id }) {
    const fields = state.monthly[id].raised;
    const total = calculateMonthlyTotalRaised({ ...fields, total: 0 });
    state.monthly[id].raised = { ...state.monthly[id].raised, total };
  },
};
