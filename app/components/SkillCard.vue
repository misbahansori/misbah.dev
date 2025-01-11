<script setup lang="ts">
import { ExternalLinkIcon } from "@radix-icons/vue";

const { skill } = defineProps<{
  skill: {
    name: string;
    description: string;
    url: string;
  };
}>();
</script>

<template>
  <SpotlightCard class="transition hover:-translate-y-px hover:shadow-sm">
    <NuxtLink
      :to="skill.url"
      target="_blank"
      :key="skill.name"
      class="group relative flex flex-col gap-1 rounded-[calc(var(--radius)-1px)] px-4 py-4 transition duration-200 ease-in-out sm:px-6"
    >
      <span class="text-sm font-semibold">{{ skill.name }}</span>
      <p class="text-sm text-muted-foreground">
        {{ skill.description }}
      </p>
      <ExternalLinkIcon
        class="absolute right-4 top-4 h-4 w-4 origin-bottom-left scale-75 opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-90"
      />
    </NuxtLink>
  </SpotlightCard>
</template>
