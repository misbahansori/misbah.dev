<script setup lang="ts">
import { DialogClose } from "radix-vue";
import { buttonVariants } from "~/components/ui/button";

const { links } = useNavigation();
const colorMode = useColorMode();
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
          <AnimatedTabs :links="links" />
          <div>
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
        </div>

        <Sheet>
          <SheetTrigger as-child>
            <Button variant="ghost" class="flex p-2 sm:hidden">
              <Icon name="tabler:menu-2" class="h-5 w-5" />
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
              <DialogClose as-child v-for="link in links" :key="link.name">
                <NuxtLink
                  :to="link.path"
                  :class="buttonVariants({ variant: 'ghost' })"
                >
                  {{ link.name }}
                </NuxtLink>
              </DialogClose>
              <div class="flex justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  @click="
                    colorMode.preference =
                      colorMode.preference === 'dark' ? 'light' : 'dark'
                  "
                >
                  <Icon name="tabler:moon" class="hidden size-5 dark:block" />
                  <Icon name="tabler:sun" class="block size-5 dark:hidden" />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  </section>
</template>
