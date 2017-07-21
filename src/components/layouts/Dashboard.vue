<template>
  <div class="main">
  <!--
    <md-sidenav id="sidebar-panel" class="main-sidebar" ref="main-sidebar">
      <md-toolbar>
        <h2 class="md-title" style="flex: 1">Options</h2>
      </md-toolbar>
      <div class="main-sidebar-links">
        <div class="phone-viewport">
          <md-list>
            <md-list-item href="/dashboard">
              <span>Organizations</span>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </md-sidenav>
  -->
    <div class="page-content">
      <md-toolbar>
        <h2 class="md-title" style="flex: 1">Levi</h2>
        <md-button @click.native="logout">Logout</md-button>
      </md-toolbar>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'dashboard',
  created() {
    this.$store.dispatch('fetchOrganizations');
  },
  data() {
    return {
    };
  },
  methods: {
    toggleSidenav() {
      this.$refs['main-sidebar'].toggle();
    },
    closeSidenav() {
      this.$refs['main-sidebar'].close();
    },
    ...mapActions(['logout', 'fetchOrganizations']),
  },
};
</script>

<style scoped>
.container {
    max-width: 960px;
    margin: 0 auto;
}
/**
@media (min-width: 1281px) {
  #sidebar-panel.md-theme-default.md-sidenav.main-sidebar .md-sidenav-content {
    box-shadow: 0 1px 5px rgba(0,0,0,.2),
      0 2px 2px rgba(0,0,0,.14),
      0 3px 1px -2px rgba(0,0,0,.12);
      display: flex;
      flex-flow: column;
      overflow: hidden;

        pointer-events: auto;
        transform: translate3d(0, 0, 0);
  }
}

.main-sidebar.md-sidenav  {
  width: 304px;
}

.main-sidebar-links {
  overflow: auto;
  flex: 1;
}
.main-sidebar-links .md-inset .md-list-item-container {
  padding-left: 36px;
}
.main-sidebar-links .md-list-item-container {
  font-size: 14px;
  font-weight: 500;
}

.main {
  display: flex;
}

.page-content {
  flex: 1;
}
 */
</style>
