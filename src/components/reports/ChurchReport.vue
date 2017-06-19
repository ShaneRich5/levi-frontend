<template>
  <div>
    <h1>{{ church.name }}</h1>
    <p>{{ church }}</p>
    <p>{{ churchReports }}</p>

    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head md-numeric>ID</md-table-head>
          <md-table-head>Title</md-table-head>
          <md-table-head>Date</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="report in churchReports" :key="report.id">
          <md-table-cell>{{ report.id }}</md-table-cell>
          <md-table-cell>
            {{ report.title }}
          </md-table-cell>
          <md-table-cell>{{ report.created_at }}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
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
