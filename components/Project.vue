<template>
  <section class="bg-gray-200 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col gap-3">
          <span class="uppercase font-semibold text-sm tracking-wide">
            01/Project name
          </span>
          <p class="text-gray-600 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptates voluptatem quos
            exercitationem quas doloribus quidem voluptate.
          </p>
          <div class="flex items-center gap-3">
            <NuxtLink
              to="https://vuejs.org/"
              class="rounded-full p-2.5 hover:bg-black transition-colors duration-150 ease-in-out"
            >
              <Icon name="logos:vue" class="w-7 h-7" />
            </NuxtLink>
            <NuxtLink
              to="https://nuxtjs.org/"
              class="rounded-full p-2.5 hover:bg-black transition-colors duration-150 ease-in-out"
            >
              <Icon name="logos:nuxt-icon" class="w-7 h-7" />
            </NuxtLink>
            <NuxtLink
              to="https://tailwindcss.com/"
              class="rounded-full p-2.5 hover:bg-black transition-colors duration-150 ease-in-out"
            >
              <Icon name="logos:tailwindcss-icon" class="w-7 h-7" />
            </NuxtLink>
            <NuxtLink
              to="https://www.typescriptlang.org/"
              class="rounded-full p-2.5 hover:bg-black transition-colors duration-150 ease-in-out"
            >
              <Icon name="logos:typescript-icon" class="w-7 h-7" />
            </NuxtLink>
            <NuxtLink
              to="https://laravel.com/"
              class="rounded-full p-2.5 hover:bg-black transition-colors duration-150 ease-in-out"
            >
              <Icon name="logos:laravel" class="w-7 h-7" />
            </NuxtLink>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
