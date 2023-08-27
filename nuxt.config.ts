// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
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
