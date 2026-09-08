<script setup lang="ts">
import { profile } from "~/data/profile";
import { skills } from "~/data/skills";

const description = "Resume: Full Stack Developer — Laravel, Vue, Nuxt.";

useSeoMeta({
  title: `CV — ${profile.name}`,
  description,
  ogTitle: `CV — ${profile.name}`,
  ogDescription: description,
});
</script>

<template>
  <div class="flex flex-col gap-16">
    <SectionProfile />

    <section>
      <h2 class="mb-10 font-mono text-base tracking-wide uppercase">Experience</h2>
      <SectionRoles />
    </section>

    <GraphFrame title="Skills" content-class="flex flex-col gap-3">
      <Reveal
        v-for="(skill, index) in skills"
        :key="skill.name"
        :index="index"
        class="grid grid-cols-[minmax(0,1fr)] gap-x-6 gap-y-1 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)]"
      >
        <a
          :href="skill.url"
          target="_blank"
          rel="noreferrer noopener"
          class="hover:text-graph-accent truncate transition-colors"
        >
          {{ skill.name }}
        </a>
        <p class="text-graph-muted">{{ skill.description }}</p>
      </Reveal>
    </GraphFrame>

    <GraphFrame title="Languages" content-class="flex flex-col gap-3">
      <Reveal
        v-for="(language, index) in profile.languages"
        :key="language.name"
        :index="index"
        class="grid grid-cols-[minmax(0,1fr)] gap-x-6 gap-y-1 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)]"
      >
        <span>{{ language.name }}</span>
        <span class="text-graph-muted">{{ language.proficiency }}</span>
      </Reveal>
    </GraphFrame>

    <GraphFrame title="Education">
      <div v-if="profile.education.length" class="flex flex-col gap-3">
        <Reveal
          v-for="(item, index) in profile.education"
          :key="item.institution"
          :index="index"
          class="grid grid-cols-[minmax(0,1fr)] gap-x-6 gap-y-1 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)]"
        >
          <span class="text-graph-muted tabular-nums">{{ item.period }}</span>
          <div class="flex flex-col gap-1">
            <span>{{ item.degree }}</span>
            <span class="text-graph-muted">{{ item.institution }}</span>
          </div>
        </Reveal>
      </div>
      <p v-else class="text-graph-muted">[ Nothing recorded yet ]</p>
    </GraphFrame>

    <SectionContact />
  </div>
</template>
