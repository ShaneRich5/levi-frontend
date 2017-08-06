// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css';
import 'vue-material/dist/vue-material.css';
import axios from 'axios';
import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueAxios from 'vue-axios';
import { sync } from 'vuex-router-sync';
import App from './App';
import router from './router';
import store from './store';
import './assets/global.css';

sync(store, router);

Vue.use(VueMaterial);
Vue.material.registerTheme({
  default: {
    primary: {
      color: 'blue',
      hue: 600,
    },
  },
  button: {
    accent: 'grey',
    hue: 200,
  },
  teal: {
    primary: 'white',
    accent: 'blue',
  },
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

Vue.directive('focus', {
  inserted: el => Vue.nextTick(() => el.focus()),
});

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
