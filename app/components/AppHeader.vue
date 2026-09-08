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
          aria-label="GitHub"
          class="text-graph-muted hover:text-graph-accent relative inline-flex size-4 items-center justify-center transition-[color,transform] before:absolute before:top-1/2 before:left-1/2 before:size-11 before:-translate-x-1/2 before:-translate-y-1/2 active:scale-[0.96]"
        >
          <Icon name="my-icon:github" class="size-4" />
        </a>
      </nav>
    </div>

    <GraphRule class="mt-8" />
  </header>
</template>
