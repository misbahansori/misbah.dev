<script setup lang="ts">
import { DialogClose } from "radix-vue";
import { buttonVariants } from "~/components/ui/button";

const { links } = useNavigation();
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
        <AnimatedTabs :links="links" class="hidden sm:flex" />
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
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  </section>
</template>
