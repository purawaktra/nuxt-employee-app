<script setup lang="ts">
import {navigateTo} from "#app";

useHead({
  title: 'Login | SMOORE ePortal',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'description',
      content: 'ePortal login page'
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

const errorToggle = ref(0);
const errorText = ref();
const isLoading = ref(true);

const handleErrorEmits = (error: string) => {
  errorToggle.value++;
  errorText.value = error;
}

const handleLoginSuccessEmits = () => {
  navigateTo('/home');
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

</script>

<template>
  <div
      class="mt-20 pl-10 pr-10 pb-10 pt-5 w-96 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
    <div class="flex items-center pb-4">
      <img alt="Vue logo" src="@/assets/logo.svg" width="56" height="56"/>
      <h1 class="text-3xl font-medium text-emerald-500">ePortal</h1>
    </div>
    <div v-if="isLoading" class="h-44 animate-pulse bg-gray-200 w-full">
    </div>
    <div v-else class="h-44">
      <VueformLogin @error="handleErrorEmits" @loginSuccess="handleLoginSuccessEmits"/>
      <div class="flex content-center justify-center items-center">
        <RouterLink to="/register" class="font-light mt-3">First time? create an account here</RouterLink>
      </div>
      <div v-if="errorToggle" class="mt-1">
        <BoxFloating :message=errorText type="error" :key="errorToggle"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>