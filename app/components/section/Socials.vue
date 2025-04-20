<script setup lang="ts">
import { buttonVariants } from "~/components/ui/button";
import { socials } from "~/data/socials";
</script>

<template>
  <section>
    <div class="bg-pattern relative border-y">
      <div class="relative mx-auto max-w-3xl px-4">
        <BorderX />

        <div class="flex">
          <div class="bg-background relative flex gap-4">
            <div
              class="bg-background absolute -inset-x-2 inset-y-0 border-x lg:-inset-x-4"
            />
            <template v-for="(social, index) in socials" :key="social.name">
              <div class="relative py-4">
                <NuxtLink
                  :to="social.url"
                  target="_blank"
                  :class="
                    cn(
                      buttonVariants({ variant: 'default', size: 'lg' }),
                      'group rounded-full',
                    )
                  "
                >
                  <Icon :name="social.icon" class="size-4" />
                  <span>{{ social.name }}</span>
                </NuxtLink>
              </div>
              <div
                v-if="index !== socials.length - 1"
                class="bg-border relative h-full w-px"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
