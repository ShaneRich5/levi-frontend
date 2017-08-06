<template>
 
  <div>
  
  
   <md-white-frame class = "main-toolbar">
   
    <md-toolbar>
       
        <router-link id = "nav" class = "nav-link " :to = " { name: 'home' }" style = " text-decoration: none;  color: #ffffff; flex:1;">levi</router-link>
        
        
 
      <router-link class = "session-links" v-if = "!isAuthenticated" :to = "{ name: 'login' }" style = " text-decoration: none;  color: #ffffff;">Sign In </router-link>
      
               <md-button class = "md-raised md-button">
      
                <router-link id = "navbutton"  v-if = "!isAuthenticated"  style = " text-decoration: none; color: #429bf4;" class = "nav-link" :to = "{ name: 'register' }" > 
           Create Account</router-link>
           
        </md-button>
      
      <router-link class="session-links" v-if = "isAuthenticated" :to = "{ name: 'dashboard' }">Dashboard</router-link>
    </md-toolbar>
    
    
    
           </md-white-frame>
           
           
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
/*
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
*/
    
    
        .main-toolbar {
        
        position: -webkit-sticky;
        top : 1px;    
        width: 100%;
    }
    
      #nav {
        font-size: 55px;
        font-weight: bolder;
    }
    
        #navbutton {
        text-transform: none;
        font-weight: bolder;
    }
    

</style>
