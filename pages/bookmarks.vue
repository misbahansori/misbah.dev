<script setup lang="ts">
import { ExternalLinkIcon } from "@radix-icons/vue";

useHead({
  title: "My Bookmarks",
});
useSeoMeta({
  title: "My Bookmarks",
  description: "Useful links that I often visit and use",
  ogTitle: "My Bookmarks",
  ogDescription: "Useful links that I often visit and use",
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
  },
  {
    url: "https://ksassnowski.github.io/vueclid-docs",
    name: "Vueclid",
    description: "Delightfully simple math diagrams for Vuejs",
  },
];
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-4 py-6 lg:py-8">
      <h1 class="text-xl font-bold">My Bookmark</h1>
      <p class="text-muted-foreground">
        Useful links that I often visit and use
      </p>
    </div>
    <div class="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 md:grid-cols-3">
      <NuxtLink
        v-for="bookmark in bookmarks"
        :key="bookmark.url"
        :to="bookmark.url"
        target="_blank"
        class="group group relative flex flex-col items-start justify-center gap-2 rounded-lg px-4 py-3 shadow-md transition hover:bg-accent hover:shadow-lg"
      >
        <span class="text-base font-bold">{{ bookmark.name }}</span>
        <p class="text-sm text-muted-foreground">
          {{ bookmark.description }}
        </p>
        <ExternalLinkIcon
          class="absolute right-4 top-4 h-4 w-4 origin-bottom-left scale-75 opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-90"
        />
      </NuxtLink>
    </div>
  </section>
</template>
