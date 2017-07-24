import api from '../../../api';
import * as types from '../../mutation-types';
import router from '../../../router';

export const fetchOrganizations = ({ commit }) => {
  api.getOrganizations((data) => {
    const { organizations, nationalOffices, districtOffices, churches } = data;
    commit(types.ORGANIZATIONS_LOADED, organizations);
    commit(types.NATIONAL_OFFICES_LOADED, nationalOffices);
    commit(types.DISTRICT_OFFICES_LOADED, districtOffices);
    commit(types.CHURCHES_LOADED, churches);
  });
};

export const fetchOrganization = ({ commit }, id) => {
  api.getOrganization(id, (data) => {
    const { organization } = data;
    commit(types.ORGANIZATION_LOADED, organization);
  });
};

export const createOrganization = ({ commit }, organization) => {
  api.saveOrganization(organization, () => router.push({ name: 'dashboard' }));
};

export const updateOrganization = ({ commit }, organization) => {
  api.updateOrganization(organization, () => router.push({ name: 'dashboard' }));
};
