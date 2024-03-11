<script setup lang="ts">
const { prev, next } = useContent();
</script>

<template>
  <div class="flex justify-between gap-4">
    <div class="flex items-center">
      <NuxtLink
        v-if="prev"
        :to="prev._path"
        class="text-base font-medium text-indigo-600 hover:text-indigo-700"
      >
        ← {{ prev.title }}
      </NuxtLink>
    </div>
    <div class="flex items-center">
      <NuxtLink
        v-if="next"
        :to="next._path"
        class="text-base font-medium text-indigo-600 hover:text-indigo-700"
      >
        {{ next.title }} →
      </NuxtLink>
    </div>
  </div>
</template>
