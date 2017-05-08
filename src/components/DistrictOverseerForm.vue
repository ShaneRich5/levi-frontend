<template>
  <div>
    <h1>District Overseer's Monthly Report Form</h1>
    <h2>{{ districtId }} - {{ district.name }}</h2>

    <md-layout md-align="center" md-flex="35">
      <table class="form">
        <tr>
          <th class="no-border"></th>
          <th class="no-border"></th>
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
          <td class="no-border"></td>
          <td>Total</td>
          <td v-for="(column, index) in totals" :key="index">
            {{formatCurrency(column) }}
          </td> 
        </tr>
        <tr>
          <th></th>
          <th colspan="5">Expenses</th>
        </tr>
        <tr v-for="(expense, index) in district.expenses" :key="index">
          <td></td>
          <td colspan="4">
            <input
              v-focus
              v-model="expense.name"
              v-on:keyup.enter="handleExpenseUpdate(index, expense)">
          </td>
          <td>
            <input 
              type="number"
              v-model="expense.cost"
              v-on:keyup.enter="handleExpenseUpdate(index, expense)">
          </td>
        </tr>
        <tr>
          <td></td>
          <td colspan="4">
            <input
              v-model="newExpenseName"
              v-on:keyup.enter="handleExpenseCreation()"
            />
          </td>
          <td></td>
        </tr>
        <tr>
          <th></th>
          <th colspan="5">Summary</th>
        </tr>
        <tr>
          <td rowspan="4"></td>
          <td rowspan="4"> Testing</td>
          <td colspan="3">Total Expenses for the month</td>
          <td>$ {{ totalExpenses }}</td>
        </tr>
        <tr>
          <td colspan="3">Net Income/(Expenditure) for the Month</td>
          <td>{{ netIncome }}</td>
        </tr>
        <tr>
          <td colspan="3">Opening District Fund Balance</td>
          <td>$<input v-model="openingBalance"></td>
        </tr>
        <tr>
          <td colspan="3">Closing District Fund Balance</td>
          <td>$ {{ formatCurrency(closingBalance) }}</td>
        </tr>
      </table>
    </md-layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Currency from './mixins/Currency';

export default {
  name: 'district-overseer-form',
  props: ['districtId'],
  mixins: [Currency],
  data() {
    return {
      grossTotal: 0,
      newExpenseName: '',
      openingBalance: 0,
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
      const totals = this.receiptTotals();
      this.grossTotal = totals[totals.length - 1];
      return totals;
    },
    totalExpenses() {
      return this.$store.getters.totalDistrictExpense(this.districtId);
    },
    netIncome() {
      return this.grossTotal - this.totalExpenses;
    },
    closingBalance() {
      return this.openingBalance + this.netIncome;
    },
  },
  methods: {
    handleExpenseUpdate(index, { name, cost }) {
      this.updateExpense({ id: this.districtId, index, name, cost });
    },
    handleExpenseCreation() {
      const districtExpense = { id: this.districtId, name: this.newExpenseName, cost: 0 };
      this.createExpense(districtExpense);
      this.newExpenseName = '';
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
.form {
  border-collapse: collapse;
}
.form input {
  border: none;
  outline: none;
  flex: 1;
}
th, td {
  border: solid;
}
.container {
  margin: 0 16px;
}
.no-border {
  border: none;
}
</style>
