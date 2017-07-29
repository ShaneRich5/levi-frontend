<template>
  <div class="container" style="margin-top: 10px;">
    <template v-if="districtReport">
      <router-link :to="{ name: 'district-office', params: { id: districtReport.district_office_id }}">
        District
      </router-link>
      <router-link :to="{ name: 'journal', params: { id: districtReport.journal_id }}">
        Journal
      </router-link>
    </template>

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
        <tr
          v-if="churchReports"
          v-for="(report, index) in churchReports"
          :key="report.id">
          <td>{{ index + 1 }}</td>
          <td>
            <router-link :to="{ name: 'church-report', params: { id: report.id }}">
              {{ report.church_name }}
            </router-link>
          </td>
          <td
            v-for="(multiplier, index) in multipliers"
            :key="index"
          >
            {{ formatCurrency(multiplier * report.total) }}
          </td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td>Total</td>
          <td
            v-for="(multiplier, index) in multipliers"
          >
            {{ formatCurrency(multiplier * grandTotal) }}
          </td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td colspan="4">Total Receipts</td>
          <td>{{ formatCurrency(grandTotal * 0.3) }}</td>
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
        <tr>
          <td class="no-border"></td>
          <td colspan="4">Total Expenses for the Month</td>
          <td>{{ formatCurrency(totalExpenses) }}</td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td colspan="4">Net Income (Expenditure) for the Month</td>
          <td>{{ formatCurrency(netIncome) }}</td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td colspan="4">Opening District Fund Balance</td>
          <td>
            <input
              type="number"
              v-if="districtReport !== undefined"
              :value="districtReport.opening_fund"
              v-on:keyup.enter="handleOpeningFundUpdate($event.target.value)" />
          </td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td colspan="4">Closing District Fund Balance</td>
          <td v-if="districtReport">{{ formatCurrency(districtReport.opening_fund + netIncome) }}</td>
        </tr>
      </table>
    </md-layout>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Currency from '../mixins/Currency';

export default {
  props: ['districtReportId'],
  mixins: [Currency],
  data() {
    return {
      newExpenseName: '',
      receiptsHeadings: [
        ['', '', 'A', 'B', 'C', '(A+B+C)'],
        ['', 'Name of Church', 'Received for National Office', 'Received for District Y.C.E.D.', 'Received for District Fund', 'Total from Local Church'],
      ],
      multipliers: [0.1, 0.1, 0.1, 0.3],
    };
  },
  created() {
    this.loadDistrictReportById(this.districtReportId);
    this.listenForChurchReportUpdates(this.districtReportId);
    this.listenForExpenseUpdates(this.districtReportId);
  },
  computed: {
    districtReport() {
      return this.$store.getters.districtReportById(this.districtReportId);
    },
    grandTotal() {
      return this.churchReports.reduce((total, report) => report.total + total, 0);
    },
    totalExpenses() {
      return this.expenses.reduce((total, expense) => expense.amount + total, 0);
    },
    netIncome() {
      return (this.grandTotal * 0.3) - this.totalExpenses;
    },
    ...mapGetters(['churchReports', 'expenses']),
  },
  methods: {
    ...mapActions([
      'listenForChurchReportUpdates', 'listenForExpenseUpdates',
      'loadDistrictReportById', 'updateExpenseName',
      'updateExpenseAmount', 'createExpense', 'updateDistrictReportOpeningFund',
    ]),
    handleExpenseNameUpdate(id, name) {
      if (name === '') {
        return;
      }
      this.updateExpenseName({ id, name });
    },
    handleExpenseAmountUpdate(id, amount) {
      if (amount < 0) {
        return;
      }
      this.updateExpenseAmount({ id, amount });
    },
    handleExpenseCreation() {
      if (this.newExpenseName === '') {
        return;
      }
      this.createExpense({ id: this.districtReportId, name: this.newExpenseName });
      this.newExpenseName = '';
    },
    handleOpeningFundUpdate(amount) {
      const fund = { id: this.districtReportId, amount };
      this.updateDistrictReportOpeningFund(fund);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 15px;
}
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
