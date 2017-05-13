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

export const setDistrictChurchesRef = ({ commit, state }, { district }) => {
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

export const setChurchRef = ({ commit, state }) => {
  services.churchRef.on('child_added', (data) => {
    const church = Object.assign({}, data.val(), { id: data.key });

    let district = state.districts.find(d => d.id === church.district);

    if (undefined === district) {
      services.districtRef.child(church.district).once('value').then((snapshot) => {
        district = state.districts.find(d => d.id === church.district);
        if (district === undefined) {
          district = Object.assign({}, snapshot.val(), { id: church.district });
          commit(types.DISTRICT_LOADED, district);
        }
      });
    }

    commit(types.CHURCH_LOADED, church);
  });

  services.churchRef.on('child_changed', (data) => {
    const church = Object.assign({}, data.val(), { id: data.key });
    commit(types.CHURCH_CHANGED, church);
  });

  services.churchRef.on('child_removed', (data) => {
    const index = state.churches.findIndex(church => church.id === data.key);
    if (index !== undefined) {
      commit(types.CHURCH_DELETED, index);
    }
  });
};

export const removeDistrictRef = ({ commit }) => {
  services.districtRef.off();
  commit(types.CLEAR_DISTRICTS);
  commit(types.CLEAR_DISTRICTS);
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
  const { key } = services.churchRef.push();
  const church = { name, district };

  /* eslint-disable prefer-template */
  const updates = {
    ['/churches/' + key]: church,
    ['/districts/' + district + '/churches/' + key]: true,
  };

  services.rootRef.update(updates);
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
