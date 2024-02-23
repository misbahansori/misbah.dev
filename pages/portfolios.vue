<script setup lang="ts">
useHead({
  title: "My portfolios",
});
useSeoMeta({
  title: "My portfolios",
  description: "Useful links that I often visit and use",
  ogTitle: "My portfolios",
  ogDescription: "Useful links that I often visit and use",
});
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-4 py-6 lg:py-8">
      <h1 class="text-xl font-bold">My Portfolios</h1>
      <p class="text-muted-foreground">Here are some of my portfolios</p>
    </div>
  </section>
</template>
