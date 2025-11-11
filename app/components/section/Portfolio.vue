<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { featuredProjects, otherProjects } from "~/data/projects";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <section>
    <div :class="cn('relative mx-auto max-w-3xl px-4', props.class)">
      <BorderX />
      <div class="relative">
        <div class="flex max-w-xl flex-col gap-4 py-6 lg:py-8">
          <h2 class="font-serif text-3xl/snug tracking-wide italic">
            My Projects
          </h2>
          <p class="text-muted-foreground">
            Check out some of my projects. Here's what I've been working on
            lately.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 pt-4 pb-12 sm:grid-cols-2">
          <div
            v-for="project in featuredProjects"
            :key="project.title"
            class="flex flex-col gap-4"
          >
            <NuxtLink
              :to="project.link"
              target="_blank"
              class="bg-muted dark:border-border group relative flex overflow-hidden rounded-3xl border border-zinc-300 px-6 pt-6 shadow-sm ring-0 inset-shadow-2xs shadow-zinc-950/10 inset-shadow-white duration-150 dark:inset-shadow-transparent"
            >
              <div
                class="border-border -mb-1 aspect-4/3 origin-bottom overflow-hidden rounded-t-xl border shadow-xl transition group-hover:scale-105"
              >
                <img
                  :src="project.image.light"
                  alt="OriginUi Vue"
                  class="h-full w-full object-cover dark:hidden"
                />
                <img
                  :src="project.image.dark"
                  alt="OriginUi Vue"
                  class="hidden h-full w-full object-cover dark:block"
                />
              </div>
            </NuxtLink>
            <div class="flex flex-col gap-2">
              <NuxtLink :to="project.link" target="_blank">
                <h3 class="text-lg font-semibold hover:underline">
                  {{ project.title }}
                </h3>
              </NuxtLink>
              <p class="text-muted-foreground text-base/relaxed">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="border-border/60 flex flex-col gap-6 border-t py-12">
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-semibold">Other Projects</h3>
            <p class="text-muted-foreground">
              A few more project that I've worked on.
            </p>
          </div>
          <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li v-for="project in otherProjects" :key="project.title">
              <NuxtLink
                :to="project.link"
                target="_blank"
                class="group border-border hover:bg-muted/40 flex items-center gap-4 rounded-xl border px-4 py-3 text-base font-medium transition"
              >
                <img
                  :src="project.image"
                  alt="Other Project"
                  class="size-4 rounded-full"
                />
                <div class="flex flex-1 items-center justify-between gap-2">
                  <span class="text-[15px] font-medium">
                    {{ project.title }}
                  </span>
                  <Icon
                    name="lucide:arrow-up-right"
                    class="text-muted-foreground group-hover:text-foreground h-4 w-4 transition"
                  />
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
