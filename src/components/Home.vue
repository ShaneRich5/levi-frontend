<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  ready() {
    this.$store.dispatch('addTest', 1);
    this.$store.dispatch('addTest', 2);
    this.$store.dispatch('addTest', -1);
  },
  data() {
    return {
      message: 'Homepage',
    };
  },
};
</script>

<style scoped>
</style>
