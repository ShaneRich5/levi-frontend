<template>
  <div class="home">
    <h1 style = "font-size : 90px; margin-top: 70px;">{{ message }}</h1>


    <md-layout md-align = "center">
     <md-layout md-tag = "md-card" md-column md-flex = "30" md-flex-medium = "40" md-flex-small = "60"
      md-flex-xsmall = "90" class = "" >


      <md-card-header>
<div class="md-title">
 levi
</div>
</md-card-header>


<md-card-content>
<md-row>

<md-input-container>
 <label>First Name</label>
<md-input />
</md-input-container>



<md-input-container>
  <label>last Name</label>
<md-input />
</md-input-container>



<md-input-container>
  <label>Email</label>
<md-input type = "email" required/>
</md-input-container>


<md-input-container>
  <label> Choose a password</label>
<md-input type = "password" required/>
</md-input-container>

</md-row>
</md-card-content>



        </md-layout>
    </md-layout>
  </div>


</template>

<script>
export default {
  name: 'home',
  ready() {
    this.$store.dispatch('addTest', 1);
    this.$store.dispatch('addTest', 2);
    this.$store.dispatch('addTest', -1);
  },
  data() {
    return {
      message: 'Life Simplified',
    };
  },
};
</script>

<style scoped>
</style>
