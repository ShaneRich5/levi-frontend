import { deepCopy } from '../../util';

export const churchReports = state => [...state.churchReports];

export const districtReports = state => [...state.districtReports];

export const journals = state => [...state.journals];

export const churchReportsById = state => id =>
  deepCopy(state.churchReports.find(churchReport => churchReport.id === +id));

export const districtReportById = state => id =>
  deepCopy(state.districtReports.find(districtReport => districtReport.id === +id));

export const journalsById = state => id =>
  deepCopy(state.journals.find(journal => journal.id === +id));

export const churchReportById = state => id =>
  deepCopy(state.churchReports.find(report => report.id === +id));

export const sourcesByChurchReport = state => id =>
  [...state.sources.find(source => source.church_report_id === +id)];

export const sources = state => [...state.sources];

export const expenses = state => [...state.expenses];
