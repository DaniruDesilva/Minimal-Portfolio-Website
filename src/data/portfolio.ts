import {
  PersonalInfo,
  Project,
  SkillCategory,
  AcademicHighlight,
  DirectorshipHighlight,
  AthleticHighlight,
} from "@/types";

export const portfolioData = {
  personal: {
    name: "Daniru De Silva",
    monogram: "DS",
    title: "Full-Stack Software Engineer & Builder",
    education: "B.Sc. (Hons) IT @ University of Moratuwa (GPA 3.55/4.0)",
    email: "daniru.desilva1019@gmail.com",
    phone: "+94 77 823 1019",
    location: "Galle, Sri Lanka",
    portfolioUrl: "https://danirudesilva.com",
    github: "https://github.com/DaniruDesilva",
    linkedin: "https://linkedin.com/in/daniru-de-silva-31977b2aa/",
    availability: "Open for High-Impact Software Engineering Internships & Projects",
  } as PersonalInfo,

  metrics: [
    { label: "Cumulative GPA", value: "3.55 / 4.0", detail: "University of Moratuwa" },
    { label: "Production Platforms", value: "5+", detail: "ERP, E-Commerce, SaaS & EdTech" },
    { label: "Engineering Domain", value: "Full-Stack", detail: "Next.js, Supabase, MERN & Cloud" },
    { label: "Leadership & Directorship", value: "Co-Founder", detail: "Delight Consumer Products (Pvt) Ltd" },
  ],

  academic: {
    institution: "University of Moratuwa — Faculty of Information Technology",
    degree: "B.Sc. (Hons) in Information Technology",
    gpa: "3.55 / 4.00",
    districtRank: "District Rank 126 in GCE A/L (Biology Stream)",
    highlights: [
      "Specializing in Software Engineering, Distributed Systems, and Web Architectures.",
      "Served as Group Leader for 2nd-Year flagship engineering project (EduPath).",
      "Dean's List academic standing with proven excellence in Database Systems and OOP.",
    ],
  } as AcademicHighlight,

  directorship: {
    company: "Delight Consumer Products (Pvt) Ltd",
    role: "Co-Founder & Director",
    timeline: "2025 – Present",
    summary:
      "Overseeing enterprise IT infrastructure, digital direct-to-consumer storefront architecture, PayHere payment gateway integration, and stock logistics.",
    contributions: [
      "Engineered full e-commerce checkout flow with integrated payment clearing.",
      "Built automated administrative inventory management CMS with low-stock alerts.",
      "Scaled digital marketing and operational workflows across island-wide fulfillment.",
    ],
  } as DirectorshipHighlight,

  athletics: {
    sport: "Karate & Martial Arts Discipline",
    achievement: "Karate Team 2nd Runner-up & Kata Championship",
    year: "2025",
  } as AthleticHighlight,

  skillsCategories: [
    {
      category: "Languages & Core",
      tagline: "Core algorithms, strongly-typed workflows, and object-oriented programming.",
      icon: "Code2",
      items: [
        {
          name: "JavaScript",
          category: "Languages & Core",
          level: "Expert",
          experience: "4+ yrs",
          useCase: "ES6+, asynchronous event loops, DOM manipulation, and dynamic client-side logic.",
          highlight: true,
        },
        {
          name: "TypeScript",
          category: "Languages & Core",
          level: "Expert",
          experience: "3+ yrs",
          useCase: "Strict typing, interface contracts, generic validations, and safe refactoring.",
          highlight: true,
        },
        {
          name: "Java",
          category: "Languages & Core",
          level: "Advanced",
          experience: "3+ yrs",
          useCase: "Object-Oriented Programming (OOP), design patterns, and enterprise computing.",
        },
        {
          name: "Python",
          category: "Languages & Core",
          level: "Advanced",
          experience: "2+ yrs",
          useCase: "Data structures, algorithms, automation scripting, and AI parsing utilities.",
        },
        {
          name: "HTML5 / CSS3",
          category: "Languages & Core",
          level: "Expert",
          experience: "5+ yrs",
          useCase: "Semantic markup, fluid responsive layouts, CSS variables, and accessibility.",
        },
        {
          name: "Git & CLI",
          category: "Languages & Core",
          level: "Advanced",
          experience: "3+ yrs",
          useCase: "Branching strategies, interactive rebase, bash/zsh automation, and CI/CD pipelines.",
        },
      ],
    },
    {
      category: "Frontend & UI Engineering",
      tagline: "Production-ready reactive user interfaces and modern web architectures.",
      icon: "Layers",
      items: [
        {
          name: "Next.js 16",
          category: "Frontend & UI Engineering",
          level: "Expert",
          experience: "3+ yrs",
          useCase: "Server Components, Server Actions, route handlers, and edge caching.",
          highlight: true,
        },
        {
          name: "React 19",
          category: "Frontend & UI Engineering",
          level: "Expert",
          experience: "4+ yrs",
          useCase: "Optimistic UI state, transitions, hooks, and scalable component architecture.",
          highlight: true,
        },
        {
          name: "Tailwind CSS",
          category: "Frontend & UI Engineering",
          level: "Expert",
          experience: "4+ yrs",
          useCase: "Utility-first porcelain styling, dark/light design tokens, and fluid grids.",
          highlight: true,
        },
        {
          name: "Framer Motion",
          category: "Frontend & UI Engineering",
          level: "Advanced",
          experience: "2+ yrs",
          useCase: "Smooth layout transitions, spring physics, and scroll triggers.",
        },
        {
          name: "REST APIs",
          category: "Frontend & UI Engineering",
          level: "Advanced",
          experience: "3+ yrs",
          useCase: "Async data fetching, state caching, API integration, and optimistic mutations.",
        },
        {
          name: "Responsive UX",
          category: "Frontend & UI Engineering",
          level: "Expert",
          experience: "4+ yrs",
          useCase: "Mobile-first design, adaptive screen layouts, touch accessibility, and design systems.",
        },
      ],
    },
    {
      category: "Backend, Databases & Cloud",
      tagline: "Scalable REST APIs, relational datastores, auth pipelines, and containerization.",
      icon: "Cpu",
      items: [
        {
          name: "Node.js",
          category: "Backend, Databases & Cloud",
          level: "Expert",
          experience: "3+ yrs",
          useCase: "Event-driven runtime, scalable microservices, and asynchronous server I/O.",
          highlight: true,
        },
        {
          name: "Express.js",
          category: "Backend, Databases & Cloud",
          level: "Advanced",
          experience: "3+ yrs",
          useCase: "REST API architectures, middleware authentication, and backend routing.",
        },
        {
          name: "Supabase",
          category: "Backend, Databases & Cloud",
          level: "Expert",
          experience: "3+ yrs",
          useCase: "PostgreSQL databases, Row-Level Security (RLS), and Realtime subscriptions.",
          highlight: true,
        },
        {
          name: "MongoDB",
          category: "Backend, Databases & Cloud",
          level: "Advanced",
          experience: "3+ yrs",
          useCase: "NoSQL document modeling, aggregation pipelines, and MERN platform integration.",
        },
        {
          name: "MySQL",
          category: "Backend, Databases & Cloud",
          level: "Advanced",
          experience: "3+ yrs",
          useCase: "Relational schema design, ACID transactions, complex joins, and query indexing.",
        },
        {
          name: "Docker",
          category: "Backend, Databases & Cloud",
          level: "Advanced",
          experience: "2+ yrs",
          useCase: "Containerized development, multi-stage builds, isolated environments, and deployment.",
        },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "zynveo-erp",
      title: "Zynveo ERP — Retail & FMCG Platform",
      category: "Cloud SaaS & Operations",
      year: "2026",
      image: "/images/projects/Zynveoweb.png",
      liveUrl: "https://zynveo.com/",
      githubUrl: "https://github.com/DaniruDesilva",
      summary:
        "Cloud-native ERP system engineered for retail, wholesale, and FMCG brands to calculate margins and manage operations.",
      problem:
        "Traditional ERPs are bloated, high-friction, and lack built-in fast utilities for margin auditing and SKU management.",
      architecture: [
        "Next.js 16 App Router & Server Actions",
        "Supabase Backend, Auth & RLS Policies",
        "Dynamic Barcode & SKU Generator Engine",
        "Client-Side Fast MRP Calculation Telemetry",
      ],
      techStack: ["Next.js 16", "Supabase", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      metrics: [
        { label: "Core Utilities", value: "4+ Tools (Invoice, MRP, Barcode, Margins)" },
        { label: "Architecture", value: "Cloud-Native SaaS" },
      ],
    },
    {
      id: "ats-cv-builder",
      title: "ATS Resume Builder — AI Career Suite",
      category: "AI Tools & Web Applications",
      year: "2026",
      image: "/images/projects/Ats-Cv.png",
      liveUrl: "",
      githubUrl: "https://github.com/DaniruDesilva",
      summary:
        "Intelligent career tool offering AI-assisted resume generation, automated ATS compatibility scoring, and one-click job tailoring.",
      problem:
        "Job seekers struggle with formatting and parsing errors when submitting resumes through modern ATS pipelines.",
      architecture: [
        "Next.js 16 App Router & React 19 Client State",
        "Supabase PostgreSQL User Datastore",
        "AI Semantic Parsing & Keyword Scoring Engine",
        "Dynamic Client-Side ATS-Verified PDF Renderer",
      ],
      techStack: ["Next.js 16", "Supabase", "TypeScript", "Tailwind CSS", "Framer Motion"],
      metrics: [
        { label: "Features", value: "AI Writer & 1-Click Tailor" },
        { label: "Output", value: "100% ATS Verified PDF" },
      ],
    },
    {
      id: "delight-ecommerce",
      title: "Delight Products — E-Commerce Suite",
      category: "Production E-Commerce & Enterprise",
      year: "2025 - 2026",
      image: "/images/projects/Delight.png",
      liveUrl: "https://delightconsumerproducts.lk/",
      githubUrl: "https://github.com/DaniruDesilva",
      summary:
        "Full company storefront with complete e-commerce checkout flow, PayHere payment integration, and administrative inventory dashboard.",
      problem:
        "Manual order processing and lack of direct-to-consumer digital infrastructure for consumer goods brand.",
      architecture: [
        "Next.js App Router Storefront & CMS Routes",
        "SQLite Database with Transactional Safety",
        "PayHere Secure Payment Gateway Webhook Verification",
        "Custom Real-time Inventory CMS with Stock Status",
      ],
      techStack: ["Next.js", "SQLite", "PayHere", "Tailwind CSS", "TypeScript"],
      metrics: [
        { label: "Payment Gateway", value: "PayHere Verified" },
        { label: "System", value: "Storefront + Admin CMS" },
      ],
    },
    {
      id: "guruvaru-lk",
      title: "Guruvaru.LK — Education Discovery Portal",
      category: "EdTech & Classifieds",
      year: "2025",
      image: "/images/projects/Guruvaru.png",
      liveUrl: "https://guruvaru.lk/",
      githubUrl: "https://github.com/DaniruDesilva",
      summary:
        "Classified education platform connecting students and parents across Sri Lanka with teachers, institutes, and learning resources.",
      problem:
        "Scattered, unverified tutoring information across social platforms without regional indexing.",
      architecture: [
        "WordPress Engine with Custom Post Architectures",
        "Custom District & Subject Filter Engine",
        "Fast MySQL Query Caching & Indexing",
      ],
      techStack: ["WordPress", "PHP", "Custom CSS", "MySQL", "JavaScript"],
      metrics: [
        { label: "Reach", value: "Island-wide Education Network" },
        { label: "Audience", value: "Students, Parents & Teachers" },
      ],
    },
    {
      id: "edupath-ai",
      title: "EduPath — AI Career Pathway Platform",
      category: "EdTech Academic Project",
      year: "2026",
      image: "/images/projects/EduPath.jpeg",
      liveUrl: "",
      githubUrl: "https://github.com/DaniruDesilva",
      summary:
        "University 2nd-year flagship project. Served as Group Leader leading Auth, Student dashboard, Reviewer, and Admin pathway modules.",
      problem:
        "Students lack personalized, multi-stage roadmaps and verified feedback loops for career guidance.",
      architecture: [
        "MERN Architecture with Express.js REST Services",
        "Role-Based Access Control (RBAC) (Student, Reviewer, Admin)",
        "Interactive Graph-Based Career Roadmapping Engine",
      ],
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
      metrics: [
        { label: "Role", value: "Group Leader" },
        { label: "Modules", value: "Auth, Student, Reviewer, Admin" },
      ],
    },
  ] as Project[],
};

export const personalData = portfolioData.personal;
export const projectsData = portfolioData.projects;
export const skillsCategories = portfolioData.skillsCategories;
