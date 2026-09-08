<script setup lang="ts">
import { workExperiences } from "~/data/workExperience";

const COLUMNS = 26;

const now = useRenderTime();

const timeline = computed(() => {
  const start = new Date(
    workExperiences.reduce(
      (earliest, role) => (role.startDate < earliest ? role.startDate : earliest),
      workExperiences[0]!.startDate,
    ),
  );
  const span = monthsBetween(start, now.value) || 1;

  const rows = workExperiences.map((role) => {
    const end = role.endDate ? new Date(role.endDate) : now.value;
    const from = Math.round((monthsBetween(start, role.startDate) / span) * COLUMNS);
    const to = Math.max(from + 1, Math.round((monthsBetween(start, end) / span) * COLUMNS));

    return { ...role, from, to, current: role.endDate === null };
  });

  return { start, rows };
});

const columns = [...Array(COLUMNS).keys()];
</script>

<template>
  <GraphFrame title="Timeline" content-class="flex flex-col gap-3">
    <Reveal
      v-for="(role, index) in timeline.rows"
      :key="role.company"
      :index="index"
      class="grid grid-cols-[minmax(0,1fr)] items-baseline gap-x-4 gap-y-1 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)]"
    >
      <span class="truncate" :class="role.current ? 'text-graph-accent' : 'text-foreground'">
        {{ role.company.split(",")[0] }}
      </span>

      <span aria-hidden="true" class="flex min-w-0 select-none">
        <span
          v-for="column in columns"
          :key="column"
          class="min-w-[1ch] flex-1 text-center"
          :class="
            column >= role.from && column < role.to
              ? role.current
                ? 'text-graph-accent'
                : 'text-foreground'
              : 'text-graph-frame'
          "
        >
          {{ column >= role.from && column < role.to ? "█" : "·" }}
        </span>
      </span>

      <span class="sr-only">
        {{ role.title }} at {{ role.company }}, {{ formatMonthYear(role.startDate) }} to
        {{ role.endDate ? formatMonthYear(role.endDate) : "present" }}
      </span>
    </Reveal>

    <div class="text-graph-muted mt-2 flex justify-between tabular-nums">
      <span>{{ formatMonthYear(timeline.start) }}</span>
      <span>Present</span>
    </div>
  </GraphFrame>
</template>
