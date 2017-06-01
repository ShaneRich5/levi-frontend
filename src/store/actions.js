import axios from 'axios';
import * as types from './mutation-types';
import * as services from '../services';

export const loadNationalOffices = ({ commit }) => {
  const token = localStorage.getItem('token');
  axios.get(`http://localhost:8000/api/national-offices?token=${token}`)
    .then(response => response.data)
    .then((data) => {
      const { nationalOffices } = data;
      commit(types.ADD_NATIONAL_OFFICES, nationalOffices);
    })
    .catch(() => {
      delete localStorage.token;
      commit(types.LOGOUT);
    });
};

export const loadDistrictOffices = ({ commit }) => {
  const token = localStorage.getItem('token');
  axios.get(`http://localhost:8000/api/district-offices?token=${token}`)
    .then(response => response.data)
    .then((data) => {
      const { districtOffices } = data;
      commit(types.ADD_DISTRICT_OFFICES, districtOffices);
    })
    .catch(() => {
      delete localStorage.token;
      commit(types.LOGOUT);
    });
};

export const loadChurches = ({ commit }) => {
  const token = localStorage.getItem('token');
  axios.get(`http://localhost:8000/api/churches?token=${token}`)
    .then(response => response.data)
    .then((data) => {
      const { churches } = data;
      commit(types.ADD_CHURCHES, churches);
    })
    .catch(() => {
      delete localStorage.token;
      commit(types.LOGOUT);
    });
};

export const loadChurchReportsByDistrict = ({ commit }, districtId) => {
  const token = localStorage.getItem('token');
  const url = `http://localhost:8000/api/district-offices/${districtId}/church-reports?token=${token}`;
  axios.get(url).then(response => response.data)
    .then((data) => {
      const { districtReports } = data;
      commit(types.ADD_DISTRICT_REPORTS, districtReports);
    })
    .catch();
};

export const loadDistrictReportsByDistrict = ({ commit }, districtId) => {
  const token = localStorage.getItem('token');
  const districtReportUrl = `http://localhost:8000/api/district-offices/${districtId}/reports?token=${token}`;
  axios.get(districtReportUrl).then(response => response.data)
    .then((data) => {
      const { districtReports, churchReports } = data;
      commit(types.ADD_DISTRICT_REPORTS, districtReports);
      commit(types.ADD_CHURCH_REPORTS, churchReports);
    })
    .catch();
};

export const loadChurchReportsByChurch = ({ commit }, churchId) => {
  const token = localStorage.getItem('token');
  const url = `http://localhost:8000/api/churches/${churchId}/reports?token=${token}`;
  axios.get(url).then(response => response.data)
    .then((data) => {
      const { churchReports } = data;
      commit(types.ADD_CHURCH_REPORTS, churchReports);
    })
    .catch();
};

export const createChurchReportSourceListener = ({ commit, state }, churchReportId) => {
  services.sourceRef.on('child_added', (data) => {
    const source = Object.assign({}, data.val());
    if (+source.church_report_id === +churchReportId) {
      commit(types.SOURCE_LOADED, source);
    }
  });

  services.sourceRef.on('child_changed', (data) => {
    const source = data.val();
    if (+source.church_report_id === +churchReportId) {
      commit(types.SOURCE_CHANGED, source);
    }
  });

  services.sourceRef.on('child_removed', (data) => {
    if (+data.church_report_id === +churchReportId) {
      const index = state.sources.findIndex(source => source.id === data.key);
      if (index !== undefined) {
        commit(types.SOURCE_DELETED, index);
      }
    }
  });
};

export const removeSourceRef = ({ commit }) => {
  services.sourceRef.off();
  commit(types.CLEAR_SOURCES);
};

export const createDistrictReportExpenseListener = ({ commit, state }, id) => {
  services.expenseRef.on('child_added', (data) => {
    const expense = data.val();
    if (+expense.district_report_id === +id) {
      commit(types.EXPENSE_LOADED, expense);
    }
  });

  services.expenseRef.on('child_changed', (data) => {
    const expense = data.val();
    if (+expense.district_report_id === +id) {
      commit(types.EXPENSE_CHANGED, expense);
    }
  });

  services.expenseRef.on('child_removed', (data) => {
    if (+data.district_report_id === +id) {
      const index = state.expenses.findIndex(expense => expense.id === data.key);
      if (index !== undefined) {
        commit(types.EXPENSE_DELETED, index);
      }
    }
  });
};

export const removeExpenseRef = ({ commit }) => {
  services.expenseRef.off();
  commit(types.CLEAR_EXPENSES);
};

export const createExpense = ({ commit }, { reportId, name }) => {
  const token = localStorage.getItem('token');
  const url = `http://localhost:8000/api/district-reports/${reportId}/expenses?token=${token}`;
  axios.post(url, { name }).then(response => response.data)
    .catch();
};

export const createSource = ({ commit }, { reportId, name }) => {
  const token = localStorage.getItem('token');
  const url = `http://localhost:8000/api/church-reports/${reportId}/sources?token=${token}`;
  axios.post(url, { name }).then(response => response.data)
    .catch();
};

export const updateSource = ({ commit }, { id, name, amount }) => {
  // services.sourceRef.child(id).child('name').set(name);
  const token = localStorage.getItem('token');
  const url = `http://localhost:8000/api/sources/${id}?token=${token}`;
  axios.post(url, { name, amount }).then(response => response.data)
    .catch();
};

export const updateSourceName = ({ commit }, { id, name }) => {
  services.sourceRef.child(id).child('name').set(name);
};

export const updateSourceAmount = ({ commit }, { id, amount }) => {
  services.sourceRef.child(id).child('amount').set(amount);
};

export const updateExpense = ({ commit }, { id, name, amount }) => {
  const token = localStorage.getItem('token');
  const url = `http://localhost:8000/api/expenses/${id}?token=${token}`;
  axios.post(url, { name, amount }).then(response => response.data)
    .catch();
};

export const loadJournal = ({ commit }) => {
  const url = 'http://localhost:8000/api/journal';
  axios.get(url)
    .then(response => response.data)
    .then((data) => {
      const { journal } = data;
      commit(types.ADD_JOURNALS, [journal]);
    })
    .catch();
};

/* old actions */

export const updateDistrictReportOpeningFund = ({ commit }, { districtReport, amount }) => {
  services.districtReportRef.child(districtReport).child('openingFund').set(amount);
};

export const updateExpenseName = ({ commit }, { id, name }) => {
  services.expenseRef.child(id).child('name').set(name);
};

export const updateExpenseAmount = ({ commit }, { id, amount }) => {
  services.expenseRef.child(id).child('amount').set(amount);
};

/* eslint-disable prefer-template */
export const generateReports = ({ commit }, { district, churches }) => {
  const districtReportKey = services.districtReportRef.push().key;
  const updates = {};

  // map district-report to district and vice versa
  updates['/districts/' + district + '/districtReports/' + districtReportKey] = true;
  updates['/districtReports/' + districtReportKey + '/district'] = district;
  updates['/districtReports/' + districtReportKey + '/openingFund'] = 0;

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
