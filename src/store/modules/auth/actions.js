import axios from 'axios';
import router from '../../../router';
import Config from '../../../config';
import api from '../../../api';
import * as types from '../../mutation-types';

const handleAuthentication = (commit, data) => {
  const { token, user } = data;
  localStorage.token = token;
  commit(types.LOGIN, { user, token });
  router.push({ name: 'dashboard' });
};

export const login = ({ commit }, { email, password }) => {
  api.login({ email, password }, (data) => {
    handleAuthentication(commit, data);
  });
};

export const register = ({ commit }, { firstName, lastName, email, password }) => {
  api.register({ email, password, firstName, lastName }, (data) => {
    handleAuthentication(commit, data);
  });
};

export const loadUser = ({ commit }) => {
  const savedToken = localStorage.token;

  if (savedToken === 'undefined' || savedToken === undefined) {
    return;
  }

  axios.get(Config.api.userFromTokenUrl(savedToken))
    .then(response => response.data)
    .then((data) => {
      const { user } = data;
      localStorage.token = savedToken;
      commit(types.LOGIN, { user, token: savedToken });
    })
    .catch(() => {
      delete localStorage.token;
      commit(types.LOGOUT);
    });
};

export const logout = ({ commit }) => {
  // should tell laravel
  commit(types.LOGOUT);
  delete localStorage.token;
  router.push('/');
};
