<template>
  <div>
    <h1>National Office</h1>
    
    <p>{{ errorMessage }}</p>

    <md-layout md-align="center" md-flex="35">
      <form novalidate @submit.stop.prevent="submit">
        <md-input-container>
            <label>Name</label>
            <md-input v-model="nationalOffice.name"></md-input>
        </md-input-container>

        <md-layout>
          <md-input-container>
              <label>Street</label>
              <md-input v-model="nationalOffice.street"></md-input>
          </md-input-container>

            <md-input-container>
              <label>Parish</label>
              <md-input v-model="nationalOffice.parish"></md-input>
            </md-input-container>
        </md-layout>

        <md-button>Submit</md-button>
      </form>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'national-office-form',
  data() {
    return {
      nationalOffice: {
        name: '',
      },
      address: {
        street: '',
        parish: '',
        country: 'Jamaica',
      },
    };
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
