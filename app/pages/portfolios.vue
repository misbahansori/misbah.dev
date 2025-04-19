<script setup lang="ts">
// defineOgImageComponent("HomePage");

useSeoMeta({
  title: "My portfolios",
  description: "Useful links that I often visit and use",
  ogTitle: "My portfolios",
  ogDescription: "Useful links that I often visit and use",
  twitterTitle: "My portfolios",
  twitterDescription: "Useful links that I often visit and use",
  twitterCard: "summary_large_image",
});
const colorMode = useColorMode();
</script>

<template>
  <SectionPortfolio class="min-h-screen-min" />
</template>
