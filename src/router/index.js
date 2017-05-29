import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ChurchReport from '@/components/ChurchReport';
import DistrictReport from '@/components/DistrictReport';
import Districts from '@/components/Districts';
import District from '@/components/District';
import Churches from '@/components/Churches';
import Church from '@/components/Church';
import PageNotFound from '@/components/PageNotFound';
import RegistrationForm from '@/components/forms/RegistrationForm';
import LoginPage from '@/components/pages/LoginPage';

Vue.use(Router);

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/login', component: LoginPage, name: 'login' },
  { path: '/register', component: RegistrationForm, name: 'RegistrationForm' },
  { path: '/contact', component: Contact, name: 'Contact' },
  { path: '/about', component: About, name: 'About' },
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
