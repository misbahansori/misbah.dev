<script setup lang="ts">
import { ArrowTopRightIcon } from "@radix-icons/vue";

const { skill } = defineProps<{
  skill: {
    name: string;
    description: string;
    url: string;
  };
}>();
</script>

<template>
  <SpotlightCard>
    <NuxtLink
      :to="skill.url"
      target="_blank"
      :key="skill.name"
      class="group relative flex flex-col gap-1 rounded-[calc(var(--radius)-1px)] px-6 py-4 transition duration-200 ease-in-out"
    >
      <span class="text-sm font-medium">{{ skill.name }}</span>
      <p class="text-sm text-muted-foreground">
        {{ skill.description }}
      </p>
      <ArrowTopRightIcon
        class="absolute right-4 top-4 h-4 w-4 origin-bottom-left scale-75 opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-90"
      />
    </NuxtLink>
  </SpotlightCard>
</template>
