import axios from 'axios';
import Config from '../config';

export const login = () => {
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

export const register = () => {

};

export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = token;
};

export const getChurches = () => {

};
