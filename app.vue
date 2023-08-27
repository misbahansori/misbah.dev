<script setup lang="ts">
useSeoMeta({
  title: "Misbah Ansori - Full Stack Developer",
  description:
    "I'm a full-stack developer with more that 4 years of experience in web development. I'm passionate about learning new technologies and building cool projects.",
});

const links = [
  {
    name: "Twitter",
    url: "https://twitter.com/misbahansori",
  },
  {
    name: "Github",
    url: "https://github.com/misbahansori",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/misbah-ansori-481993175/",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/Ansori#7492",
  },
];
</script>

<template>
  <div class="bg-gray-100 text-gray-900 font-sans">
    <div class="min-h-screen">
      <aside
        style="writing-mode: vertical-lr"
        class="bg-gray-950 w-16 md:w-24 absolute left-0 inset-y-0 flex-shrink-0 flex items-center gap-12 justify-start py-20 px-4 rotate-180"
      >
        <NuxtLink
          v-for="link in links"
          :to="link.url"
          class="inline-blocK text-white uppercase text-sm whitespace-nowrap"
        >
          {{ link.name }}
        </NuxtLink>
      </aside>
      <div class="flex flex-col px-8 lg:px-24 ml-16 md:ml-24">
        <nav class="py-8 border-b border-gray-950/30 border-dashed">
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="text-3xl font-bold font-serif">
              ma.
            </NuxtLink>
            <div class="md:items-center md:gap-12 font-serif hidden md:flex">
              <NuxtLink
                to="/work"
                class="font-medium tracking-wide uppercase text-gray-700 hover:text-gray-900"
              >
                Work
              </NuxtLink>
              <NuxtLink
                to="/work"
                class="font-medium tracking-wide uppercase text-gray-700 hover:text-gray-900"
              >
                About
              </NuxtLink>
              <NuxtLink
                to="/work"
                class="font-medium tracking-wide uppercase text-gray-700 hover:text-gray-900"
              >
                Contact
              </NuxtLink>
            </div>
          </div>
        </nav>
        <div class="flex-1 flex flex-col">
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 lg:gap-24 pb-16 md:pt-20 md:pb-24 place-items-center flex-1"
          >
            <div class="flex flex-col gap-8">
              <h1 class="text-5xl/tight md:text-7xl/tight font-serif">
                Hi I'm <br />
                <span class="font-extrabold text-black">Misbah Ansori</span>
              </h1>
              <p class="text-gray-600 leading-loose text-sm md:text-base">
                I'm a full-stack developer with more that 4 years of experience
                in web development. I'm passionate about learning new
                technologies and building cool projects.
              </p>
              <div>
                <NuxtLink
                  to="https://github.com/misbahansori"
                  class="relative inline-block text-lg group"
                >
                  <span
                    class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white"
                  >
                    <span
                      class="absolute inset-0 w-full h-full px-5 py-3 bg-gray-50"
                    ></span>
                    <span
                      class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"
                    ></span>
                    <span
                      class="relative text-sm uppercase font-bold tracking-wide"
                    >
                      View my profile
                    </span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 group-hover:mb-0 group-hover:mr-0"
                  ></span>
                </NuxtLink>
              </div>
            </div>

            <Game />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
