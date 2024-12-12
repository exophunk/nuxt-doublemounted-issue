// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  app: {
    pageTransition: { mode: 'out-in', name: 'page', duration: 300 },
    layoutTransition: { mode: 'out-in', name: 'page', duration: 300 },
  },
})
