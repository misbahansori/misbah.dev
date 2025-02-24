<script setup lang="ts">
import type { BlogCollectionItem } from "@nuxt/content";

const { article } = defineProps<{
  article: BlogCollectionItem;
}>();
</script>

<template>
  <article class="group relative my-8">
    <div
      class="absolute -inset-x-4 -inset-y-2.5 transition group-hover:bg-accent-foreground/5 group-hover:backdrop-blur-[2px] sm:rounded-2xl md:-inset-x-6 md:-inset-y-4"
    ></div>
    <div class="relative">
      <h3 class="text-base font-semibold tracking-tight">
        {{ article.title }}
      </h3>
      <div class="mt-2 line-clamp-2 text-muted-foreground">
        <p>
          {{ article.description }}
        </p>
      </div>
    </div>
    <NuxtLink
      class="mt-3 flex items-center text-sm font-medium text-sky-500"
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
