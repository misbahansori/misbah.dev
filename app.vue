<script setup lang="ts">
const { y } = useWindowScroll();
</script>
<template>
  <div class="bg-gray-100 text-gray-900 font-sans">
    <section class="min-h-screen flex flex-col">
      <nav
        class="py-8 fixed top-0 inset-x-0 z-50 transition-colors duration-200 ease-in-out"
        :class="{
          'bg-white': y > 0,
          'bg-transparent': y === 0,
        }"
      >
        <div class="max-w-4xl mx-auto px-4">
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="text-2xl font-bold font-serif">
              ma.
            </NuxtLink>
            <div class="flex items-center gap-12 font-serif">
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
        </div>
      </nav>
      <div class="max-w-4xl mx-auto px-4 flex-1 flex flex-col">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8 py-24 place-items-center flex-1"
        >
          <div class="flex flex-col gap-8">
            <h1 class="text-6xl/tight font-serif">
              Hi I'm <br />
              <span class="font-bold text-black">Misbah Ansori</span>
            </h1>
            <p class="text-gray-600 leading-loose">
              I'm a full-stack developer with more that 4 years of experience in
              web development. I'm passionate about learning new technologies
              and building cool projects.
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
                    >View my profile</span
                  >
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 group-hover:mb-0 group-hover:mr-0"
                ></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
