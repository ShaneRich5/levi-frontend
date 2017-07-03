<template>
  <div>
    <md-toolbar>
      <h2 class="md-title" style="flex: 1">Levi</h2>
      <router-link
        :to="{ name: 'pricing' }">Pricing</router-link>
    </md-toolbar>
    <div class="main-content">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<!--
  <div class = "">

    <div class = "navbar navbar-default navbar-fixed-top">

<div class = "container">
  <button class = "navbar-toggle" data-toggle = "collapse" data-target = ".navbar-collapse"
       name = "button" >
<span class = "navbar-toggle-Menu">Menu</span>
      </button>
      <router-link class = " navbar-brand" :to = "{ name: 'levi' }" style = "text-decoration:none;">levi</router-link>


      <div class = "collapse navbar-collapse">

        <ul class = " nav navbar-nav navbar-right">

          <li><a><router-link v-if = "!isAauthenticated" :to = "{ name: 'SignInpage' }">Sign In</router-link></a></li>
          <li><a><router-link v-if = "!isAauthenticated"  :to = "{ name: 'levi' }" >Sign Up</router-link></a></li>
          <li><a><router-link :to = "{ name: 'Product' }">product</router-link></a> </li>
          <li><a><router-link to = '/price'>price </router-link></a> </li>
          <li><a><router-link :to = "{ name: 'Support'}" >Support  </router-link></a> </li>
        </ul>

      </div>

      <router-link v-if = "isAauthenticated" class = "nav-link" :to="{ name: 'dashboard' }">Dashboard</router-link>
      <md-button v-if = "isAauthenticated" @click.native = "logout">Logout</md-button>

</div>
    </div>

  </div>

</template>
-->
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
