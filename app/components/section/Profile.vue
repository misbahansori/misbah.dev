<script setup lang="ts">
const { sourceType } = useMouse();
const showTooltip = ref(false);
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-3xl px-4 py-24">
      <BorderX />
      <div class="flex flex-col gap-4">
        <img
          :src="`/img/misbah.jpg`"
          alt="Misbah Ansori Profile Picture"
          class="h-24 w-24 rounded-full"
        />
        <h1 class="text-4xl/snug">
          Hey, I'm Misbah Ansori.
          <br />
          Full Stack Developer
        </h1>
        <p class="text-muted-foreground/80 text-lg/loose">
          A passionate developer who has a strong interest in web development
          and other technologies. Proficient and experienced in both frontend
          and backend.
        </p>
      </div>
    </div>
    <div
      class="border-y bg-[image:repeating-linear-gradient(315deg,_var(--accent)_0,_var(--accent)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"
    >
      <div class="relative mx-auto max-w-3xl px-4 py-4">
        <BorderX />

        <div class="flex gap-2">
          <Button class="rounded-full" size="lg">Check portfolio</Button>
        </div>
      </div>
    </div>
    <div class="relative mx-auto max-w-3xl px-4 py-24">
      <BorderX />
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl/snug">My Projects</h2>
      </div>
    </div>
  </section>
</template>
