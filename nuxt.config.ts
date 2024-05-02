// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    '@vueuse/nuxt',
    '@vueform/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/content',
    '@pinia/nuxt',
  ],
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  devServer: {port: 4173},
  runtimeConfig: {
    public: {
      beHost: 'http://localhost:3000',
      appVersion: 'v0.44beta',
      env: 'development'
    }
  },
  css: [
    '~/assets/base.css',
  ],
})