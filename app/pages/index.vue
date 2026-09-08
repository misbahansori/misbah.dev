<script setup lang="ts">
import { profile } from "~/data/profile";

useSeoMeta({
  title: `${profile.name} — ${profile.title}`,
  description: profile.summary,
  ogTitle: `${profile.name} — ${profile.title}`,
  ogDescription: profile.summary,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterCreator: "@MisbahAnsori24",
});
</script>

<template>
  <div class="flex flex-col gap-16">
    <SectionProfile />
    <SectionGlance />
    <SectionActivity />
    <SectionProjects />
    <SectionContact />
  </div>
</template>
