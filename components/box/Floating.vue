<template>
  <transition name="fade">
    <div v-if="visible" :class="['fixed bottom-4 right-4 p-4 rounded shadow', notificationClass]">
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps({
  message: String,
  type: {
    type: String,
    default: 'info'
  }
});

const visible = ref(true);

watchEffect(() => {
  setTimeout(() => {
    visible.value = false;
  }, 3000);
});

const notificationClass = computed(() => {
  switch (props.type) {
    case 'info':
      return 'bg-blue-500 text-white';
    case 'success':
      return 'bg-green-500 text-white';
    case 'warning':
      return 'bg-yellow-500 text-black';
    case 'error':
      return 'bg-red-500 text-white';
    default:
      return 'bg-blue-500 text-white';
  }
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>