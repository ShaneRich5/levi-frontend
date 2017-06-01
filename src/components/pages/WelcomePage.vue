<template>
  <div>
    <h1>Welcome</h1>

    <md-list>
      <h2>National Office</h2>
      <md-list-item 
        v-for="nationalOffice in nationalOffices" 
        :key="nationalOffice.id"
      >
        <router-link :to="{ name: 'national-office', params: { id: nationalOffice.id }}">
          {{ nationalOffice.name }}
        </router-link>
      </md-list-item>
    </md-list>

    <md-list>
      <h2>District Offices</h2>
      <md-list-item 
        v-for="districtOffice in districtOffices" 
        :key="districtOffice.id"
      >
        <router-link :to="{ name: 'district-office', params: { id: districtOffice.id }}">
          {{ districtOffice.name }}
        </router-link>
      </md-list-item>
    </md-list>

    <md-list>
      <h2>Churches</h2>
      <md-list-item 
        v-for="church in churches" 
        :key="church.id"
      >
        <router-link :to="{ name: 'church', params: { id: church.id }}">
          {{ church.name }}
        </router-link>
      </md-list-item>
    </md-list>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'welcome-page',
  computed: {
    ...mapGetters([
      'nationalOffices',
      'districtOffices',
      'churches',
    ]),
  },
};
</script>
