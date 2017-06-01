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
      return this.$store.getters.churchesByDistrict(this.id);
    },
  },
};
</script>
