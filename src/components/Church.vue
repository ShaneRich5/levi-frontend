<template>
  <div>
    <div>{{ church.name }}</div>
    <div>{{ district }}</div>
    <button>Generate</button>
    <md-layout md-align="center" md-flex="66">
      <md-table-card>
        <md-toolbar>
          <h1 class="md-title">Monthly Report Forms</h1>
        </md-toolbar>
        <md-table>
          <md-table-header>
            </md-table-row>
              <md-table-head></md-table-head>
            </md-table-row>
          </md-table-header>
        </md-table>
      </md-table-card>
    </md-layout>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    church() {
      return this.$store.getters.churchById(this.id);
    },
    district() {
      return this.$store.getters.districtById(this.church.district);
    },
  },
};
</script>
