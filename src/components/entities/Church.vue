<template>
  <div class="container">
    <h1>Church</h1>
    <p v-if="church">{{ church.name }}</p>
    <md-layout md-align="center" md-flex="66">
      <church-report
        v-for="report in churchReports"
        :key="report.id"
        :report="report"
      >
      </church-report>
    </md-layout>
  </div>
</template>

<script>
export default {
  props: ['id'],
  created() {
  },
  computed: {
  },
  methods: {
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
