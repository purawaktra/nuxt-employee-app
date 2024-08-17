// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/content',
    '@pinia/nuxt',
  ],

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  colorMode: {
    preference: 'light'
  },

  devServer: {port: 4173},

  runtimeConfig: {
    jwtSecret: "dL5vNvitO2",
    public: {
      appVersion: 'v0.05beta',
      env: 'development',
      host: 'http://localhost:4173'
    }
  },

  css: [
    '~/assets/base.css',
  ],

  compatibilityDate: '2024-08-14',
})