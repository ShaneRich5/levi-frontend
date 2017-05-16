<template>
  <div>
    <md-layout md-align="center" md-flex="66">
      <md-table-card>
        <md-toolbar>
          <h1 class="md-title">Monthly Financial Breakdown - {{ id }}</h1>
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
                  v-on:keyup.enter="handleSourceNameChanged(source.id, $event.target.value)"/>
              </md-table-cell>
              <md-table-cell>
                <input
                  type="number"
                  :value="source.amount"
                  v-on:keyup.enter="handleSourceAmountChanged(source.id, $event.target.value)"/>
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
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Currency from './mixins/Currency';

export default {
  name: 'monthly-financial-form',
  props: ['id'],
  mixins: [Currency],
  data() {
    return {
      sourceName: '',
      multipliers: [0.1, 0.1, 0.1, 0.1, 0.4, 0.6],
    };
  },
  computed: {
    churchReport() {
      return this.$store.getters.churchReportById(this.id);
    },
    districtReport() {
      if (this.churchReport === undefined) {
        return {};
      }
      return this.$store.getters.districtReportById(this.churchReport.districtReport);
    },
    church() {
      if (this.churchReport === undefined) {
        return {};
      }
      return this.$store.getters.churchById(this.churchReport.church);
    },
    sources() {
      if (this.churchReport === undefined) {
        return [];
      }
      return this.$store.getters.sourcesByChurchReport(this.churchReport.id);
    },
    totalRaised() {
      return this.sources.reduce((accumulator, source) => accumulator + Number(source.amount), 0);
    },
  },
  methods: {
    ...mapActions([
      'createSource',
      'updateSourceAmount',
      'updateSourceName',
    ]),
    handleSourceNameChanged(id, name) {
      if (name.length > 0) {
        this.updateSourceName({ id, name });
      }
    },
    handleSourceAmountChanged(id, amount) {
      if (!isNaN(amount) && amount >= 0) {
        this.updateSourceAmount({ id, amount });
      }
    },
    handleSourceCreation() {
      if (this.sourceName.length !== 0) {
        const source = {
          name: this.sourceName,
          amount: 0,
          churchReport: this.id,
          districtReport: this.districtReport.id,
        };
        this.createSource(source);
        this.sourceName = '';
      }
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
