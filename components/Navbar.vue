<script setup lang="ts">
import { buttonVariants } from "~/components/ui/button";

const navigations = [
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Bookmarks",
    path: "/bookmarks",
  },
  {
    name: "Portfolios",
    path: "/portfolios",
  },
  // {
  //   name: "About me",
  //   path: "/about",
  // },
];

const size = ref(60);
const position = ref(0);

const toggleMenu = (e: any) => {
  // get element width
  const width = e.target?.offsetWidth ?? 0;
  // get element position relative to the offsetParent
  const left = e.target?.offsetLeft ?? 0;

  // set the position and size
  size.value = width;
  position.value = left;
};
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <nav class="flex items-center justify-between gap-8 py-4">
      <NuxtLink
        to="/"
        :class="
          cn(
            buttonVariants({ variant: 'outline' }),
            'h-10 w-10 bg-background shadow-none',
          )
        "
      >
        <span class="font-bold">./</span>
      </NuxtLink>
      <div
        class="group relative hidden md:-mr-4 md:flex md:items-center md:gap-2"
      >
        <span
          :style="{
            '--size': size + 'px',
            '--position': position + 'px',
          }"
          class="absolute inset-y-0 left-0 h-full w-[--size] translate-x-[--position] rounded-lg bg-accent text-accent-foreground opacity-0 transition-[width,transform,opacity] duration-200 ease-in-out group-hover:opacity-100"
        ></span>
        <NuxtLink
          @mouseover="toggleMenu($event)"
          v-for="nav in navigations"
          :key="nav.name"
          :to="nav.path"
          class="group relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          {{ nav.name }}
        </NuxtLink>
      </div>
    </nav>
  </section>
</template>
