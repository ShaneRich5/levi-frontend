import * as types from '../../mutation-types';

/* eslint-disable no-param-reassign */
/* eslint-disable space-before-function-paren */
export default {
  [types.ORGANIZATIONS_LOADED] (state, organizations) {
    state.organizations = [...organizations];
  },
  [types.ORGANIZATION_LOADED] (state, organization) {
    state.organizations = [organization];
  },
  [types.ORGANIZATION_TYPES_LOADED] (state, organizationTypes) {
    state.organizationTypes = [...organizationTypes];
  },
};
