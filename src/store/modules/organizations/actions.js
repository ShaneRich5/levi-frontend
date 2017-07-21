import api from '../../../api';
import * as types from '../../mutation-types';
import router from '../../../router';

export const fetchOrganizationTypes = ({ commit }) => {
  api.getOrganizationTypes((data) => {
    const { organizationTypes } = data;
    commit(types.ORGANIZATION_TYPES_LOADED, organizationTypes);
  });
};

export const fetchOrganizations = ({ commit }) => {
  api.getOrganizations((data) => {
    const { organizations } = data;
    commit(types.ORGANIZATIONS_LOADED, organizations);
  });
};

export const fetchOrganization = ({ commit }, id) => {
  api.getOrganization(id, (data) => {
    const { organization } = data;
    commit(types.ORGANIZATION_LOADED, organization);
  });
};

export const createOrganization = ({ commit }, { name, street, parish, country }) => {
  api.saveOrganization({ name, street, parish, country }, () => router.push('/dashboard'));
};
