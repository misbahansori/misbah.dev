<script setup lang="ts">
import { navigationLinks } from "~/data/navigation";
import { profile } from "~/data/profile";

const route = useRoute();

function isActive(path: string) {
  return path === "/" ? route.path === "/" : route.path.startsWith(path);
}
</script>

<template>
  <header class="mx-auto w-full max-w-4xl px-5 pt-8 pb-12 sm:px-8">
    <div class="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
      <NuxtLink to="/" class="inline-flex font-mono text-sm tracking-tight whitespace-nowrap">
        <span class="text-graph-accent">::</span>
        <span>misbah</span>
        <span class="text-graph-muted">.</span>
        <span>dev</span>
      </NuxtLink>

      <nav class="flex items-center gap-5">
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.path"
          :to="link.path"
          class="font-mono text-xs tracking-wide uppercase transition-colors"
          :class="
            isActive(link.path) ? 'text-graph-accent' : 'text-graph-muted hover:text-graph-accent'
          "
        >
          {{ link.name }}
        </NuxtLink>

        <ThemeToggle />

        <a
          :href="`https://github.com/${profile.handle}`"
          target="_blank"
          rel="noreferrer noopener"
          class="text-graph-muted hover:text-graph-accent font-mono text-xs tracking-wide uppercase transition-colors"
        >
          GH
        </a>
      </nav>
    </div>

    <GraphRule class="mt-8" />
  </header>
</template>
