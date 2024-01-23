<script setup lang="ts">
import { EnvelopeOpenIcon } from "@radix-icons/vue";
import { buttonVariants } from "~/components/ui/button";
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-8 py-6 lg:py-8">
      <div>
        <img
          src="/img/misbah.jpg"
          alt=""
          class="h-20 w-20 rounded-full border-2 border-white shadow-lg md:h-24 md:w-24"
        />
      </div>

      <div
        class="flex flex-col justify-between gap-8 sm:flex-row sm:items-start"
      >
        <div>
          <h1 class="text-2xl font-bold">Hi, I'm Misbah Ansori</h1>
          <span class="text-base font-medium">Fullstack Developer</span>
          <p class="pt-2.5 text-muted-foreground">
            A passionate developer who has a strong interest in web development
            and technology. Proficient and experienced in both frontend and
            backend.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <NuxtLink
            to="https://twitter.com/MisbahAnsori24"
            :class="cn(buttonVariants({ variant: 'default' }), 'h-auto p-2')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="h-5 w-5"
            >
              <path
                fill="currentColor"
                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
              />
            </svg>
          </NuxtLink>
          <Button class="flex gap-3">
            <EnvelopeOpenIcon class="h-5 w-5" />
            <span>Get in touch</span>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
