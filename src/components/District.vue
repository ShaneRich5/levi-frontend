<template>
  <div>
    <md-layout md-align="center" md-flex="66">
      <h2>{{ district.name }}</h2>
    </md-layout>
    <md-layout md-align="center" md-flex="66">
      <md-table-card>
        <md-toolbar>
          <h1 class="md-title">Churches</h1>
        </md-toolbar>
        <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>Id</md-table-head>
              <md-table-head>Name</md-table-head>
            </md-table-row>
          </md-table-header>

          <md-table-body>
            <md-table-row v-for="church in churches" :key="church.id">
              <md-table-cell>{{ church.id }}</md-table-cell>
              <md-table-cell>
                <router-link :to="{ name: 'Church', params: { id: church.id }}">
                  {{ church.name }}
                </router-link>
              </md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>
                <input
                  v-model="churchName"
                  v-on:keyup.enter="handleChurchCreation()">
              </md-table-cell>
              <md-table-cell></md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-table-card>
    </md-layout>
    <md-layout md-align="center">
      <md-button @click.native="handleFormCreation">Generate</md-button>
    </md-layout>
    <md-layout md-align="center" md-flex="66">
      <md-table-card>
        <md-toolbar>
          <h1 class="md-title">District Overseer's Reports</h1>
        </md-toolbar>
        <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>Id</md-table-head>
            </md-table-row>
          </md-table-header>
          <md-table-body>
            <md-table-row v-for="report in districtReports" :key="report.id">
              <md-table-cell>{{ report.id }}</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-table-card>
    </md-layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'district',
  props: ['id'],
  data() {
    return {
      churchName: '',
    };
  },
  computed: {
    district() {
      return this.$store.getters.districtById(this.id);
    },
    churches() {
      return this.$store.getters.churchesByDistrict(this.district.id);
    },
    districtReports() {
      return this.$store.getters.districtReportsByDistrict(this.id);
    },
  },
  methods: {
    ...mapActions([
      'createChurch',
      'generateReports',
    ]),
    handleChurchCreation() {
      if (this.churchName.length !== 0) {
        const church = { district: this.id, name: this.churchName };
        this.createChurch(church);
        this.churchName = '';
      }
    },
    handleFormCreation() {
      const keys = { district: this.district.id, churches: Object.keys(this.district.churches) };
      this.generateReports(keys);
    },
  },
};
</script>
