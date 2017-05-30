<template>
  <div class="">
    <md-sidenav>
      <md-toolbar>
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title" style="flex: 1">Default</h2>
      </md-toolbar>
    </md-sidenav>
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">Levi</h2>
    </md-toolbar>
    <md-progress class="md-accent" md-indeterminate></md-progress>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
</style>
