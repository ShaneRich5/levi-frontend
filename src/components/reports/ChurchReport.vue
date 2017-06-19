<template>
  <div>
    <h1>{{ id }}</h1>
    <md-table-card v-if="churchReport">
      <md-toolbar>
        <h1 class="md-title">{{ churchReport.title }}</h1>
      </md-toolbar>

      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head md-numeric>ID</md-table-head>
            <md-table-head>Name</md-table-head>
            <md-table-head md-numeric>Amount ($)</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="source in sources" :key="source.id">
            <md-table-cell>{{ source.id }}</md-table-cell>
            <md-table-cell>{{ source.name }}</md-table-cell>
            <md-table-cell>{{ source.amount }}</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ['id'],
  created() {
    this.loadChurchReportById(this.id);
  },
  computed: {
    churchReport() {
      return this.$store.getters.churchReportById(this.id);
    },
    ...mapGetters(['sources']),
  },
  methods: {
    ...mapActions(['loadChurchReportById']),
  },
};
</script>
