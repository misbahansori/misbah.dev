<script setup lang="ts">
defineOgImageComponent("PortfoliosPage", {
  title: "My Portfolios",
  description:
    "Check out some of my projects. Here's what I've been working on lately.",
  image: "/img/misbah.jpg",
});

useSeoMeta({
  title: "My portfolios",
  description:
    "Check out some of my projects. Here's what I've been working on lately.",
  ogTitle: "My portfolios",
  ogDescription:
    "Check out some of my projects. Here's what I've been working on lately.",
  twitterTitle: "My portfolios",
  twitterDescription:
    "Check out some of my projects. Here's what I've been working on lately.",
  twitterCard: "summary_large_image",
});
const colorMode = useColorMode();
</script>

<template>
  <SectionPortfolio class="min-h-screen-min" />
</template>
