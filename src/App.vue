<template>
  <div id="app" >
    <!--
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
    </md-toolbar>

    -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('setDistrictRef');
    this.$store.dispatch('setChurchRef');
    this.$store.dispatch('setDistrictReportRef');
    this.$store.dispatch('setChurchReportRef');
    this.$store.dispatch('setSourceRef');
    this.$store.dispatch('setExpenseRef');
  },
  beforeDestroy() {
    this.$store.dispatch('removeDistrictRef');
    this.$store.dispatch('removeChurchRef');
    this.$store.dispatch('removeDistrictReportRef');
    this.$store.dispatch('removeChurchReportRef');
    this.$store.dispatch('removeSourceRef');
    this.$store.dispatch('removeExpenseRef');
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
