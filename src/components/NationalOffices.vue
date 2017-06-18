<template>
  <div class="container">
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">National Offices</h1>
      </md-toolbar>

      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head md-numeric>ID</md-table-head>
            <md-table-head>Name</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="office in nationalOffices" :key="office.id">
            <md-table-cell>{{ office.id }}</md-table-cell>
            <md-table-cell>
              <router-link :to="{ name: 'national-office', params: { id: office.id }}">
                {{ office.name }}
              </router-link>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  created() {
    this.loadNationalOffices();
  },
  computed: {
    ...mapGetters([
      'nationalOffices',
    ]),
  },
  methods: {
    ...mapActions([
      'loadNationalOffices',
    ]),
  },
};
</script>
