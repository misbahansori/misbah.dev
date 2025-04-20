<script setup lang="ts">
defineOgImageComponent("HomePage", {
  title: "Hi, I'm Misbah Ansori",
  headline: "Fullstack Developer",
  description:
    "A passionate developer with a strong interest in web development.",
  image: "/img/misbah.jpg",
});

useSeoMeta({
  title: "Hi, I'm Misbah Ansori - Fullstack Developer",
  description:
    "A passionate developer with a strong interest in web development.",
  ogTitle: "Hi, I'm Misbah Ansori - Fullstack Developer",
  ogDescription:
    "A passionate developer with a strong interest in web development.",
  ogUrl: "https://misbah.dev",
  twitterTitle: "Hi, I'm Misbah Ansori - Fullstack Developer",
  twitterDescription:
    "A passionate developer with a strong interest in web development.",
  twitterCard: "summary_large_image",
  twitterSite: "@MisbahAnsori24",
  twitterCreator: "@MisbahAnsori24",
});

// const { data: blog } = await useAsyncData("blog", () =>
//   queryCollection("blog").order("createdAt", "DESC").all(),
// );
</script>
<template>
  <SectionProfile />
  <SectionCta />
  <SectionGithubActivity />
  <SectionPortfolio class="pt-24" />
</template>
