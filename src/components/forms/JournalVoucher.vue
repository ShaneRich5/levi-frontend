<template>
  <div class="container">
    <h1>{{ journal.title }}</h1>
    <md-layout md-align="center" md-flex="35">
      <table>
        <tr>
          <th>No.</th>
          <th>Account Description</th>
          <th>Account No.</th>
          <th>Amount</th>
        </tr>
        <tr v-for="(account, index) in journal.accounts">
          <td>{{ index + 1 }}</td>
          <td>{{ account.name }}</td>
          <td>10</td>
          <td>{{ formatCurrency(account.amount) }}</td>
        </tr>
      </table>
    </md-layout>
  </div>
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
