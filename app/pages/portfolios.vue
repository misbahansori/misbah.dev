<script setup lang="ts">
useSeoMeta({
  title: "My portfolios",
  description:
    "Check out some of my projects. Here's what I've been working on lately.",
  ogTitle: "My portfolios",
  ogDescription:
    "Check out some of my projects. Here's what I've been working on lately.",
  ogImage: "https://misbah.dev/img/og.jpg",
  twitterTitle: "My portfolios",
  twitterDescription:
    "Check out some of my projects. Here's what I've been working on lately.",
  twitterCard: "summary_large_image",
  twitterImage: "https://misbah.dev/img/og.jpg",
});
const colorMode = useColorMode();
</script>

<template>
  <SectionPortfolio class="min-h-screen-min" />
</template>
