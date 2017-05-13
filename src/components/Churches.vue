<template>
  <div>
    <md-layout md-align="center">
      <h1>Churches</h1>
    </md-layout>
    <md-layout md-align="center">
      <md-table-card>
        <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>Name</md-table-head>
              <md-table-head>District</md-table-head>
            </md-table-row>
          </md-table-header>
          <md-table-body>
            <md-table-row v-for="church in churches" :key="church.id">
              <md-table-cell>
                <router-link 
                  :to="{ name: 'Church', params: { id: church.id }}">
                    {{ church.name }}
                </router-link>
              </md-table-cell>
              <md-table-cell>{{ associatedChurch(church.id).name }}</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-table-card>
    </md-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      churchToDistrictMap: {},
    };
  },
  computed: {
    ...mapGetters([
      'churches',
      'districts',
    ]),
  },
  methods: {
    associatedChurch(churchId) {
      let districtIndex = this.churchToDistrictMap[churchId];

      if (districtIndex !== undefined) {
        return this.districts[districtIndex];
      }

      districtIndex = this.districts.findIndex(district => churchId in district.churches);
      this.churchToDistrictMap[churchId] = districtIndex;
      return this.districts[districtIndex];
    },
  },
};
</script>
