<script setup lang="ts">
const skills = [
  {
    name: "Laravel",
    description: "The full-stack PHP Framework",
    url: "https://laravel.com",
  },
  {
    name: "Vue.js",
    description: "The Progressive JavaScript Framework",
    url: "https://vuejs.org",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS Framework",
    url: "https://tailwindcss.com",
  },
  {
    name: "Laravel Filament",
    description: "Quickly build modern admin panels",
    url: "https://filamentphp.com",
  },
  {
    name: "Nuxt JS",
    description: "A full-stack framework for Vue.js",
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
        <div class="grid grid-cols-1 gap-4 py-12 sm:grid-cols-2 md:grid-cols-3">
          <SkillCard v-for="skill in skills" :skill="skill" :key="skill.name" />
        </div>
      </div>
    </div>
  </section>
</template>
