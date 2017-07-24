<template>
  <div>
    <md-layout md-flex>
      <router-link :to="{ name: 'organizations' }">
        <md-icon>arrow_back</md-icon>
      </router-link>
      <div style="flex-grow: 1;"></div>
      <router-link
        :to="{ name: 'organization-form'}"
      >Edit</router-link>
    </md-layout>

    <md-layout md-vertical-align="center" md-column>
      <h1>{{ organization.name }}</h1>
      <p><md-icon>location_on</md-icon>{{ organization.address.street }}, {{ organization.address.country }}</p>
    </md-layout>


  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    organization() {
      return this.$store.getters.organizationById(this.id);
    },
  },
};
</script>

<style>

</style>
