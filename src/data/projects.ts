export interface Project {
  id: string;
  name: string;
  image: string;
  thumbnails?: string[];
  description?: string | string[];
  tech?: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    name: "E-Commerce Platform (HazHzel)",
    image: "/hazle.png",
    thumbnails: ["/haz1.png", "/haz2.png"],
    description: [
      "Developed a scalable e-commerce platform and Admin Dashboard, implementing 100+ RESTful APIs to drive a multi-attribute product engine and optimizing MongoDB schemas to reduce complex query latency.",
      "Automated build and deployment processes with GitHub Actions and Docker, enabling faster testing iterations and more consistent releases.",
      "Orchestrated an Nginx reverse proxy on an Ubuntu VPS with automated SSL/TLS.",
      "Secured RESTful APIs by implementing JWT authentication and strict Role-Based Access Control (RBAC).",
      "Integrated WebSocket real-time chat and an advanced admin dashboard, reducing support response times by 60% and increasing operational efficiency by 40%"
    ],
    tech: ["Next.js", "React", "TypeScript", "NestJS", "MongoDB", "Zustand"],
    github: "https://github.com/quagthanh/HazHzel-Ecommerce",
    demo: "https://hazhzel.duckdns.org:8443/",
  },
  {
    id: "job-portal",
    name: "Job Portal",
    image: "/portal.png",
    description: [
      "Developed a job portal with role-based authentication, job posting/search, application tracking, profiles, dashboards, notifications and secure data management.",
      "Responsibilities: Developed API endpoints for company, job management and built security, authentication on backend by JWT.",
      "Made a responsive dashboard and displayed data from backend to UI.",
      "Designed and implemented MongoDB database structure."
    ],
    tech: ["ReactJs", "NextJs", "Golang (Gorilla)", "MongoDB", "Ant Design"],
    github: "https://github.com/quagthanh/hireforwork-app",
  },
];
