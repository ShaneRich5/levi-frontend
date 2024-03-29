import io from 'socket.io-client';
import api from '../../../api';
import * as types from '../../mutation-types';

let socketUrl;

if (process.env.NODE_ENV === 'production') {
  socketUrl = 'https://api.levihq.com:3000';
} else {
  socketUrl = 'http://localhost:3000';
}

const socket = io(socketUrl);

export const invalidateReports = ({ commit }) => {
  commit(types.CLEAR_ALL_REPORTS);
};

export const fetchChurchReportsByChurch = ({ commit }, id) => {
  api.getChurchReportsByChurchId(id, (data) => {
    const { churchReports } = data;
    commit(types.CHURCH_REPORTS_LOADED, churchReports);
  });
};

export const fetchDistrictReportsByDistrictOffice = ({ commit }, id) => {
  api.getDistrictReportsByDistrictOfficeId(id, (data) => {
    const { districtReports } = data;
    commit(types.DISTRICT_REPORTS_LOADED, districtReports);
  });
};

export const fetchChurchReport = ({ commit }, id) => {
  api.getChurchReport(id, (data) => {
    const { churchReport, sources } = data;
    commit(types.CHURCH_REPORT_LOADED, churchReport);
    commit(types.SOURCES_LOADED, sources);
  });
};

export const fetchDistrictReport = ({ commit }, id) => {
  api.getDistrictReport(id, (data) => {
    const { districtReport, churchReports, sources, expenses } = data;
    commit(types.DISTRICT_REPORT_LOADED, districtReport);
    commit(types.CHURCH_REPORTS_LOADED, churchReports);
    commit(types.SOURCES_LOADED, sources);
    commit(types.EXPENSES_LOADED, expenses);
  });
};

export const fetchReportsByOrganization = ({ commit }, id) => {
  api.getReportsByOrganization(id, (data) => {
    const { journals, districtReports, churchReports } = data;

    if (Array.isArray(journals)) {
      commit(types.JOURNALS_LOADED, journals);
    }

    if (Array.isArray(districtReports)) {
      commit(types.DISTRICT_REPORTS_LOADED, districtReports);
    }

    if (Array.isArray(churchReports)) {
      commit(types.CHURCH_REPORTS_LOADED, churchReports);
    }
  });
};

export const addJournalToNationalOffice = ({ commit }, nationalOffice) => {
  api.createJournalOnNationalOffice(nationalOffice, (data) => {
    const { journal } = data;
    commit(types.JOURNAL_LOADED, journal);
  });
};

export const addDistrictReportToDistrictOffice = ({ commit }, districtOffice) => {
  api.createDistrictReportOnDistrictOffice(districtOffice, (data) => {
    const { districtReport } = data;
    commit(types.DISTRICT_REPORT_LOADED, districtReport);
  });
};

export const addChurchReportToChurch = ({ commit }, church) => {
  api.createChurchReportOnChurch(church, (data) => {
    const { churchReport } = data;
    commit(types.CHURCH_REPORT_LOADED, churchReport);
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

// export const listenForExpenseUpdates = ({ commit }, id) => {
//   /* eslint-disable no-console*/
//   socket.on('connect', () => console.log('connected'));
//   socket.on('levi-notifications:App\\Events\\ExpenseUpdated', (data) => {
//     console.log(data);
//     const { expense } = data;
//     if (+expense.district_report_id === +id) {
//       commit(types.EXPENSE_UPDATED, expense);
//     }
//   });
//   socket.on('levi-notifications:App\\Events\\ExpenseCreated', (data) => {
//     const { expense } = data;
//     if (+expense.district_report_id === +id) {
//       commit(types.EXPENSE_ADDED, expense);
//     }
//   });
//   socket.on('disconnect', () => console.log('disconnected'));
// };

// export const listenForSourceUpdates = ({ commit }, id) => {
//   /* eslint-disable no-console*/
//   socket.on('connect', () => console.log('connected'));
//   socket.on('levi-notifications:App\\Events\\SourceUpdated', (data) => {
//     console.log(data);
//     // const { source, user, changed } = data;
//     const { source } = data;
//     if (+source.church_report_id === +id) {
//       commit(types.SOURCE_UPDATED, source);
//     }
//   });
//   socket.on('disconnect', () => console.log('disconnected'));
// };

// export const updateSourceName = ({ commit }, { id, name }) => {
//   api.updateSourceName({ id, name }, (data) => {
//     console.log(data);
//     // const { source } = data;
//     // commit(types.SOURCE_NAME_UPDATED, source);
//   },
//   (error) => {
//     console.log(error);
//   });
// };

// export const updateSourceAmount = ({ commit }, { id, amount }) => {
//   api.updateSourceAmount({ id, amount }, (data) => {
//     console.log(data);
//     // const { source } = data;
//     // commit(types.SOURCE_AMOUNT_UPDATED, source);
//   },
//   (error) => {
//     console.log(error);
//   });
// };

// export const createExpense = ({ commit }, { id, name }) => {
//   api.createExpense({ id, name, amount: 0 }, (data) => {
//     console.log(data);
//   }, (error) => {
//     console.log(error);
//   });
// };

// export const updateExpenseName = ({ commit }, { id, name }) => {
//   api.updateExpenseName({ id, name }, (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   });
// };

// export const updateExpenseAmount = ({ commit }, { id, amount }) => {
//   api.updateExpenseAmount({ id, amount }, (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   });
// };

// export const updateDistrictReportOpeningFund = ({ commit }, { id, amount }) => {
//   commit(types.DISTRICT_REPORT_OPENING_FUND_UPDATED, { id, amount });
// };
