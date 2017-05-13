<template>
  <div id="app">
    <md-toolbar>
      <router-link to="/">
        <h2 class="md-title" style="flex: 1">Levi</h2>
      </router-link>
      <router-link :to="{ name: 'Districts' }">
        <md-button>Districts</md-button>
      </router-link>
      <router-link :to="{ name: 'Churches' }">
        <md-button>Churches</md-button>
      </router-link>
      <router-link to="/contact">
        <md-button>Contact</md-button>
      </router-link>
      <md-menu>
        <md-button md-menu-trigger>Forms</md-button>
        <md-menu-content>
          <router-link :to="{ name: 'DistrictOverseerForm', params: { districtId: 1 }}"><md-menu-item>District</md-menu-item></router-link>
          <router-link :to="{ name: 'MonthlyFinancialForm', params: { monthlyId: 1 }}"><md-menu-item>Monthly</md-menu-item></router-link>
        </md-menu-content>
      </md-menu>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('setDistrictRef');
    this.$store.dispatch('setChurchRef');
  },
  beforeDestroy() {
    this.$store.dispatch('removeDistrictRef');
    this.$store.dispatch('removeChurchRef');
  },
  computed: {
    ...mapGetters([
      'test',
    ]),
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  margin-top: 0;
}

a > button.md-button {
  color: white;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
