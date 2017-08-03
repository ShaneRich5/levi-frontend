<template>
  <div>
    <md-dialog
      md-open-from="#button-add-expense"
      md-close-to="#button-add-expense"
      ref="expense-dialog">
      <md-dialog-title>Create Expense</md-dialog-title>
      <md-dialog-content>
        <form>
          <md-input-container>
            <label>Name</label>
            <md-input
              type="text"
              v-model="newExpense"></md-input>
          </md-input-container>
        </form>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog('expense-dialog')">Cancel</md-button>
        <md-button class="md-primary" @click="createExpense()">Create</md-button>
      </md-dialog-actions>
    </md-dialog>
    <h1>Received From</h1>
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">Received</h1>
      </md-toolbar>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>Name of Church</md-table-head>
            <md-table-head>Received for National Office</md-table-head>
            <md-table-head>Received for District Y.C.E.D.</md-table-head>
            <md-table-head>Received for District Fund</md-table-head>
            <md-table-head>Total from Local Church</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row
            v-if="churchReports"
            v-for="(report, index) in churchReports"
            :key="report.id">
            <md-table-cell>
              <router-link
                :to="{ name: 'organization-church-report', params: { organizationId, churchReportId: report.churchId }}">
                {{ retrieveChurchNameById(report.churchId) }}
              </router-link>
            </md-table-cell>
            <md-table-cell
              v-for="(multiplier, index) in multipliers"
              :key="index"
            >
              {{ (calculateChurchReportTotal(report.id)) }}
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>

    <h1>Expenses</h1>

    <md-table-card>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>Expense</md-table-head>
            <md-table-head>Amount</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row
            v-for="expense in expenses"
            :key="expense.id"
          >
            <md-table-cell>
              <input
                class="editbox"
                v-focus :value="expense.name"
                v-on:keyup.enter="handleExpenseNameUpdate(expense.id, $event.target.value)">
            </md-table-cell>
            <md-table-cell>
              <input
                class="editbox"
                :value="expense.amount"
                v-on:keyup.enter="handleExpenseAmountUpdate(expense.id, $event.target.value)">
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
      <md-button
        class="md-primary md-raised"
        id="button-add-expense"
        @click="openExpenseDialog('expense-dialog')">Add Expense</md-button>
    </md-table-card>


    <h1>Overseerer Summary</h1>

    <md-table-card>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>Summary</md-table-head>
            <md-table-head>Amount</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row>
            <md-table-cell>Total Expenses for the Month</md-table-cell>
            <md-table-cell>{{ formatCurrency(totalExpenses) }}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>Net Income (Expenditure) for the Month</md-table-cell>
            <md-table-cell>{{ formatCurrency(netIncome) }}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>Opening District Fund Balance</md-table-cell>
            <md-table-cell></md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>Closing District Fund Balance</md-table-cell>
            <md-table-cell></md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Currency from '../mixins/Currency';

export default {
  props: ['organizationId', 'districtReportId'],
  mixins: [Currency],
  data() {
    return {
      newExpense: '',
      receiptsHeadings: [
        ['', '', 'A', 'B', 'C', '(A+B+C)'],
        ['', 'Name of Church', 'Received for National Office', 'Received for District Y.C.E.D.', 'Received for District Fund', 'Total from Local Church'],
      ],
      multipliers: [0.1, 0.1, 0.1, 0.3],
    };
  },
  created() {
    const id = this.districtReportId;
    this.fetchDistrictReport(id);
    this.listenForExpenseChangesOnDistrictReport(id);
  },
  beforeDestroy() {
    this.invalidateReports();
    this.invalidateIndicators();
  },
  computed: {
    ...mapGetters(['organizations', 'churchReports', 'expenses', 'sources', 'churches']),
    districtReport() {
      return this.$store.getters.districtReportById(this.districtReportId);
    },
    grandTotal() {
      return this.sources.reduce((total, source) => source.amount + total, 0);
    },
    totalExpenses() {
      return this.expenses.reduce((total, expense) => expense.amount + total, 0);
    },
    netIncome() {
      return (this.grandTotal * 0.3) - this.totalExpenses;
    },
  },
  methods: {
    ...mapActions([
      'invalidateReports',
      'invalidateIndicators',
      'createExpenseOnDistrictReport',
      'fetchDistrictReport',
      'updateExpenseNameOnDistrictReport',
      'updateExpenseAmountOnDistrictReport',
      'listenForExpenseChangesOnDistrictReport',
    ]),
    retrieveChurchNameById(id) {
      const foundChurch = this.churches.find(church => +church.id === +id);
      if (typeof foundChurch === 'object') {
        const foundOrganization = this.organizations
          .find(organization => +organization.id === +foundChurch.organizationId);

        if (typeof foundOrganization === 'object') {
          return foundOrganization.name;
        }
      }
      return 'Error loading';
    },
    createExpense() {
      const name = this.newExpense;
      if (name === '') {
        return;
      }
      this.closeDialog('expense-dialog');
      const districtReport = this.districtReport.id;
      this.createExpenseOnDistrictReport({ districtReport, name });
      this.newExpense = '';
    },
    handleExpenseNameUpdate(id, name) {
      const districtReport = this.districtReport.id;
      this.updateExpenseNameOnDistrictReport({ id, districtReport, name });
    },
    handleExpenseAmountUpdate(id, amount) {
      const districtReport = this.districtReport.id;
      this.updateExpenseAmountOnDistrictReport({ id, districtReport, amount });
    },
    calculateChurchReportTotal(churchReportId) {
      return this.sources.reduce((total, source) => {
        if (+source.churchReportId === +churchReportId) {
          return total + source.amount;
        }
        return total;
      }, 0);
    },
    openExpenseDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
  },
};
</script>

<style scoped>
.editbox {
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
}
</style>
