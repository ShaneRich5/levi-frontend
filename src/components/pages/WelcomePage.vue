<template>
  <div>
    <h2>Organizations</h2>

    <p v-if="organizations.length == 0">No organizations available</p>

    <md-layout class="cards" :md-gutter="8">
      <md-layout class="card"
        v-for="organization in organizations"
        :key="organization.id"
      >
      <router-link :to="{ name: 'organization', params: { id: organization.id } }">
        <md-card>
          <md-card-header>
            <div class="md-title">Name</div>
            <div class="md-subhead">Kingston</div>
          </md-card-header>
        </md-card>
      </router-link>
      <!--
        <router-link :to="{ name: 'organization', params: { id: organization.id }}">
          <md-card>
            <md-card-header>
              <div class="md-title">{{ organization.name }}</div>
              <div class="md-subhead">Kingston</div>
            </md-card-header>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card>
        </router-link>
        -->
      </md-layout>
    </md-layout>

    <router-link :to="{ name: 'organization-form' }">
      <md-button class="md-raised md-primary">New Organization</md-button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'welcome-page',
  computed: {
    ...mapGetters([
      'organizations',
    ]),
  },
};
</script>

<style scoped>
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
