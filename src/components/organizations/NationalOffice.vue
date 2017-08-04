<template>
  <div class="container">
    <h1 v-if="nationalOffice">{{ nationalOffice.name }}</h1>
    {{ districtOffices }}

    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">Districts</h1>
      </md-toolbar>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head md-numeric>ID</md-table-head>
            <md-table-head md-numeric>Name</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="district in districtOffices" :key="district.id">
            <md-table-cell>{{ district.id }}</md-table-cell>
            <md-table-cell>
              <router-link :to="{ name: 'district-office', params: { id: district.id }}">
                {{ district.name }}
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
  props: ['id'],
  computed: {
    nationalOffice() {
      return this.$store.getters.nationalOfficeById(this.id);
    },
    districtOffices() {
      return this.$store.getters.districtOfficesByNationalOffice(this.id);
    },
  },
};
</script>
