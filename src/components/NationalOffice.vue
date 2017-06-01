<template>
  <div class="container">
    <h1 v-if="nationalOffice" style="text-align: left;">{{ nationalOffice.name }}</h1>

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
    <md-tabs v-if="journals" md-fixed>
      <md-tab 
        v-for="journal in journals"
        :md-label="journal.title"
      >
        <journal-voucher  :journal="journal"></journal-voucher>
      </md-tab>
    </md-tabs>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import JournalVoucher from './forms/JournalVoucher';

export default {
  name: 'national-office',
  props: ['id'],
  components: { JournalVoucher },
  created() {
    this.loadJournal();
  },
  computed: {
    nationalOffice() {
      return this.$store.getters.nationalOfficeById(this.id);
    },
    districtOffices() {
      return this.$store.getters.districtOfficesByNational(this.id);
    },
    ...mapGetters(['journals']),
  },
  methods: {
    ...mapActions(['loadJournal']),
  },
};
</script>

<style>
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

h2 {
  line-height: 40px;
}

h1 {
  line-height: 25px;
}
</style>
