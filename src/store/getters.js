import { deepCopy } from './util';

export const nationalOffices = state => [...state.nationalOffices];

export const districtOffices = state => [...state.districtOffices];

export const churches = state => [...state.churches];

export const nationalOfficeById = state => id =>
  state.nationalOffices.find(office => office.id === +id);

export const districtOfficeById = state => id =>
  deepCopy(state.districtOffices.find(office => office.id === +id));

export const districtOfficesByNational = state => id =>
  [...state.districtOffices
    .filter(districtOffice => districtOffice.national_office_id === +id)];

export const churchReportsByChurch = state => id =>
  [...state.churchReports
    .filter(churchReport => churchReport.church_id === +id)];


export const churchReports = state => [...state.churchReports];


export const churchesByDistrict = state => id =>
  [...state.churches
    .filter(church => church.district_office_id === +id)];

export const sources = state => [...state.sources];

export const sourcesByChurchReport = state => id =>
  [...state.sources.filter(source => +source.church_report_id === +id)];

/* old getters */

export const totalDistrictExpense = state => (id) => {
  const expenses = [...state.districts[id].expenses];
  return expenses.reduce((accumulator, expense) => accumulator + expense.cost, 0);
};

export const districts = state => [...state.districts];

export const districtById = state => id =>
  deepCopy(state.districts.find(district => district.id === id));

export const churchById = state => id =>
  deepCopy(state.churches.find(church => church.id === +id));


export const districtReports = state => [...state.districtReports];

export const districtReportById = state => id =>
  deepCopy(state.districtReports.find(report => report.id === id));

export const districtReportsByDistrict = state => id =>
  [...state.districtReports.filter(districtReport => districtReport.district === id)];

export const churchReportsByDistrictReport = state => id =>
  [...state.churchReports.filter(churchReport => churchReport.districtReport === id)];

export const churchReportSources = state => (keys) => {
  const result = {};
  keys.forEach((key) => {
    result[key] = {
      church: state.churches.find(church => key in church.churchReports),
      sources: state.sources.filter(source => source.churchReport === key),
    };
  });
  return result;
};

export const churchReportById = state => id => deepCopy(state.churchReports
  .find(churchReport => churchReport.id === id));

export const expenses = state => [...state.expenses];

export const expensesByDistrictReport = state => districtReport =>
  [...state.expenses.filter(expense => expense.districtReport === districtReport)];
//
export const getDistrictById = state => id => deepCopy(state.districts[id]);

export const getChurchById = state => id => deepCopy(state.churches[id]);

export const multipliers = state => (id) => {
  const church = deepCopy(state.churches[id]);
  const values = Object.values(church.dispursements);
  const total = values.reduce((a, b) => a + b);
  const balance = 1 - total;
  return Object.assign(church.dispursements, { total, balance });
};

export const churchBalance = state => id => state.monthly[id].balance;

export const getDistrictChurches = state => (districtId) => {
  const district = state.districts[districtId];
  return district.churches.map((churchId) => {
    const church = deepCopy(state.churches[churchId]);
    const monthly = state.monthly[church.monthly];
    return Object.assign(church, { monthly });
  });
};
