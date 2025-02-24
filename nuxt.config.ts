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
    "@vueuse/nuxt",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "nuxt-og-image",
    "@nuxt/content",
    "@vueuse/motion/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-umami",
  ],

  tailwindcss: {
    viewer: false,
  },

  vue: {
    propsDestructure: true,
  },

  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },

  colorMode: {
    preference: "dark",
    classSuffix: "",
  },

  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            "php",
            "html",
            "vue",
            "vue-html",
            "bash",
            "json",
            "javascript",
            "css",
            "markdown",
          ],
          theme: {
            default: "andromeeda",
            dark: "andromeeda",
          },
        },
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  icon: {
    customCollections: [
      {
        prefix: "my-icon",
        dir: "./app/assets/icons",
      },
    ],
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800],
    },
  },

  ogImage: {
    defaults: {
      component: "HomePage",
    },
  },

  $production: {
    umami: {
      host: "https://cloud.umami.is",
      id: "e4e76e7e-3f0f-4d3d-82dd-c9177d7a907b",
      autoTrack: true,
    },
  },

  compatibilityDate: "2024-09-27",
});
