import { deepCopy } from './util';

export const totalDistrictExpense = state => (id) => {
  const expenses = [...state.districts[id].expenses];
  return expenses.reduce((accumulator, expense) => accumulator + expense.cost, 0);
};

export const districts = state => [...state.districts];

export const districtById = state => id =>
  deepCopy(state.districts.find(district => district.id === id));

export const churches = state => [...state.churches];

export const churchById = state => id => deepCopy(state.churches.find(church => church.id === id));

export const churchesByDistrict = state => districtId => [...state.churches
  .filter(church => church.district === districtId)];

export const districtReports = state => [...state.districtReports];

export const districtReportById = state => id =>
  deepCopy(state.districtReports.find(report => report.id === id));

export const districtReportsByDistrict = state => id =>
  [...state.districtReports.filter(districtReport => districtReport.district === id)];

export const churchReportsByChurch = state => id =>
  [...state.churchReports.filter(churchReport => churchReport.church === id)];

export const churchReports = state => [...state.churchReports];

export const churchReportById = state => id => deepCopy(state.churchReports
  .find(churchReport => churchReport.id === id));

export const sourcesByChurchReport = state => (id) => {
  const srcs = state.sources.filter(source => source.churchReport === id);
  return [...srcs];
};

export const sources = state => [...state.sources];

export const expenses = state => [...state.expenses];
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
