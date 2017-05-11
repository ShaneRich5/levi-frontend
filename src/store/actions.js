import * as types from './mutation-types';
import * as services from '../services';

export const setDistrictRef = ({ commit, state }) => {
  services.districtRef.on('child_added', (data) => {
    const district = Object.assign({}, data.val(), { id: data.key });
    commit(types.DISTRICT_LOADED, district);
  });

  services.districtRef.on('child_changed', (data) => {
    const district = Object.assign({}, data.val(), { id: data.key });
    commit(types.DISTRICT_CHANGED, district);
  });

  services.districtRef.on('child_removed', (data) => {
    const index = state.districts.findIndex(district => district.id === data.key);
    if (index !== undefined) {
      commit(types.DISTRICT_DELETED, index);
    }
  });
};

export const addDistrict = ({ commit }, { name }) => {
  const newDistrictRef = services.districtRef.push();
  newDistrictRef.set({
    name,
    expenses: [],
    churches: [],
  });
};

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
