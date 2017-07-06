<template>
  <div>
    <md-layout>
      Home
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
