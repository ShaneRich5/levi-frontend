import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Home from '@/components/Home';
import About from '@/components/About';
import Contact from '@/components/Contact';

Vue.use(Router);

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/contact', component: Contact, name: 'Contact' },
  { path: '/about', component: About, name: 'About' },
  { path: '/hello', component: Hello, name: 'Hello' },
];

export default new Router({
  mode: 'history',
  routes,
});
