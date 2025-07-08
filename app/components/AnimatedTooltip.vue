<template>
  <div class="group relative">
    <AnimatePresence mode="wait">
      <div
        :initial="{ opacity: 0, y: 20, scale: 0.6 }"
        :animate="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 260,
            damping: 10,
          },
        }"
        :exit="{ opacity: 0, y: 20, scale: 0.6 }"
        class="absolute -top-16 -left-1/2 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
      >
        <div
          class="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
        ></div>
        <div
          class="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent"
        ></div>
        <div class="relative z-30 text-base font-bold text-white">
          Misbah Ansori
        </div>
        <div class="text-xs text-white">Fullstack Developer</div>
      </div>
    </AnimatePresence>
    <Image
      onMouseMove="handleMouseMove"
      height="100"
      width="100"
      src="/img/misbah.jpg"
      alt="Misbah Ansori"
      class="relative !m-0 h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
    />
  </div>
</template>
