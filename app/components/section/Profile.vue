<script setup lang="ts">
import { profile } from "~/data/profile";
</script>

<template>
  <section>
    <Reveal v-if="profile.available" as="p" class="mb-8 font-mono text-xs tracking-wide uppercase">
      <span class="text-graph-accent">[ Available for projects ]</span>
    </Reveal>

    <Reveal :index="1">
      <h1 class="font-mono text-2xl tracking-tight sm:text-3xl">
        {{ profile.name }}
      </h1>
      <p class="text-graph-accent mt-2 font-mono text-sm tracking-wide uppercase">
        {{ profile.title }}
      </p>
    </Reveal>

    <Reveal
      :index="2"
      as="p"
      class="text-foreground/80 mt-8 max-w-[68ch] text-[0.95rem] leading-relaxed"
    >
      {{ profile.summary }}
    </Reveal>

    <Reveal
      :index="3"
      as="p"
      class="text-graph-muted mt-6 font-mono text-xs tracking-wide uppercase"
    >
      {{ profile.location }}
      <span class="text-graph-frame mx-2">·</span>
      <a
        :href="`mailto:${profile.email}`"
        class="hover:text-graph-accent underline decoration-dotted underline-offset-4 transition-colors"
      >
        {{ profile.email }}
      </a>
    </Reveal>
  </section>
</template>
