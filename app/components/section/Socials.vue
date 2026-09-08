<script setup lang="ts">
import { profile } from "~/data/profile";
import { socials } from "~/data/socials";
</script>

<template>
  <GraphFrame title="Where to find me" content-class="flex flex-col gap-3">
    <Reveal
      v-for="(social, index) in socials"
      :key="social.name"
      :index="index"
      class="grid grid-cols-[minmax(0,7rem)_minmax(0,1fr)] items-baseline gap-x-4"
    >
      <span class="text-graph-muted tracking-wide uppercase">{{ social.name }}</span>
      <a
        :href="social.url"
        target="_blank"
        rel="noreferrer noopener"
        class="hover:text-graph-accent truncate transition-colors"
      >
        {{ social.handle }}
      </a>
    </Reveal>

    <Reveal
      :index="socials.length"
      class="grid grid-cols-[minmax(0,7rem)_minmax(0,1fr)] items-baseline gap-x-4"
    >
      <span class="text-graph-muted tracking-wide uppercase">Email</span>
      <a
        :href="`mailto:${profile.email}`"
        class="hover:text-graph-accent truncate transition-colors"
      >
        {{ profile.email }}
      </a>
    </Reveal>
  </GraphFrame>
</template>
