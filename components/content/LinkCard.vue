<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'default text'
  },
  description: {
    type: String,
    default: 'default description'
  },
  link: {
    type: String,
    default: 'default link'
  },
})
</script>

<template>
  <nuxt-link :to="link" target="_blank">
    <div class="p-6 border bg-base-100 dark:bg-black dark:border-gray-700 rounded mb-4 mt-4">
      <component class="w-20 h-20" />
      <h2 class="text-xl font-semibold mb-2">
        {{ title }}
      </h2>
      <div>{{ description }}</div>
    </div>
  </nuxt-link>
</template>

<style scoped>

</style>