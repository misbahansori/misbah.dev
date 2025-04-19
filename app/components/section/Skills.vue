<script setup lang="ts">
import {
  LogoFilament,
  LogoLaravel,
  LogoNuxt,
  LogoTailwindCSS,
  LogoVue,
} from "#components";

const skills = [
  {
    name: "Laravel",
    description: "The full-stack PHP Framework",
    icon: LogoLaravel,
    url: "https://laravel.com",
  },
  {
    name: "Vue.js",
    description: "The Progressive JavaScript Framework",
    icon: LogoVue,
    url: "https://vuejs.org",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS Framework",
    icon: LogoTailwindCSS,
    url: "https://tailwindcss.com",
  },
  {
    name: "Laravel Filament",
    description: "Quickly build modern admin panels",
    icon: LogoFilament,
    url: "https://filamentphp.com",
  },
  {
    name: "Nuxt JS",
    description: "A full-stack framework for Vue.js",
    icon: LogoNuxt,
    url: "https://nuxt.com",
  },
];
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
            I have a strong experience in building web applications using these
            technologies
          </p>
        </div>
        <div class="grid grid-cols-1 gap-4 py-12 sm:grid-cols-2">
          <NuxtLink
            v-for="skill in skills"
            :to="skill.url"
            target="_blank"
            :key="skill.name"
            class="bg-muted/30 dark:border-border group relative flex justify-between overflow-hidden rounded-2xl border border-zinc-300 px-6 py-6 shadow-sm ring-0 inset-shadow-2xs shadow-zinc-950/10 inset-shadow-white duration-150 dark:inset-shadow-transparent"
          >
            <div class="flex flex-col gap-1">
              <span class="text-base font-semibold">{{ skill.name }}</span>
              <p class="text-muted-foreground text-sm">
                {{ skill.description }}
              </p>
            </div>
            <component
              :is="skill.icon"
              class="absolute top-4 right-4 h-8 w-8"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
