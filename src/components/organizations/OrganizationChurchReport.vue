<template>
  <div>
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">{{ churchReport.title }}</h1>
      </md-toolbar>
      <md-table>
        <md-table-header>
          <md-table-row>
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
          <md-table-row
            v-for="source in sources"
            :key="source.id">
            <md-table-cell>
              <input
                type="text"
                class="editbox"
                :value="source.name"
                v-on:keyup.enter="handleSourceNameUpdate(source.id, $event.target.value)">
            </md-table-cell>
            <md-table-cell>
              <input
                type="text"
                class="editbox"
                :value="source.amount"
                v-on:keyup.enter="handleSourceAmountUpdate(source.id, $event.target.value)">
            </md-table-cell>
            <md-table-cell v-for="(multiplier, index) in multipliers" :key="index">
              {{ formatCurrency(source.amount * multiplier) }}
            </md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>
              <input
                type="text"
                class="editbox"
                :value="newSource"
                v-on:keyup.enter="createSource(newSource)">
            </md-table-cell>
            <md-table-cell></md-table-cell>
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
import { mapGetters, mapActions } from 'vuex';
import Currency from '../mixins/Currency';

export default {
  props: ['organizationId', 'churchReportId'],
  mixins: [Currency],
  data() {
    return {
      newSource: '',
      multipliers: [0.1, 0.1, 0.1, 0.1, 0.4, 0.6],
    };
  },
  created() {
    this.fetchSourcesForChurchReport(this.churchReportId);
    this.listenForSourceChangesOnChurchReport(this.churchReportId);
  },
  beforeDestroy() {
    this.invalidateSources();
  },
  methods: {
    ...mapActions([
      'fetchSourcesForChurchReport',
      'invalidateSources',
      'updateSourceNameOnChurchReport',
      'updateSourceAmountOnChurchReport',
      'createSourceOnChurchReport',
      'listenForSourceChangesOnChurchReport',
    ]),
    createSource(name) {
      if (name === '') {
        return;
      }
      const churchReport = this.churchReport.id;
      this.createSourceOnChurchReport({ churchReport, name });
      this.newSource = '';
    },
    handleSourceNameUpdate(id, name) {
      const churchReport = this.churchReport.id;
      this.updateSourceNameOnChurchReport({ id, churchReport, name });
    },
    handleSourceAmountUpdate(id, amount) {
      const churchReport = this.churchReport.id;
      this.updateSourceAmountOnChurchReport({ id, churchReport, amount });
    },
  },
  computed: {
    ...mapGetters(['sources']),
    churchReport() {
      return this.$store.getters.churchReportById(this.churchReportId);
    },
  },
};
</script>

<style scoped>
.editbox {
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
}
</style>
