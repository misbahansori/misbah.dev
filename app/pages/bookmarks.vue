<script setup lang="ts">
import { bookmarks } from "~/data/bookmarks";

const description = "Useful links that I often visit and use.";

useSeoMeta({
  title: "Bookmarks — Misbah Ansori",
  description,
  ogTitle: "Bookmarks — Misbah Ansori",
  ogDescription: description,
});
</script>

<template>
  <div class="flex flex-col gap-16">
    <section>
      <Reveal>
        <h1 class="font-mono text-2xl tracking-tight sm:text-3xl">Bookmarks</h1>
        <p class="text-foreground/80 mt-6 max-w-[68ch] text-[0.95rem] leading-relaxed">
          {{ description }}
        </p>
      </Reveal>
    </section>

    <GraphFrame :title="`${bookmarks.length} links`" content-class="flex flex-col gap-3">
      <Reveal
        v-for="(bookmark, index) in bookmarks"
        :key="bookmark.url"
        :index="index"
        class="grid grid-cols-[minmax(0,1fr)] gap-x-6 gap-y-1 sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)_minmax(0,10rem)]"
      >
        <a
          :href="bookmark.url"
          target="_blank"
          rel="noreferrer noopener"
          class="hover:text-graph-accent truncate transition-colors"
        >
          {{ bookmark.name }}
        </a>
        <p class="text-graph-muted truncate">{{ bookmark.description }}</p>
        <p class="text-graph-frame truncate sm:text-right">{{ hostname(bookmark.url) }}</p>
      </Reveal>
    </GraphFrame>
  </div>
</template>
