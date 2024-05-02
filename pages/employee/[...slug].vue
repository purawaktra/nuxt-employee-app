<script setup lang="ts">
definePageMeta({
  layout: 'employee-content'
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
  <main class="flex content-center items-center justify-center">
    <div class="max-w-screen-xl">
      <ContentDoc />
    </div>
  </main>
</template>

<style scoped>

</style>