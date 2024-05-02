<script setup lang="ts">
import {ref} from "vue";

const route = useRoute()
console.log('current name', route.name)

const communityNavItems = ref([
  {name: 'Edit this page', address: '/employee/edit'},
  {name: 'Index', address: '/employee/index'},
  {name: 'Update', address: '/employee/update'},
  {name: 'Delete', address: '/employee/delete'}
])
</script>

<template>
Community
</template>

<style scoped>

</style>