<template>
  <div class="container">
    <h1>District Office</h1>

    {{ districtOffice }}

    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">Churches</h1>
      </md-toolbar>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head md-numeric>ID</md-table-head>
            <md-table-head md-numeric>Name</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="church in churches" :key="church.id">
            <md-table-cell>{{ church.id }}</md-table-cell>
            <md-table-cell>
              <router-link :to="{ name: 'church', params: { id: church.id }}">
                {{ church.name }}
              </router-link>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script>
export default {
  name: 'district-office',
  props: ['id'],
  computed: {
    districtOffice() {
      return this.$store.getters.districtOfficeById(this.id);
    },
    churches() {
      return this.$store.getters.churchesByDistrictOffice(this.id);
    },
  },
};
</script>

<style>
.container {
  margin-left: 15px;
  margin-right: 15px;
}
.md-table .md-table-cell .md-table-cell-container {
  padding: 0;
}
</style>
