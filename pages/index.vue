<script setup lang="ts">
import { ArrowTopRightIcon, MoonIcon, SunIcon } from "@radix-icons/vue";
const skills = [
  {
    name: "Laravel",
    description: "Backend Framework",
    url: "https://laravel.com",
  },
  {
    name: "Vue.js",
    description: "Frontend Framework",
    url: "https://vuejs.org",
  },
  {
    name: "Tailwind CSS",
    description: "CSS Framework",
    url: "https://tailwindcss.com",
  },
  {
    name: "Laravel Filament",
    description: "Quickly build modern admin panels",
    url: "https://filamentphp.com",
  },
  {
    name: "Livewire",
    description: "A full-stack framework for Laravel",
    url: "https://laravel-livewire.com",
  },
];

const colorMode = useColorMode();
</script>
<template>
  <div class="min-h-screen">
    <section class="mx-auto max-w-3xl px-4">
      <div class="flex flex-col gap-4 pb-6 pt-12">
        <img src="/img/misbah.jpg" alt="" class="h-20 w-20 rounded-full" />
        <span class="text-base font-medium"> Hi, I'm Misbah Ansori </span>
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold">I'm a Fullstack Developer</h1>
            <p class="text-muted-foreground">
              I love to build something that can help people and make life
              easier
            </p>
          </div>
          <div>
            <Button
              v-if="colorMode.value === 'dark'"
              @click="colorMode.value = 'light'"
              class="h-auto p-2"
            >
              <SunIcon class="h-5 w-5" />
            </Button>
            <Button v-else @click="colorMode.value = 'dark'" class="h-auto p-2">
              <MoonIcon class="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
    <section class="mx-auto max-w-3xl px-4">
      <div class="flex flex-col py-6">
        <div>
          <h2 class="text-xl font-bold">My Skills</h2>
          <p class="text-muted-foreground">
            I have experience in building web applications using Laravel and
            Vue.js
          </p>
        </div>
        <div class="grid grid-cols-3 gap-4 pt-6">
          <NuxtLink
            v-for="skill in skills"
            :to="skill.url"
            target="_blank"
            :key="skill.name"
            class="group relative flex flex-col gap-1 rounded-xl border bg-card px-6 py-4 transition duration-300 hover:bg-accent"
          >
            <span class="text-sm font-medium">{{ skill.name }}</span>
            <p class="text-sm text-muted-foreground">
              {{ skill.description }}
            </p>
            <ArrowTopRightIcon
              class="absolute right-4 top-4 h-4 w-4 origin-bottom-left scale-75 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-90"
            />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
