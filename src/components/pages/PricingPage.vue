<template>
  <div>
    <md-layout md-align="center">
      <h1>Pricing</h1>
    </md-layout>
    <md-layout md-gutter="16">
      <md-layout
        v-for="(plan, index) in plans"
        md-align="center"
        :key="index">
        <md-card>
          <md-card-header>
            <div class="md-title">{{ plan.name }}</div>
            <div class="md-subhead">{{ plan.price }}</div>
          </md-card-header>
        </md-card>
      </md-layout>
    </md-layout>
    <md-layout md-align="center">
      <h1>Feature Comparison</h1>
    </md-layout>
    <md-table v-once>
      <md-table-header>
        <md-table-row>
          <md-table-head></md-table-head>
          <md-table-head>Small</md-table-head>
          <md-table-head>Medium</md-table-head>
          <md-table-head>Large</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row>
          <md-table-cell>24/5 support with 8 hour response</md-table-cell>
          <md-table-cell>*</md-table-cell>
          <md-table-cell>*</md-table-cell>
          <md-table-cell>*</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>Realtime Collaboration</md-table-cell>
          <md-table-cell>*</md-table-cell>
          <md-table-cell>*</md-table-cell>
          <md-table-cell>*</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>Daily Backups</md-table-cell>
          <md-table-cell>*</md-table-cell>
          <md-table-cell>*</md-table-cell>
          <md-table-cell>*</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>Mailing Lists</md-table-cell>
          <md-table-cell>*</md-table-cell>
          <md-table-cell>*</md-table-cell>
          <md-table-cell>*</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>Chat</md-table-cell>
          <md-table-cell>*</md-table-cell>
          <md-table-cell>*</md-table-cell>
          <md-table-cell>*</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell>Analytics Tools</md-table-cell>
          <md-table-cell>*</md-table-cell>
          <md-table-cell>*</md-table-cell>
          <md-table-cell>*</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'pricing',
  data() {
    return {
      plans: [
        { name: 'Small', price: '$1000' },
        { name: 'Medium', price: '$2000' },
        { name: 'Large', price: '$3000' },
      ],
    };
  },
};
</script>

<style scoped>
.md-card{
  width: 100%;
}
</style>
