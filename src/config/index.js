const apiUrl = endpoint => `http://localhost:8000/api/${endpoint}`;
const tokenUrl = (endpoint, token) => `http://localhost:8000/api/${endpoint}?token=${token}`;

export default {
  api: {
    loginUrl: apiUrl('login'),
    registerUrl: apiUrl('register'),
    userFromTokenUrl: token => tokenUrl('user', token),
    user: apiUrl('user'),
  },
};
