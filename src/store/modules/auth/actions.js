import axios from 'axios';
import router from '../../../router';
import Config from '../../../config';
import * as types from '../../mutation-types';

export const login = ({ commit }, { email, password }) => {
  axios.post(Config.api.loginUrl, { email, password })
    .then(response => response.data)
    .then((data) => {
      const { token, user } = data;
      localStorage.token = token;
      commit(types.LOGIN, { user, token });
      router.push('/');
    })
    .catch();
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
  commit(types.LOGOUT);
  delete localStorage.token;
  router.push('/');
};
