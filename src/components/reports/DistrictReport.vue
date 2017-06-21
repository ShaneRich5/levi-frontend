<template>
  <div class="container">
    District Report {{ id }}
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['id'],
  created() {
  },
  computed: {
    districtReport() {
      return this.$store.getters.districtReportById(this.id);
    },
  },
  methods: {
    ...mapActions(['loadDistrictReportById']),
  },
};
</script>

<style scoped>
.container {
  margin: 15px;
}
</style>
