<script setup lang="ts">
import { DrawingPinIcon } from "@radix-icons/vue";

const experiences = [
  {
    startDate: "Jul 2022",
    endDate: "Present",
    title: "Fullstack Developer",
    company: "Gilgamesh Pte. Ltd, Singapore",
    location: "Remote",
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
    location: "Remote",
    techStack: ["Laravel"],
  },
  {
    startDate: "March 2020",
    endDate: "Oct 2021",
    title: "Full Stack Developer",
    company: "PT. Winosa Mitra Bharatadjaya",
    location: "Bandar Lampung, Indonesia",
    techStack: ["Laravel", "Vue.js"],
  },
];
</script>

<template>
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
                  <div class="flex items-center gap-1">
                    <DrawingPinIcon class="inline-block h-4 w-4" />
                    <span class="text-sm text-muted-foreground">
                      {{ experience.location }}
                    </span>
                  </div>
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
