<template>
  <div>
    <md-layout>
    <div class="home">
      <h1>Home</h1>
    </div>
    </md-layout>
  </div>
</template>

<script>
import ContactForm from '../forms/ContactForm';
import Newsletter from '../forms/Newsletter';

export default {
  name: 'homepage',
  components: { ContactForm, Newsletter },
};
</script>
