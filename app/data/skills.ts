export type SkillItem = {
  name: string;
  description: string;
  url: string;
};

export const skills: SkillItem[] = [
  { name: "Laravel", description: "The full-stack PHP framework", url: "https://laravel.com" },
  { name: "Vue.js", description: "The progressive JavaScript framework", url: "https://vuejs.org" },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework",
    url: "https://tailwindcss.com",
  },
  {
    name: "Laravel Filament",
    description: "Quickly build modern admin panels",
    url: "https://filamentphp.com",
  },
  { name: "Nuxt JS", description: "A full-stack framework for Vue.js", url: "https://nuxt.com" },
];
