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
              :to="{ name: 'organization', params: { organizationId: organization.id }}">
            {{ organization.name }}
            </router-link>
          </md-table-cell>
          <md-table-cell>{{ organization.address.street }}</md-table-cell>
          <md-table-cell>{{ organization.address.parish }}</md-table-cell>
          <md-table-cell>{{ organization.address.country }}</md-table-cell>
          <md-table-cell>
            <md-chip
              v-for="(organizationType, index) in transformTypes(organization.types)"
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
import humps from 'humps';

export default {
  computed: {
    ...mapGetters(['organizations']),
  },
  methods: {
    transformTypes(types) {
      const data = humps.decamelizeKeys(types);
      return Object.keys(data).map((organization) => {
        const words = organization.split('_');
        const parts = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return parts.join(' ');
      });
    },
  },
};
</script>

<style scoped>

</style>
