<template>
  <div>
    <h1>National Office</h1>
    <p v-if="nationalOffice">{{ nationalOffice.name }}</p>
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
    <journal-voucher v-for="journal in journals" :journal="journal"></journal-voucher>
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
