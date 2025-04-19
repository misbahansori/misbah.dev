<script setup lang="ts">
useSeoMeta({
  title: "My Bookmarks",
  description: "Useful links that I often visit and use",
  ogTitle: "My Bookmarks",
  ogDescription: "Useful links that I often visit and use",
  twitterTitle: "My Bookmarks",
  twitterDescription: "Useful links that I often visit and use",
  twitterCard: "summary_large_image",
});

const bookmarks = [
  {
    url: "https://gif.ski",
    name: "Gifski",
    description: "Convert videos to high-quality GIFs",
  },
  {
    url: "https://ui.aceternity.com",
    name: "Aeternity UI",
    description: "Make your websites look 10x better",
  },
  {
    url: "https://www.hackreels.com",
    name: "Hackreels",
    description: "Animate your code, in HD.",
  },
  {
    url: "https://uicolors.app",
    name: "Tailwind CSS Color Generator",
    description: "Generate beautiful color combinations ",
  },
  {
    url: "https://ksassnowski.github.io/vueclid-docs",
    name: "Vueclid",
    description: "Delightfully simple math diagrams for Vuejs",
  },
  {
    url: "https://logosystem.co",
    name: "Logo System",
    description: "The biggest logo design library",
  },
  {
    url: "https://fontjoy.com",
    name: "Fontjoy",
    description: "Generate font combinations with deep learning",
  },
  {
    url: "https://svgl.app",
    name: "SVGL",
    description: "A beautiful library with SVG logos",
  },
  {
    url: "https://www.logoipsum.com",
    name: "Logoipsum",
    description: "Free SVG placeholder logos",
  },
  {
    url: "https://typefaces.today",
    name: "Typefaces Today",
    description: "A collection of free fonts",
  },
  {
    url: "https://www.isocons.app",
    name: "Isocons",
    description: "Isometric icons for your products",
  },
  {
    url: "https://www.unsection.com",
    name: "Unsection",
    description: "Curated website section design library",
  },
];
</script>

<template>
  <section>
    <div class="min-h-screen-min relative mx-auto max-w-3xl px-4">
      <BorderX />
      <div class="relative">
        <div class="flex flex-col gap-4 py-6 lg:py-8">
          <h1 class="text-xl font-bold">My Bookmark</h1>
          <p class="text-muted-foreground">
            Useful links that I often visit and use
          </p>
        </div>
        <div
          class="mt-8 grid grid-cols-1 overflow-hidden sm:grid-cols-2 md:grid-cols-3"
        >
          <NuxtLink
            v-for="bookmark in bookmarks.reverse()"
            :key="bookmark.url"
            :to="bookmark.url"
            target="_blank"
            class="group bg-background hover:bg-accent relative -mt-px -ml-px flex flex-col items-start justify-center gap-2 border-t border-l px-4 py-5 transition"
          >
            <span class="text-base font-bold">{{ bookmark.name }}</span>
            <p class="text-muted-foreground text-sm">
              {{ bookmark.description }}
            </p>
            <Icon
              name="tabler:external-link"
              class="absolute top-4 right-4 h-4 w-4 origin-bottom-left scale-75 opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-90"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
