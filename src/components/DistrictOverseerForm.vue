<template>
  <div>
    <h1>District Overseer's Monthly Report Form</h1>
    <h2>{{ districtId }} - {{ district.name }}</h2>

    <md-layout md-align="center" md-flex="35">
      <table v-once>
        <tr>
          <th></th>
          <th></th>
          <th colspan="4">Receipts</th>
        </tr>
        <tr v-for="(headingRow, headingRowIndex) in receiptsHeadings" :key="headingRowIndex">
          <th v-for="(heading, headingIndex) in headingRow" :key="headingIndex">{{ heading }}</th>
        </tr>
      
        <tr v-for="(church, churchIndex) in churches" :key="churchIndex">
          <td>{{ churchIndex + 1 }}</td>
          <td>
            <router-link :to="{ name: 'MonthlyFinancialForm', params: { monthlyId: church.monthly.id }}">
              {{ church['name'] }}
            </router-link>
          </td>
          <td v-for="(receipt, receiptIndex) in receiptRow(church)" :key="receiptIndex">
            {{ formatCurrency(receipt) }}
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Total</td>
          <td v-for="(column, index) in totals" :key="index">
            {{formatCurrency(column) }}
          </td> 
        </tr>
      </table>
    </md-layout>

{{ district.expenses }}

    <md-layout md-align="center" md-flex="35">
      <table>
        <tr>
          <th colspan="2">Expenses</th>
        </tr>
        <tr v-for="(expense, index) in district.expenses" :key="index">
          <td>
            <input 
              v-focus
              v-model="expense.name"
              v-on:keyup.enter="handleExpenseUpdate(index, expense)">
          </td>
          <td>
            <input 
              v-model="expense.cost"
              v-on:keyup.enter="handleExpenseUpdate(index, expense)">
          </td>
        </tr>
        <tr>
          <td>
            <input
              v-model="newExpense"
              v-on:keyup.enter="handleExpenseCreation()"
            />
          </td>
          <td>
          </td>
        </tr>
      </table>
    </md-layout>
  </div>
</template>

<script scoped>
import { mapActions } from 'vuex';
import Currency from './mixins/Currency';

export default {
  name: 'district-overseer-form',
  props: ['districtId'],
  mixins: [Currency],
  data() {
    return {
      newExpense: '',
      receiptsHeadings: [
        ['', '', 'A', 'B', 'C', '(A+B+C)'],
        ['', 'Name of Church', 'Received for National Office', 'Received for District Y.C.E.D.', 'Received for District Fund', 'Total from Local Church'],
      ],
    };
  },
  computed: {
    district() {
      return this.$store.getters.getDistrictById(this.districtId);
    },
    churches() {
      return this.$store.getters.getDistrictChurches(this.districtId);
    },
    totals() {
      return this.receiptTotals();
    },
  },
  methods: {
    handleExpenseUpdate(index, { name, cost }) {
      this.updateExpense({ id: this.districtId, index, name, cost });
    },
    handleExpenseCreation() {
      const districtExpense = { id: this.districtId, name: this.newExpense, cost: 0 };
      this.createExpense(districtExpense);
      this.newExpense = '';
    },
    receiptRow(church) {
      const dispursements = Object.assign({}, church.dispursements);
      delete dispursements.minister;
      delete dispursements.total;
      delete dispursements.balance;
      const receipts = Object.values(dispursements).map(dispursement =>
        dispursement * church.monthly.raised.total);
      const total = receipts.reduce((a, b) => a + b);
      return receipts.concat(total);
    },
    receiptTotals() {
      const receipts = this.churches.map(church => this.receiptRow(church));
      return receipts.reduce((a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[0], a[3] + b[3]]);
    },
    ...mapActions([
      'createExpense',
      'updateExpense',
    ]),
  },
};
</script>

<style scoped>
th, td {
  border: solid;
}
.container {
  margin: 0 16px;
}
</style>
