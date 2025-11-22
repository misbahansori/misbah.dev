export interface Project {
  title: string;
  description: string;
  image: {
    light: string;
    dark: string;
  };
  link: string;
}

export const featuredProjects = [
  {
    title: "OriginUi Vue",
    description: "Beautiful UI components built with Tailwind CSS and Vue",
    image: {
      light: "/img/originui-vue_light.png",
      dark: "/img/originui-vue_dark.png",
    },
    link: "https://originui-vue.com",
  },
  {
    title: "Shareshooter",
    description: "Easily share your screenshots",
    image: {
      light: "/img/shareshooter_light.png",
      dark: "/img/shareshooter_dark.png",
    },
    link: "https://shareshooter.com",
  },
] satisfies Project[];
