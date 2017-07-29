<template>
  <md-layout md-column>
    <h1>District Reports</h1>
    <md-table-card>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>ID</md-table-head>
            <md-table-head>Title</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="districtReport in districtReports" :key="districtReport.id">
            <md-table-cell>{{ districtReport.id }}</md-table-cell>
            <md-table-cell>
              <router-link
                :to="{ name: 'organization-district-report', params: { districtReportId: districtReport.id }}">
                {{ districtReport.title }}
              </router-link>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </md-layout>
</template>

<script>
export default {
  props: {
    districtReports: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
