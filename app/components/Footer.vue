<script setup lang="ts">
import { navigationLinks } from "~/data/navigationLinks";

const footerLinks = computed(() => [
  { name: "Home", path: "/" },
  ...navigationLinks,
]);
</script>

<template>
  <section class="border-t">
    <div class="relative mx-auto max-w-3xl px-4">
      <BorderX />
      <nav
        class="relative flex h-16 items-center justify-between gap-8 md:h-(--navbar-height)"
      >
        <div class="flex items-center gap-4 lg:gap-8">
          <NuxtLink
            v-for="link in footerLinks"
            :key="link.name"
            :to="link.path"
            class="text-muted-foreground hover:text-foreground shrink-0 text-sm font-medium transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
        <div class="block sm:hidden">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  </section>
</template>
