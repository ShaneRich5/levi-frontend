<template>
  <div>
    <md-layout md-align="center" md-flex="66">
      <p v-if="churchReport">{{ districtReport }}</p>
    </md-layout>
    <md-layout md-align="center" md-flex="66">
      <md-table-card>
        <md-toolbar>
          <h1 class="md-title">Monthly Financial Breakdown - {{ id }}</h1>
        </md-toolbar>

        <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>Id</md-table-head>
              <md-table-head>Source</md-table-head>
              <md-table-head>Raised</md-table-head>
            </md-table-row>
          </md-table-header>

          <md-table-body>
            <md-table-row v-for="source in sources" :key="source.id">
              <md-table-cell>{{ source.id }}</md-table-cell>
              <md-table-cell>
                <input
                  :value="source.name"
                  v-on:keyup.enter="handleSourceNameChanged(source.id, $event.target.value)"/>
              </md-table-cell>
              <md-table-cell>
                <input
                  :value="source.raised"
                  v-on:keyup.enter="handleSourceRaisedChanged(source.id, $event.target.raised)"/>
              </md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell></md-table-cell>
              <md-table-cell>
                <input
                  v-model="sourceName"
                  v-on:keyup.enter="handleSourceCreation()"/>
              </md-table-cell>
              <md-table-cell></md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-table-card>
    </md-layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Currency from './mixins/Currency';

export default {
  name: 'monthly-financial-form',
  props: ['id'],
  mixins: [Currency],
  data() {
    return {
      sourceName: '',
    };
  },
  computed: {
    churchReport() {
      return this.$store.getters.churchReportById(this.id);
    },
    districtReport() {
      return this.$store.getters.districtReportById(this.churchReport.districtReport);
    },
    church() {
      return this.$store.getters.churchById(this.churchReport.church);
    },
    sources() {
      return [...this.$store.getters.sourcesByChurchReport(this.churchReport.id)];
    },
  },
  methods: {
    ...mapActions([
      'createSource',
      'updateSourceAmount',
      'updateSourceName',
    ]),
    handleSourceNameChanged(id, name) {
      if (name.length > 0) {
        this.updateSourceName({ id, name });
      }
    },
    handleSourceRaisedChanged(id, amount) {
      if (!isNaN(amount) && amount >= 0) {
        this.updateSourceAmount({ id, amount });
      }
    },
    handleSourceCreation() {
      if (this.sourceName.length !== 0) {
        const source = {
          name: this.sourceName,
          raised: 0,
          churchReport: this.id,
          districtReport: this.districtReport.id,
        };
        this.createSource(source);
        this.sourceName = '';
      }
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
  background: white;
}
</style>
