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
  getOrganizations(successCb, errorCb, config) {
    get('api/organizations', successCb, errorCb, config);
  },
  getReportsByOrganization(id, successCb, errorCb) {
    get(`api/organizations/${id}/reports`, successCb, errorCb);
  },
  getJournalsByNationalOfficeId(id, successCb, errorCb) {
    get(`api/national-offices/${id}/journals`, successCb, errorCb);
  },
  getDistrictReportsByDistrictOfficeById(id, successCb, errorCb) {
    get(`api/district-offices/${id}/district-reports`, successCb, errorCb);
  },
  getChurchReport(id, successCb, errorCb) {
    get(`api/church-reports/${id}`, successCb, errorCb);
  },
  getDistrictReport(id, successCb, errorCb) {
    get(`api/district-reports/${id}`, successCb, errorCb);
  },
  getChurchReportsByChurchId(id, successCb, errorCb) {
    get(`api/churches/${id}/church-reports`, successCb, errorCb);
  },
  getSourcesByChurchReportId(id, successCb, errorCb) {
    get(`api/church-reports/${id}/sources`, successCb, errorCb);
  },
  getExpensesByDistrictReportId(id, successCb, errorCb) {
    get(`api/district-reports/${id}/expenses`, successCb, errorCb);
  },
  getIndicatorsByDistrictReportId(id, successCb, errorCb) {
    get(`api/district-reports/${id}/indicators`, successCb, errorCb);
  },
  saveOrganization(organization, successCb, errorCb) {
    post('api/organizations', organization, data => successCb(data), errorCb);
  },
  updateOrganization(organization, successCb, errorCb) {
    const { id } = organization;
    update(`api/organizations/${id}`, successCb, errorCb);
  },
  createJournalOnNationalOffice(nationalOfficeId, successCb, errorCb) {
    // post(`api/national-offices/${nationalOfficeId}/journals`, successCb, errorCb);
    requestor.post(`api/national-offices/${nationalOfficeId}/journals`).then(response => response.data)
      .then(successCb).catch(errorCb);
  },
  createDistrictReportOnDistrictOffice(districtOfficeId, successCb, errorCb) {
    post(`api/district-offices/${districtOfficeId}/district-reports`, successCb, errorCb);
  },
  createChurchReportOnChurch(churchId, successCb, errorCb) {
    post(`api/churches/${churchId}/church-reports`, successCb, errorCb);
  },

  createExpenseOnDistrictReport({ districtReport, name }, successCb, errorCb) {
    post(`api/district-reports/${districtReport}/expenses`, { name }, successCb, errorCb);
  },
  createSourceOnChurchReport({ churchReport, name }, successCb, errorCb) {
    post(`api/church-reports/${churchReport}/sources`, { name }, successCb, errorCb);
  },
  updateExpenseName({ churchReport, name }, successCb, errorCb) {
    update(`api/expenses/${churchReport}`, { name }, successCb, errorCb);
  },
  updateExpenseAmount({ id, amount }, successCb, errorCb) {
    update(`api/expenses/${id}`, { id, amount }, successCb, errorCb);
  },
  updateSourceNameOnChurchReport({ id, churchReport, name }, successCb, errorCb) {
    update(`api/church-reports/${churchReport}/sources/${id}`, { id, name }, successCb, errorCb);
  },
  updateSourceAmountOnChurchReport({ id, churchReport, amount }, successCb, errorCb) {
    update(`api/church-reports/${churchReport}/sources/${id}`, { id, amount }, successCb, errorCb);
  },
  updateExpenseNameOnDistrictReport({ id, districtReport, name }, successCb, errorCb) {
    update(`api/district-reports/${districtReport}/expenses/${id}`, { id, name }, successCb, errorCb);
  },
  updateExpenseAmountOnDistrictReport({ id, districtReport, amount }, successCb, errorCb) {
    update(`api/district-reports/${districtReport}/expenses/${id}`, { id, amount }, successCb, errorCb);
  },
};
