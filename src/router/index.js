import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/About';
import HomePage from '@/components/pages/HomePage';
import LoginPage from '@/components/pages/LoginPage';
import Dashboard from '@/components/layouts/Dashboard';
import WelcomePage from '@/components/pages/WelcomePage';
import MainLayout from '@/components/layouts/MainLayout';
import PageNotFound from '@/components/pages/PageNotFound';
import RegistrationPage from '@/components/pages/RegistrationPage';
import OrganizationForm from '@/components/forms/OrganizationForm';
import OrganizationPage from '@/components/pages/OrganizationPage';
import OrganizationList from '@/components/entities/OrganizationList';
import Organization from '@/components/entities/Organization';

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
      { path: '/login', component: LoginPage, name: 'login', beforeEnter: onlyGuest },
      { path: '/register', component: RegistrationPage, name: 'register', beforeEnter: onlyGuest },
      { path: '/about', component: About, name: 'About' },
    ],
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: requireAuth,
    children: [
      { path: '', component: WelcomePage, name: 'dashboard' },
      {
        path: 'organizations',
        component: OrganizationPage,
        children: [
          { path: '', component: OrganizationList, name: 'organizations' },
          { path: 'new', component: OrganizationForm, name: 'organization-form' },
          { path: ':id', component: Organization, name: 'organization', props: true },
        ],
      },
    ],
  },
  { path: '*', component: PageNotFound, name: 'PageNotFound' },
];

export default new Router({
  mode: 'history',
  routes,
});
