<script setup lang="ts">
import { ExternalLinkIcon } from "@radix-icons/vue";

useHead({
  title: "My portfolios",
});
useSeoMeta({
  title: "My portfolios",
  description: "Useful links that I often visit and use",
  ogTitle: "My portfolios",
  ogDescription: "Useful links that I often visit and use",
});

const portfolios = ref([
  {
    title: "ShareShooter",
    image: {
      light: "/img/shareshooter-light.webp",
      dark: "/img/shareshooter-dark.webp",
      width: 914,
      height: 839,
    },
    description: "Easily share screenshots with your friends",
    link: "https://www.shareshooter.com",
  },
]);

const colorMode = useColorMode();

watch(colorMode, () => {
  console.log("Color mode changed to", colorMode.value);
});
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-4 py-6 lg:py-8">
      <h1 class="text-xl font-bold">My Portfolios</h1>
      <p class="text-muted-foreground">Here are some of my portfolios</p>
      <div class="grid grid-cols-1 pt-8 sm:grid-cols-2">
        <div
          v-for="portfolio in portfolios"
          :key="portfolio.title"
          class="group relative flex flex-col gap-4 rounded-xl border bg-background p-5 shadow-sm"
        >
          <div>
            <img
              :src="
                portfolio.image[colorMode.value === 'dark' ? 'dark' : 'light']
              "
              :width="portfolio.image.width"
              :height="portfolio.image.height"
              alt="Portfolio image"
              class="aspect-video w-full rounded-lg object-cover object-top"
            />
          </div>
          <div class="relative flex flex-col gap-1">
            <h2 class="text-lg font-bold">{{ portfolio.title }}</h2>
            <p class="text-sm text-muted-foreground">
              {{ portfolio.description }}
            </p>
            <NuxtLink
              :href="portfolio.link"
              target="_blank"
              external
              class="text-indigo-500 hover:underline"
            >
              {{ portfolio.link }}
            </NuxtLink>
            <NuxtLink :to="portfolio.link" target="_blank" external>
              <ExternalLinkIcon
                class="absolute right-2 top-2 h-4 w-4 origin-bottom-left scale-75 opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-90"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
