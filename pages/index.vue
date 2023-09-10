<script setup lang="ts">
useSeoMeta({
  title: "Misbah Ansori - Full Stack Developer",
  description:
    "I'm a full-stack developer with more that 4 years of experience in web development. I'm passionate about learning new technologies and building cool projects.",
});

const appConfig = useAppConfig();

const socials = computed(() => {
  return Object.entries(appConfig.socials)
    .filter(([name, url]) => name !== "email")
    .map(([name, url]) => ({
      name,
      url,
    }));
});
</script>

<template>
  <div class="min-h-screen">
    <aside
      style="writing-mode: vertical-lr"
      class="fixed inset-y-0 left-0 flex w-16 flex-shrink-0 rotate-180 items-center justify-start gap-12 bg-gray-950 px-4 py-20 md:w-24"
    >
      <NuxtLink
        v-for="{ name, url } in socials"
        :to="url"
        class="inline-blocK whitespace-nowrap text-sm uppercase text-white"
      >
        {{ name }}
      </NuxtLink>
    </aside>
    <div class="ml-16 flex flex-col px-8 md:ml-24 lg:px-24">
      <nav class="border-b border-dashed border-gray-950/30 py-8">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="font-serif text-3xl font-bold">
            ma.
          </NuxtLink>
          <div class="hidden font-serif md:flex md:items-center md:gap-12">
            <NavItem path="/" label="Work" />
            <NavItem path="/about" label="About" />
            <NavItem path="/" label="Contact" />
          </div>
        </div>
      </nav>
      <div class="flex flex-1 flex-col">
        <div
          class="grid flex-1 grid-cols-1 place-items-center gap-8 pb-16 pt-12 md:grid-cols-2 md:pb-24 md:pt-20 lg:gap-24"
        >
          <div class="flex flex-col gap-8">
            <h1 class="font-serif text-5xl/tight md:text-7xl/tight">
              <span class="text-3xl md:text-7xl">Hi I'm</span>
              <br />
              <span class="font-extrabold text-black">Misbah Ansori</span>
            </h1>
            <p class="text-sm leading-loose text-gray-600 md:text-base">
              I'm a full-stack developer with more that 4 years of experience in
              web development. I'm passionate about learning new technologies
              and building cool projects.
            </p>
            <div>
              <NuxtLink
                :to="appConfig.socials.github"
                class="group relative inline-block text-lg"
              >
                <span
                  class="relative z-10 block overflow-hidden border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white"
                >
                  <span
                    class="absolute inset-0 h-full w-full bg-gray-50 px-5 py-3"
                  ></span>
                  <span
                    class="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"
                  ></span>
                  <span
                    class="relative text-sm font-bold uppercase tracking-wide"
                  >
                    View my profile
                  </span>
                </span>
                <span
                  class="pointer-events-none absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
                ></span>
              </NuxtLink>
            </div>
          </div>

          <!-- <SpaceGame /> -->
        </div>
      </div>
    </div>
  </div>
</template>
