<template>

  <div class = "">

    <div class = "navbar navbar-default navbar-fixed-top">

<div class = "container">
  <button class = "navbar-toggle" data-toggle = "collapse" data-target = ".navbar-collapse"
       name = "button" >
<span class = "navbar-toggle-Menu">Menu</span>
      </button>
      <router-link class = " navbar-brand" :to = "{ name: 'levi' }">levi</router-link>


      <div class = "collapse navbar-collapse">

        <ul class = " nav navbar-nav navbar-right">

          <li><a><router-link v-if = "!isAauthenticated" :to = "{ name: 'login' }">Sign In</router-link></a></li>
          <li><a><router-link v-if = "!isAauthenticated"  :to = "{ name: 'levi' }">Sign Up</router-link></a></li>
          <li><a><router-link to = '/Product'>product</router-link></a> </li>
          <li><a><router-link :to = "{ name: 'Support'}" >Support  </router-link></a> </li>
        </ul>

      </div>


      <router-link v-if="isAauthenticated" class="nav-link" :to="{ name: 'dashboard' }">Dashboard</router-link>
      <md-button v-if="isAauthenticated" @click.native="logout">Logout</md-button>

</div>
    </div>


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

</style>
