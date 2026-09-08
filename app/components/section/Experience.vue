<script setup lang="ts">
import { workExperiences } from "~/data/workExperience";

const now = useRenderTime();

function roundPct(value: number) {
  return Math.round(value * 10) / 10;
}

function monthsFrom(start: Date, end: Date) {
  return (
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 + (end.getUTCMonth() - start.getUTCMonth())
  );
}

const timeline = computed(() => {
  const earliest = workExperiences.reduce(
    (min, role) => (role.startDate < min ? role.startDate : min),
    workExperiences[0]!.startDate,
  );

  const origin = new Date(earliest);
  const end = now.value;
  const span = monthsFrom(origin, end) || 1;

  const offset = (date: string | Date) => {
    const value = typeof date === "string" ? new Date(date) : date;
    return (monthsFrom(origin, value) / span) * 100;
  };

  const rows = workExperiences.map((role) => {
    const left = offset(role.startDate);
    const right = offset(role.endDate ?? end);

    return {
      ...role,
      companyLabel: role.company.split(",")[0]!,
      left: roundPct(left),
      width: roundPct(Math.max(right - left, 1.5)),
      current: role.endDate === null,
      duration: durationForHumans(role.startDate, role.endDate ?? end),
    };
  });

  const firstYear = origin.getUTCFullYear();
  const lastYear = end.getUTCFullYear();
  const years = [];
  const startYear = origin.getUTCMonth() === 0 ? firstYear : firstYear + 1;

  for (let year = startYear; year <= lastYear; year++) {
    years.push({
      year,
      left: roundPct(offset(new Date(Date.UTC(year, 0, 1)))),
      major: year === startYear || year === lastYear || year % 2 === 0,
    });
  }

  return { origin, rows, years };
});
</script>

<template>
  <GraphFrame title="Timeline" content-class="flex flex-col gap-6">
    <div
      class="hidden sm:grid sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-x-4"
      aria-hidden="true"
    >
      <span />
      <div>
        <div class="relative h-4 text-xs tabular-nums">
          <span
            v-for="tick in timeline.years"
            :key="tick.year"
            class="text-graph-muted absolute top-0"
            :class="[
              tick.left === 0 ? '' : '-translate-x-1/2',
              tick.major ? '' : 'hidden lg:block',
            ]"
            :style="{ left: `${tick.left}%` }"
          >
            {{ tick.year }}
          </span>
        </div>
        <div class="relative mt-1 h-2">
          <div class="graph-rule absolute inset-x-0 top-1/2" />
          <span
            v-for="tick in timeline.years"
            :key="`mark-${tick.year}`"
            class="bg-graph-frame absolute top-0 h-2 w-px"
            :class="tick.major ? '' : 'hidden lg:block'"
            :style="{ left: `${tick.left}%` }"
          />
        </div>
      </div>
    </div>

    <Reveal
      v-for="(role, index) in timeline.rows"
      :key="`${role.company}-${role.startDate}`"
      :index="index"
      class="grid grid-cols-1 items-start gap-y-2 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:items-stretch sm:gap-x-4"
    >
      <div class="flex min-w-0 flex-col gap-1 sm:py-0.5">
        <span
          class="truncate"
          :class="role.current ? 'text-graph-accent' : 'text-foreground'"
          :title="role.company"
        >
          {{ role.companyLabel }}
        </span>
        <span class="text-graph-muted">{{ role.duration }}</span>
      </div>

      <div aria-hidden="true" class="relative h-4 select-none sm:h-auto">
        <div class="graph-rule absolute inset-x-0 top-1/2" />
        <div
          class="absolute top-1/2 h-2 -translate-y-1/2 sm:inset-y-1.5 sm:h-auto sm:translate-y-0"
          :class="role.current ? 'bg-graph-accent' : 'bg-foreground'"
          :style="{ left: `${role.left}%`, width: `${role.width}%` }"
        />
      </div>

      <span class="sr-only">
        {{ role.title }} at {{ role.company }}, {{ formatMonthYear(role.startDate) }} to
        {{ role.endDate ? formatMonthYear(role.endDate) : "present" }}, {{ role.duration }}
      </span>
    </Reveal>

    <div class="text-graph-muted flex justify-between tabular-nums sm:hidden">
      <span>{{ formatMonthYear(timeline.origin) }}</span>
      <span>Present</span>
    </div>

    <p class="text-graph-muted">Bar position is calendar time.</p>
  </GraphFrame>
</template>
