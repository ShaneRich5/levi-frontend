import { deepCopy } from '../../util';

export const nationalOffices = state => [...state.nationalOffices];

export const districtOffices = state => [...state.districtOffices];

export const churches = state => [...state.churches];

export const nationalOfficeById = state => id =>
  deepCopy(state.nationalOffices.find(office => office.id === +id));

export const districtOfficeById = state => id =>
  deepCopy(state.districtOffices.find(office => office.id === +id));

export const churchById = state => id =>
  deepCopy(state.churches.find(church => church.id === +id));

export const districtOfficesByNationalOffice = state => id =>
  [...state.districtOffices.filter(office => office.id === +id)];

export const churchesByDistrictOffice = state => id =>
  [...state.churches.filter(church => church.id === +id)];
