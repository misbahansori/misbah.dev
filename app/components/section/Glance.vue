<script setup lang="ts">
import { featuredProjects } from "~/data/projects";
import { skills } from "~/data/skills";
import { workExperiences } from "~/data/workExperience";

// Everything here is derived from the work history rather than hand-written,
// so the numbers cannot drift out of date.
const now = useRenderTime();

const careerStart = workExperiences.reduce(
  (earliest, role) => (role.startDate < earliest ? role.startDate : earliest),
  workExperiences[0]!.startDate,
);

const stats = computed(() => [
  {
    value: durationCompact(careerStart, now.value),
    label: "Experience",
    note: `since ${formatMonthYear(careerStart)}`,
    accent: true,
  },
  {
    value: String(workExperiences.length),
    label: "Roles",
    note: "2 remote, 1 on-site",
  },
  {
    value: String(featuredProjects.length),
    label: "Products shipped",
    note: featuredProjects.map((project) => project.title).join(", "),
  },
  {
    value: String(skills.length),
    label: "Core stack",
    note: "PHP and TypeScript",
  },
]);
</script>

<template>
  <GraphFrame title="At a glance">
    <ul class="grid gap-8 sm:grid-cols-4" role="list">
      <Reveal
        v-for="(stat, index) in stats"
        :key="stat.label"
        as="li"
        :index="index"
        class="flex flex-col gap-2"
      >
        <p
          class="text-3xl tracking-tight tabular-nums sm:text-4xl"
          :class="stat.accent ? 'text-graph-accent' : 'text-foreground'"
        >
          {{ stat.value }}
        </p>
        <p class="text-graph-muted">{{ stat.label }}</p>
        <p class="text-graph-muted">{{ stat.note }}</p>
      </Reveal>
    </ul>
  </GraphFrame>
</template>
