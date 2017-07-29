import Vue from 'vue';
import Dashboard from '@/components/layouts/Dashboard';

describe('Dashboard.vue', () => {
  it('has a created hook', () => {
    const Constructor = Vue.extend(Dashboard);
    const vm = new Constructor().$mount();
    expect(typeof vm.created).toBe('function');
  });
});

