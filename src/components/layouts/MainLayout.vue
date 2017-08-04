<template>
<<<<<<< HEAD

<div>
   
   <md-whiteframe class = "main-toolbar  ">

  <md-theme name = "teal">
      
      <md-toolbar  class = "">
          <router-link class = "nav-link " :to = " { name: 'levi' }">levi</router-link>
          
          <router-link class = "nav-link" :to = "{ name: 'Product' }">
        Product
    </router-link> 
     
     <router-link class = "nav-link" :to = "{ name: 'Support' }">
        Support
    </router-link>
     
     
      </md-toolbar>
      
  </md-theme>
   
   </md-whiteframe>
   
   
   
   
    <router-view></router-view>



   <footer>
   
   <md-layout id = "container" md-gutter >
   
  <md-layout md-column md-gutter md-flex-xsmall="100" md-flex-small="100" md-flex-medium="33" md-flex-large="33" md-flex-xlarge="33">
   
    <md-layout class = "md-display-2">Company</md-layout>
    <md-layout>WHO are we ? </md-layout>
    <md-layout>      <router-link  :to = "{ name: 'Contact' }">
      Contact Us
    </router-link> </md-layout>
     <md-layout>Support</md-layout>
  </md-layout>
  
  
   <md-layout md-column md-gutter md-flex-xsmall="100" md-flex-small="100" md-flex-medium="33" md-flex-large="33" md-flex-xlarge="33">
   
    <md-layout class = "md-display-2">Product</md-layout>
    <md-layout>Business</md-layout>
    <md-layout> <router-link class = "" :to = "{ name: 'Product' }">
        Features
    </router-link> </md-layout>
        <md-layout>Pricing</md-layout>
  </md-layout>
  
     <md-layout md-column md-gutter  md-flex-xsmall="100" md-flex-small="100" md-flex-medium="33" md-flex-large="33" md-flex-xlarge="33">
    <md-layout></md-layout>
    <md-layout></md-layout>
        <md-layout></md-layout>
  </md-layout>


</md-layout>
    </footer>
</div>

=======
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
>>>>>>> 27e104af9bb91c94513441c530fa290b76f0a531
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
<<<<<<< HEAD
   
    .main-toolbar {
        
        position: -webkit-sticky;
        top : 1px;      
    }
    
    .nav-link {
/*        display: inline;*/
        font-family: Heiti SC;
        cursor: pointer;
        font-size: 30px;
        padding: 10px;
        font-weight: bolder;
    }
    
    .md-display-2 {
        font-family: Heiti SC;
        font-size: 20px;
    }
    #container > .md-layout {
  background-color: #F9FBFB;
  min-height: 100px;
  border-color: black;
  align-items: center;
  justify-content: center;
  border-style: dotted;
  border-width: 1px;
  padding: 8px;

=======
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
>>>>>>> 27e104af9bb91c94513441c530fa290b76f0a531
}
    
    footer {
        margin-top: 100px ;
margin-bottom: 60px ;
    }

</style>
