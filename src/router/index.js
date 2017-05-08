import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Contact from '@/components/Contact';
import MonthlyFinancialForm from '@/components/MonthlyFinancialForm';
import DistrictOverseerForm from '@/components/DistrictOverseerForm';

Vue.use(Router);

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/contact', component: Contact, name: 'Contact' },
  { path: '/about', component: About, name: 'About' },
  { path: '/forms/monthly/:formId', component: MonthlyFinancialForm, name: 'MonthlyFinancialForm' },
  { path: '/forms/district/:formId', component: DistrictOverseerForm, name: 'DistrictOverseerForm' },
];

export default new Router({
  mode: 'history',
  routes,
});
