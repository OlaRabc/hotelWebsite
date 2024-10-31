// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  plugins: ["~/plugins/pinia.js"],
  buildModules: ["@pinia/nuxt", "@nuxtjs/google-analytics"],
  app: {
    head: {
      title: "Fun and Relax",
      meta: [
        {
          name: "description",
          content:
            "Zanurz się w wyjątkowym świecie luksusu i relaksu, gdzie wypoczynek staje się prawdziwą przyjemnością. Nasz hotel to idealne miejsce na wyjątkowe wakacje nad polskim morzem, oferujący bogaty wachlarz udogodnień, które spełnią oczekiwania nawet najbardziej wymagających",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Aleksandra Rabcewicz" },
        {
          name: "keywords",
          content:
            "funAndRelax, hotel, hotel Świnoujście, rezerwacja, Morze Bałtyckie, Hotel Bałtyk",
        },
      ],
    },
  },
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
