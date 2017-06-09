import axios from 'axios';
import io from 'socket.io-client';
import * as types from '../../mutation-types';

const socket = io('http://localhost:3000');

export const loadChurchReportByChurch = ({ commit }, id) => {
  const url = `http://localhost:8000/api/church-reports/${id}`;
  axios.get(url).then(response => response.data)
    .then((data) => {
      const { churchReport, sources } = data;
      commit(types.ADD_CHURCH_REPORT, churchReport);
      commit(types.ADD_SOURCES, sources);
    })
    .catch();
};

export const listenForChurchReportUpdates = () => {
  /* eslint-disable no-console*/
  socket.on('connect', () => console.log('connected'));
  socket.on('church-report', data => console.log(data));
  socket.on('disconnect', () => console.log('disconnected'));
};
