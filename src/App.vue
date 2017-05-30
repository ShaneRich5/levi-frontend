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

    <md-toolbar>
      <md-icon>menu</md-icon>
      <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
      <h2 class="md-title" style="flex: 1;">Levi</h2>
      <router-link v-if="!isAauthenticated" class="nav-link" :to="{ name: 'login' }">Login</router-link>
      <router-link v-if="!isAauthenticated" class="nav-link" :to="{ name: 'register' }">Register</router-link>
      <md-button v-if="isAauthenticated" @click.native="logout">Logout</md-button>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('loadUser');
  },
  computed: {
    ...mapGetters([
      'isAauthenticated',
    ]),
  },
  methods: {
    ...mapActions([
      'logout',
    ]),
  },
};
</script>

<style scoped>
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
</style>
