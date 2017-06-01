<template>
  <md-layout md-align="center" md-flex="66">
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">{{ journal.title }}</h1>
      </md-toolbar>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>No.</md-table-head>
            <md-table-head>Account Description</md-table-head>
            <md-table-head>Account No.</md-table-head>
            <md-table-head>Amount</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="(account, index) in journal.accounts">
            <md-table-cell>{{ index + 1 }}</md-table-cell>
            <md-table-cell>{{ account.name }}</md-table-cell>
            <md-table-cell>10</md-table-cell>
            <md-table-cell>{{ formatCurrency(account.amount) }}</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </md-layout>
</template>

<script>
import Currency from '../mixins/Currency';

export default {
  name: 'journal-voucher',
  props: {
    journal: Object,
  },
  mixins: [Currency],
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.container {
  margin: 30px 15px;
}
</style>
