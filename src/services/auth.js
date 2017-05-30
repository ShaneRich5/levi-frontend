import Vue from 'vue';
import Config from '../config';

class Auth {
  static getToken() {
    return localStorage.getItem('token');
  }

  static setToken(token) {
    localStorage.setItem(token);
  }

  static deleteToken() {
    delete localStorage.token;
  }

  static check() {
    if (!Auth.getToken()) {
      return false;
    }

    // this.setup();

    return true;
  }

  static login(credentials, successHandler, errorHandler) {
    Vue.axios.post(Config.api.loginUrl, credentials)
      .then(response => response.data)
      .then((data) => {
        Auth.setToken(data.token);
        if (successHandler) {
          successHandler(data);
        }
      })
      .catch((error) => {
        if (errorHandler) {
          errorHandler(error);
        }
      });
  }

  static register(credentials, successHandler, errorHandler) {
    Vue.axios.post(Config.api.registerUrl, credentials)
      .then(response => response.data)
      .then((data) => {
        Auth.setToken(data.token);
        if (successHandler) {
          successHandler(data);
        }
      })
      .catch((error) => {
        if (errorHandler) {
          errorHandler(error);
        }
      });
  }

  static logout() {
    Auth.deleteToken();
  }
}

export default Auth;
