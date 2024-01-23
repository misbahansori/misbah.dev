<script setup lang="ts">
import { buttonVariants } from "~/components/ui/button";

const colorMode = useColorMode();

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
    name: "About me",
    path: "/about",
  },
];
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
      <div class="-mr-4 flex items-center gap-2">
        <NuxtLink
          v-for="nav in navigations"
          :key="nav.name"
          :to="nav.path"
          :class="cn(buttonVariants({ variant: 'ghost' }))"
        >
          {{ nav.name }}
        </NuxtLink>
      </div>
    </nav>
  </section>
</template>
