// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

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

  runtimeConfig: {
    GITHUB_TOKEN: "",
  },

  site: {
    url: "https://misbah.dev",
    name: "Misbah Ansori",
  },

  devtools: { enabled: true },

  modules: [
    "@vueuse/nuxt",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "nuxt-og-image",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-umami",
    "motion-v/nuxt",
    "@nuxt/hints",
    "@nuxthub/core",
  ],

  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()],
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
            default: "github-light",
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
    cssLayer: "icon",
    mode: "svg",
    clientBundle: {
      scan: true,
    },
  },

  fonts: {
    families: [
      {
        name: "Satoshi",
        weights: [400, 500, 600],
      },
      {
        name: "Playfair Display",
        weights: [400, 500, 600],
      },
    ],
  },

  // ogImage: {
  //   defaults: {
  //     component: "HomePage",
  //   },
  // },

  umami: {
    ignoreLocalhost: true,
  },

  $production: {
    umami: {
      host: "https://cloud.umami.is",
      id: "e4e76e7e-3f0f-4d3d-82dd-c9177d7a907b",
      autoTrack: true,
    },
  },

  routeRules: {
    "/blog/**": {
      isr: 60 * 60 * 24,
    },
    "/about": { static: true },
    "/bookmarks": { static: true },
    "/": { static: true },
    "/blog": { static: true },
    "/portfolios": { static: true },
  },

  compatibilityDate: "2024-09-27",
});
