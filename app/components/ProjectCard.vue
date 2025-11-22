<script setup lang="ts">
import type { Project } from "~/data/projects";

const { project } = defineProps<{
  project: Project;
}>();
</script>
<template>
  <div class="flex flex-col gap-4">
    <NuxtLink
      :to="project.link"
      target="_blank"
      class="bg-muted dark:border-border group relative flex overflow-hidden rounded-3xl border border-zinc-300 px-6 pt-6 shadow-sm ring-0 inset-shadow-2xs shadow-zinc-950/10 inset-shadow-white duration-150 dark:inset-shadow-transparent"
    >
      <div
        class="border-border -mb-1 aspect-4/3 origin-bottom overflow-hidden rounded-t-xl border shadow-xl transition group-hover:scale-105"
      >
        <img
          :src="project.image.light"
          alt=""
          class="h-full w-full object-cover dark:hidden"
        />
        <img
          :src="project.image.dark"
          alt=""
          class="hidden h-full w-full object-cover dark:block"
        />
      </div>
    </NuxtLink>
    <div class="flex flex-col gap-2">
      <NuxtLink :to="project.link" target="_blank">
        <h3 class="text-lg font-semibold hover:underline">
          {{ project.title }}
        </h3>
      </NuxtLink>
      <p class="text-muted-foreground text-base/relaxed">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>
