<script setup lang="ts">
import { EnvelopeOpenIcon } from "@radix-icons/vue";
import { buttonVariants } from "~/components/ui/button";

defineOgImageComponent("HomePage", {
  title: "Hi, I'm Misbah Ansori",
  headline: "Fullstack Developer",
  description:
    "I love to build something that can help people and make life easier",
  image: "/img/misbah.jpg",
});

useHead({
  title: "Hi, I'm Misbah Ansori - Fullstack Developer",
  htmlAttrs: {
    lang: "en",
  },
});

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
</script>
<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-4 py-6 lg:py-8">
      <img src="/img/misbah.jpg" alt="" class="h-20 w-20 rounded-full" />
      <span class="text-base font-medium">Hi, I'm Misbah Ansori</span>
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold">Fullstack Developer</h1>
          <p class="text-muted-foreground">
            I love to build something that can help people and make life easier
          </p>
        </div>
        <div class="flex items-center gap-3">
          <NuxtLink
            to="https://twitter.com/MisbahAnsori24"
            :class="cn(buttonVariants({ variant: 'default' }), 'h-auto p-2')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="h-5 w-5"
            >
              <path
                fill="currentColor"
                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
              />
            </svg>
          </NuxtLink>
          <Button class="flex gap-3">
            <EnvelopeOpenIcon class="h-4 w-4" />
            <span>Get in touch</span>
          </Button>
        </div>
      </div>
    </div>
  </section>
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
