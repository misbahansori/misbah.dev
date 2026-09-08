<script setup lang="ts">
const colorMode = useColorMode();

useHead({
  meta: [
    {
      name: "theme-color",
      content: () => (colorMode.value === "dark" ? "#040404" : "#fafafa"),
    },
  ],
});

useSeoMeta({
  ogSiteName: "misbah.dev",
  ogImage: "https://misbah.dev/img/og.jpg",
  ogUrl: "https://misbah.dev",
  twitterCard: "summary_large_image",
  twitterImage: "https://misbah.dev/img/og.jpg",
  twitterSite: "@MisbahAnsori24",
  twitterCreator: "@MisbahAnsori24",
});
</script>

<template>
  <NuxtLoadingIndicator color="var(--graph-accent)" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
