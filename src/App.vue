<template>
  <div id = "app" >
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
    this.$store.dispatch('loadUser');
  },
};
</script>

<style scoped>

/*
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

div.md-toolbar.md-theme-default {
  background: transparent;
}

.md-toolbar .nav-link, .md-toolbar h2, .md-toolbar button {
  color: #2c3e50;
}

.md-toolbar .nav-link {
  margin-right: 10px;
}

.md-toolbar .nav-link:hover {
  text-decoration: none;
}

h2 {
  line-height: 40px;
}

h1 {
  line-height: 25px;
}*/
</style>
