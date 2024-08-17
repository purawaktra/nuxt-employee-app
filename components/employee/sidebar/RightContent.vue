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
  <div class="pl-8 overflow-y-auto" style="height: calc(100vh - var(--vt-nav-height))">
    <div class="pt-4 text-md font-medium">
      <Icon name="material-symbols:ink-pen-outline"/> Community
    </div>
  </div>

</template>

<style scoped>

</style>