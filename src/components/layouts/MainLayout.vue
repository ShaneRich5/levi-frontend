<template>
  <div>
    <md-toolbar>
      <router-link class="md-title" style="flex: 1" :to="{ name: 'home' }">Levi</router-link>
      <h2 class="md-title" style="flex: 1">
        Levi
      </h2>
      <router-link class="session-links" v-if = "!isAuthenticated" :to = "{ name: 'login' }">Login</router-link>
      <router-link class="session-links" v-if = "!isAuthenticated"  :to = "{ name: 'register' }" >Register</router-link>
      <router-link class="session-links" v-if = "isAuthenticated" :to = "{ name: 'dashboard' }">Dashboard</router-link>
    </md-toolbar>
    <div class="main-content">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
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
      'isAuthenticated',
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
.session-links {
  margin-right: 10px;
}

.md-toolbar.md-theme-default {
  background-color: transparent;
}

.md-toolbar * {
  color: black;
}

.main-content {
    padding: 16px;
    -ms-flex: 1;
    flex: 1;
    overflow: auto;
    background-color: #fff;
    transform: translate3D(0,0,0);
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-delay: .2s;
}

.container {
    max-width: 960px;
    margin: 0 auto;
}

</style>
