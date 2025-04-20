<script setup lang="ts">
// defineOgImageComponent("HomePage", {
//   title: "Hi, I'm Misbah Ansori",
//   headline: "Fullstack Developer",
//   description:
//     "I love to build something that can help people and make life easier",
//   image: "/img/misbah.jpg",
// });

useSeoMeta({
  title: "Hi, I'm Misbah Ansori - Fullstack Developer",
  description:
    "I love to build something that can help people and make life easier",
  ogTitle: "Hi, I'm Misbah Ansori - Fullstack Developer",
  ogDescription:
    "I love to build something that can help people and make life easier",
  ogUrl: "https://misbah.dev",
  twitterTitle: "Hi, I'm Misbah Ansori - Fullstack Developer",
  twitterDescription:
    "I love to build something that can help people and make life easier",
  twitterCard: "summary_large_image",
  twitterSite: "@MisbahAnsori24",
  twitterCreator: "@MisbahAnsori24",
});
</script>
<template>
  <SectionProfile />
  <SectionSocials />
  <SectionSkills />
  <PatternSeparator />
  <SectionWorkExperience />
</template>
