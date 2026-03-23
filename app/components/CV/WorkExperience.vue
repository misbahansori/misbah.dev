<script setup lang="ts">
import { diffMonths, format } from "@formkit/tempo";
import { LucidePin } from "lucide-vue-next";
import { workExperiences } from "~/data/workExperience";

const diffForHumans = (startDate: string, endDate: string) => {
  const diff = Math.abs(diffMonths(startDate, endDate));
  const months = Math.abs(diff % 12);
  const years = Math.floor(diff / 12);

  let text = "";
  if (years > 0) {
    text += `${years} year${years > 1 ? "s" : ""}`;
  }
  if (months > 0) {
    text += `${years > 0 ? " and " : ""}${months} month${months > 1 ? "s" : ""}`;
  }
  return text;
};
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-3xl px-4">
      <BorderX />
      <div class="flex flex-col gap-2 py-6 lg:py-12">
        <h2 class="font-serif text-3xl/snug tracking-wide italic">
          Work Experience
        </h2>
        <p class="text-muted-foreground">Here are some of the companies I've worked with</p>
      </div>
      <ul class="space-y-6 pb-8 last:pb-0 sm:pb-12">
        <li
          v-for="experience in workExperiences"
          :key="`${experience.company}-${experience.startDate}`"
        >
          <div class="flex flex-col gap-1">
            <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
              <span class="font-semibold tracking-tight">{{ experience.title }}</span>
              <span class="text-muted-foreground text-sm tabular-nums">
                {{ format(experience.startDate, "MMM YYYY") }} –
                {{ experience.endDate ? format(experience.endDate, "MMM YYYY") : "Present" }}
                <span class="text-muted-foreground/80">
                  ·
                  {{
                    diffForHumans(
                      experience.startDate,
                      experience.endDate || new Date().toISOString(),
                    )
                  }}
                </span>
              </span>
            </div>
            <span class="text-muted-foreground text-sm">{{ experience.company }}</span>
            <div class="text-muted-foreground flex items-center gap-1 text-sm">
              <LucidePin class="size-4 shrink-0" aria-hidden="true" />
              <span>{{ experience.location }}</span>
            </div>
            <div class="flex flex-wrap gap-2 pt-3">
              <Badge v-for="tech in experience.techStack" :key="tech" variant="outline">
                {{ tech }}
              </Badge>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
