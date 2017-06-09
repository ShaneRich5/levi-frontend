import * as types from '../../mutation-types';

/* eslint-disable no-param-reassign */
/* eslint-disable space-before-function-paren */
export default {
  [types.LOAD_USER_STATUSES] (state, { users }) {
    state.users = users;
  },
};
