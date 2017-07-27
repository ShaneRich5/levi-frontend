<template>

          <div>
   
   <md-whiteframe class = "main-toolbar ">

  <md-theme name = "teal">
      
      <md-toolbar   >

     <router-link id = "nav" class = "nav-link " :to = " { name: 'levi' }" style = " text-decoration: none;  color: #ffffff; flex:1;">levi</router-link>
     
     
    <router-link class = "nav-link" :to = "{ name: 'Product' }" style = " text-decoration: none;  color: #ffffff; ">Product </router-link> 
     
     <router-link  class = "nav-link" :to = "{ name: 'Support' }" style = " text-decoration: none; color: #ffffff;"> Support </router-link>
     
         <md-button class = "md-raised md-accent">
         
          <router-link id = "navbutton" style = " text-decoration: none; color: #ffffff;" class = "nav-link" :to = "{ name: 'Support' }" > Sign
           in</router-link>
          
     
</md-button>
      </md-toolbar>
      
  </md-theme>
   
   </md-whiteframe>
   
   
   
   
    <router-view></router-view>


     

<!--
   <footer>
   
   <md-layout id = "container" md-gutter >
   
  <md-layout md-column md-gutter md-flex-xsmall="100" md-flex-small="100" md-flex-medium="33" md-flex-large="33" md-flex-xlarge="33">
   
    <md-layout class = "md-display-2">Company</md-layout>
    <md-layout>WHO are we ? </md-layout>
    <md-layout>Contact Us</md-layout>
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
-->
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
   
    .main-toolbar {
        
        position: -webkit-sticky;
        top : 1px;    
        width: 100%;
    }
    
/*
    .main-toolbar .md-toolbar {
        
        display: flex;
        justify-content: center;
        
    }
    .main-toolbar .nav-link {
        color: #ffffff;
      
    }
*/
    
    #nav {
        
        font-size: 55px;
    }
    
    #navbutton {
        text-transform: none;
        font-weight: bolder;
    }
      
    .nav-link {
/*        display: inline;*/
        font-family: Helvetica neue;
        cursor: pointer;
        font-size: 19px;
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

}
    
    footer {
        margin-top: 100px ;
margin-bottom: 60px ;
    }
    
    
    .router-link {
                 position: absolute;
                right: 0px;
    }
</style>
