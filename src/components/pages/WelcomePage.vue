<template>
  <div>
    <h2>National Office</h2>
    
    <md-layout class="cards" :md-gutter="8">
      <md-layout class="card"
        v-for="nationalOffice in nationalOffices" 
        :key="nationalOffice.id"
      >
        <router-link :to="{ name: 'national-office', params: { id: nationalOffice.id }}">
          <md-card>
            <md-card-header>
              <div class="md-title">{{ nationalOffice.name }}</div>
              <div class="md-subhead">Kingston</div>
            </md-card-header>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card>
        </router-link>
      </md-layout>
    </md-layout>

    <h2>District Offices</h2>

    <md-layout class="cards" :md-gutter="8">
      <md-layout class="card"
        v-for="districtOffice in districtOffices" 
        :key="districtOffice.id"
      >
        <router-link :to="{ name: 'district-office', params: { id: districtOffice.id }}">    
          <md-card>
            <md-card-header>
              <div class="md-title">{{ districtOffice.name }}</div>
              <div class="md-subhead">Kingston</div>
            </md-card-header>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card>
        </router-link>
      </md-layout>
    </md-layout>

    <h2>Churches</h2>
    

    <md-layout class="cards" :md-gutter="8">
      <md-layout class="card"
        v-for="church in churches" 
        :key="church.id"
      >
        <router-link :to="{ name: 'church', params: { id: church.id }}">
          <md-card>
            <md-card-header>
              <div class="md-title">{{ church.name }}</div>
              <div class="md-subhead">Kingston</div>
            </md-card-header>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card>
        </router-link>
      </md-layout>
    </md-layout>
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

<style>
h2 {
  margin-left: 10px;
  font-size: 40px;
}

h2 {
  line-height: 40px;
}

h1 {
  line-height: 25px;
}

.card {
  margin-bottom: 10px;
  max-width: 600px;
}

.cards {
  justify-content: center;
}

.card a:not(.md-button):not(.md-bottom-bar-item) {
  color: inherit;
  text-decoration: none;
}

.card a:not(.md-button):not(.md-bottom-bar-item):hover {
  color: inherit;
  text-decoration: none;
}
</style>
