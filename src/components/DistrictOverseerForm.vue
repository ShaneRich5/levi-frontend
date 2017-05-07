<template>
  <div>
    <h1>District Overseer's Monthly Report Form</h1>
    <h2>{{ districtId }} - {{ district.name }}</h2>
    <md-table-card class="container">
      <md-table v-once>
        <md-table-header>
          <md-table-row>
            <md-table-head></md-table-head>
            <md-table-head>Name of Church</md-table-head>
            <md-table-head md-numeric>Received for National Office</md-table-head>
            <md-table-head md-numeric>Received for District Y.C.E.D.</md-table-head>
            <md-table-head md-numeric>Received for District Fund</md-table-head>
            <md-table-head md-numeric>Total from Local Church</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(church, index) in churches" :key="index">
            <md-table-cell>{{ index + 1 }}</md-table-cell>
            <md-table-cell>
              <router-link :to="{ name: 'MonthlyFinancialForm', params: { formId: index + 1 }}">{{ church.name }}</router-link>
            </md-table-cell>
            <md-table-cell>{{ church['national-office'] }}</md-table-cell>
            <md-table-cell>{{ church['district-yced'] }}</md-table-cell>
            <md-table-cell>{{ church['district-fund'] }}</md-table-cell>
            <md-table-cell>{{ church.total }}</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script scoped>
export default {
  name: 'district-overseer-form',
  data() {
    return {
      name: 'Test',
      districtId: this.$route.params.formId,
    };
  },
  computed: {
    district() {
      return this.$store.getters.getDistrictById(this.districtId);
    },
    churches() {
      return this.$store.getters.getDistrictChurches(this.districtId);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 16px;
}
</style>
