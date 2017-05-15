<template>
  <div class="container">
    <md-layout md-align="center" md-flex="66">
      <h1>{{ church.name }}</h1>
    </md-layout>
    <md-layout md-align="center" md-flex="66">
      <router-link
        :to="{ name: 'District', params: { id: district.id }}">
        <h1>{{ district.name }}</h1>
      </router-link>
    </md-layout>
    <md-layout md-align="center" md-flex="66">
      <md-table-card>
        <md-toolbar>
          <h1 class="md-title">Monthly Financial Breakdown</h1>
        </md-toolbar>
        <md-table>
          <md-table-header>
            </md-table-row>
              <md-table-head>Id</md-table-head>
              <md-table-head>District Form</md-table-head>
            </md-table-row>
          </md-table-header>
          <md-table-body>
            <md-table-row v-for="report in churchReports" :key="report.id">
              <md-table-cell>
                <router-link
                  :to="{ name: 'ChurchReport', params: { id: report.id }}">
                  {{ report.id }}
                </router-link>
              </md-table-cell>
              <md-table-cell>
                <router-link
                  :to="{ name: 'DistrictReport', params: { id: report.districtReport }}">
                  {{ report.districtReport }}
                </router-link>
              </md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-table-card>
    </md-layout>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    church() {
      return this.$store.getters.churchById(this.id);
    },
    district() {
      return this.$store.getters.districtById(this.church.district);
    },
    churchReports() {
      return this.$store.getters.churchReportsByChurch(this.id);
    },
  },
};
</script>

<style>
.container {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
