<script setup lang="ts">
const portfolios = [
  {
    title: "OriginUi Vue",
    description: "Beautiful UI components built with Tailwind CSS and Vue",
    image: {
      dark: "/img/www.originui-vue.com_dark.png",
      light: "/img/www.originui-vue.com_light.png",
    },
    link: "https://originui-vue.com",
  },
  {
    title: "Shareshooter",
    description: "Easily share your screenshots",
    image: {
      dark: "/img/www.shareshooter.com_dark.png",
      light: "/img/www.shareshooter.com_light.png",
    },
    link: "https://shareshooter.com",
  },
];
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-3xl px-4 py-24">
      <BorderX />
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl/snug">My Projects</h2>
      </div>
      <div class="grid grid-cols-2 gap-8 py-12">
        <div
          v-for="portfolio in portfolios"
          :key="portfolio.title"
          class="bg-muted dark:border-border group relative flex overflow-hidden rounded-3xl border border-zinc-300 px-6 pt-6 shadow-sm ring-0 inset-shadow-2xs shadow-zinc-950/10 inset-shadow-white duration-150 dark:inset-shadow-transparent"
        >
          <div
            class="border-border -mb-1 aspect-[4/3] origin-bottom overflow-hidden rounded-t-xl border shadow-xl transition group-hover:scale-105"
          >
            <img
              :src="portfolio.image.dark"
              alt="OriginUi Vue"
              class="hidden h-full w-full object-cover dark:block"
            />
            <img
              :src="portfolio.image.light"
              alt="OriginUi Vue"
              class="h-full w-full object-cover dark:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
