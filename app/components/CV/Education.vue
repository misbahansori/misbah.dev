<script setup lang="ts">
import { cv } from "~/data/cv";
</script>

<template>
  <section v-if="cv.education.length">
    <div class="relative mx-auto max-w-3xl px-4">
      <BorderX />
      <div class="flex flex-col gap-2 py-6 lg:py-12">
        <h2 class="font-serif text-3xl/snug tracking-wide italic">
          Education
        </h2>
        <p class="text-muted-foreground">Academic background</p>
      </div>
      <ul class="space-y-4 pb-8 sm:pb-12">
        <li v-for="(entry, i) in cv.education" :key="i" class="text-base leading-snug">
          <div class="font-semibold tracking-tight">{{ entry.degree }}</div>
          <div class="text-muted-foreground text-sm">{{ entry.institution }}</div>
          <div class="text-muted-foreground text-sm tabular-nums">{{ entry.period }}</div>
          <p v-if="entry.details" class="text-muted-foreground mt-1 text-sm">{{ entry.details }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
