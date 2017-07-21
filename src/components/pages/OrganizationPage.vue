<template>
  <h1>Organization</h1>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['id'],
  created() {
    this.fetchOrganization(1);
  },
  methods: {
    ...mapActions(['fetchOrganization']),
  },
};
</script>

<style scoped>

</style>
