<template>
  <div>
    <h1>{{ id }}</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ['id'],
  created() {
    this.loadChurchReportById(this.id);
  },
  getters: {
    churchReport() {
      return this.$store.getters.churchReportById(this.id);
    },
    ...mapGetters(['sources']),
  },
  methods: {
    ...mapActions(['loadChurchReportById']),
  },
};
</script>
