export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Languages & Core",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "C#", "OOP", "DSA", "System Design"],
  },
  {
    category: "Backend & Databases",
    items: ["Node JS", "Express JS", "NestJs", "MySQL", "MongoDB"],
  },
  {
    category: "Frontend",
    items: ["React JS", "Next.js", "Zustand", "TailwindCSS", "Ant Design", "shadcn/ui"],
  },
  {
    category: "Tools & Cloud",
    items: ["Git & GitHub", "Docker", "Linux", "Nginx", "Postman", "GitHub Actions"],
  },
];

export const coreCompetencies: string[] = [
  "English TOEIC 735",
  "RESTful API",
  "WebSockets",
  "JWT",
  "RBAC",
  "CI/CD"
];
