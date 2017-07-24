<template>
<div>
  <md-table-card>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Name</md-table-head>
          <md-table-head>Street</md-table-head>
          <md-table-head>Parish</md-table-head>
          <md-table-head>Country</md-table-head>
          <md-table-head>Types</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row
          v-for="organization in organizations"
          :key="organization.id"
        >
          <md-table-cell>
            <router-link
              :to="{ name: 'organization', params: { id: organization.id }}">
            {{ organization.name }}
            </router-link>
          </md-table-cell>
          <md-table-cell>{{ organization.address.street }}</md-table-cell>
          <md-table-cell>{{ organization.address.parish }}</md-table-cell>
          <md-table-cell>{{ organization.address.country }}</md-table-cell>
          <md-table-cell>
            <md-chip
              v-for="(organizationType, index) in mapTypes(organization.types)"
              :key="index"
            >{{ organizationType }}</md-chip>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </md-table-card>
  <router-link :to="{ name: 'organization-form' }">
      <md-button class="md-raised md-primary">New Organization</md-button>
    </router-link>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['organizations', 'organizationTypes']),
  },
  methods: {
    mapTypes(types) {
      return this.organizationTypes
        .filter(organizationType => types.indexOf(organizationType.id) !== -1)
        .map(organizationType => organizationType.name);
    },
  },
};
</script>

<style scoped>

</style>
