import { ExperienceItem, Project, SkillCategory, BlogPost } from './types';

// Images
// Profile ID: 1rbsPQolnWvZcB20K9tr1esVbMbp_g4gB
// Logo ID: 1PBOWUyd7rhBkExIalyJCkEhiBwbmVIE6
export const PROFILE_IMAGE = 'https://drive.google.com/uc?export=view&id=1rbsPQolnWvZcB20K9tr1esVbMbp_g4gB';
export const COMPANY_LOGO = 'https://drive.google.com/uc?export=view&id=1PBOWUyd7rhBkExIalyJCkEhiBwbmVIE6';
// Generic agriculture icon for Sn Silos
export const AGRI_ICON = 'https://cdn-icons-png.flaticon.com/512/606/606063.png';

export const SOCIAL_LINKS = {
  email: 'cr2017jboro999@gmail.com',
  phone: '9101290113',
  location: 'Bangalore, India',
  linkedin: 'https://www.linkedin.com/in/jugal999/', 
  github: 'https://github.com/JugalBoro',
  resume: 'https://drive.google.com/file/d/1xrPquqnJnhWRtjnsXcQ0zIqxbtE55KZh/view?usp=sharing'
};

export const SUMMARY = "Agile Full-Stack Developer with 2 years of experience building production-ready, scalable web applications. Skilled in React, Next.js, Node.js, and NestJS, with hands-on experience delivering real-time digital-twin platforms, data-driven dashboards, and high-traffic REST APIs. Proven track record working in fast-paced Agile teams, translating complex business requirements into maintainable, high-performance solutions that improve usability and business outcomes.";

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Mistura Software Technologies",
    role: "Full Stack Developer",
    type: "Research & Development Startup",
    period: "Dec 2023 - Present",
    logo: COMPANY_LOGO,
    description: [
      "Lead engineer on a digital-twin solution visualising >10k factory assets in real time; built responsive Next.js UI & NestJS microservices that cut diagnostic time for operators by 30%.",
      "Designed and rolled out a QR code system linking physical assets to blockchain-backed records, slashing manual audit effort.",
      "Implemented high-frequency WebSocket streams and D3-powered charts, giving management instant KPI visibility.",
      "Generated interactive node diagrams (React Flow) to surface multilevel part relationships, boosting root-cause analysis speed."
    ]
  },
  {
    company: "Sn Silos",
    role: "Full Stack Intern",
    type: "Agriculture Tech Startup",
    period: "June 2023 - Nov 2023",
    logo: AGRI_ICON,
    description: [
      "Contributed to the development of a MERN stack application for grain storage monitoring, enhancing data accessibility for farmers.",
      "Developed RESTful APIs using Node.js and Express to process data from IoT sensors placed in silos.",
      "Built interactive dashboards using React and Chart.js to visualize temperature and humidity trends, preventing crop spoilage.",
      "Optimized MongoDB database queries, improving data retrieval speeds by 25% for real-time reporting."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Factory Manager (Open Source)",
    description: "Contribution to Industry Fusion. Added Auto Layout feature and Edit Subflow Dialog.",
    tech: ["React Flow", "Open Source", "UI/UX"],
    links: [{ label: "PR Link", url: "#" }]
  },
  {
    title: "Group Chat Application",
    description: "Built a full-stack group messaging app (WhatsApp-style) supporting signup/login, group creation, member management, and real-time messaging.",
    tech: ["React", "Node.js", "Express", "JWT", "Socket.io"],
    links: [{ label: "Video Demo", url: "#" }]
  },
  {
    title: "Restaurant Management App",
    description: "Full-stack restaurant management app supporting login/registration, invoice generation, item management, and customer/sales detail views.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    links: [{ label: "Code Repository", url: "#" }]
  },
  {
    title: "Expense Tracker App",
    description: "Expense tracker app featuring CRUD operations, budgeting, categorized expenses, and responsive UI for visualizing spending patterns.",
    tech: ["MySQL", "Node.js", "Express", "HTML", "CSS"],
    links: [{ label: "Code Repository", url: "#" }]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["ReactJS", "Next.JS", "HTML", "CSS", "Tailwind", "Redux", "DOM Manipulation"]
  },
  {
    name: "Backend",
    skills: ["NodeJS", "NestJS", "Express", "REST APIs"]
  },
  {
    name: "Database",
    skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL"]
  },
  {
    name: "Tools & Others",
    skills: ["JavaScript", "TypeScript", "AWS", "Problem Solving", "AI Integration", "Agile"]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Engineering",
  major: "Computer Science",
  school: "Barak Valley Engineering College",
  score: "82%"
};

export const BLOGS: BlogPost[] = [
  {
    title: "Scaling Real-Time Applications with WebSockets",
    excerpt: "Exploring the challenges and solutions when implementing high-frequency data streams for digital twins in manufacturing.",
    date: "Feb 15, 2024",
    readTime: "5 min read",
    tags: ["WebSockets", "Node.js", "Real-time"],
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Mastering React Flow for Complex Visualizations",
    excerpt: "A deep dive into creating interactive node-based diagrams and managing state in complex visual interfaces.",
    date: "Jan 10, 2024",
    readTime: "7 min read",
    tags: ["React", "React Flow", "UI/UX"],
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Optimizing MongoDB for Time-Series Data",
    excerpt: "Techniques and best practices for handling sensor data in agriculture tech stacks using MERN.",
    date: "Dec 05, 2023",
    readTime: "6 min read",
    tags: ["MongoDB", "Database", "Performance"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];