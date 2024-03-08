// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Misbah Ansori - Fullstack Developer",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>",
        },
      ],
    },
  },
  site: {
    url: "https://misbah.dev",
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "nuxt-og-image",
    "@nuxt/content",
    "@vueuse/motion/nuxt",
    "nuxt-svgo",
    "@nuxthq/studio",
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
    preference: "dark",
    classSuffix: "",
  },
  content: {
    highlight: {
      langs: ["php"],
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
    },
    documentDriven: true,
  },
  svgo: {
    fontControlled: false,
  },
});
