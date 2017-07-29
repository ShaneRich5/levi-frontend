<template>
  <div>
    <h1>Registration</h1>
    
    <p>{{ errorMessage }}</p>

    <md-layout md-align="center" md-flex="35">
      <form novalidate @submit.stop.prevent="submit">
        <md-input-container>
            <label>Email</label>
            <md-input v-model="credentials.email"></md-input>
        </md-input-container>

        <md-input-container >
            <label>Password</label>
            <md-input v-model="credentials.password" type="password"></md-input>
        </md-input-container>
        <md-button @click.native="registerUser(credentials)">Submit</md-button>
      </form>
    </md-layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'church-form',
  data() {
    return {
      church: {
        name: '',
        address: '',
      },
    };
  },
  methods: {
    ...mapActions([
      'createChurch',
    ]),
  },
};
</script>

<style scoped>
</style>
