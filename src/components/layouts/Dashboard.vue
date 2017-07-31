<template>
  <div class="main">
    <md-sidenav class="sidebar md-fixed" ref="sidebarPanel">
      <md-toolbar>
        <h2 class="md-title" style="flex: 1">Levi</h2>
      </md-toolbar>
      <div class="main-sidebar-links">
        <md-list>
          <md-list-item>
            <router-link :to="{ name: 'dashboard' }">
              Dashboard
            </router-link>
          </md-list-item>
          <md-list-item>
            <router-link :to="{ name: 'organizations' }">
              Organizations
            </router-link>
          </md-list-item>
        </md-list>
      </div>
    </md-sidenav>
    <div class="page-content">
      <md-toolbar>
        <md-button class="md-icon-button" @click="toggleSidebarPanel">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title" style="flex: 1"></h2>
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
    toggleSidebarPanel() {
      // this.$refs.sidebarPanel.toggle();
    },
    closeSidenav() {
      this.$refs['main-sidebar'].close();
    },
    ...mapActions(['logout', 'fetchOrganizations']),
  },
};
</script>

<style >
.container {
    max-width: 960px;
    margin: 0 auto;
}

.main {
  display: flex;
}

.page-content {
  flex-grow: 1;
}

.md-sidenav.md-fixed .md-sidenav-content {
  position: static;
  height: 100vh;
}

.main-sidebar-links {

}

.md-theme-default.md-sidenav .md-sidenav-content {
  transform: translateZ(0)!important;
  pointer-events: auto;
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
