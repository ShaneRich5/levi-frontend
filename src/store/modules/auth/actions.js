import axios from 'axios';
import Config from '../../../config';
import * as types from '../../mutation-types';

export const login = ({ commit }, { email, password }) => {
  axios.post(Config.api.loginUrl, { email, password })
    .then(response => response.data)
    .then((data) => {
      const { token, user } = data;
      localStorage.token = token;
      commit(types.LOGIN, { user, token });
    })
    .catch();
};

export const loadUser = ({ commit }) => {
  const savedToken = localStorage.token;

  console.log(savedToken);

  if (savedToken === 'undefined') {
    return;
  }
  // axios.defaults.headers.common.Authorization = `Bearer ${savedToken}`;


  axios.get(Config.api.userFromTokenUrl(savedToken))
    .then(response => response.data)
    .then((data) => {
      const { user } = data;
      localStorage.token = savedToken;
      commit(types.LOGIN, { user, savedToken });
    })
    .catch(console.error);
};

export const e = axios;
