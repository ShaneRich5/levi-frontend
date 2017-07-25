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

    <md-layout v-if="organization.types.church">
      Church Reports
    </md-layout>

    <md-layout v-if="organization.types.districtOffice">
      District Office Reports
    </md-layout>

    <md-layout md-column v-if="organization.types.nationalOffice">
      Journal Reports
      <md-button class="md-primary md-raised" @click="addJournal">Create Journal</md-button>
    </md-layout>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['id'],
  created() {
    // this.fetchReportsByOrganization(this.organization.types);
  },
  computed: {
    organization() {
      return this.$store.getters.organizationById(this.id);
    },
  },
  methods: {
    // ...mapActions(['fetchReportsByOrganization']),
    ...mapActions(['addJournalToNationalOffice']),
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
