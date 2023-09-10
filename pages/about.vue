<script setup lang="ts">
const { data } = await useAsyncData(() => queryContent("/about").findOne());
</script>

<template>
  <div class="min-h-screen">
    <div class="mx-auto max-w-2xl py-24">
      <div>
        <h1 class="font-serif text-5xl/tight md:text-7xl/tight">
          {{ data?.title }}
        </h1>
      </div>
      <div class="prose prose-lg">
        <ContentDoc />
      </div>
    </div>
  </div>
</template>
