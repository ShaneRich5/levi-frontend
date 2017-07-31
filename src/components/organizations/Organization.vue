<template>
  <div>
    <md-layout md-flex>
      <div style="flex-grow: 1;"></div>
      <router-link
        :to="{ name: 'organization-form'}"
      >Edit
      </router-link>
    </md-layout>

    <md-layout md-vertical-align="center" md-column>
      <h1>{{ organization.name }}</h1>
      <p><md-icon>location_on</md-icon>{{ organization.address.street }}, {{ organization.address.country }}</p>
      <md-button
        v-if="isNationalOffice()"
        class="md-primary md-raised"
        @click="addJournal">Create Journal</md-button>
    </md-layout>

    <router-link
      :to="{ name: 'organization-reports' }">Reports</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['organizationId'],
  computed: {
    organization() {
      return this.$store.getters.organizationById(this.organizationId);
    },
  },
  methods: {
    ...mapActions([
      'addJournalToNationalOffice',
    ]),
    isNationalOffice() {
      return 'nationalOffice' in this.organization.types;
    },
    addJournal() {
      const { nationalOffice } = this.organization.types;
      if (nationalOffice !== null) {
        this.addJournalToNationalOffice(this.organization.types.nationalOffice);
      }
    },
  },
};
</script>

<style>

</style>
