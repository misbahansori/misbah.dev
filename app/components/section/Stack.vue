<script setup lang="ts">
import { skills } from "~/data/skills";
import { workExperiences } from "~/data/workExperience";

const COLUMNS = 24;

/**
 * Bar length is time-in-use, taken from the earliest role that lists the
 * technology — so it reflects the work history rather than a self-rating.
 */
const now = useRenderTime();

const rows = computed(() => {
  const measured = skills.map((skill) => {
    const roles = workExperiences.filter((role) => role.techStack.includes(skill.name));
    const since = roles.reduce<string | null>(
      (earliest, role) => (!earliest || role.startDate < earliest ? role.startDate : earliest),
      null,
    );

    return {
      ...skill,
      since,
      months: since ? monthsBetween(since, now.value) : 0,
      label: since ? durationCompact(since, now.value) : "—",
    };
  });

  const longest = Math.max(...measured.map((skill) => skill.months), 1);

  return measured.map((skill) => ({
    ...skill,
    filled: Math.max(1, Math.round((skill.months / longest) * COLUMNS)),
  }));
});

const columns = [...Array(COLUMNS).keys()];
</script>

<template>
  <GraphFrame title="Stack" content-class="flex flex-col gap-4">
    <Reveal
      v-for="(skill, index) in rows"
      :key="skill.name"
      :index="index"
      class="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1 sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)_4ch]"
    >
      <a
        :href="skill.url"
        target="_blank"
        rel="noreferrer noopener"
        class="hover:text-graph-accent col-start-1 row-start-1 truncate transition-colors"
      >
        {{ skill.name }}
      </a>

      <span
        aria-hidden="true"
        class="col-span-2 col-start-1 row-start-2 flex min-w-0 select-none sm:col-span-1 sm:col-start-2 sm:row-start-1"
      >
        <span
          v-for="column in columns"
          :key="column"
          class="min-w-[1ch] flex-1 text-center"
          :class="column < skill.filled ? 'text-graph-accent' : 'text-graph-frame'"
        >
          {{ column < skill.filled ? "█" : "░" }}
        </span>
      </span>

      <span class="text-graph-muted col-start-2 row-start-1 text-right tabular-nums sm:col-start-3">
        {{ skill.label }}
      </span>

      <span class="sr-only">{{ skill.name }}: {{ skill.label }} in production use</span>
    </Reveal>

    <p class="text-graph-muted mt-2">Bar length is time in production use.</p>
  </GraphFrame>
</template>
