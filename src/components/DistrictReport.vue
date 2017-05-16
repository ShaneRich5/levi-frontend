<template>
  <div>
    <h1>District Overseer's Monthly Report Form</h1>
    <h2>{{ id }}</h2>
    <p>{{ expenses }}</p>

    <md-layout md-align="center" md-flex="35">
      <table class="form">
        <tr>
          <th class="no-border"></th>
          <th class="no-border"></th>
          <th colspan="4">Receipts</th>
        </tr>
        <tr v-for="(headingRow, headingRowIndex) in receiptsHeadings" :key="headingRowIndex">
          <th
            v-bind:class="[heading === '' ? 'no-border' : '']"
            v-for="(heading, headingIndex) in headingRow" 
            :key="headingIndex"
          >
            {{ heading }}
          </th>
        </tr>
        <tr v-for="(report, churchReportId, index) in churchReportSources" :key="churchReportId">
          <td>{{ index + 1 }}</td>
          <td>
            <router-link 
              :to="{ name: 'ChurchReport', params: { id: churchReportId }}">
              {{ report.church.name }}
            </router-link>
          </td>
          <td 
            v-for="(multiplier, index) in multipliers" 
            :key="index"
          >
            {{ formatCurrency(multiplier * totalSources(report.sources)) }}
          </td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td>Total</td>
          <td
            v-for="(multiplier, index) in multipliers"
          >
            {{ multiplier * calculatedTotal() }}
          </td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td colspan="4">Total Receipts</td>
          <td>{{ calculatedTotal() * 0.3 }}</td>
          <td>D</td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td colspan="5">Expenses</td>
        </tr>
        <tr
          v-for="expense in expenses"
          :key="expense.id"
        >
          <td class="no-border"></td>
          <td colspan="4">
            <input
              v-focus :value="expense.name"
              v-on:keyup.enter="handleExpenseNameUpdate(expense.id, $event.target.value)">
          </td>
          <td>
            <input
              :value="expense.amount"
              v-on:keyup.enter="handleExpenseAmountUpdate(expense.id, $event.target.value)">
          </td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td colspan="4">
            <input
              v-model="newExpenseName"
              v-on:keyup.enter="handleExpenseCreation()"
            />
          </td>
          <td>0.00</td>
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
  props: ['id'],
  mixins: [Currency],
  data() {
    return {
      expense: {},
      grossTotal: 0,
      newExpenseName: '',
      openingBalance: 0,
      receiptsHeadings: [
        ['', '', 'A', 'B', 'C', '(A+B+C)'],
        ['', 'Name of Church', 'Received for National Office', 'Received for District Y.C.E.D.', 'Received for District Fund', 'Total from Local Church'],
      ],
      multipliers: [0.1, 0.1, 0.1, 0.3],
    };
  },
  computed: {
    districtReport() {
      return this.$store.getters.districtReportById(this.id);
    },
    district() {
      if (this.districtReport === undefined) {
        return {};
      }
      return this.$store.getters.districtById(this.districtReport.district);
    },
    churchReportSources() {
      if (this.districtReport === undefined) {
        return {};
      }
      const churchReports = Object.keys(this.districtReport.churchReports);
      return this.$store.getters.churchReportSources(churchReports);
    },
    expenses() {
      if (this.districtReport === undefined) {
        return {};
      }
      return this.$store.getters.expensesByDistrictReport(this.id);
    },
  },
  methods: {
    totalSources(sources) {
      return sources.reduce((accumulator, source) => accumulator + Number(source.amount), 0);
    },
    calculatedTotal() {
      const churches = Object.keys(this.churchReportSources);
      return churches
        .reduce((accumulator, church) =>
          accumulator + this.totalSources(this.churchReportSources[church].sources), 0);
    },
    handleExpenseNameUpdate(id, name) {
      this.updateExpenseName({ id, name });
    },
    handleExpenseAmountUpdate(id, amount) {
      this.updateExpenseAmount({ id, amount });
    },
    handleExpenseCreation() {
      const expense = {
        name: this.newExpenseName,
        district: this.districtReport.district,
        districtReport: this.id,
        amount: 0,
      };
      this.createExpense(expense);
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
      'updateExpenseName',
      'updateExpenseAmount',
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
