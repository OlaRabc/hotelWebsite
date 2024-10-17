// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  plugins: ['~/plugins/pinia.js'],
  buildModules: ["@pinia/nuxt", "@nuxtjs/google-analytics"],
  googleAnalytics: {
    id: "G-W9ZLZJ3F1G",
    config: {
      anonymize_ip: true,
      send_page_view: true,
    },
    debug: true,
  },

  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || "http://localhost:8080",
    },
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: "G-W9ZLZJ3F1G",
    },
  },
});
