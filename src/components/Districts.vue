<template>
  <md-table-card>
    <md-toolbar>
      <h1 class="md-title">Nutrition</h1>
      <md-button class="md-icon-button">
        <md-icon>filter_list</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
    </md-toolbar>
  </md-table-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'districts',
  computed: {
    ...mapGetters([
      'districts',
    ]),
  },
};
</script>
