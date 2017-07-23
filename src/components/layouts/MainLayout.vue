<template>

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
    }
    
    .nav-link {
/*        display: inline;*/
        font-family: Heiti SC;
        cursor: pointer;
        font-size: 30px;
        padding: 10px;
        font-weight: bolder;
    }
</style>
