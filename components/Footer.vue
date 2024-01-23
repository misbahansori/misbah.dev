<script setup lang="ts">
import { MoonIcon, SunIcon } from "@radix-icons/vue";
import { buttonVariants } from "~/components/ui/button";

const colorMode = useColorMode();
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Bookmarks",
    path: "/bookmarks",
  },
  // {
  //   name: "About",
  //   path: "/about",
  // },
];
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <footer
      class="flex flex-col items-center justify-between gap-8 py-4 sm:flex-row md:py-8"
    >
      <div class="flex flex-col items-center gap-2 sm:flex-row">
        <NuxtLink
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          :class="cn(buttonVariants({ variant: 'ghost' }))"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
      <div>
        <Button
          v-if="colorMode.value === 'dark'"
          variant="ghost"
          @click="colorMode.value = 'light'"
          class="h-auto p-2"
        >
          <SunIcon class="h-5 w-5" />
        </Button>
        <Button
          v-else
          variant="ghost"
          @click="colorMode.value = 'dark'"
          class="h-auto p-2"
        >
          <MoonIcon class="h-5 w-5" />
        </Button>
      </div>
    </footer>
  </section>
</template>
