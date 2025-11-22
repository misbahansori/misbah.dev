<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { featuredProjects } from "~/data/projects";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <section>
    <div :class="cn('relative mx-auto max-w-3xl px-4', props.class)">
      <BorderX />
      <div class="relative">
        <div class="flex max-w-xl flex-col gap-4 py-6 lg:py-8">
          <h2 class="font-serif text-3xl/snug tracking-wide italic">
            My Projects
          </h2>
          <p class="text-muted-foreground">
            Check out some of my projects. Here's what I've been working on
            lately.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 pt-4 pb-12 sm:grid-cols-2">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.title"
            :project="project"
          />
        </div>
      </div>
    </div>
  </section>
</template>
