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
  projects: CollegeProject[];
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type PassionProject = {
  name: string;
  description: string;
  url: string;
  stack: string[];
  images: ProjectImage[];
  orientation?: "horizontal" | "vertical";
};

export type TechnicalSkillGroup = {
  label: string;
  items: string[];
};

export type Skills = {
  languages: { name: string; level: string }[];
  technical: TechnicalSkillGroup[];
};

export type OpenSource = {
  intro: string;
  repoLabel: string;
  repoUrl: string;
};

export type CV = {
  name: string;
  role: string;
  location: string;
  email: string;
  links: { label: string; href: string }[];
  about: string;
  openSource: OpenSource;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  passionProjects: [PassionProject, PassionProject];
  pdfUrl: string;
};

export const cv: CV = {
  name: "Vanja Maksimovic",
  role: "Software Engineer",
  location: "Novi Sad, Serbia",
  email: "teodorovic.vanja00@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/vanjaftn" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vanja-teodorovic-519a7825b/" },
  ],

  about:
    "Software Engineer with experience building full-stack, client-facing applications using modern backend and frontend technologies. Comfortable working across the development lifecycle, from understanding requirements to implementation and code review, while collaborating closely with clients and team members to deliver reliable software.",
  openSource: {
    intro: "Outside of client work, I contribute to open source — see my work on",
    repoLabel: "zio-elasticsearch",
    repoUrl: "https://github.com/lambdaworks/zio-elasticsearch",
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Vega IT D.O.O",
      location: "Novi Sad, Serbia",
      period: "April 2024 - Present",
      description:
        "",
      highlights: [
        "Worked across backend and frontend layers, contributing to application design, implementation, and maintenance",
        "Served as a key technical contact for clients, translating business requirements into technical solutions",
        "Owned backend architecture and implementation for key features, improving performance and reliability",
        "Drove continuous improvement by proposing and implementing optimizations in application design and logic",
        "Contributed to code quality through active participation in reviews and architectural discussions",
      ],
    },
    {
      role: "Intern Software Engineer",
      company: "LambdaWorks D.O.O",
      location: "Novi Sad, Serbia",
      period: "October 2023 – November 2023.",
      description:
        "Collaborated with a team of medior and senior software engineers to improve the open-source zio-elasticsearch library.",
      highlights: [
        "Implementation of various queries and aggregations.",
        "Development of new tests to validate the performance of added features and the refactoring of existing tests to ensure their efficacy.",
      ],
    },
    {
      role: "Intern Software Engineer",
      company: "Nova Lite D.O.O",
      location: "Novi Sad, Serbia",
      period: "February 2023 – March 2023.",
      description:
        "I was a member of a small team responsible for developing an internal social media project. This role provided me with invaluable exposure to the fundamentals of professional software development. Additionally, working collaboratively taught me essential soft skills such as effective communication, teamwork, and adaptability.",
      highlights: [
        "Spearheaded the development of a dynamic web application, utilizing Scala's Play Framework for the robust backend infrastructure.",
        "Seamlessly integrated Angular for the frontend, ensuring an intuitive and responsive user interface.",
        "Managed and optimized data storage and retrieval processes by implementing and maintaining MySQL database solutions."
      ],
    },
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science",
      school: "Faculty of Technical Sciences",
      period: "2019 — 2023",
      projects: [
        {
          name: "Blood bank management software - Internet software architecture (ISA) project",
          description:
          "This project is designed to track and organize blood donations, manage blood inventory and supplies, and schedule appointments for blood donors. Part of a four-person project that uses Java-Spring Boot and Angular.js.",
          github: "https://github.com/JelenaDinic/isa-blood-bank",
        },
        {
          name: "Online bookstore - Intelligence based systems",
          description:
            "This project is designed to enable online book shopping. Part of a four person project that uses Spring Boot and React.js. My part of this project included setting up rules for item discounts using Drools and setting up rules for recommended books using Drools.",
          github: "https://github.com/your-handle/project-beta",
        },
        {
          name: "Airbnb clone - XML and Web Services (XWS) project",
          description:
            "A four person university project written in Go and Angular with a focus on learning microservice architecture. The tech-stack is: Multiple Go services with gRPC communication, Angular and MongoDB.",
          github: "https://github.com/mihajlo-ra92/XML",
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
      {
        label: "Languages",
        items: ["TypeScript", "JavaScript", "Java", "C#", "Python", "Go", "Scala"],
      },
      {
        label: "Frameworks / Libraries",
        items: [
          "React",
          "React Native",
          "Angular",
          "Next.js",
          "ASP.NET",
          "Prisma",
          "Spring Boot",
          "Play",
          "Umbraco",
        ],
      },
      {
        label: "Cloud / DevOps",
        items: ["GitHub Actions", "CI/CD", "AWS"],
      },
      {
        label: "Databases",
        items: [
          "PostgreSQL",
          "MongoDB",
          "MySQL",
          "Microsoft SQL Server",
          "MartenDB",
        ],
      },
      {
        label: "Other",
        items: [
          "Docker",
          "Git",
          "Linux",
          "REST APIs",
          "Microservices",
          "gRPC",
          "GraphQL",
          "Tailwind CSS",
          "Supabase",
          "Vercel",
          "Wolverine",
          "Cursor"
        ],
      },
    ],
  },

  passionProjects: [
    {
      name: "Animal Shelter Management Software",
      description:
        "Volunteer project for a local dog shelter to support shelter operations and reduce manual workflows.",
      url: "https://pravonazivotsabac.org",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma", "Supabase"],
      images: [
        { src: "/projects/pravo_na_zivot_landing.png", alt: "Project One — Dashboard overview" },
        { src: "/projects/pravo_na_zivot_psi.png", alt: "Project One — Projects list" },
        { src: "/projects/pravo_na_zivot_profil_psa.png", alt: "Project One — Settings panel" },
      ],
    },
    {
      name: "Sealed With Love",
      description:
        "Mobile app to help the users plan new, creative and fun dates with their partner.",
      url: "https://sealedwithlove.app/",
      stack: ["React Native", "Expo"],
      orientation: "vertical",
      images: [
        { src: "/projects/date_idea_app_choose_your_deck.jpg", alt: "Project Two — Landing page" },
        { src: "/projects/date_idea_app_your_deck.jpg", alt: "Project Two — Landing page" },
        { src: "/projects/date_idea_app_envelope.jpg", alt: "Project Two — Features grid" },
        { src: "/projects/date_idea_app_letter.jpg", alt: "Project Two — Documentation" },
        { src: "/projects/date_idea_app_rate.jpg", alt: "Project Two — Documentation" },
        { src: "/projects/date_idea_app_list_screen.jpg", alt: "Project Two — Documentation" },
        { src: "/projects/date_idea_app_completed+.jpg", alt: "Project Two — Documentation" },
      ],
    },
  ],

  pdfUrl: "/Vanja_Maksimovic_CV.pdf",
};
