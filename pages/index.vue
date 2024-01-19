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
    name: "Nuxt JS",
    description: "A full-stack framework for Vue.js",
    url: "https://nuxt.com",
  },
];

const experiences = [
  {
    startDate: "Jul 2022",
    endDate: "Present",
    title: "Fullstack Developer",
    company: "Gilgamesh Pte. Ltd, Singapore",
    techStack: [
      "Laravel",
      "Vue.js",
      "Tailwind CSS",
      "Laravel Filament",
      "Nuxt JS",
    ],
  },
  {
    startDate: "Nov 2021",
    endDate: "Jun 2022",
    title: "Back End Developer",
    company: "Avana Indonesia",
    techStack: ["Laravel"],
  },
  {
    startDate: "March 2020",
    endDate: "Oct 2021",
    title: "Full Stack Developer",
    company: "PT. Winosa Mitra Bharatadjaya",
    techStack: ["Laravel", "Vue.js"],
  },
];
</script>
<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-4 py-6 lg:py-8">
      <!-- <img src="/img/misbah.jpg" alt="" class="h-20 w-20 rounded-full" /> -->

      <div
        class="flex flex-col justify-between gap-8 sm:flex-row sm:items-start"
      >
        <div>
          <h1 class="text-2xl font-bold">Hi, I'm Misbah Ansori</h1>
          <span class="text-base font-medium">Fullstack Developer</span>
          <p class="pt-2.5 text-muted-foreground">
            A passionate developer who has a strong interest in web development
            and technology. Proficient and experienced in both frontend and
            backend.
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
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col py-6 lg:py-8">
      <div>
        <h2 class="text-xl font-bold">Work Experience</h2>
        <p class="text-muted-foreground">
          Here are some of the companies I've worked with
        </p>
      </div>
      <div class="flex flex-col items-stretch pt-6">
        <div
          v-for="experience in experiences"
          class="flex flex-col items-baseline gap-6 md:flex-row md:gap-12"
        >
          <div
            class="flex w-32 flex-wrap items-center gap-1 pt-4 text-sm font-medium text-muted-foreground sm:pt-0"
          >
            {{ experience.startDate }} -
            {{ experience.endDate }}
          </div>
          <div>
            <div class="relative flex pb-8 last:pb-0">
              <div
                class="absolute inset-0 flex w-6 items-center justify-center"
              >
                <div
                  class="pointer-events-none h-full w-px border-l-[1px]"
                ></div>
              </div>
              <div
                class="z-0 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent align-middle text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-plus"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
              <div class="flex-grow pb-8 pl-8 sm:pb-12">
                <div class="word-break-word flex flex-col gap-2">
                  <span class="font-semibold tracking-tight">
                    {{ experience.title }}
                  </span>
                  <span class="text-sm text-muted-foreground">
                    {{ experience.company }}
                  </span>
                </div>
                <div class="flex flex-wrap gap-2 pt-3">
                  <Badge
                    v-for="tech in experience.techStack"
                    :key="tech"
                    variant="secondary"
                  >
                    {{ tech }}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
