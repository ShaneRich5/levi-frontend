import * as types from '../../mutation-types';

/* eslint-disable no-param-reassign */
/* eslint-disable space-before-function-paren */
export default {
  [types.LOGIN] (state, { token, user }) {
    state.token = token;
    state.user = user;
    state.authenticated = true;
  },
  [types.LOGOUT] (state) {
    state.token = null;
    state.user = {};
    state.authenticated = false;
  },
};
