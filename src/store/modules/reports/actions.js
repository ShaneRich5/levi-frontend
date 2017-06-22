import io from 'socket.io-client';
import api from '../../../api';
import * as types from '../../mutation-types';

const socket = io('http://localhost:3000');

export const loadChurchReportsByChurch = ({ commit }, id) => {
  api.getChurchReportsByChurchId(id, (data) => {
    const { churchReports } = data;
    commit(types.CHURCH_REPORTS_LOADED, churchReports);
  });
};

export const loadDistrictReportsByDistrictOffice = ({ commit }, id) => {
  api.getDistrictReportsByDistrictOfficeId(id, (data) => {
    const { districtReports } = data;
    commit(types.DISTRICT_REPORTS_LOADED, districtReports);
  });
};

export const loadChurchReportById = ({ commit }, id) => {
  api.getChurchReportById(id, (data) => {
    const { churchReport, sources } = data;
    commit(types.CHURCH_REPORT_LOADED, churchReport);
    commit(types.SOURCES_LOADED, sources);
  });
};

export const loadDistrictReportById = ({ commit }, id) => {
  api.getDistrictReportById(id, (data) => {
    const { districtReport, churchReports, expenses } = data;
    commit(types.EXPENSES_LOADED, expenses);
    commit(types.DISTRICT_REPORT_LOADED, districtReport);
    commit(types.CHURCH_REPORTS_LOADED, churchReports);
  });
};

export const listenForChurchReportUpdates = ({ commit }, id) => {
  /* eslint-disable no-console*/
  socket.on('connect', () => console.log('connected'));
  socket.on('levi-notifications:App\\Events\\ChurchReportUpdated', (data) => {
    console.log(data);
    const { churchReport } = data;
    if (+churchReport.district_report_id === +id) {
      commit(types.CHURCH_REPORT_UPDATED, churchReport);
    }
  });
  socket.on('disconnect', () => console.log('disconnected'));
};

// export const listenForChurchReportUpdates = ({ commit }, id) => {
//   socket.on('connect', () => console.log('connected'));
//   socket.on('levi-notifications:App\\Events\\ChurchReportUpdated', (data) => {
//     console.log(data);
//     const { churchReport } = data;
//     if (+churchReport.district_report_id === +id) {
//       commit(types.CHURCH_REPORT_UPDATED, churchReport);
//     }
//   });
//   socket.on('disconnect', () => console.log('disconnected'));
// }

export const listenForExpenseUpdates = ({ commit }, id) => {
  /* eslint-disable no-console*/
  socket.on('connect', () => console.log('connected'));
  socket.on('levi-notifications:App\\Events\\ExpenseUpdated', (data) => {
    console.log(data);
    const { expense } = data;
    if (+expense.district_report_id === +id) {
      commit(types.EXPENSE_UPDATED, expense);
    }
  });
  socket.on('levi-notifications:App\\Events\\ExpenseCreated', (data) => {
    const { expense } = data;
    if (+expense.district_report_id === +id) {
      commit(types.EXPENSE_ADDED, expense);
    }
  });
  socket.on('disconnect', () => console.log('disconnected'));
};

export const listenForSourceUpdates = ({ commit }, id) => {
  /* eslint-disable no-console*/
  socket.on('connect', () => console.log('connected'));
  socket.on('levi-notifications:App\\Events\\SourceUpdated', (data) => {
    console.log(data);
    // const { source, user, changed } = data;
    const { source } = data;
    if (+source.church_report_id === +id) {
      commit(types.SOURCE_UPDATED, source);
    }
  });
  socket.on('disconnect', () => console.log('disconnected'));
};

export const updateSourceName = ({ commit }, { id, name }) => {
  api.updateSourceName({ id, name }, (data) => {
    console.log(data);
    // const { source } = data;
    // commit(types.SOURCE_NAME_UPDATED, source);
  },
  (error) => {
    console.log(error);
  });
};

export const updateSourceAmount = ({ commit }, { id, amount }) => {
  api.updateSourceAmount({ id, amount }, (data) => {
    console.log(data);
    // const { source } = data;
    // commit(types.SOURCE_AMOUNT_UPDATED, source);
  },
  (error) => {
    console.log(error);
  });
};

export const createExpense = ({ commit }, { id, name }) => {
  api.createExpense({ id, name, amount: 0 }, (data) => {
    console.log(data);
  }, (error) => {
    console.log(error);
  });
};

export const updateExpenseName = ({ commit }, { id, name }) => {
  api.updateExpenseName({ id, name }, (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  });
};

export const updateExpenseAmount = ({ commit }, { id, amount }) => {
  api.updateExpenseAmount({ id, amount }, (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  });
};
