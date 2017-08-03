import io from 'socket.io-client';
import humps from 'humps';
import api from '../../../api';
import * as types from '../../mutation-types';

let socketUrl = 'https://api.levihq.com:3000';

if (process.env.NODE_ENV === 'production') {
  socketUrl = 'https://api.levihq.com:3000';
} else {
  socketUrl = 'http://localhost:3000';
}

const socket = io.connect(socketUrl, { secure: true });

/* eslint-disable no-console*/
console.log('using socket url', socketUrl);

export const invalidateSources = ({ commit }) => {
  commit(types.SOURCES_CLEARED);
};

export const invalidateExpenses = ({ commit }) => {
  commit(types.EXPENSES_CLEARED);
};

export const invalidateIndicators = ({ commit }) => {
  commit(types.SOURCES_CLEARED);
  commit(types.EXPENSES_CLEARED);
};

export const createSourceOnChurchReport = ({ commit }, { churchReport, name }) => {
  api.createSourceOnChurchReport({ churchReport, name }, (data) => {
    console.log(data);
  });
};

export const createExpenseOnDistrictReport = ({ commit }, { districtReport, name }) => {
  api.createExpenseOnDistrictReport({ districtReport, name }, (data) => {
    console.log(data);
  });
};

export const updateSourceNameOnChurchReport = ({ commit }, { id, churchReport, name }) => {
  api.updateSourceNameOnChurchReport({ id, churchReport, name }, (data) => {
    console.log(data);
    // updateSource(commit, data);
  });
};
export const updateSourceAmountOnChurchReport = ({ commit }, { id, churchReport, amount }) => {
  api.updateSourceAmountOnChurchReport({ id, churchReport, amount }, (data) => {
    // updateSource(commit, data);
    console.log(data);
  });
};

export const updateExpenseNameOnDistrictReport = ({ commit }, { id, districtReport, name }) => {
  api.updateExpenseNameOnDistrictReport({ id, districtReport, name }, (data) => {
    console.log(data);
  });
};

export const updateExpenseAmountOnDistrictReport = ({ commit }, { id, districtReport, amount }) => {
  api.updateExpenseAmountOnDistrictReport({ id, districtReport, amount }, (data) => {
    console.log(data);
  });
};

export const fetchSourcesForChurchReport = ({ commit }, reportId) => {
  api.getSourcesByChurchReportId(reportId, (data) => {
    const { sources } = data;
    commit(types.SOURCES_LOADED, sources);
  });
};

export const fetchExpensesForDistrictReport = ({ commit }, reportId) => {
  api.getExpensesByDistrictReportId(reportId, (data) => {
    const { expenses } = data;
    commit(types.EXPENSES_LOADED, expenses);
  });
};

export const fetchIndicatorsForDistrictReport = ({ commit }, reportId) => {
  api.getIndicatorsByDistrictReportId(reportId, (data) => {
    const { expenses, sources } = data;
    commit(types.EXPENSES_LOADED, expenses);
    commit(types.SOURCES_LOADED, sources);
  });
};

export const listenForSourceChangesOnChurchReport = ({ commit }, churchReportId) => {
  /* eslint-disable no-console*/
  socket.on('connect', () => console.log('connected', 'listening for source changes'));
  socket.on('disconnect', () => console.log('disconnected', 'sources socket disconnected'));
  socket.on('levi-notifications:App\\Events\\SourceUpdated', (data) => {
    const { source } = humps.camelizeKeys(data);

    if (+source.churchReportId === +churchReportId) {
      commit(types.SOURCE_UPDATED, source);
      console.log('incomming source', source);
    }
  });

  socket.on('levi-notifications:App\\Events\\SourceCreated', (data) => {
    const { source } = humps.camelizeKeys(data);
    console.log('updated source', source);
    console.log(+source.churchReportId === +churchReportId);

    if (+source.churchReportId === +churchReportId) {
      commit(types.SOURCE_CREATED, source);
      console.log('created source', source);
    }
  });
};

export const listenForExpenseChangesOnDistrictReport = ({ commit }, districtReportId) => {
  /* eslint-disable no-console*/
  socket.on('connect', () => console.log('connected', 'listening for expense changes'));
  socket.on('disconnect', () => console.log('disconnected', 'expenses socket disconnected'));
  socket.on('levi-notifications:App\\Events\\ExpenseUpdated', (data) => {
    const { expense } = humps.camelizeKeys(data);
    console.log('expense updated', data);

    if (+expense.districtReportId === +districtReportId) {
      commit(types.EXPENSE_UPDATED, expense);
    }
  });

  socket.on('levi-notifications:App\\Events\\ExpenseCreated', (data) => {
    const { expense } = humps.camelizeKeys(data);
    console.log('expense updated', expense);
    console.log(+expense.districtReportId === +districtReportId);

    if (+expense.districtReportId === +districtReportId) {
      commit(types.EXPENSE_CREATED, expense);
    }
  });
};
