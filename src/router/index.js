import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Contact from '@/components/Contact';
import MonthlyFinancialForm from '@/components/MonthlyFinancialForm';
import DistrictOverseerForm from '@/components/DistrictOverseerForm';
import Districts from '@/components/Districts';
import District from '@/components/District';
import Churches from '@/components/Churches';
import Church from '@/components/Church';
import PageNotFound from '@/components/PageNotFound';

Vue.use(Router);

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/contact', component: Contact, name: 'Contact' },
  { path: '/about', component: About, name: 'About' },
  { path: '/districts', component: Districts, name: 'Districts' },
  { path: '/districts/:id', component: District, name: 'District', props: true },
  { path: '/churches', component: Churches, name: 'Churches' },
  { path: '/churches/:id', component: Church, name: 'Church', props: true },
  { path: '/forms/monthly/:monthlyId', component: MonthlyFinancialForm, name: 'MonthlyFinancialForm', props: true },
  { path: '/forms/district/:districtId', component: DistrictOverseerForm, name: 'DistrictOverseerForm', props: true },
  { path: '*', component: PageNotFound, name: 'PageNotFound' },
];

export default new Router({
  mode: 'history',
  routes,
});
