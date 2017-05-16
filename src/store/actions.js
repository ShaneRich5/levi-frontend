import * as types from './mutation-types';
import * as services from '../services';

/* eslint-disable prefer-template */
export const createSource = ({ commit }, source) => {
  const { key } = services.sourceRef.push();
  const { churchReport } = source;
  const updates = {};
  updates['/sources/' + key] = source;
  updates['/churchReports/' + churchReport + '/sources/' + key] = true;
  services.rootRef.update(updates);
};

/* eslint-disable prefer-template */
export const createExpense = ({ commit }, expense) => {
  const { key } = services.expenseRef.push();
  const { districtReport } = expense;
  const updates = {};
  updates['/expenses/' + key] = expense;
  updates['/districtReports/' + districtReport + '/expenses/' + key] = true;
  services.rootRef.update(updates);
};

export const updateExpenseName = ({ commit }, { id, name }) => {
  services.expenseRef.child(id).child('name').set(name);
};

export const updateExpenseAmount = ({ commit }, { id, amount }) => {
  services.expenseRef.child(id).child('amount').set(amount);
};

export const updateSourceName = ({ commit }, { id, name }) => {
  services.sourceRef.child(id).child('name').set(name);
};

export const updateSourceAmount = ({ commit }, { id, amount }) => {
  services.sourceRef.child(id).child('amount').set(amount);
};

/* eslint-disable prefer-template */
export const generateReports = ({ commit }, { district, churches }) => {
  const districtReportKey = services.districtReportRef.push().key;
  const updates = {};

  // map district-report to district and vice versa
  updates['/districts/' + district + '/districtReports/' + districtReportKey] = true;
  updates['/districtReports/' + districtReportKey + '/district'] = district;

  churches.forEach((church) => {
    const churchReportKey = services.churchReportRef.push().key;
    updates['/churches/' + church + '/churchReports/' + churchReportKey] = true;
    updates['/churchReports/' + churchReportKey + '/church'] = church;
    updates['/churchReports/' + churchReportKey + '/districtReport'] = districtReportKey;
    updates['/districtReports/' + districtReportKey + '/churchReports/' + churchReportKey] = true;
  });

  services.rootRef.update(updates);
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

export const setDistrictRef = ({ commit, state }) => {
  services.districtRef.on('child_added', (data) => {
    const district = Object.assign({}, data.val(), { id: data.key });
    if (!('churches' in district)) {
      district.churches = {};
    }
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

export const setChurchRef = ({ commit, state }) => {
  services.churchRef.on('child_added', (data) => {
    const church = Object.assign({}, data.val(), { id: data.key });
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

export const setDistrictReportRef = ({ commit, state }) => {
  services.districtReportRef.on('child_added', (data) => {
    const report = Object.assign({}, data.val(), { id: data.key });
    commit(types.DISTRICT_REPORT_LOADED, report);
  });

  services.districtReportRef.on('child_changed', (data) => {
    const report = Object.assign({}, data.val(), { id: data.key });
    commit(types.DISTRICT_REPORT_CHANGED, report);
  });

  services.districtReportRef.on('child_removed', (data) => {
    const index = state.reports.findIndex(report => report.id === data.key);
    if (index !== undefined) {
      commit(types.DISTRICT_REPORT_DELETED, index);
    }
  });
};

export const setChurchReportRef = ({ commit, state }) => {
  services.churchReportRef.on('child_added', (data) => {
    const report = Object.assign({}, data.val(), { id: data.key });
    if (report.sources === undefined) {
      report.sources = {};
    }
    commit(types.CHURCH_REPORT_LOADED, report);
  });

  services.churchReportRef.on('child_changed', (data) => {
    const report = Object.assign({}, data.val(), { id: data.key });
    commit(types.CHURCH_REPORT_CHANGED, report);
  });

  services.churchReportRef.on('child_removed', (data) => {
    const index = state.reports.findIndex(report => report.id === data.key);
    if (index !== undefined) {
      commit(types.CHURCH_REPORT_DELETED, index);
    }
  });
};

export const setSourceRef = ({ commit, state }) => {
  services.sourceRef.on('child_added', (data) => {
    const source = Object.assign({}, data.val(), { id: data.key });
    commit(types.SOURCE_LOADED, source);
  });

  services.sourceRef.on('child_changed', (data) => {
    const source = Object.assign({}, data.val(), { id: data.key });
    commit(types.SOURCE_CHANGED, source);
  });

  services.sourceRef.on('child_removed', (data) => {
    const index = state.sources.findIndex(source => source.id === data.key);
    if (index !== undefined) {
      commit(types.SOURCE_DELETED, index);
    }
  });
};

export const setExpenseRef = ({ commit, state }) => {
  services.expenseRef.on('child_added', (data) => {
    const report = Object.assign({}, data.val(), { id: data.key });
    commit(types.EXPENSE_LOADED, report);
  });

  services.expenseRef.on('child_changed', (data) => {
    const report = Object.assign({}, data.val(), { id: data.key });
    commit(types.EXPENSE_CHANGED, report);
  });

  services.expenseRef.on('child_removed', (data) => {
    const index = state.reports.findIndex(report => report.id === data.key);
    if (index !== undefined) {
      commit(types.EXPENSE_DELETED, index);
    }
  });
};

export const removeSourceRef = ({ commit }) => {
  services.sourceRef.off();
  commit(types.CLEAR_SOURCES);
};

export const removeExpenseRef = ({ commit }) => {
  services.expenseRef.off();
  commit(types.CLEAR_EXPENSES);
};

export const removeDistrictReportRef = ({ commit }) => {
  services.districtReportRef.off();
  commit(types.CLEAR_DISTRICT_REPORTS);
};

export const removeChurchReportRef = ({ commit }) => {
  services.churchReportRef.off();
  commit(types.CLEAR_CHURCH_REPORTS);
};

export const removeDistrictRef = ({ commit }) => {
  services.districtRef.off();
  commit(types.CLEAR_DISTRICTS);
};

export const removeChurchRef = ({ commit }) => {
  services.churchRef.off();
  commit(types.CLEAR_CHURCHES);
};
