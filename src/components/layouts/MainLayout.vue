<template>
  <div class="container">
    <md-toolbar>
      <md-icon>menu</md-icon>
      <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
      <h2 class="md-title" style="flex: 1;">Levi</h2>
      <router-link v-if="!isAauthenticated" class="nav-link" :to="{ name: 'login' }">Login</router-link>
      <router-link v-if="!isAauthenticated" class="nav-link" :to="{ name: 'register' }">Register</router-link>
      <router-link v-if="isAauthenticated" class="nav-link" :to="{ name: 'dashboard' }">Dashboard</router-link>
      <md-button v-if="isAauthenticated" @click.native="logout">Logout</md-button>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'main-layout',
  data() {
    return {
    };
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
