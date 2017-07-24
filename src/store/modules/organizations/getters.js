export const organizations = state => [...state.organizations];

export const organizationById = state => id =>
  JSON.parse(JSON.stringify(state.organizations.find(organization => organization.id === +id)));

export const nationalOffices = state => [...state.nationalOffices];

export const nationalOfficeById = state => id =>
  JSON.parse(JSON.stringify(state.nationalOffices
    .find(nationalOffice => nationalOffice.id === +id)));

export const districtOffices = state => [...state.districtOffices];

export const districtOfficeById = state => id =>
  JSON.parse(JSON.stringify(state.districtOffices
    .find(districtOffice => districtOffice.id === +id)));

export const churches = state => [...state.churches];

export const churchById = state => id =>
  JSON.parse(JSON.stringify(state.churches.find(church => church.id === +id)));
