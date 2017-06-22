import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.baseURL = 'http://192.241.155.43';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

axios.interceptors.request.use((config) => {
  const token = localStorage.token;

  if (token !== undefined && token !== null) {
    /* eslint-disable no-param-reassign*/
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

const get = (endpoint, handleData, handleError) => {
  axios.get(endpoint).then(response => response.data)
    .then(handleData).catch(handleError);
};

const post = (endpoint, data, handleReponse, handleError) => {
  axios.post(endpoint, data).then(response => response.data)
    .then(handleReponse).catch(handleError);
};

const update = (endpoint, data, handleReponse, handleError) => {
  axios.put(endpoint, data).then(response => response.data)
    .then(handleReponse).catch(handleError);
};

const addTokenToHeader = (data) => {
  const { token } = data;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default {
  login({ email, password }, successCb, errorCb) {
    post('api/login', { email, password },
      (data) => {
        addTokenToHeader(data);
        successCb(data);
      }, errorCb);
  },
  register({ email, password, firstName, lastName }, successCb, errorCb) {
    post('api/register', { email, password, firstName, lastName },
      (data) => {
        addTokenToHeader(data);
        successCb(data);
      }, errorCb);
  },
  createExpense({ id, name, amount }, callback, errorCallback) {
    post('api/expenses', { district_report_id: id, name, amount }, callback, errorCallback);
  },
  updateExpenseName({ id, name }, callback, errorCallback) {
    update(`api/expenses/${id}`, { id, name }, callback, errorCallback);
  },
  updateExpenseAmount({ id, amount }, callback, errorCallback) {
    update(`api/expenses/${id}`, { id, amount }, callback, errorCallback);
  },
  updateSourceName({ id, name }, callback, errorCallback) {
    update(`api/sources/${id}`, { id, name }, callback, errorCallback);
  },
  updateSourceAmount({ id, amount }, callback, errorCallback) {
    update(`api/sources/${id}`, { id, amount }, callback, errorCallback);
  },
  getDistrictReportById(id, callback) {
    get(`api/district-reports/${id}`, callback);
  },
  getDistrictReportsByDistrictOfficeId(id, callback) {
    get(`api/district-offices/${id}/district-reports`, callback);
  },
  getChurchReportById(id, callback) {
    get(`api/church-reports/${id}`, callback);
  },
  getChurchReportsByChurchId(id, callback) {
    get(`api/churches/${id}/church-reports`, callback);
  },
  getOrganizations(callback) {
    get('api/organizations', callback);
  },
  getNationalOffices(callback) {
    get('api/national-offices', (data) => {
      const { nationalOffices } = data;
      callback(nationalOffices);
    });
  },
  getDistrictOffices(callback) {
    get('api/district-offices', (data) => {
      const { districtOffices } = data;
      callback(districtOffices);
    });
  },
  getChurches(callback) {
    get('api/churches', (data) => {
      const { churches } = data;
      callback(churches);
    });
  },
  getNationalOfficeById(id, callback) {
    get(`api/national-offices/${id}`, (data) => {
      const { nationalOffice } = data;
      callback(nationalOffice);
    });
  },
  getDistrictOfficeById(id, callback) {
    get(`api/district-offices/${id}`, (data) => {
      const { districtOffice } = data;
      callback(districtOffice);
    });
  },
  getChurchById(id, callback) {
    get(`api/churches/${id}`, (data) => {
      const { church } = data;
      callback(church);
    });
  },
};
