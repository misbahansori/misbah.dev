<script setup lang="ts">
const { toc } = useContent();
</script>

<template>
  <div class="not-prose flex flex-col gap-2 py-2">
    <h1 class="text-base font-bold dark:text-white">Table of Contents</h1>
    <ul class="flex list-inside list-disc flex-col gap-0.5">
      <li v-for="link in toc.links" :key="link.text">
        <a :href="`#${link.id}`" class="text-indigo-600 hover:underline">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
