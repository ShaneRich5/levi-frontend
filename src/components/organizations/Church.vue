<template>
  <div class="container">
    <h1>{{ church.title }}</h1>

    <md-table-card>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head md-numeric>ID</md-table-head>
            <md-table-head>Title</md-table-head>
            <md-table-head>Corresponding District Report</md-table-head>
            <md-table-head>Date</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="report in churchReports" :key="report.id">
            <md-table-cell>{{ report.id }}</md-table-cell>
            <md-table-cell>
              <router-link :to="{ name: 'church-report', params: { id: report.id }}">
                {{ report.title }}
              </router-link>
            </md-table-cell>
            <md-table-cell>
              <router-link :to="{ name: 'district-report', params: { id: report.district_report_id }}">
                District Report
              </router-link>
            </md-table-cell>
            <md-table-cell>{{ report.created_at }}</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: ['id'],
  created() {
    this.loadChurchReportsByChurch(this.id);
  },
  computed: {
    church() {
      return this.$store.getters.churchById(this.id);
    },
    ...mapGetters(['churchReports']),
  },
  methods: {
    ...mapActions(['loadChurchReportsByChurch']),
  },
};
</script>

<style scoped>
.container {
  margin-left: 15px;
  margin-right: 15px;
}
.md-table .md-table-cell .md-table-cell-container {
  padding: 0;
}
</style>
