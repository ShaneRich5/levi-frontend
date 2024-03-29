export const organizations = state => [...state.organizations];

export const organizationById = state => (id) => {
  const found = state.organizations.find(organization => organization.id === +id);

  if (found === null || found === undefined) {
    return {};
  }

  return JSON.parse(JSON.stringify(found));
};

export const nationalOffices = state => [...state.nationalOffices];

export const nationalOfficeById = state => (id) => {
  const office = state.nationalOffices.find(nationalOffice => nationalOffice.id === +id);
  if (office === undefined || office === null) {
    return {};
  }
  return JSON.parse(JSON.stringify(office));
};

export const districtOffices = state => [...state.districtOffices];

export const districtOfficeById = state => id =>
  JSON.parse(JSON.stringify(state.districtOffices
    .find(districtOffice => districtOffice.id === +id)));

export const churches = state => [...state.churches];

export const churchById = state => id =>
  JSON.parse(JSON.stringify(state.churches.find(church => church.id === +id)));
