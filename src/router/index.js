import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/layouts/Dashboard';
import MainLayout from '@/components/layouts/MainLayout';
import PageNotFound from '@/components/pages/PageNotFound';
import RegistrationPage from '@/components/pages/RegistrationPage';
import LoginPage from '@/components/pages/LoginPage';
import JournalVoucher from '@/components/forms/JournalVoucher';
import Home from '@/components/Home';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ChurchReport from '@/components/ChurchReport';
import DistrictReport from '@/components/DistrictReport';
import Districts from '@/components/Districts';
import District from '@/components/District';
import Churches from '@/components/Churches';
import Church from '@/components/Church';
import NationalOfficeForm from '@/components/forms/NationalOfficeForm';

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
    name: 'dashboard',
    beforeEnter: requireAuth,
    children: [
      { path: '', component: JournalVoucher },
      { path: 'national-office', component: NationalOfficeForm, name: 'national-office' },
    ],
  },
  { path: '/districts', component: Districts, name: 'Districts' },
  { path: '/districts/:id', component: District, name: 'District', props: true },
  { path: '/district-reports/:id', component: DistrictReport, name: 'DistrictReport', props: true },
  { path: '/churches', component: Churches, name: 'Churches' },
  { path: '/churches/:id', component: Church, name: 'Church', props: true },
  { path: '/church-reports/:id', component: ChurchReport, name: 'ChurchReport', props: true },
  { path: '*', component: PageNotFound, name: 'PageNotFound' },
];

export default new Router({
  mode: 'history',
  routes,
});
