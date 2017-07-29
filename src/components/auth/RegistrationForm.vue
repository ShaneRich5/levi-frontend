<template>
  <md-card class="form-card">
    <md-card-header>
      <div class="md-title">Registration</div>
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
        class="md-raised md-primary">Register</md-button>
    </form>
  </md-card>
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
</style>
