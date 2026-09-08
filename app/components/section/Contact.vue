<script setup lang="ts">
import { profile } from "~/data/profile";
</script>

<template>
  <section>
    <GraphRule class="mb-10" />
    <Reveal class="flex flex-col gap-4">
      <h2 class="font-mono text-base tracking-wide uppercase">Get in touch</h2>
      <p class="text-foreground/80 max-w-[68ch] text-[0.95rem] leading-relaxed">
        {{
          profile.available
            ? "I'm currently available for freelance and contract work."
            : "I'm not taking on new work right now, but I'm always happy to talk."
        }}
      </p>
      <a
        :href="`mailto:${profile.email}`"
        class="text-graph-accent hover:text-foreground w-fit font-mono text-sm transition-colors"
      >
        ▶ {{ profile.email }}
      </a>
    </Reveal>
  </section>
</template>
