<script setup lang="ts">
import { cv } from "~/data/cv";
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-3xl px-4">
      <BorderX />
      <div class="flex flex-col gap-2 py-6 lg:py-12">
        <h2 class="font-serif text-3xl/snug tracking-wide italic">
          Languages
        </h2>
        <p class="text-muted-foreground">Communication</p>
      </div>
      <ul class="space-y-3 pb-8 sm:pb-12">
        <li
          v-for="lang in cv.languages"
          :key="lang.name"
          class="flex flex-wrap items-baseline justify-between gap-2 text-base"
        >
          <span class="font-medium">{{ lang.name }}</span>
          <span class="text-muted-foreground text-sm">{{ lang.proficiency }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
