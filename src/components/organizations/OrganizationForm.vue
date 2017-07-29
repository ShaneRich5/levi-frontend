<template>
  <md-layout md-column>
      <md-input-container>
        <label>Organization Name</label>
        <md-input v-model="organization.name"></md-input>
      </md-input-container>

      <md-layout>
        <h3>Address</h3>
      </md-layout>

      <md-layout v-if="organization">
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

      <md-input-container>
        <label for="organization-type">Types</label>
        <md-select
          name="organization-type"
          id="movie"
          v-model="selectedType"
          @change="addOrganizationType(selectedType)"
        >
          <md-option
            v-for="organizationType in organizationTypes"
            :key="organizationType.id"
            :value="organizationType.id"
          >
            {{ organizationType.name }}
          </md-option>
        </md-select>
      </md-input-container>

      <div>
        <md-chip
          md-deletable
          v-for="organizationType in mapTypes(organization.types)"
          :key="organizationType.id"
          @delete="deleteOrganizationType(organizationType.id)"
        >
          {{ organizationType.name }}
        </md-chip>
      </div>

      <md-button
        class="md-primary md-raised"
        @click="saveOrganization(organization)">Save</md-button>
  </md-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      organization: {
        name: '',
        street: '',
        parish: '',
        country: 'Jamaica',
        types: [],
      },
      selectedType: '',
    };
  },
  computed: {
    ...mapGetters(['organizationTypes']),
  },
  methods: {
    ...mapActions(['createOrganization']),
    mapTypes(types) {
      return this.organizationTypes
        .filter(organizationType => types.indexOf(organizationType.id) !== -1);
    },
    addOrganizationType(id) {
      const selectedType = this.organizationTypes
        .find(organizationType => organizationType.id === id);

      if (this.organization.types.indexOf(selectedType) === -1) {
        this.organization.types.push(selectedType);
      }
    },
    deleteOrganizationType(id) {
      const index = this.organization.types
        .findIndex(organizationType => organizationType.id === id);

      const types = [...this.organization.types.slice(0, index),
        ...this.organization.types.slice(index + 1)];

      this.organization.types = types;
    },
    saveOrganization(organization) {
      if (this.validate(organization)) {
        this.createOrganization(organization);
      }
    },
    validate({ name, street, parish, types }) {
      return types.length !== 0 && name.length !== 0 && street.length !== 0 && parish.length !== 0;
    },
  },
};
</script>

<style scoped>

</style>
