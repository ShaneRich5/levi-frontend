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

export const loadChurchReportById = ({ commit }, id) => {
  api.getChurchReportById(id, (data) => {
    const { churchReport, sources } = data;
    commit(types.CHURCH_REPORT_LOADED, churchReport);
    commit(types.SOURCES_LOADED, sources);
  });
};

export const listenForSourceChanges = () => {
  /* eslint-disable no-console*/
  socket.on('connect', () => console.log('connected'));
  socket.on('levi-notifications:App\\Events\\SourceUpdated', (data) => {
    console.log(data);
  });
  socket.on('disconnect', () => console.log('disconnected'));
};

export const updateSourceName = ({ commit }, { id, name }) => {
  api.updateSourceName({ id, name }, (data) => {
    const { source } = data;
    commit(types.SOURCE_NAME_UPDATED, source);
  },
  (error) => {
    console.log(error);
  });
};

export const updateSourceAmount = ({ commit }, { id, amount }) => {
  api.updateSourceAmount({ id, amount }, (data) => {
    const { source } = data;
    commit(types.SOURCE_AMOUNT_UPDATED, source);
  },
  (error) => {
    console.log(error);
  });
};
