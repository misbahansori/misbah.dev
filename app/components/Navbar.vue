<script setup lang="ts">
import { LucideMenu } from "lucide-vue-next";
import { DialogClose } from "radix-vue";
import { buttonVariants } from "~/components/ui/button";
import { navigationLinks } from "~/data/navigationLinks";
</script>

<template>
  <section class="border-b">
    <div class="relative mx-auto max-w-3xl px-4">
      <BorderX />
      <nav
        class="relative flex h-(--navbar-height) items-center justify-between gap-8"
      >
        <NuxtLink
          to="/"
          :class="
            cn(
              buttonVariants({ variant: 'outline' }),
              'bg-background h-8 w-8 shadow-none sm:h-10 sm:w-10',
            )
          "
        >
          <span class="font-bold">./</span>
        </NuxtLink>
        <div class="hidden sm:flex sm:items-center sm:gap-4">
          <AnimatedTabs :links="navigationLinks" />
          <ThemeToggle />
        </div>

        <Sheet>
          <SheetTrigger as-child>
            <Button variant="ghost" class="flex p-2 sm:hidden">
              <LucideMenu class="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent class="p-4">
            <SheetHeader>
              <SheetTitle class="text-base">
                <DialogClose as-child>
                  <NuxtLink to="/">Misbah.dev</NuxtLink>
                </DialogClose>
              </SheetTitle>
              <SheetDescription class="sr-only">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <div class="flex flex-col gap-4 py-8">
              <DialogClose
                as-child
                v-for="link in navigationLinks"
                :key="link.name"
              >
                <NuxtLink
                  :to="link.path"
                  :class="buttonVariants({ variant: 'ghost' })"
                >
                  {{ link.name }}
                </NuxtLink>
              </DialogClose>
              <ThemeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  </section>
</template>
