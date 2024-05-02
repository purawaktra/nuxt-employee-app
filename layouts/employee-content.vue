<script setup lang="ts">
</script>

<template>
  <div class="z-1 fixed w-full backdrop-blur-sm bg-opacity-80 bg-base-100">
    <Header/>
  </div>
  <div class="flex items-center justify-center content-center">
    <div class="xl:w-[1280px] w-full flex" style="margin-top: var(--vt-nav-height);">
      <div class="fixed"
           style="min-width: var(--vp-sidebar-width-small); height: calc(100vh - var(--vt-nav-height) - 1px);">
        <EmployeeSidebarLeft/>
      </div>
      <div
          class="fixed xl:ml-[calc(1280px-var(--vp-right-sidebar-width-small))] ml-[calc(100%-var(--vp-right-sidebar-width-small))]"
          style="min-width: var(--vp-right-sidebar-width-small); height: calc(100vh - var(--vt-nav-height) - 1px);">
        <EmployeeSidebarRightContent/>
      </div>
      <div
          class="ml-[calc(var(--vp-sidebar-width-small)+1rem)] mr-[var(--vp-right-sidebar-width-small)] w-auto content-center justify-center flex-grow pt-1">
        <slot/>
      </div>
    </div>
  </div>
  <div>
    <Footer/>
  </div>
</template>

<style scoped>
</style>