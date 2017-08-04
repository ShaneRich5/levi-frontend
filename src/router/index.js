import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/pages/About';
import HomePage from '@/components/pages/HomePage';
import LoginPage from '@/components/auth/LoginPage';
import Dashboard from '@/components/layouts/Dashboard';
import WelcomePage from '@/components/pages/WelcomePage';
import MainLayout from '@/components/layouts/MainLayout';
import PageNotFound from '@/components/pages/PageNotFound';
import RegistrationPage from '@/components/auth/RegistrationPage';
import UserPage from '@/components/users/UserPage';
import OrganizationForm from '@/components/organizations/OrganizationForm';
import OrganizationPage from '@/components/organizations/OrganizationPage';
import OrganizationList from '@/components/organizations/OrganizationList';
import Organization from '@/components/organizations/Organization';
import OrganizationChurchReport from '@/components/organizations/OrganizationChurchReport';
import OrganizationDistrictReport from '@/components/organizations/OrganizationDistrictReport';
import OrganizationJournal from '@/components/organizations/OrganizationJournal';
import OrganizationReportList from '@/components/organizations/OrganizationReportList';

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

const generalPages = [
  { path: '', component: HomePage, name: 'home' },
  { path: '/login', component: LoginPage, name: 'login', beforeEnter: onlyGuest },
  { path: '/register', component: RegistrationPage, name: 'register', beforeEnter: onlyGuest },
  { path: '/about', component: About, name: 'About' },
];

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: generalPages,
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
          {
            path: ':organizationId',
            component: Organization,
            name: 'organization',
            props: true,
            children: [
              { path: 'reports', component: OrganizationReportList, name: 'organization-reports', props: true },
              { path: 'church-reports/:churchReportId', component: OrganizationChurchReport, name: 'organization-church-report', props: true },
              { path: 'district-reports/:districtReportId', component: OrganizationDistrictReport, name: 'organization-district-report', props: true },
              { path: 'journals/:journalId', component: OrganizationJournal, name: 'organization-journal', props: true },
            ],
          },
        ],
      },
      { path: 'users', component: UserPage, name: 'users' },
    ],
  },
  { path: '*', component: PageNotFound, name: 'PageNotFound' },
];

export default new Router({
  mode: 'history',
  routes,
});
