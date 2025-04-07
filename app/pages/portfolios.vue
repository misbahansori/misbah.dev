<script setup lang="ts">
// defineOgImageComponent("HomePage");

useSeoMeta({
  title: "My portfolios",
  description: "Useful links that I often visit and use",
  ogTitle: "My portfolios",
  ogDescription: "Useful links that I often visit and use",
  twitterTitle: "My portfolios",
  twitterDescription: "Useful links that I often visit and use",
  twitterCard: "summary_large_image",
});
const colorMode = useColorMode();

const portfolios = [
  {
    title: "ShareShooter",
    image: {
      light: "/img/shareshooter-light.webp",
      dark: "/img/shareshooter-dark.webp",
      width: 1280,
      height: 630,
    },
    description: "Easily share screenshots with your friends",
    link: "https://www.shareshooter.com",
  },
  {
    title: "Originui Vue",
    image: {
      light: "/img/originui-vue-light.webp",
      dark: "/img/originui-vue-dark.webp",
      width: 1280,
      height: 630,
    },
    description:
      "An open-source collection of copy-and-paste components for quickly build application UIs.",
    link: "https://www.originui-vue.com",
  },
];
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-4 py-6 lg:py-8">
      <h1 class="text-xl font-bold">My Portfolios</h1>
      <p class="text-muted-foreground">Here are some of my portfolios</p>
      <div class="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2">
        <div
          v-for="portfolio in portfolios"
          :key="portfolio.title"
          class="group bg-background relative flex flex-col gap-4 rounded-xl border p-5 shadow-sm"
        >
          <div>
            <img
              :src="
                portfolio.image[colorMode.value === 'dark' ? 'dark' : 'light']
              "
              :width="portfolio.image.width"
              :height="portfolio.image.height"
              alt="Portfolio image"
              class="aspect-[1.91/1] w-full rounded-lg object-cover object-top"
            />
          </div>
          <div class="relative flex flex-col gap-1">
            <h2 class="text-lg font-bold">{{ portfolio.title }}</h2>
            <p class="text-muted-foreground text-sm">
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
              <Icon
                name="tabler:external-link"
                class="absolute top-2 right-2 h-4 w-4 origin-bottom-left scale-75 opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-90"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
