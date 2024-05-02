<script setup lang="ts">
import {RouterLink} from 'vue-router'
import {onMounted} from 'vue'
import themeChange from 'theme-change'

const config = useRuntimeConfig()
const appVersion = config.public.appVersion

onMounted(() => {
  themeChange.themeChange(false);
})
</script>

<template>
  <header class="flex items-center justify-center content-center border-b-2 ">
    <div class="w-[1280px] flex items-center z-1"
         style="padding-left: calc(var(--section-gap) / 6); padding-right: calc(var(--section-gap) / 6); height: calc(var(--vt-nav-height) - 1px)">
      <RouterLink to="/home">
        <div class="flex items-center">
          <img alt="Vue logo" src="../assets/logo.svg" width="42" height="42"/>
          <div class="font-medium text-2xl">ePortal</div>
        </div>
      </RouterLink>
      <div class="font-normal text-gray-400 text-sm pl-2 pr-2 mt-1 ml-2 border rounded">
        {{ appVersion }}
      </div>
      <div class="flex flex-grow">
      </div>
      <div class="flex items-center">
        <div class="text-2xl">
          <a>Organization</a>
        </div>
        <div class="ml-3 text-2xl">
          <RouterLink to="/employee/getting-started">Employee</RouterLink>
        </div>
        <div class="ml-3 text-2xl">
          <RouterLink to="/training">Training</RouterLink>
        </div>
        <div class="ml-3 text-2xl">
          <RouterLink to="/file">File</RouterLink>
        </div>
        <div class="ml-3 text-2xl" tabindex="6">
          <RouterLink to="/administration">Administration</RouterLink>
        </div>
        <div class="ml-6 mr-6 dropdown dropdown-end" tabindex="1">
          <div role="button" class="avatar mt-1">
            <div class="w-8 rounded">
              <img alt="Account" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
            </div>
          </div>
          <ul tabindex="1" class="mt-3 z-[1] p-2 shadow menu menu-md dropdown-content bg-base-100 rounded-none w-52">
            <li>
              <a>Profile</a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
        <label class="flex cursor-pointer gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
          </svg>
          <input type="checkbox" value="dracula" class="toggle theme-controller" data-set-theme="corporate"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  </header>
</template>

<style scoped>
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

a.router-link-active {
  color: hsla(160, 100%, 37%, 1);
  font-weight: 600;
}
</style>