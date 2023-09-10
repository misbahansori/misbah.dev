<script setup lang="ts">
const { path, label } = defineProps<{
  path: string;
  label: string;
}>();
</script>

<template>
  <NuxtLink :to="path" class="group relative overflow-hidden py-1">
    <span
      class="font-medium uppercase tracking-wide text-gray-800 group-hover:text-black"
    >
      {{ label }}
    </span>
    <span
      class="absolute inset-x-0 bottom-0 h-0.5 -translate-x-full bg-black transition-transform duration-200 ease-out group-hover:translate-x-0"
    />
  </NuxtLink>
</template>
