<template>
  <div>
    <md-dialog
      md-open-from="#button-add-source"
      md-close-to="#button-add-source"
      ref="source-dialog">
      <md-dialog-title>Create Source</md-dialog-title>
      <md-dialog-content>
        <form>
          <md-input-container>
            <label>Name</label>
            <md-input
              type="text"
              v-model="newSource"></md-input>
          </md-input-container>
        </form>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog('source-dialog')">Cancel</md-button>
        <md-button class="md-primary" @click="createSource()">Create</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-table-card>
      <md-toolbar v-if="churchReport">
        <h1 class="md-title">{{ churchReport.title }}</h1>
      </md-toolbar>
      <md-table>
        <md-table-header>
          <md-table-row>
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
          <md-table-row
            v-for="source in sources"
            :key="source.id">
            <md-table-cell>
              <input
                type="text"
                class="editbox"
                :value="source.name"
                v-on:keyup.enter="handleSourceNameUpdate(source.id, $event.target.value)">
            </md-table-cell>
            <md-table-cell>
              <input
                type="text"
                class="editbox"
                :value="source.amount"
                v-on:keyup.enter="handleSourceAmountUpdate(source.id, $event.target.value)">
            </md-table-cell>
            <md-table-cell v-for="(multiplier, index) in multipliers" :key="index">
              {{ formatCurrency(source.amount * multiplier) }}
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
      <md-button
        class="md-primary md-raised"
        id="button-add-source"
        @click="openSourceDialog('source-dialog')">Add Source</md-button>
    </md-table-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Currency from '../mixins/Currency';

export default {
  props: ['organizationId', 'churchReportId'],
  mixins: [Currency],
  data() {
    return {
      newSource: '',
      multipliers: [0.1, 0.1, 0.1, 0.1, 0.4, 0.6],
    };
  },
  created() {
    const id = this.churchReportId;
    this.fetchChurchReport(id);
    this.listenForSourceChangesOnChurchReport(id);
  },
  beforeDestroy() {
    this.invalidateSources();
    this.invalidateReports();
  },
  methods: {
    ...mapActions([
      'fetchChurchReport',
      'invalidateSources',
      'invalidateReports',
      'updateSourceNameOnChurchReport',
      'updateSourceAmountOnChurchReport',
      'createSourceOnChurchReport',
      'listenForSourceChangesOnChurchReport',
    ]),
    createSource() {
      const name = this.newSource;
      if (name === '') {
        return;
      }
      this.closeDialog('source-dialog');
      const churchReport = this.churchReport.id;
      this.createSourceOnChurchReport({ churchReport, name });
      this.newSource = '';
    },
    handleSourceNameUpdate(id, name) {
      const churchReport = this.churchReport.id;
      this.updateSourceNameOnChurchReport({ id, churchReport, name });
    },
    handleSourceAmountUpdate(id, amount) {
      const churchReport = this.churchReport.id;
      this.updateSourceAmountOnChurchReport({ id, churchReport, amount });
    },
    openSourceDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
  },
  computed: {
    ...mapGetters(['sources']),
    churchReport() {
      return this.$store.getters.churchReportById(this.churchReportId);
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
