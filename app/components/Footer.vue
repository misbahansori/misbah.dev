<script setup lang="ts">
import { navigationLinks } from "~/data/navigationLinks";
const colorMode = useColorMode();

const footerLinks = computed(() => [
  { name: "Home", path: "/" },
  ...navigationLinks,
]);
</script>

<template>
  <section class="border-t">
    <div class="relative mx-auto max-w-3xl px-4">
      <BorderX />
      <nav class="relative flex h-16 items-center justify-between gap-8">
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
          <Button
            variant="ghost"
            @click="
              colorMode.preference =
                colorMode.preference === 'dark' ? 'light' : 'dark'
            "
            size="icon"
          >
            <Icon name="tabler:moon" class="hidden size-5 dark:block" />
            <Icon name="tabler:sun" class="block size-5 dark:hidden" />
          </Button>
        </div>
      </nav>
    </div>
  </section>
</template>
