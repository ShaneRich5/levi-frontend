const debug = process.env.NODE_ENV !== 'production';
let baseUrl;

if (debug) {
  baseUrl = 'http://localhost:8000';
} else {
  baseUrl = 'http://levi-backend.herokuapp.com';
}
const apiUrl = endpoint => `${baseUrl}/api/${endpoint}`;
const tokenUrl = (endpoint, token) => `${baseUrl}/api/${endpoint}?token=${token}`;

export default {
  api: {
    loginUrl: apiUrl('login'),
    registerUrl: apiUrl('register'),
    userFromTokenUrl: token => tokenUrl('user', token),
    user: apiUrl('user'),
    nationOfficesUrl: apiUrl('national-offices'),
    districtOfficesUrl: apiUrl('district-offices'),
    churches: apiUrl('churches'),
  },
};
