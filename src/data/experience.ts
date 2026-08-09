export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description?: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp1",
    role: "Backend Developer Intern",
    company: "Suri Technologies",
    period: "Jan 2026 - Apr 2026",
    description: [
      "Designed and developed backend microservices to integrate a React client with Moodle core, delivering version 1.0.0 to stakeholders and driving improvements based on their feedback.",
      "Integrated VNPay payment gateway using database transactions and asynchronous webhooks, while simultaneously building backend services with Moodle REST APIs and custom plugins to enhance system functionality and security.",
      "Participated in Agile/Scrum, engaging in daily stand-ups and sprint planning to ensure consistent feature delivery and team alignment."
    ],
  },
  {
    id: "exp2",
    role: "Teaching Assistant / Instructor",
    company: "MindX Technology School",
    period: "July 2025 - Present",
    description: [
      "Taught programming and robotics to K–8 students, developing logical thinking and problem-solving skills."
    ],
  },
];
