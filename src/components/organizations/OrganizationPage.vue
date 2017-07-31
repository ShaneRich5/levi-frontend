<template>
  <div>
    <h2>Organizations Page</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.fetchOrganizations();
  },
  watch: {
    $route: 'fetchOrganizations',
  },
  methods: {
    ...mapActions(['fetchOrganizations']),
    loadOrganizations() {
      this.fetchOrganizations();
    },
  },
};
</script>

<style scoped>

</style>
