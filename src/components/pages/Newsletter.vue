<template>
  <md-layout md-column>
    <md-layout>
      <h1>Join us</h1>
    </md-layout>
    <md-layout >
      <form novalidate @submit.stop.prevent="submit">
        <md-input-container md-inline>
          <label>Name</label>
          <md-input v-model="name"></md-input>
        </md-input-container>
        <md-input-container md-inline>
          <label>Email</label>
          <md-input v-model="email"></md-input>
        </md-input-container>
      </form>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
    };
  },
};
</script>
