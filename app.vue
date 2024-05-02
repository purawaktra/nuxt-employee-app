<script setup lang="ts">
import {onMounted} from "vue";
import themeChange from 'theme-change'

onMounted(() => {
  themeChange.themeChange(false)
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
