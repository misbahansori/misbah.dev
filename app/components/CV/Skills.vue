<script setup lang="ts">
import { skills } from "~/data/skills";
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-3xl px-4">
      <BorderX />
      <div class="flex flex-col py-6 lg:py-8">
        <div class="flex flex-col gap-2">
          <h2 class="font-serif text-3xl/snug tracking-wide italic">
            My Skills
          </h2>
          <p class="text-muted-foreground">
            Technologies I use to build web applications
          </p>
        </div>
        <div class="flex flex-wrap gap-2 pt-8 sm:pt-12">
          <Badge v-for="skill in skills" :key="skill.name" variant="outline">
            {{ skill.name }}
          </Badge>
        </div>
      </div>
    </div>
  </section>
</template>
