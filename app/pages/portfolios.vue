<script setup lang="ts">
const description = "Check out some of my projects. Here's what I've been working on lately.";

useSeoMeta({
  title: "Work — Misbah Ansori",
  description,
  ogTitle: "Work — Misbah Ansori",
  ogDescription: description,
});
</script>

<template>
  <div class="flex flex-col gap-16">
    <section>
      <Reveal>
        <h1 class="font-mono text-2xl tracking-tight sm:text-3xl">Work</h1>
        <p class="text-foreground/80 mt-6 max-w-[68ch] text-[0.95rem] leading-relaxed">
          {{ description }}
        </p>
      </Reveal>
    </section>

    <SectionProjects />
    <SectionContact />
  </div>
</template>
