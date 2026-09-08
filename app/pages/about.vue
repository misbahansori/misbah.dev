<script setup lang="ts">
import { profile } from "~/data/profile";

useSeoMeta({
  title: `About — ${profile.name}`,
  description: profile.summary,
  ogTitle: `About — ${profile.name}`,
  ogDescription: profile.summary,
});
</script>

<template>
  <div class="flex flex-col gap-16">
    <SectionProfile />
    <SectionSocials />
    <SectionStack />
    <SectionExperience />

    <section>
      <h2 class="mb-10 font-mono text-base tracking-wide uppercase">Roles</h2>
      <SectionRoles />
    </section>
  </div>
</template>
