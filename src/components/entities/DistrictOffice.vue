<template>
  <div class="container">
    <h1>District Office</h1>

    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">Churches</h1>
      </md-toolbar>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head md-numeric>ID</md-table-head>
            <md-table-head md-numeric>Name</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="church in churches" :key="church.id">
            <md-table-cell>{{ church.id }}</md-table-cell>
            <md-table-cell>
              <router-link :to="{ name: 'church', params: { id: church.id }}">
                {{ church.name }}
              </router-link>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>

    <span></span>

    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">District Reports</h1>
      </md-toolbar>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head md-numeric>ID</md-table-head>
            <md-table-head>Title</md-table-head>
            <md-table-head>Corresponding Journal</md-table-head>
            <md-table-head>Date</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="report in districtReports" :key="report.id">
            <md-table-cell>{{ report.id }}</md-table-cell>
            <md-table-cell>
              <router-link :to="{ name: 'district-report', params: { id: report.id }}">
                {{ report.title }}
              </router-link>
            </md-table-cell>
            <md-table-cell>
              <router-link :to="{ name: 'journal', params: { id: report.journal_id }}">
                Journal
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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'district-office',
  props: ['id'],
  created() {
    this.loadDistrictReportsByDistrictOffice(this.id);
  },
  computed: {
    districtOffice() {
      return this.$store.getters.districtOfficeById(this.id);
    },
    churches() {
      return this.$store.getters.churchesByDistrictOffice(this.id);
    },
    ...mapGetters(['districtReports']),
  },
  methods: {
    ...mapActions(['loadDistrictReportsByDistrictOffice']),
  },
};
</script>

<style>
.container {
  margin-left: 15px;
  margin-right: 15px;
}
.md-table .md-table-cell .md-table-cell-container {
  padding: 0;
}
</style>
