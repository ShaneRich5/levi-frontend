<template>
  <md-table-cell>{{ church.name }}</md-table-cell>
  <md-table-cell>{{ church['national-office'] }}</md-table-cell>
  <md-table-cell>{{ church['district-yced'] }}</md-table-cell>
  <md-table-cell>{{ church['district-fund'] }}</md-table-cell>
  <md-table-cell>{{ church.total }}</md-table-cell>
</template>

<script>
export default {
  name: 'district-church',
  props: {
    church: Object,
  },
};
</script>
