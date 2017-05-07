<template>
  <md-table-card class="container">
    <h1>Monthly Financial Breakdown - {{ monthlyId }}</h1>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Source</md-table-head>
          <md-table-head>Total Raised</md-table-head>
          <md-table-head>Island Office</md-table-head>
          <md-table-head>District Office</md-table-head>
          <md-table-head>Departments</md-table-head>
          <md-table-head>Minister I/C</md-table-head>
          <md-table-head>Total</md-table-head>
          <md-table-head>Balance (To Church)</md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row v-for="(item, key, index) in monthly.raised" :key="key" v-if="key !== 'total'">
          <md-table-cell>{{ key }}</md-table-cell>
          <md-table-cell>
            <input type="number" :value="item" @input="updateField(key, $event.target.value)"></input>
          </md-table-cell>
          <md-table-cell v-for="(multiplier, i) in multipliers" :key="i">
            {{ formatCurrency(item * multiplier) }}
          </md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>Total</md-table-cell>
          <md-table-cell>{{ formatCurrency(monthly.raised.total) }}</md-table-cell>
          <md-table-cell v-for="(multiplier, i) in multipliers" :key="i">
            {{ formatCurrency(monthly.raised.total * multiplier) }}
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </md-table-card>
</template>

<script>
export default {
  name: 'monthly-financial-form',
  data() {
    return {
      monthlyId: this.$route.params.formId,
      multipliers: [0.1, 0.1, 0.1, 0.1, 0.4, 0.6],
    };
  },
  computed: {
    monthly() {
      return this.$store.getters.getMonthly(this.$data.monthlyId);
    },
  },
  methods: {
    updateField(key, value) {
      this.$store.dispatch('updateMonthlyField', { id: this.$data.monthlyId, field: key, value });
    },
    formatCurrency(value) {
      const val = (value / 1).toFixed(2).replace(',', '.');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
  background: transparent;
}
</style>
