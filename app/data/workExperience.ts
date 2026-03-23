export type WorkExperienceItem = {
  startDate: string;
  endDate: string | null;
  title: string;
  company: string;
  location: string;
  techStack: string[];
};

export const workExperiences: WorkExperienceItem[] = [
  {
    startDate: "2022-07-01",
    endDate: null,
    title: "Fullstack Developer",
    company: "Gilgamesh Pte. Ltd, Singapore",
    location: "Remote",
    techStack: ["Laravel", "Vue.js", "Tailwind CSS", "Laravel Filament", "Nuxt JS"],
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
