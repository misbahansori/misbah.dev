<script setup lang="ts">
import { diffMonths, format } from "@formkit/tempo";

const experiences = [
  {
    startDate: "2022-07-01",
    endDate: null,
    title: "Fullstack Developer",
    company: "Gilgamesh Pte. Ltd, Singapore",
    location: "Remote",
    techStack: [
      "Laravel",
      "Vue.js",
      "Tailwind CSS",
      "Laravel Filament",
      "Nuxt JS",
    ],
  },
  {
    startDate: "2021-11-01",
    endDate: "2022-07-01",
    title: "Back End Developer",
    company: "Avana Indonesia",
    location: "Remote",
    techStack: ["Laravel"],
  },
  {
    startDate: "2020-03-01",
    endDate: "2021-10-01",
    title: "Full Stack Developer",
    company: "PT. Winosa Mitra Bharatadjaya",
    location: "Bandar Lampung, Indonesia",
    techStack: ["Laravel", "Vue.js"],
  },
];

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
      <div class="flex flex-col py-6 lg:py-8">
        <div class="flex flex-col gap-2">
          <h2 class="font-serif text-3xl/snug tracking-wide italic">
            Work Experience
          </h2>
          <p class="text-muted-foreground">
            Here are some of the companies I've worked with
          </p>
        </div>
        <div class="flex flex-col items-stretch pt-6">
          <div
            v-for="experience in experiences"
            class="flex flex-col items-baseline gap-6 md:flex-row md:gap-12"
          >
            <div class="flex w-40 flex-wrap items-center gap-1 pt-4 sm:pt-0">
              <div class="flex flex-col gap-1" data-allow-mismatch>
                <span class="text-foreground text-sm font-medium">
                  {{ format(experience.startDate, "MMM YYYY") }} -
                  {{
                    experience.endDate
                      ? format(experience.endDate, "MMM YYYY")
                      : "Present"
                  }}
                </span>
                <span class="text-muted-foreground text-sm">
                  {{
                    diffForHumans(
                      experience.startDate,
                      experience.endDate || new Date().toISOString(),
                    )
                  }}
                </span>
              </div>
            </div>
            <div>
              <div class="relative flex pb-8 last:pb-0">
                <div
                  class="absolute inset-0 flex w-6 items-center justify-center"
                >
                  <div
                    class="pointer-events-none h-full w-px border-l-[1px]"
                  ></div>
                </div>
                <div
                  class="bg-accent text-foreground z-0 flex h-6 w-6 shrink-0 items-center justify-center rounded-full align-middle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-plus"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </div>
                <div class="flex-grow pb-8 pl-8 sm:pb-12">
                  <div class="word-break-word flex flex-col gap-2">
                    <span class="font-semibold tracking-tight">
                      {{ experience.title }}
                    </span>
                    <span class="text-muted-foreground text-sm">
                      {{ experience.company }}
                    </span>
                    <div class="flex items-center gap-1">
                      <Icon name="tabler:pin" class="inline-block h-4 w-4" />
                      <span class="text-muted-foreground text-sm">
                        {{ experience.location }}
                      </span>
                    </div>
                  </div>
                  <div class="flex flex-wrap gap-2 pt-3">
                    <Badge
                      v-for="tech in experience.techStack"
                      :key="tech"
                      variant="default"
                    >
                      {{ tech }}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
