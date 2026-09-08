<script setup lang="ts">
import { featuredProjects } from "~/data/projects";
</script>

<template>
  <div class="flex flex-col gap-12">
    <GraphFrame
      v-for="project in featuredProjects"
      :key="project.title"
      :title="project.title"
      content-class="flex flex-col gap-4"
    >
      <Reveal>
        <p class="text-foreground/80">{{ project.description }}</p>

        <ul class="mt-4 flex flex-wrap gap-x-3 gap-y-1" role="list">
          <li v-for="tech in project.stack" :key="tech" class="text-graph-accent-3">
            [ {{ tech }} ]
          </li>
        </ul>

        <div class="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <a
            :href="project.url"
            target="_blank"
            rel="noreferrer noopener"
            class="text-graph-accent hover:text-foreground transition-colors"
          >
            ▶ {{ hostname(project.url) }}
          </a>
          <span class="text-graph-muted tabular-nums">{{ project.year }}</span>
        </div>
      </Reveal>
    </GraphFrame>
  </div>
</template>
