<template>
 
 <div id = "container">
    
     <md-layout id = "container" >
     <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="23" md-flex-large="23" md-flex-xlarge="20">

    </md-layout>
    
    
        
       <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="60" md-flex-xlarge="60">
    
  <md-card class="form-card">
    <md-card-header>
      <div class = "md-title">Create Account</div>
    </md-card-header>

    <form novalidate v-on:submit.prevent>
     
      <md-input-container>
        <label>First Name</label>
        <md-input v-model="credentials.firstName"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Last Name</label>
        <md-input v-model="credentials.lastName"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Email</label>
        <md-input v-model="credentials.email" type="email"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Password</label>
        <md-input v-model="credentials.password" type="password"></md-input>
      </md-input-container>


          
          <md-button
        @click="attemptRegistration(credentials)"
        class="md-raised md-primary">Create Account</md-button>  
    </form>

  </md-card>
  
      </md-layout>
      
      
          <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="23" md-flex-large="23" md-flex-xlarge="20">

    </md-layout>
    </md-layout>
  
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'registration-form',
  data() {
    return {
      credentials: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmation: '',
      },
    };
  },
  methods: {
    ...mapActions([
      'register',
    ]),
    attemptRegistration(credentials) {
      if (this.validateCredentials(credentials)) {
        this.register(credentials);
      }
    },
    validateCredentials(credentials) {
      return credentials.firstName.length !== 0
        && credentials.lastName.length !== 0
        && credentials.email.length !== 0
        && credentials.password.length !== 0;
    },
  },
};
</script>

<style scoped>
form {
  padding: 0 16px 16px 16px;
}

.form-card {
  width: 500px;
}
    
    
       #container > .md-layout {
/*  background-color: lightgrey;*/

  border-color: black;
  align-items: center;
  justify-content: center;
/*  border-style: dotted;*/
  border-width: 1px;
  padding: 8px;
 margin-top: 30px;
}

    
    .md-button {
         min-height: 43px !important;
      min-width: 46px !important;
      font-size: 16px !important;
      line-height: 0px; 
    }
      .md-card {
        width: 450px;
    }
    
        .md-raised {
        text-transform: none;
        font-family: Heiti SC;
        font-weight: bolder;
    }
    
    
    .md-title {
        font-family: Heiti SC;
        line-height: 1.1em;
        outline-width: thin;
        margin-top: 60px;
        text-align: center;
    }
    
</style>
