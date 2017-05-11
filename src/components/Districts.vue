<template>
  <md-layout md-align="center" md-flex="66">
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">{{ title }}</h1>
      </md-toolbar>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>Id</md-table-head>
            <md-table-head>Name</md-table-head>
            <md-table-head>Balance</md-table-head>
            <md-table-head>Church Count</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="district in districts" :key="district.id">
            <md-table-cell>{{ district.id }}</md-table-cell>
            <md-table-cell>
              <router-link 
                :to="{ name: 'District', params: { id: district.id }}">
                {{ district.name }}
              </router-link>
            </md-table-cell>
            <md-table-cell>{{ district.balance }}</md-table-cell>
            <md-table-cell>0</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>
              <input
                v-model="name"
                v-on:keyup.enter="handleDistrictCreation()">
            </md-table-cell>
            <md-table-cell>0</md-table-cell>
            <md-table-cell>0</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </md-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'districts',
  data() {
    return {
      title: 'Districts',
      name: '',
    };
  },
  computed: {
    ...mapGetters([
      'districts',
    ]),
  },
  methods: {
    ...mapActions([
      'createDistrict',
    ]),
    handleDistrictCreation() {
      if (this.name.length !== 0) {
        const district = { name: this.name };
        this.createDistrict(district);
        this.name = '';
      }
    },
  },
};
</script>
