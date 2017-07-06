import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

axios.interceptors.request.use((config) => {
  const token = localStorage.token;

  if (token !== undefined && token !== null) {
    /* eslint-disable no-param-reassign*/
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

export const get = (endpoint, handleData, handleError) => {
  axios.get(endpoint).then(response => response.data)
    .then(handleData).catch(handleError);
};

export const post = (endpoint, data, handleReponse, handleError) => {
  axios.post(endpoint, data).then(response => response.data)
    .then(handleReponse).catch(handleError);
};

export const update = (endpoint, data, handleReponse, handleError) => {
  axios.put(endpoint, data).then(response => response.data)
    .then(handleReponse).catch(handleError);
};

export const requestor = axios;
