export type Project = {
  title: string;
  description: string;
  url: string;
  stack: string[];
  year: string;
};

export const featuredProjects: Project[] = [
  {
    title: "OriginUI Vue",
    description: "Beautiful UI components built with Tailwind CSS and Vue.",
    url: "https://originui-vue.com",
    stack: ["Vue.js", "Nuxt JS", "Tailwind CSS"],
    year: "2024",
  },
  {
    title: "Shareshooter",
    description: "Easily share your screenshots.",
    url: "https://shareshooter.com",
    stack: ["Nuxt JS", "Tailwind CSS"],
    year: "2024",
  },
];
