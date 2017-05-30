<template>
  <div>
    <div class="home">
      <h1 style = "font-size : 90px; margin-top: 70px;">{{ message }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      message: 'Life Simplified',
    };
  },
};
</script>

<style scoped>
</style>
