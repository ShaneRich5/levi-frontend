<template>
  <md-layout md-align="center" md-flex="66">
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">{{ report.title }} - {{ report.id }}</h1>
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
                :value="source.name"
                v-on:keyup.enter="handleSourceUpdate(source.id, $event.target.value, source.amount)"/>
            </md-table-cell>
            <md-table-cell>
              <input
                type="number"
                :value="source.amount"
                v-on:keyup.enter="handleSourceUpdate(source.id, source.name, $event.target.value)"/>
            </md-table-cell>
            <md-table-cell v-for="(multiplier, index) in multipliers" :key="index">
              {{ formatCurrency(multiplier * source.amount) }}
            </md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell></md-table-cell>
            <md-table-cell>
              <input
                v-model="sourceName"
                v-on:keyup.enter="handleSourceCreation()"/>
            </md-table-cell>
            <md-table-cell v-for="i in 7" :key="i"></md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell></md-table-cell>
            <md-table-cell>Total</md-table-cell>
            <md-table-cell>{{ formatCurrency(totalRaised) }}</md-table-cell>
            <md-table-cell v-for="(multiplier, index) in multipliers" :key="index">
              {{ formatCurrency(totalRaised * multiplier) }}
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </md-layout>
</template>

<script>
import { mapActions } from 'vuex';
import Currency from './mixins/Currency';

export default {
  name: 'church-report',
  props: {
    report: Object,
  },
  mixins: [Currency],
  mounted() {
    this.$store.dispatch('createChurchReportSourceListener', this.report.id);
  },
  beforeDestroy() {
    this.$store.dispatch('removeSourceRef');
  },
  data() {
    return {
      sourceName: '',
      multipliers: [0.1, 0.1, 0.1, 0.1, 0.4, 0.6],
    };
  },
  computed: {
    church() {
      return this.$store.getters.churchById(this.report.church_id);
    },
    sources() {
      return this.$store.getters.sourcesByChurchReport(this.report.id);
    },
    totalRaised() {
      return this.sources.reduce((accumulator, source) => accumulator + Number(source.amount), 0);
    },
  },
  methods: {
    ...mapActions([
      'createSource',
      'updateSource',
    ]),
    handleSourceUpdate(id, name, amount) {
      if (name.length > 0 && !isNaN(amount) && amount > 0) {
        this.updateSource({ id, name, amount });
      }
    },
    handleSourceCreation() {
      if (this.sourceName.length > 0) {
        this.createSource({ reportId: this.report.id, name: this.sourceName });
      }
      this.sourceName = '';
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 10px;
}

.container {
  margin: 16px;
}

input {
  border: none;
  outline: none;
  background: white;
}
</style>
