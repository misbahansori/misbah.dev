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
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col py-6 lg:py-8">
      <div>
        <h2 class="text-xl font-bold">My Skills</h2>
        <p class="text-muted-foreground">
          I have experience in building web applications using Laravel and
          Vue.js
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 pt-6 md:grid-cols-3">
        <SkillCard v-for="skill in skills" :skill="skill" :key="skill.name" />
      </div>
    </div>
  </section>
</template>
