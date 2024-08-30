// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'G-W9ZLZJ3F1G'
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'G-W9ZLZJ3F1G'
    }
  }
  
})
// 'G-W9ZLZJ3F1G'