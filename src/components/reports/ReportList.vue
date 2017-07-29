<template>
  <md-layout md-column>
    <h1>Id: {{ $route.params.organizationId }}</h1>
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
import JournalList from '../reports/JournalList';
import DistrictReportList from '../reports/DistrictReportList';
import ChurchReportList from '../reports/ChurchReportList';

export default {
  components: {
    'journal-list': JournalList,
    'district-report-list': DistrictReportList,
    'church-report-list': ChurchReportList,
  },
  computed: {
    ...mapGetters(['journals', 'districtReports', 'churchReports']),
  },
};
</script>
