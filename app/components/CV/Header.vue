<script setup lang="ts">
import { cv } from "~/data/cv";
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-3xl px-4 py-16 lg:py-24">
      <BorderX />
      <div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <img
          :src="cv.photo"
          :alt="`${cv.name} profile photo`"
          class="border-border size-30 shrink-0 rounded-full border object-cover"
        />
        <div class="min-w-0 flex-1 space-y-4">
          <div class="space-y-2">
            <h1 class="text-3xl/snug md:text-4xl/snug">
              <span class="block">{{ cv.name }}</span>
              <span class="font-serif font-medium tracking-wide italic">{{ cv.title }}</span>
            </h1>
            <p class="text-muted-foreground text-sm">
              <a class="text-foreground underline-offset-4 hover:underline" :href="`mailto:${cv.email}`">{{
                cv.email
              }}</a>
            </p>
          </div>
          <p class="text-muted-foreground/80 max-w-md text-base/loose md:max-w-xl md:text-lg/loose">
            {{ cv.summary }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
