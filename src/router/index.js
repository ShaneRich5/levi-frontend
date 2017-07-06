import Vue from 'vue';
import Router from 'vue-router';
import Church from '@/components/entities/Church';
import DistrictOffice from '@/components/entities/DistrictOffice';
import NationalOffice from '@/components/entities/NationalOffice';
import ChurchReport from '@/components/reports/ChurchReport';
import DistrictReport from '@/components/reports/DistrictReport';
import Journal from '@/components/reports/Journal';
import About from '@/components/About';
import LoginPage from '@/components/pages/LoginPage';
import Dashboard from '@/components/layouts/Dashboard';
import WelcomePage from '@/components/pages/WelcomePage';
import MainLayout from '@/components/layouts/MainLayout';
import PageNotFound from '@/components/pages/PageNotFound';
import RegistrationPage from '@/components/pages/RegistrationPage';
import Product from '@/components/pages/Product';
import HomePage from '@/components/pages/HomePage';
import PricingPage from '@/components/pages/PricingPage';
import SupportPage from '@/components/pages/SupportPage';

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
      { path: '', component: HomePage, name: 'home' },
      { path: 'pricing', component: PricingPage, name: 'pricing' },
      { path: 'support', component: SupportPage, name: 'support' },
      { path: '/login', component: LoginPage, name: 'login', beforeEnter: onlyGuest },
      { path: '/register', component: RegistrationPage, name: 'register', beforeEnter: onlyGuest },
      { path: '/about', component: About, name: 'About' },
      { path: '/Product', component: Product, name: 'Product' },
    ],
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: requireAuth,
    children: [
      { path: '', component: WelcomePage, name: 'dashboard' },
      { path: 'churches/:id', component: Church, name: 'church', props: true },
      { path: 'district-offices/:id', component: DistrictOffice, name: 'district-office', props: true },
      { path: 'national-offices/:id', component: NationalOffice, name: 'national-office', props: true },
      { path: 'church-reports/:id', component: ChurchReport, name: 'church-report', props: true },
      { path: 'district-reports/:id', component: DistrictReport, name: 'district-report', props: true },
      { path: 'journal/:id', component: Journal, name: 'journal', props: true },
    ],
  },
  { path: '*', component: PageNotFound, name: 'PageNotFound' },
];

export default new Router({
  mode: 'history',
  routes,
});
