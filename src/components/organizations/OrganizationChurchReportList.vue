<template>
  <md-layout md-column>
    <h1>Church Reports</h1>
    <md-table-card>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>ID</md-table-head>
            <md-table-head>Title</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="churchReport in churchReports" :key="churchReport.id">
            <md-table-cell>{{ churchReport.id }}</md-table-cell>
            <md-table-cell>
              <router-link
                :to="{ name: 'organization-church-report', params: { churchReportId: churchReport.id }}">
                {{ churchReport.title }}
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
    churchReports: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
