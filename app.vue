<template>
  <div class="bg-[#F3F3F3] text-gray-900 font-sans">
    <section class="min-h-screen flex flex-col">
      <nav class="py-8 fixed top-0 inset-x-0 bg-white z-50">
        <div class="max-w-4xl mx-auto px-4">
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="text-2xl font-bold font-serif">
              ma.
            </NuxtLink>
            <div class="flex items-center gap-4 font-serif">
              <NuxtLink to="/work"> Work </NuxtLink>
              <NuxtLink to="/work"> About </NuxtLink>
              <NuxtLink to="/work"> Contact </NuxtLink>
            </div>
          </div>
        </div>
      </nav>
      <div class="max-w-4xl mx-auto px-4 flex-1 flex flex-col">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8 py-24 place-items-center flex-1"
        >
          <div class="flex flex-col gap-8">
            <h1 class="text-6xl font-serif">
              Hi I'm <br />
              <span class="font-semibold text-black">Misbah Ansori</span>
            </h1>
            <p class="text-gray-600 leading-loose">
              I'm a full-stack developer with more that 4 years of experience in
              web development. I'm passionate about learning new technologies
              and building cool projects.
            </p>
            <button class="">
              <svg
                class="w-8"
                viewBox="0 0 34 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2187 0.181824H14.4176V29.2102L3.31959 18.1122L0.0326538 21.4361L16.8182 38.2216L33.6406 21.4361L30.2798 18.1122L19.2187 29.2102V0.181824Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <Project />
  </div>
</template>
