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

export const setChurchRef = ({ commit, state }, { district }) => {
  services.churchRef.on('child_added', (data) => {
    const church = Object.assign({}, data.val(), { id: data.key });
    if (church.district === district) {
      commit(types.CHURCH_LOADED, church);
    }
  });

  services.churchRef.on('child_changed', (data) => {
    const church = Object.assign({}, data.val(), { id: data.key });
    if (church.district === district) {
      commit(types.CHURCH_CHANGED, church);
    }
  });

  services.churchRef.on('child_removed', (data) => {
    const index = state.churches.findIndex(church => church.id === data.key
      && church.district === district);
    if (index !== undefined) {
      commit(types.CHURCH_DELETED, index);
    }
  });
};

export const removeChurchRef = ({ commit }) => {
  services.churchRef.off();
  commit(types.CLEAR_CHURCHES);
};

export const createDistrict = ({ commit }, { name }) => {
  const newDistrictRef = services.districtRef.push();
  newDistrictRef.set({ name, balance: 0 });
};

export const createChurch = ({ commit }, { district, name }) => {
  const newChurchRef = services.churchRef.push();
  // const ref = services.districtRef.ref(district);
  newChurchRef.set({ name, district });
};

//
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
