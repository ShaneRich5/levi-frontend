import { deepCopy } from '../../util';

export const churchReports = state => [...state.churchReports];

export const districtReports = state => [...state.districtReports];

export const journals = state => [...state.journals];

export const churchReportsByChurch = state => id =>
  [...state.churchReports.filter(report => report.church_id === +id)];

export const districtReportsByDistrictOffice = state => id =>
  [...state.districtReports.filter(report => report.district_office_id === +id)];

export const journalsByNationalOffice = state => id =>
  [...state.journals.filter(journal => journal.national_office_id === +id)];

export const churchReportById = state => id =>
  deepCopy(state.churchReports.find(report => report.id === +id));

export const sourcesByChurchReport = state => id =>
  [...state.sources.find(source => source.church_report_id === +id)];
