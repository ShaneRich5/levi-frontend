<template>
  <md-card class="form-card">
    <md-card-header>
      <div class="md-title">Login</div>
    </md-card-header>

    <form novalidate v-on:submit.prevent>
      <md-input-container>
        <label>Email</label>
        <md-input v-model="credentials.email" type="email"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Password</label>
        <md-input v-model="credentials.password" type="password"></md-input>
      </md-input-container>

      <md-button
        @click="attemptLogin(credentials)"
        class="md-raised md-primary">Login</md-button>
    </form>
  </md-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'login-form',
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions([
      'login',
    ]),
    attemptLogin(credentials) {
      if (this.validateCredentials(credentials)) {
        this.login(credentials);
      }
    },
    validateCredentials(credentials) {
      return credentials.email.length !== 0
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
