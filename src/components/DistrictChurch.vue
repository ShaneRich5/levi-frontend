<template>
  <tr>
    <td>{{ church.name }}</td>
    <td>{{ church['national-office'] }}
    <td>{{ church['district-yced'] }}</td>
    <td>{{ church['district-fund'] }}</td>
    <td>{{ church.total }}</td>
  </tr>
</template>

<script>
export default {
  name: 'district-church',
  props: {
    church: Object
  }
}
</script>