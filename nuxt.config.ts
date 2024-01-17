// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
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
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  colorMode: {
    classSuffix: "",
  },
});
