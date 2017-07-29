<template>
  <md-layout md-column>
    <h1>Journal List</h1>
    <md-table-card>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>ID</md-table-head>
            <md-table-head>Title</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="journal in journals" :key="journal.id">
            <md-table-cell>{{ journal.id }}</md-table-cell>
            <md-table-cell>
              <router-link
                :to="{ name: 'organization-journal', params: { journalId: journal.id }}">
                {{ journal.title }}
              </router-link>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </md-layout>
</template>

<script>
export default {
  props: {
    journals: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
