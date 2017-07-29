<template>
  <md-layout md-column>
    <md-layout md-column v-if="churchReports.length > 0">
      <church-report-list
        :church-reports="churchReports"></church-report-list>
    </md-layout>

    <md-layout md-column v-if="districtReports.length > 0">
      <district-report-list :district-reports="districtReports"></district-report-list>
    </md-layout>

    <md-layout md-column v-if="journals.length > 0">
      <journal-list :journals="journals"></journal-list>
    </md-layout>
  </md-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import OrganizationJournalList from './OrganizationJournalList';
import OrganizationDistrictReportList from './OrganizationDistrictReportList';
import OrganizationChurchReportList from './OrganizationChurchReportList';

export default {
  components: {
    'journal-list': OrganizationJournalList,
    'district-report-list': OrganizationDistrictReportList,
    'church-report-list': OrganizationChurchReportList,
  },
  computed: {
    ...mapGetters(['journals', 'districtReports', 'churchReports']),
  },
};
</script>
