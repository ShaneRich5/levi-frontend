import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Contact from '@/components/Contact';
import LoginPage from '@/components/pages/LoginPage';
import Dashboard from '@/components/layouts/Dashboard';
import WelcomePage from '@/components/pages/WelcomePage';
import MainLayout from '@/components/layouts/MainLayout';
import PageNotFound from '@/components/pages/PageNotFound';
import RegistrationPage from '@/components/pages/RegistrationPage';
import NationalOffices from '@/components/NationalOffices';
import DistrictOffices from '@/components/DistrictOffices';
import Churches from '@/components/Churches';
import NationalOffice from '@/components/NationalOffice';
import DistrictOffice from '@/components/DistrictOffice';
import Church from '@/components/Church';

Vue.use(Router);

const onlyGuest = (to, from, next) => {
  if (localStorage.token === 'undefined' || localStorage.token === undefined) {
    next();
  } else {
    next(false);
  }
};

const requireAuth = (to, from, next) => {
  if (localStorage.token === 'undefined' || localStorage.token === undefined) {
    next({ name: 'login' });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Home, name: 'home' },
      { path: '/login', component: LoginPage, name: 'login', beforeEnter: onlyGuest },
      { path: '/register', component: RegistrationPage, name: 'register', beforeEnter: onlyGuest },
      { path: '/contact', component: Contact, name: 'Contact' },
      { path: '/about', component: About, name: 'About' },
    ],
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: requireAuth,
    children: [
      { path: '', component: WelcomePage, name: 'dashboard' },
      { path: 'national-offices', component: NationalOffices, name: 'national-offices' },
      { path: 'district-offices', component: DistrictOffices, name: 'district-offices' },
      { path: 'churches', component: Churches, name: 'churches' },
      { path: 'national-offices/:id', component: NationalOffice, name: 'national-office', props: true },
      { path: 'district-offices/:id', component: DistrictOffice, name: 'district-office', props: true },
      { path: 'churches/:id', component: Church, name: 'church', props: true },
    ],
  },
  { path: '*', component: PageNotFound, name: 'PageNotFound' },
];

export default new Router({
  mode: 'history',
  routes,
});
