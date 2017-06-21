<template>
  <div class="container">
    District Report {{ id }}
  </div>
</template>

<script>
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
  },
};
</script>

<style scoped>
.container {
  margin: 15px;
}
</style>
