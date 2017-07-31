import axios from 'axios';
import humps from 'humps';

/* eslint-disable no-param-reassign*/

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://api.levihq.com';
} else {
  axios.defaults.baseURL = 'http://localhost:8000';
}
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const transformStream = (transformer, stream) => {
  const { data } = stream;
  const formatedData = transformer(data);
  stream.data = formatedData;
  return stream;
};

axios.interceptors.request.use((config) => {
  const token = localStorage.token;

  if (token !== undefined && token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

axios.interceptors.request.use(
  config => transformStream(humps.decamelizeKeys, config),
  error => Promise.reject(error));

axios.interceptors.response.use(
  response => transformStream(humps.camelizeKeys, response),
  error => Promise.reject(error));

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
