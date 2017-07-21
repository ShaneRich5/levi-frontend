<template>
  <md-layout md-column>
      <md-input-container>
        <label>Organization Name</label>
        <md-input v-model="organization.name"></md-input>
      </md-input-container>

      <md-layout>
        <h3>Address</h3>
      </md-layout>

      <md-layout>
        <md-input-container>
          <label>Street</label>
          <md-input v-model="organization.street"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Parish</label>
          <md-input v-model="organization.parish"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Country</label>
          <md-input disabled v-model="organization.country"></md-input>
        </md-input-container>
      </md-layout>

      <p>{{ organizationTypes }}</p>

      <md-button
        class="md-primary md-raised"
        @click="saveOrganization(organization)">Save</md-button>
  </md-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  created() {
    this.fetchOrganizationTypes();
  },
  data() {
    return {
      organization: {
        name: '',
        street: '',
        parish: '',
        country: 'Jamaica',
      },
    };
  },
  computed: {
    ...mapGetters(['organizationTypes']),
  },
  methods: {
    ...mapActions(['createOrganization', 'fetchOrganizationTypes']),
    saveOrganization(organization) {
      if (this.validate(organization)) {
        this.createOrganization(organization);
      }
    },
    validate({ name, street, parish }) {
      return name.length !== 0 && street.length !== 0 && parish.length !== 0;
    },
  },
};
</script>

<style scoped>

</style>
