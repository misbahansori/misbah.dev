<script setup lang="ts">
import { HamburgerMenuIcon } from "@radix-icons/vue";
import { buttonVariants } from "~/components/ui/button";

const { links } = useNavigation();
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <nav class="flex items-center justify-between gap-8 py-4">
      <NuxtLink
        to="/"
        :class="
          cn(
            buttonVariants({ variant: 'outline' }),
            'h-8 w-8 bg-background shadow-none sm:h-10 sm:w-10',
          )
        "
      >
        <span class="font-bold">./</span>
      </NuxtLink>
      <AnimatedTabs :links="links" class="hidden sm:flex" />
      <Sheet>
        <SheetTrigger as-child>
          <Button variant="ghost" class="flex p-2 sm:hidden">
            <HamburgerMenuIcon class="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent class="p-4">
          <SheetHeader>
            <SheetTitle class="text-base">Misbah.dev</SheetTitle>
            <SheetDescription class="sr-only">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <div class="flex flex-col gap-4 py-8">
            <Button
              v-for="link in links"
              :key="link.name"
              :to="link.path"
              variant="ghost"
              class="text-right"
            >
              {{ link.name }}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  </section>
</template>
