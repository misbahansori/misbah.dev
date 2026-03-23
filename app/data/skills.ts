export type SkillItem = {
  name: string;
  description: string;
  url: string;
};

export const skills: SkillItem[] = [
  {
    name: "Laravel",
    description: "The full-stack PHP Framework",
    url: "https://laravel.com",
  },
  {
    name: "Vue.js",
    description: "The Progressive JavaScript Framework",
    url: "https://vuejs.org",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS Framework",
    url: "https://tailwindcss.com",
  },
  {
    name: "Laravel Filament",
    description: "Quickly build modern admin panels",
    url: "https://filamentphp.com",
  },
  {
    name: "Nuxt JS",
    description: "A full-stack framework for Vue.js",
    url: "https://nuxt.com",
  },
];
