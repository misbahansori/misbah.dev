// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@nuxt/content",
  ],
  tailwindcss: {
    viewer: false,
  },
  googleFonts: {
    families: {
      "DM Sans": [400, 500, 600, 700],
      "Playfair Display": [400, 500, 600, 700, 800],
    },
  },
  vue: {
    propsDestructure: true,
  },
});