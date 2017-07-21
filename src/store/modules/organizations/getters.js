import { deepCopy } from '../../util';

export const organizations = state => [...state.organizations];

export const organizationTypes = state => [...state.organizationTypes];

export const churchById = state => id =>
  deepCopy(state.organizations.find(organization => organization.id === +id));
