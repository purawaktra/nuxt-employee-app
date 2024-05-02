<template>
  <div class="alert-box">
    <strong>Success!</strong>
    <br/>
    <slot />
  </div>
</template>

<style scoped>
.alert-box {
  color: #666;
  border: 1px solid #00bd7e;
  border-radius: 4px;
  padding: 20px;
  background-color: #f8f8f8;
}

strong {
  color: #00bd7e;
}
</style>
<script setup lang="ts">
</script>