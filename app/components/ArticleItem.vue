<script setup lang="ts">
import type { BlogCollectionItem } from "@nuxt/content";

const { article } = defineProps<{
  article: BlogCollectionItem;
}>();
</script>

<template>
  <article class="group relative">
    <div
      class="absolute -inset-x-4 -inset-y-2.5 transition group-hover:bg-accent-foreground/5 group-hover:backdrop-blur-[2px] sm:rounded-2xl md:-inset-x-6 md:-inset-y-4"
    ></div>
    <div class="relative">
      <h3 class="pt-8 text-base font-semibold tracking-tight lg:pt-0">
        {{ article.title }}
      </h3>
      <div class="mb-4 mt-2 line-clamp-2">
        <p>
          {{ article.description }}
        </p>
      </div>
    </div>
    <NuxtLink
      class="flex items-center text-sm font-medium text-sky-500"
      :to="article.path"
    >
      <span
        class="absolute -inset-x-4 -inset-y-2.5 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4"
      ></span>
      <span class="relative">
        Read more
        <span class="sr-only">, {{ article.title }}</span>
      </span>
    </NuxtLink>
  </article>
</template>
