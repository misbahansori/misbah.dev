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
          class="border-border h-24 w-24 rounded-full border-1 shadow-sm"
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
      class="border-y bg-[image:repeating-linear-gradient(315deg,_var(--accent)_0,_var(--accent)_1px,_transparent_0,_transparent_50%)] bg-[size:15px_15px] bg-fixed"
    >
      <div class="relative mx-auto max-w-3xl px-4 py-4">
        <BorderX />

        <div class="relative flex gap-2">
          <Button size="lg" class="group rounded-full">
            <span>View profile</span>
            <Icon
              name="lucide:arrow-right"
              class="size-4 transition group-hover:translate-x-1"
            />
          </Button>
          <Button size="lg" variant="secondary" class="rounded-full">
            <span class="relative flex size-3">
              <span
                class="bg-secondary-foreground/80 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              ></span>
              <span
                class="bg-secondary-foreground relative inline-flex size-3 rounded-full"
              ></span>
            </span>
            Available for hire
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
