<template>
  <div>
    <h1>{{ id }}</h1>

    <p>{{ churchReport }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ['id'],
  created() {
    this.loadChurchReportById(this.id);
  },
  computed: {
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
