import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

const getRequest = (url, handleData, handleError) => {
  axios.get(url).then(response => response.data)
    .then(handleData).catch(handleError);
};

export default {
  getChurchReportsByChurchId(id, callback) {
    getRequest(`api/churches/${id}/church-reports`, callback);
  },
  getOrganizations(callback) {
    getRequest('api/organizations', callback);
  },
  getNationalOffices(callback) {
    getRequest('api/national-offices', (data) => {
      const { nationalOffices } = data;
      callback(nationalOffices);
    });
  },
  getDistrictOffices(callback) {
    getRequest('api/district-offices', (data) => {
      const { districtOffices } = data;
      callback(districtOffices);
    });
  },
  getChurches(callback) {
    getRequest('api/churches', (data) => {
      const { churches } = data;
      callback(churches);
    });
  },
  getNationalOfficeById(id, callback) {
    getRequest(`api/national-offices/${id}`, (data) => {
      const { nationalOffice } = data;
      callback(nationalOffice);
    });
  },
  getDistrictOfficeById(id, callback) {
    getRequest(`api/district-offices/${id}`, (data) => {
      const { districtOffice } = data;
      callback(districtOffice);
    });
  },
  getChurchById(id, callback) {
    getRequest(`api/churches/${id}`, (data) => {
      const { church } = data;
      callback(church);
    });
  },
  login(email, password, successCb, errorCb) {
    axios.post('api/login')
      .then(response => response.data)
      .then((data) => {
        const { token } = data;
        successCb(token);
      })
      .error(errorCb);
  },
};
