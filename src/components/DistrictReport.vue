<template>
  <div>
    <h1>District Overseer's Monthly Report Form</h1>
    <md-layout md-align="center" md-flex="35">
      <table class="form">
        <tr>
          <th class="no-border"></th>
          <th class="no-border"></th>
          <th colspan="4">Receipts</th>
        </tr>
        <tr v-for="(headingRow, headingRowIndex) in receiptsHeadings" :key="headingRowIndex">
          <th v-bind:class="[heading === '' ? 'no-border' : '']" v-for="(heading, headingIndex) in headingRow" :key="headingIndex">
            {{ heading }}
          </th>
        </tr>
        <tr v-for="(churchReport, index) in churchReports" :key="churchReportId">
          <td>{{ +index + 1 }}</td>
          <td>
            <router-link 
              :to="{ name: 'church', params: { id: mapReportToChurch(churchReport).id }}">
              {{ mapReportToChurch(churchReport).name }}
            </router-link>
          </td>
          <td 
            v-for="(multiplier, index) in multipliers" 
            :key="index"
          >
            {{ formatCurrency(multiplier * +churchReport.total) }}
          </td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td>Total</td>
          <td
            v-for="(multiplier, index) in multipliers"
          >
            {{ formatCurrency(multiplier * calculatedTotalSources()) }}
          </td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td colspan="4">Total Receipts</td>
          <td>{{ formatCurrency(calculatedTotalSources() * 0.3) }}</td>
          <td>D</td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td colspan="5">Expenses</td>
        </tr>
        <tr v-for="expense in expenses" :key="expense.id">
          <td class="no-border"></td>
          <td colspan="4">
            <input
              v-focus :value="expense.name"
              v-on:keyup.enter="handleExpenseUpdate(expense.id, $event.target.value, expense.amount)">
          </td>
          <td>
            <input
              :value="expense.amount"
              v-on:keyup.enter="handleExpenseUpdate(expense.id, expense.name, $event.target.value)">
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
          <td>{{ calculatedTotalExpenses() }}</td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td colspan="4">Net Income (Expenditure) for the Month</td>
          <td>{{ formatCurrency(calculatedNetIncome()) }}</td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td colspan="4">Opening District Fund Balance</td>
          <td>
            <input
              v-if="districtReport !== undefined"
              type="number"
              :value="report.openingFund"
              v-on:keyup.enter="handleOpeningFundUpdate($event.target.value)" />
          </td>
        </tr>
        <tr>
          <td class="no-border"></td>
          <td colspan="4">Closing District Fund Balance</td>
          <td>{{ formatCurrency(calculatedClosingBalance()) }}</td>
        </tr>
        -->
      </table>
    </md-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Currency from './mixins/Currency';

export default {
  name: 'district-report',
  props: {
    report: Object,
  },
  mixins: [Currency],
  mounted() {
    this.$store.dispatch('createDistrictReportExpenseListener', this.report.id);
  },
  beforeDestroy() {
    this.$store.dispatch('removeExpenseRef');
  },
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
  computed: {
    districtReport() {
      return this.$store.getters.districtReportById(this.report.id);
    },
    churchReports() {
      return this.$store.getters.churchReportsByDistrictOffice(this.report.id);
    },
    expenses() {
      return this.$store.getters.expensesByDistrictReport(this.report.id);
    },
    ...mapGetters(['churches']),
  },
  methods: {
    handleExpenseUpdate(id, name, amount) {
      if (name.length > 0 && !isNaN(amount) && amount > 0) {
        this.updateExpense({ id, name, amount });
      }
    },
    handleExpenseCreation() {
      if (this.newExpenseName.length > 0) {
        this.createExpense({ reportId: this.report.id, name: this.newExpenseName });
      }
      this.newExpenseName = '';
    },
    mapReportToChurch(report) {
      return this.churches.filter(church => +church.id === +report.church_id)[0];
    },
    calculatedTotalSources() {
      return this.churchReports.reduce((accumulator, report) =>
          accumulator + +report.total, 0);
    },
    calculatedTotalExpenses() {
      return this.expenses
        .reduce((accumulator, expense) => accumulator + +expense.amount, 0);
    },
    calculatedNetIncome() {
      return (this.calculatedTotalSources() * 0.3) - this.calculatedTotalExpenses();
    },
    calculatedClosingBalance() {
      return Number(this.districtReport.openingFund) + Number(this.calculatedNetIncome());
    },
    handleOpeningFundUpdate(amount) {
      const fund = { districtReport: this.id, amount };
      this.updateDistrictReportOpeningFund(fund);
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
      'updateDistrictReportOpeningFund',
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
