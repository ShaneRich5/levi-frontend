<template>
  <div>
    <h1>National Office</h1>
    <p>{{ nationalOffice.name }}</p>
    <md-list>
      <h2>District Offices</h2>
      <md-list-item 
        v-for="districtOffice in districtOffices" 
        :key="districtOffice.id"
      >
        <router-link :to="{ name: 'district-office', params: { id: districtOffice.id }}">
          {{ districtOffice.name }}
        </router-link>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'national-office',
  props: ['id'],
  computed: {
    nationalOffice() {
      return this.$store.getters.nationalOfficeById(this.id);
    },
    districtOffices() {
      return this.$store.getters.districtOfficesByNational(this.id);
    },
  },
};
</script>
