<script setup lang="ts">
import { Motion } from "motion-v";

interface Contribution {
  date: string;
  intensity: string;
  count: number;
}

interface ActivityResponse {
  total: number;
  contributions: Contribution[][];
}

const { data: activityData } =
  await useFetch<ActivityResponse>("/api/activity");

const colorClasses = [
  "bg-gray-100 dark:bg-gray-800", // Level 0 (no contributions)
  "bg-green-300 dark:bg-green-900", // Level 1
  "bg-green-500 dark:bg-green-800", // Level 2
  "bg-green-600 dark:bg-green-700", // Level 3
  "bg-green-700 dark:bg-green-600", // Level 4
];

const fadeInVariant = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
};

const transition = {
  duration: 1,
};

const getContributionColor = (intensity: string) => {
  const level = parseInt(intensity, 10);
  return colorClasses[level] || colorClasses[0];
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};
</script>

<template>
  <TooltipProvider>
    <div class="w-full overflow-x-auto">
      <div class="flex justify-end gap-1">
        <div
          v-for="(week, weekIndex) in activityData?.contributions"
          :key="weekIndex"
          class="flex flex-col gap-1"
        >
          <Tooltip v-for="(day, dayIndex) in week" :key="dayIndex">
            <TooltipTrigger>
              <Motion
                :variants="fadeInVariant"
                :initial="'initial'"
                :whileInView="'animate'"
                :inViewOptions="{ once: true }"
                :transition="{
                  ...transition,
                  delay: weekIndex * 0.05 + dayIndex * 0.02,
                }"
                :class="[
                  'h-3 w-3 rounded-sm',
                  getContributionColor(day.intensity),
                  'cursor-pointer transition-transform hover:scale-110',
                ]"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{{ formatDate(day.date) }}: {{ day.count }} contributions</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
    <Motion
      :initial="{
        opacity: 0,
      }"
      :whileInView="{
        opacity: 1,
      }"
      :inViewOptions="{ once: true }"
      :transition="{ ...transition, delay: 1 }"
    >
      <div
        class="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"
      >
        <div class="flex items-center gap-2">
          <span>Less</span>
          <div class="flex gap-1">
            <div
              v-for="(color, index) in colorClasses"
              :key="index"
              :class="['h-3 w-3 rounded-sm', color]"
            />
          </div>
          <span>More</span>
        </div>
        <NuxtLink
          to="https://github.com/misbahansori"
          external
          target="_blank"
          class="text-muted-foreground flex items-center gap-1 font-medium"
        >
          <Icon name="mdi:github" class="h-4 w-4" />
          <span>View on GitHub</span>
        </NuxtLink>
      </div>
    </Motion>
  </TooltipProvider>
</template>
