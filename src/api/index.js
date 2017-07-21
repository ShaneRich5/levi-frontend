import { get, post, update, requestor } from './requests';

const addTokenToHeader = (data) => {
  const { token } = data;
  requestor.defaults.headers.common.Authorization = `Bearer ${token}`;
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
  getOrganizations(successCb, errorCb) {
    get('api/organizations', successCb, errorCb);
  },
  saveOrganization({ name, street, parish, country }, successCb, errorCb) {
    post('api/organizations', { name, street, parish, country }, data => successCb(data), errorCb);
  },
  getOrganizationTypes(successCb, errorCb) {
    get('api/organization-types', successCb, errorCb);
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
};
