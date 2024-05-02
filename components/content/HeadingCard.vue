<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'default text'
  },
})
</script>

<template>
  <h2 class="text-2xl font-semibold mt-4 mb-2">
    {{ text }}
  </h2>
</template>

<style scoped>

</style>