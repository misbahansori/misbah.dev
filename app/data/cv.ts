export type CvEducationItem = {
  institution: string;
  degree: string;
  period: string;
  details?: string;
};

export type CvLanguageItem = {
  name: string;
  proficiency: string;
};

export const cv = {
  name: "Misbah Ansori",
  title: "Full Stack Developer",
  email: "misbah.ansori24@gmail.com",
  photo: "/img/misbah.jpg",
  summary:
    "A passionate developer with a strong interest in web development and other technologies. Proficient and experienced in both frontend and backend.",
  education: [] as CvEducationItem[],
  languages: [
    { name: "Indonesian", proficiency: "Native" },
    { name: "English", proficiency: "Professional working proficiency" },
  ] satisfies CvLanguageItem[],
};
