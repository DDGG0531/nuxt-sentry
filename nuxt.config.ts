// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@sentry/nuxt/module'],

  sentry: {
    sourceMapsUploadOptions: {
      org: 'ddgg',
      project: 'javascript-nuxt'
    }
  },

  sourcemap: {
    client: 'hidden'
  }
})