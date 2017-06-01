<template>
  <div>
    <h1>District Office</h1>
    <p v-if="districtOffice">{{ districtOffice.name }}</p>
    <md-list>
      <h2>Churches</h2>
      <md-list-item 
        v-for="church in churches" 
        :key="church.id"
      >
        <router-link :to="{ name: 'church', params: { id: church.id }}">
          {{ church.name }}
        </router-link>
      </md-list-item>
    </md-list>
    <district-report 
      v-for="report in districtReports" 
      :report="report"
      :key="report.id"
    >
    </district-report>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import DistrictReport from './DistrictReport';

export default {
  name: 'district-office',
  props: ['id'],
  components: { DistrictReport },
  created() {
    this.loadDistrictReportsByDistrict(this.id);
  },
  computed: {
    districtOffice() {
      return this.$store.getters.districtOfficeById(this.id);
    },
    districtReports() {
      return this.$store.getters.districtReportsByDistrict(this.id);
    },
    churches() {
      return this.$store.getters.churchesByDistrict(this.id);
    },
  },
  methods: {
    ...mapActions([
      'loadDistrictReportsByDistrict',
    ]),
  },
};
</script>
