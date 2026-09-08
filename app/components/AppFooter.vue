<script setup lang="ts">
import { profile } from "~/data/profile";
import { socials } from "~/data/socials";

const now = useRenderTime();
const year = computed(() => now.value.getFullYear());
</script>

<template>
  <footer class="mx-auto w-full max-w-4xl px-5 pb-14 sm:px-8">
    <GraphRule class="mb-6" />

    <div class="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 font-mono text-xs">
      <p class="text-graph-muted tracking-wide uppercase">&copy; {{ year }} {{ profile.name }}</p>

      <nav class="flex flex-wrap items-center gap-x-5 gap-y-2">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noreferrer noopener"
          class="text-graph-muted hover:text-graph-accent tracking-wide uppercase transition-colors"
        >
          {{ social.name }}
        </a>
      </nav>
    </div>
  </footer>
</template>
