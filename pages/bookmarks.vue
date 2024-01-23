<script setup lang="ts">
const bookmarks = [
  {
    url: "https://gif.ski/",
    name: "Gifski",
  },
];
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-4 py-6 lg:py-8">
      <h1 class="text-xl font-bold">My Blog</h1>
      <p class="text-muted-foreground">Just some random thoughts of mine</p>
    </div>
    <div class="grid grid-cols-3 pt-12">
      <div v-for="bookmark in bookmarks" :key="bookmark.url">
        <article class="group relative">
          <div
            class="absolute -inset-x-4 -inset-y-2.5 transition group-hover:bg-accent-foreground/5 group-hover:backdrop-blur-[2px] sm:rounded-2xl md:-inset-x-6 md:-inset-y-4"
          ></div>
          <div class="relative">
            <h3 class="pt-8 text-base font-semibold tracking-tight lg:pt-0">
              {{ bookmark.name }}
            </h3>
          </div>
          <NuxtLink
            class="flex items-center text-sm font-medium text-sky-500"
            :to="bookmark.url"
            target="_blank"
          >
            <span
              class="absolute -inset-x-4 -inset-y-2.5 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4"
            ></span>
            <span class="relative">
              Read more
              <span class="sr-only">, {{ bookmark.name }}</span>
            </span>
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>
