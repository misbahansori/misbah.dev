<script setup lang="ts">
import { workExperiences } from "~/data/workExperience";

const now = useRenderTime();
</script>

<template>
  <section class="flex flex-col">
    <Reveal
      v-for="(role, index) in workExperiences"
      :key="`${role.company}-${role.startDate}`"
      :index="index"
      class="flex flex-col gap-4 py-8 first:pt-0 sm:grid sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-x-8"
      :class="index > 0 ? 'graph-rule-t' : ''"
    >
      <div class="text-graph-muted flex flex-col gap-1 font-mono text-xs tabular-nums">
        <span class="tracking-wide uppercase">
          {{ formatMonthYear(role.startDate) }} —
          {{ role.endDate ? formatMonthYear(role.endDate) : "Present" }}
        </span>
        <span>{{ durationForHumans(role.startDate, role.endDate ?? now) }}</span>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-mono text-base tracking-tight">
          {{ role.title }}
        </h3>
        <p class="text-graph-muted font-mono text-xs">
          {{ role.company }}
          <span class="text-graph-frame mx-1">·</span>
          {{ role.location }}
        </p>
        <ul class="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs" role="list">
          <li v-for="tech in role.techStack" :key="tech" class="text-graph-accent-3">
            [ {{ tech }} ]
          </li>
        </ul>
      </div>
    </Reveal>
  </section>
</template>

<style scoped>
.graph-rule-t {
  border-top: 0;
  background-image: repeating-linear-gradient(
    to right,
    var(--graph-frame) 0 2px,
    transparent 2px 7px
  );
  background-repeat: no-repeat;
  background-size: 100% 1px;
  background-position: 0 0;
}
</style>
