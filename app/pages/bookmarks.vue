<script setup lang="ts">
import { LucideExternalLink } from "lucide-vue-next";
import { bookmarks } from "~/data/bookmarks";

defineOgImageComponent("BookmarksPage", {
  title: "My Bookmarks",
  description: "Useful links that I often visit and use",
  image: "/img/misbah.jpg",
});

useSeoMeta({
  title: "My Bookmarks",
  description: "Useful links that I often visit and use",
  ogTitle: "My Bookmarks",
  ogDescription: "Useful links that I often visit and use",
  twitterTitle: "My Bookmarks",
  twitterDescription: "Useful links that I often visit and use",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <section>
    <div class="min-h-screen-min relative mx-auto max-w-3xl px-4">
      <BorderX />
      <div class="relative">
        <div class="flex max-w-xl flex-col gap-4 py-6 lg:py-8">
          <h1 class="font-serif text-3xl/snug tracking-wide italic">
            My Bookmarks
          </h1>
          <p class="text-muted-foreground">
            Useful links that I often visit and use
          </p>
        </div>
        <div
          class="mt-8 grid grid-cols-1 overflow-hidden sm:grid-cols-2 md:-mx-6 md:grid-cols-3"
        >
          <NuxtLink
            v-for="bookmark in bookmarks"
            :key="bookmark.url"
            :to="bookmark.url"
            target="_blank"
            class="group bg-background hover:bg-accent relative -mt-px -ml-px flex flex-col items-start justify-start gap-2 border-t border-l px-6 py-8 transition"
          >
            <div
              class="flex items-center justify-center overflow-hidden rounded-full border"
            >
              <img
                :src="bookmark.favicon"
                class="h-8 w-8 rounded-full"
                :alt="bookmark.name"
              />
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-foreground/90 text-base font-bold md:text-lg">
                {{ bookmark.name }}
              </span>
              <p class="text-muted-foreground text-sm/relaxed">
                {{ bookmark.description }}
              </p>
            </div>
            <LucideExternalLink
              class="absolute top-4 right-4 h-4 w-4 origin-bottom-left scale-75 opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-90"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
