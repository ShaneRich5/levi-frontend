<template>
  <div>
    <h1>Organization {{ organizationId }}</h1>
    <h1>Church Report {{ churchReportId }}</h1>
  </div>
</template>

<script>
export default {
  props: ['organizationId', 'churchReportId'],
};
</script>
