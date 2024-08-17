<script setup lang="ts">
definePageMeta({
  layout: 'employee'
})

useHead({
  title: 'Employee | SMOORE ePortal',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'description',
      content: 'ePortal employee home page'
    },
    {
      name: 'author',
      content: 'ePortal'
    },
    {
      name: 'keywords',
      content: 'ePortal, login'
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
});
</script>

<template>
<div>
  <h1>Employee</h1>
</div>
</template>

<style scoped>

</style>