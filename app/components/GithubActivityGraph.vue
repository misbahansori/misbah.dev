<script setup lang="ts">
interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface ActivityResponse {
  data: {
    weeks: Week[];
    totalContributions: number;
  };
}

const { data: activityData } =
  await useFetch<ActivityResponse>("/api/activity");

const getContributionColor = (count: number) => {
  if (count === 0) return "bg-gray-100 dark:bg-gray-800";
  if (count <= 3) return "bg-green-200 dark:bg-green-900";
  if (count <= 6) return "bg-green-300 dark:bg-green-800";
  if (count <= 9) return "bg-green-400 dark:bg-green-700";
  return "bg-green-500 dark:bg-green-600";
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};
</script>

<template>
  <div class="w-full overflow-x-auto">
    <div class="flex gap-1 p-4">
      <div
        v-for="(week, weekIndex) in activityData?.data.weeks"
        :key="weekIndex"
        class="flex flex-col gap-1"
      >
        <div
          v-for="(day, dayIndex) in week.contributionDays"
          :key="dayIndex"
          :class="[
            'h-3 w-3 rounded-sm',
            getContributionColor(day.contributionCount),
            'cursor-pointer transition-transform hover:scale-110',
          ]"
          :title="`${formatDate(day.date)}: ${day.contributionCount} contributions`"
        />
      </div>
    </div>
  </div>
</template>
