<template>
  <div class="container">
    <router-link :to="{ name: 'church', params: { id: churchReport.church_id }}">
      Church
    </router-link>
    <router-link :to="{ name: 'district-report', params: { id: churchReport.district_report_id }}">
      District Report
    </router-link>

    <md-table-card v-if="churchReport">
      <md-toolbar>
        <h1 class="md-title">{{ churchReport.title }}</h1>
      </md-toolbar>

      <md-table>
        <md-table-header>
            <md-table-row>
              <md-table-head>Id</md-table-head>
              <md-table-head>Source</md-table-head>
              <md-table-head>Raised</md-table-head>
              <md-table-head>Island Office</md-table-head>
              <md-table-head>District Office</md-table-head>
              <md-table-head>Departments</md-table-head>
              <md-table-head>Minister I/C</md-table-head>
              <md-table-head>Total</md-table-head>
              <md-table-head>Balance (To Church)</md-table-head>
            </md-table-row>
          </md-table-header>

        <md-table-body>
          <md-table-row v-for="source in sources" :key="source.id">
            <md-table-cell>{{ source.id }}</md-table-cell>
            <md-table-cell>
              <input
                type="text"
                :value="source.name"
                v-on:keyup.enter="handleSourceNameUpdate(source.id, $event.target.value)"
              />
            </md-table-cell>
            <md-table-cell>
              <input
                type="number"
                :value="source.amount"
                @keyup.enter="handleSourceAmountUpdate(source.id, $event.target.value)"
              />
            </md-table-cell>
            <md-table-cell></md-table-cell>
            <md-table-cell></md-table-cell>
            <md-table-cell></md-table-cell>
            <md-table-cell></md-table-cell>
            <md-table-cell></md-table-cell>
            <md-table-cell></md-table-cell>
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
    this.listenForSourceUpdates(this.id);
  },
  computed: {
    churchReport() {
      return this.$store.getters.churchReportById(this.id);
    },
    ...mapGetters(['sources']),
  },
  methods: {
    ...mapActions([
      'loadChurchReportById',
      'listenForSourceUpdates',
      'updateSourceName',
      'updateSourceAmount',
    ]),
    handleSourceNameUpdate(id, name) {
      this.updateSourceName({ id, name });
    },
    handleSourceAmountUpdate(id, amount) {
      this.updateSourceAmount({ id, amount });
    },
  },
};
</script>

<style scoped>
.container {
  margin: 15px;
}
</style>
