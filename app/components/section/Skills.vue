<script setup lang="ts">
import type { Component } from "vue";
import { LogoFilament, LogoLaravel, LogoNuxt, LogoTailwindCSS, LogoVue } from "#components";
import { skills as skillsFromData } from "~/data/skills";

const icons: Record<string, Component> = {
  Laravel: LogoLaravel,
  "Vue.js": LogoVue,
  "Tailwind CSS": LogoTailwindCSS,
  "Laravel Filament": LogoFilament,
  "Nuxt JS": LogoNuxt,
};

const skills = skillsFromData.map((s) => ({
  ...s,
  icon: icons[s.name]!,
}));
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-3xl px-4">
      <BorderX />
      <div class="flex flex-col py-6 lg:py-8">
        <div class="flex flex-col gap-2">
          <h2 class="font-serif text-3xl/snug tracking-wide italic">My Skills</h2>
          <p class="text-muted-foreground">
            I have a strong experience in building web applications using these technologies
          </p>
        </div>
        <div class="grid grid-cols-1 gap-4 py-12 sm:grid-cols-2">
          <NuxtLink
            v-for="skill in skills"
            :to="skill.url"
            target="_blank"
            :key="skill.name"
            class="bg-muted/30 hover:bg-muted/10 dark:border-border group relative flex justify-between overflow-hidden rounded-2xl border border-zinc-300 px-6 py-6 shadow-sm ring-0 inset-shadow-2xs shadow-zinc-950/10 inset-shadow-white transition duration-150 hover:shadow-md dark:inset-shadow-transparent"
          >
            <div class="flex flex-col gap-1">
              <span class="text-base font-semibold">{{ skill.name }}</span>
              <p class="text-muted-foreground text-sm">
                {{ skill.description }}
              </p>
            </div>
            <component :is="skill.icon" class="absolute top-4 right-4 h-8 w-8" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
