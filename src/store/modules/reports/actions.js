import api from '../../../api';
import * as types from '../../mutation-types';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3000');

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

export const listenForChurchReportUpdates = () => {
  // /* eslint-disable no-console*/
  // socket.on('connect', () => console.log('connected'));
  // socket.on('church-report', data => console.log(data));
  // socket.on('disconnect', () => console.log('disconnected'));
};
