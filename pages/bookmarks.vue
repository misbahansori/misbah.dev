<script setup lang="ts">
const bookmarks = [
  {
    url: "https://gif.ski/",
    name: "Gifski",
  },
  {
    url: "https://ui.aceternity.com/",
    name: "Aeternity UI",
  },
  {
    url: "https://www.hackreels.com/",
    name: "Hackreels",
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
    <div class="grid grid-cols-3 pt-8">
      <NuxtLink
        v-for="bookmark in bookmarks"
        :key="bookmark.url"
        :to="bookmark.url"
        target="_blank"
        class="flex flex-col items-start justify-center gap-2 rounded-lg p-4 shadow-md transition-shadow hover:shadow-lg"
      >
        <span class="text-base font-bold">{{ bookmark.name }}</span>
        <span class="text-sm text-muted-foreground">{{ bookmark.url }}</span>
      </NuxtLink>
    </div>
  </section>
</template>
