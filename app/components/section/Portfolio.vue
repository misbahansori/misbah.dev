<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const portfolios = [
  {
    title: "OriginUi Vue",
    description: "Beautiful UI components built with Tailwind CSS and Vue",
    image: {
      light: "/img/originui-vue_light.png",
      dark: "/img/originui-vue_dark.png",
    },
    link: "https://originui-vue.com",
  },
  {
    title: "Shareshooter",
    description: "Easily share your screenshots",
    image: {
      light: "/img/shareshooter_light.png",
      dark: "/img/shareshooter_dark.png",
    },
    link: "https://shareshooter.com",
  },
];
</script>

<template>
  <section>
    <div :class="cn('relative mx-auto max-w-3xl px-4', props.class)">
      <BorderX />
      <div class="relative">
        <div class="flex max-w-xl flex-col gap-4 py-6 lg:py-8">
          <h2 class="font-serif text-3xl/snug tracking-wide italic">
            My Projects
          </h2>
          <p class="text-muted-foreground">
            Check out some of my projects. Here's what I've been working on
            lately.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2">
          <div
            v-for="portfolio in portfolios"
            :key="portfolio.title"
            class="flex flex-col gap-4"
          >
            <NuxtLink
              :to="portfolio.link"
              target="_blank"
              class="bg-muted dark:border-border group relative flex overflow-hidden rounded-3xl border border-zinc-300 px-6 pt-6 shadow-sm ring-0 inset-shadow-2xs shadow-zinc-950/10 inset-shadow-white duration-150 dark:inset-shadow-transparent"
            >
              <div
                class="border-border -mb-1 aspect-[4/3] origin-bottom overflow-hidden rounded-t-xl border shadow-xl transition group-hover:scale-105"
              >
                <img
                  :src="portfolio.image.light"
                  alt="OriginUi Vue"
                  class="h-full w-full object-cover dark:hidden"
                />
                <img
                  :src="portfolio.image.dark"
                  alt="OriginUi Vue"
                  class="hidden h-full w-full object-cover dark:block"
                />
              </div>
            </NuxtLink>
            <div class="flex flex-col gap-2">
              <NuxtLink :to="portfolio.link" target="_blank">
                <h3 class="text-lg font-semibold hover:underline">
                  {{ portfolio.title }}
                </h3>
              </NuxtLink>
              <p class="text-muted-foreground text-base/relaxed">
                {{ portfolio.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
