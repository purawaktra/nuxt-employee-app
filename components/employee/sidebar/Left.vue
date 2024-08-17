<script setup lang="ts">
import {onMounted, ref} from 'vue';
import axios from 'axios';

const employeeNavItems = ref([
  {name: 'Register', address: '/employee/new'},
  {name: 'Index', address: '/employee/index'},
  {name: 'Update', address: '/employee/update'},
  {name: 'Delete', address: '/employee/delete'}
])

const gettingStartedNavItems = ref([
  {name: 'Employment', address: '/employee/employment'},
  {name: 'Personal Data', address: '/employee/personal-data'},
  {name: 'Experience', address: '/employee/experience'},
  {name: 'Organization', address: '/employee/organization'},
  {name: 'Training', address: '/employee/training'},
  {name: 'Skill Matrix', address: '/employee/skill-matrix'},
])

const dataNavItems = ref([
  {name: 'Import', address: '/employee/import'},
  {name: 'Bulk Update', address: '/employee/bulk-update'},
  {name: 'Export', address: '/employee/export'}
])
</script>

<template>
  <div class="pl-8 overflow-y-auto" style="height: calc(100vh - var(--vt-nav-height))">
    <div class="pt-4 text-md font-medium">
      <NuxtLink to="/employee/getting-started">Getting Started</NuxtLink>
    </div>
    <div v-for='(item, index) in gettingStartedNavItems' :key="index" class="pt-2 text-sm font-normal">
      <NuxtLink :to='item.address'>{{ item.name }}</NuxtLink>
    </div>
    <div class="mt-4 flex border-gray-200 dark:border-gray-800 w-full border-t border-dashed"></div>
    <div class="pt-4 pb-2 text-md font-medium">
      Employee
    </div>
    <div v-for='(item, index) in employeeNavItems' :key="index" class="pt-2 text-sm font-normal">
      <RouterLink :to='item.address'>{{ item.name }}</RouterLink>
    </div>
    <div class="mt-4 flex border-gray-200 dark:border-gray-800 w-full border-t border-dashed"></div>
    <div class="pt-4 pb-2 text-md font-medium">
      Data
    </div>
    <div v-for='(item, index) in dataNavItems' :key="index" class="pt-2 text-sm font-normal">
      <RouterLink :to='item.address'>{{ item.name }}</RouterLink>
    </div>
    <div class="pb-2"/>
  </div>
</template>

<style scoped>

@media (min-width: 1280px) {
  .Sidebar {
    max-width: 1280px;
  }
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-right: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

a.router-link-active {
  color: hsla(160, 100%, 37%, 1);
  font-weight: 600;
}

.Sidebar {
  padding-left: 32px;
  flex: 1;
  overflow-y: auto;
  height: calc(100vh - var(--vt-nav-height));
}
</style>