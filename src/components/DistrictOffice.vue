<template>
  <div>
    <h2 v-if="districtOffice">{{ districtOffice.name }}</h2>

    <district-report 
      v-for="report in districtReports" 
      :report="report"
      :key="report.id"
      style="margin: 10px;"
    >
    </district-report>

    <h2 style="font-size: 30px; text-align: left;">Churches</h2>

    <md-layout class="cards" :md-gutter="8" style="overflow: hidden;">
      <md-layout class="card"
        v-for="church in churches" 
        :key="church.id"
      >
        <router-link :to="{ name: 'national-office', params: { id: church.id }}">
          <md-card>
            <md-card-header>
              <div class="md-title">{{ church.name }}</div>
              <div class="md-subhead">Kingston</div>
            </md-card-header>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card>
        </router-link>
      </md-layout>
    </md-layout>
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

<style>
.card {
  margin-bottom: 10px;
  max-width: 600px;
}

.cards {
  justify-content: center;
  width: 100%;
}

.card a:not(.md-button):not(.md-bottom-bar-item) {
  color: inherit;
  text-decoration: none;
}

.card a:not(.md-button):not(.md-bottom-bar-item):hover {
  color: inherit;
  text-decoration: none;
}

h2 {
  line-height: 40px;
}

h1 {
  line-height: 25px;
}
</style>
