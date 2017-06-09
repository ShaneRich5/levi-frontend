import { deepCopy } from '../../util';

export const churchReports = state => [...state.churchReports];

export const districtReports = state => [...state.districtReports];

export const journals = state => [...state.journals];

export const churchReportById = state => id =>
  deepCopy(state.churchReports.find(report => report.id === +id));

export const sourcesByChurchReport = state => id =>
  [...state.sources.find(source => source.church_report_id === +id)];
