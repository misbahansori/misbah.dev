// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-icon"],
  tailwindcss: {
    viewer: false,
  },
  googleFonts: {
    families: {
      inter: [400, 500, 600, 700],
      "Playfair Display": [400, 500, 600, 700],
    },
  },
});