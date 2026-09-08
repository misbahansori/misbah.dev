<script setup lang="ts">
interface Contribution {
  date: string;
  intensity: string;
  count: number;
}

interface Activity {
  total: number;
  contributions: Contribution[][];
}

const { data } = await useFetch<Activity>("/api/activity", {
  default: () => ({ total: 0, contributions: [] }),
});

const weeks = computed(() => data.value?.contributions ?? []);
const hasData = computed(() => weeks.value.length > 0);

const range = computed(() => {
  const first = weeks.value[0]?.[0]?.date;
  const last = weeks.value.at(-1)?.at(-1)?.date;
  return {
    from: first ? formatMonthYear(first) : "",
    to: last ? formatMonthYear(last) : "",
  };
});

const legend = [0, 1, 2, 3, 4];
</script>

<template>
  <GraphFrame title="Contributions" content-class="flex flex-col gap-4">
    <template v-if="hasData">
      <Reveal
        class="graph-scroll-x @container"
        role="img"
        :aria-label="`${data.total} GitHub contributions between ${range.from} and ${range.to}`"
      >
        <!-- Columns flex to fill the panel exactly, while the container-relative
             font size scales each glyph to match its cell, so the grid stays as
             dense as it is small. -->
        <div aria-hidden="true" class="flex w-full text-[3.15cqw] leading-none select-none">
          <div v-for="week in weeks" :key="week[0]?.date" class="flex min-w-0 flex-1 flex-col">
            <span
              v-for="day in week"
              :key="day.date"
              class="block h-[1em] w-full text-center"
              :class="intensityClass(Number(day.intensity))"
            >
              {{ intensityGlyph(Number(day.intensity)) }}
            </span>
          </div>
        </div>
      </Reveal>

      <div class="text-graph-muted flex justify-between tabular-nums">
        <span>{{ range.from }}</span>
        <span>{{ range.to }}</span>
      </div>

      <div class="mt-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <p>
          <span class="text-graph-accent tabular-nums">
            {{ data.total.toLocaleString("en-US") }}
          </span>
          <span class="text-graph-muted">contributions in the last year</span>
        </p>

        <p aria-hidden="true" class="text-graph-muted flex items-baseline gap-1">
          <span>Less</span>
          <span v-for="level in legend" :key="level" :class="intensityClass(level)">
            {{ intensityGlyph(level) }}
          </span>
          <span>More</span>
        </p>
      </div>
    </template>

    <p v-else class="text-graph-muted">[ Contribution data unavailable ]</p>
  </GraphFrame>
</template>
