export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights?: string[];
};

export type CollegeProject = {
  name: string;
  description: string;
  github: string;
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  description?: string;
  projects: CollegeProject[];
};

export type FeaturedProject = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  stack: string[];
};

export type Skills = {
  languages: { name: string; level: string }[];
  technical: string[];
};

export type CV = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone?: string;
  links: { label: string; href: string }[];
  about: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  featuredProjects: [FeaturedProject, FeaturedProject];
  pdfUrl: string;
};

export const cv: CV = {
  name: "Vanja Lastname",
  role: "Software Engineer",
  location: "City, Country",
  email: "you@example.com",
  phone: "+00 000 000 000",
  links: [
    { label: "GitHub", href: "https://github.com/your-handle" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  ],

  about:
    "I'm a software engineer who enjoys building clean, reliable products end to end. I care about thoughtful design, readable code, and shipping things that people actually use. I'm comfortable across the stack but feel most at home turning unclear problems into simple, focused solutions.",

  experience: [
    {
      role: "Software Engineer",
      company: "Company Name",
      location: "City, Country",
      period: "2024 — Present",
      description:
        "Working on web applications across the stack, focused on performance and developer experience.",
      highlights: [
        "Shipped feature X that improved Y by Z%.",
        "Led the migration from A to B with no downtime.",
        "Mentored junior engineers and ran code review sessions.",
      ],
    },
    {
      role: "Junior Developer",
      company: "Previous Company",
      location: "City, Country",
      period: "2022 — 2024",
      description:
        "Built and maintained internal tools and customer-facing features in a small, fast-moving team.",
      highlights: [
        "Owned the rewrite of the dashboard module.",
        "Set up CI pipelines and improved test coverage.",
      ],
    },
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science",
      school: "University Name",
      period: "2019 — 2023",
      description:
        "Coursework in algorithms, distributed systems, databases, and software engineering. Graduated with honors.",
      projects: [
        {
          name: "Project Alpha",
          description:
            "A small distributed key-value store written in Go for a systems course.",
          github: "https://github.com/your-handle/project-alpha",
        },
        {
          name: "Project Beta",
          description:
            "Compiler for a toy language with a custom IR and basic optimizations.",
          github: "https://github.com/your-handle/project-beta",
        },
        {
          name: "Project Gamma",
          description:
            "Web app built as the final project, exploring real-time collaboration.",
          github: "https://github.com/your-handle/project-gamma",
        },
      ],
    },
  ],

  skills: {
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Serbian", level: "Native" },
    ],
    technical: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Go",
      "PostgreSQL",
      "Docker",
      "Git",
      "Linux",
      "Tailwind CSS",
    ],
  },

  featuredProjects: [
    {
      name: "Project One",
      tagline: "A short, punchy description of what it does.",
      description:
        "A longer paragraph explaining the problem this project solves, the audience it's built for, and the key ideas behind it. Mention any interesting technical decisions or scale milestones here.",
      url: "https://your-project-one.example.com",
      stack: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
      name: "Project Two",
      tagline: "Another short description for your second project.",
      description:
        "A longer paragraph for the second project. What does it do, who uses it, and what's notable about how it's built? Keep it concrete and specific.",
      url: "https://your-project-two.example.com",
      stack: ["React", "Node.js", "Tailwind"],
    },
  ],

  pdfUrl: "/cv.pdf",
};
