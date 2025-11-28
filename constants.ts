
import { ExperienceItem, Project, SkillCategory, BlogPost } from './types';

// Images
// Using lh3.googleusercontent.com for more reliable direct image rendering
export const PROFILE_IMAGE = 'https://lh3.googleusercontent.com/d/1rbsPQolnWvZcB20K9tr1esVbMbp_g4gB';
export const COMPANY_LOGO = 'https://lh3.googleusercontent.com/d/1PBOWUyd7rhBkExIalyJCkEhiBwbmVIE6';
// Generic agriculture icon for Sn Silos
export const AGRI_ICON = 'https://cdn-icons-png.flaticon.com/512/606/606063.png';

export const SOCIAL_LINKS = {
  email: 'cr2017jboro999@gmail.com',
  phone: '9101290113',
  location: 'Bangalore, India',
  linkedin: 'https://www.linkedin.com/in/jugal999/', 
  github: 'https://github.com/JugalBoro',
  resume: 'https://drive.google.com/file/d/1LvJXnA-MpoWr2LsLR5N0BiXSty_MLhFa/view?usp=sharing'
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
    title: "MIRRA : AI Powered Virtual Try-On",
    description: "Implemented advanced virtual try-on functionality by integrating Google Gemini 2.5 (Image + Chat) APIs, generating photorealistic outfit previews. Deployed on Google Cloud with environment-based configuration.",
    tech: ["React", "Gemini 2.5", "Google Cloud", "Tailwind"],
    links: [
      { label: "Video", url: "https://www.loom.com/share/e7a61a92929948bab1d4dcb0e19cad90" },
      { label: "Website", url: "https://mirra-ai-virtual-fitting-room-96996736092.us-west1.run.app/" },
      { label: "Github", url: "https://github.com/JugalBoro/Mira-AI-Virtual-Try-on" }
    ]
  },
  {
    title: "Fusion Studio: AI Multimedia Platform",
    description: "Built an interactive AI-powered multimedia studio using React, TypeScript, and Vite. Integrated Gemini APIs for intelligent audio generation and resource-optimized playback.",
    tech: ["React", "TypeScript", "Vite", "Gemini API"],
    links: [
      { label: "Video", url: "https://www.loom.com/share/170d8b5c0cc54a0fb05e4dbf716edfb3" },
      { label: "Website", url: "https://fusion-studio-542825433260.us-west1.run.app/" },
      { label: "Github", url: "https://github.com/JugalBoro/fusion-studio" }
    ]
  },
  {
    title: "Group Chat Application",
    description: "Built a full-stack group messaging app (WhatsApp-style) supporting signup/login, group creation, member management, and real-time messaging using Socket.io.",
    tech: ["React", "Node.js", "Express", "JWT", "Socket.io"],
    links: [
      { label: "Video", url: "https://www.loom.com/share/b83d4053a65e490e898d82eb0542a46a?sid=822f83e0-5d87-4cb8-a4ad-1256d65235de" },
      { label: "Github", url: "https://github.com/JugalBoro/Social-Media-App" }
    ]
  },
  {
    title: "Restaurant Management App",
    description: "Full-stack restaurant management app supporting login/registration, invoice generation, item management, and customer/sales detail views.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    links: [{ label: "Github", url: "https://github.com/JugalBoro/food-corner-frontend/tree/main/client" }]
  },
  {
    title: "Expense Tracker App",
    description: "Expense tracker app featuring CRUD operations, budgeting, categorized expenses, and responsive UI for visualizing spending patterns.",
    tech: ["MySQL", "Node.js", "Express", "HTML", "CSS"],
    links: [{ label: "Github", url: "https://github.com/JugalBoro/expense-backend" }]
  },
  {
    title: "Factory Manager (Open Source)",
    description: "Contribution to Industry Fusion. Added Auto Layout feature and Edit Subflow Dialog to the open source project.",
    tech: ["React Flow", "Open Source", "UI/UX"],
    links: [{ label: "PR Link", url: "https://github.com/IndustryFusion/FactoryManager5.0/commit/41e9c6ed2cd491085b15da044de1c123dd4b0e22" }]
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
    id: "websockets-realtime",
    title: "Scaling Real-Time Applications with WebSockets",
    excerpt: "Exploring the challenges and solutions when implementing high-frequency data streams for digital twins in manufacturing.",
    date: "Feb 15, 2024",
    readTime: "5 min read",
    tags: ["WebSockets", "Node.js", "Real-time"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    content: `
      <p>In the world of industrial IoT and Digital Twins, "real-time" isn't just a buzzword—it's a critical requirement. When visualizing over 10,000 factory assets, a delay of even a few seconds can mean missing a critical temperature spike or a machine failure. This article explores how we moved from traditional polling to a robust WebSocket architecture.</p>
      
      <h3>The Problem with Polling</h3>
      <p>Initially, many applications start with HTTP polling. It's simple: the client asks the server "any new data?" every 5 seconds. However, when you have thousands of clients monitoring thousands of sensors, this creates a massive overhead. The server spends more time processing requests than actually delivering data.</p>

      <h3>Enter WebSockets</h3>
      <p>WebSockets provide a full-duplex communication channel over a single TCP connection. This means the server can push updates to the client the moment they happen, without waiting to be asked.</p>

      <h3>Optimizing for Scale</h3>
      <p>Implementing WebSockets is easy. Scaling them is hard. Here are the key strategies we used:</p>
      <ul>
        <li><strong>Payload Compression:</strong> We implemented binary data transfer instead of JSON for high-frequency metrics, reducing bandwidth usage by 60%.</li>
        <li><strong>Throttling & Debouncing:</strong> Human eyes can't process 100 updates per second. We throttled UI updates to 10fps while keeping the backend data stream continuous.</li>
        <li><strong>Heartbeat Mechanisms:</strong> In factory environments with unstable internet, detecting disconnected clients immediately is crucial to stop sending data to a void.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>By switching to a WebSocket-first architecture, we reduced server load by 40% and improved the user's perceived latency to near-instant. For any data-intensive real-time application, the investment in a stateful connection architecture pays off immediately.</p>
    `
  },
  {
    id: "react-flow-viz",
    title: "Mastering React Flow for Complex Visualizations",
    excerpt: "A deep dive into creating interactive node-based diagrams and managing state in complex visual interfaces.",
    date: "Jan 10, 2024",
    readTime: "7 min read",
    tags: ["React", "React Flow", "UI/UX"],
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Visualizing complex relationships between data points is one of the hardest challenges in frontend development. Tables are great for density, but they fail to show hierarchy. This is where node-based diagrams come in, and React Flow has become our tool of choice.</p>

      <h3>Why React Flow?</h3>
      <p>React Flow provides a highly customizable library for building node-based editors and interactive diagrams. Unlike D3.js, which has a steep learning curve and imperative style, React Flow feels "React-native" (pun intended).</p>

      <h3>Handling 1000+ Nodes</h3>
      <p>Rendering performance becomes a bottleneck quickly. We utilized several techniques to keep the UI buttery smooth:</p>
      <ul>
        <li><strong>Memoization:</strong> Using <code>React.memo</code> for custom node components is non-negotiable. Re-rendering the entire graph on a single selection change is a performance killer.</li>
        <li><strong>Virtualization:</strong> While React Flow doesn't support virtualization out of the box in the same way a list does, we implemented logic to lower the fidelity of nodes when zoomed out (LOD - Level of Detail).</li>
      </ul>

      <h3>Custom Edges and Interactivity</h3>
      <p>The real power comes from custom edge types. We created "smart edges" that change color based on the status of the nodes they connect (e.g., turning red if the flow of data is blocked), giving operators instant visual feedback.</p>
    `
  },
  {
    id: "mongodb-timeseries",
    title: "Optimizing MongoDB for Time-Series Data",
    excerpt: "Techniques and best practices for handling sensor data in agriculture tech stacks using MERN.",
    date: "Dec 05, 2023",
    readTime: "6 min read",
    tags: ["MongoDB", "Database", "Performance"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>In Agriculture Tech, IoT sensors generate massive amounts of data. Temperature, humidity, soil moisture—collected every minute from hundreds of silos. Storing this in a traditional document structure in MongoDB can lead to massive storage costs and slow queries.</p>

      <h3>The Time Series Collection</h3>
      <p>MongoDB 5.0 introduced native time-series collections. Before this, we had to manually "bucket" data (grouping readings by hour into a single document) to reduce index size. Native time-series collections automate this.</p>

      <h3>Key Benefits We Observed</h3>
      <ul>
        <li><strong>Storage Efficiency:</strong> The columnar compression format reduced our storage footprint by nearly 70% compared to standard collections.</li>
        <li><strong>Query Performance:</strong> Aggregation queries (e.g., "Give me the average temperature for the last 24 hours") became significantly faster because the data is physically stored together on disk.</li>
      </ul>

      <h3>Schema Design Tips</h3>
      <p>Don't just dump data. Choose your <code>metaField</code> carefully. For us, the <code>sensorId</code> and <code>siloId</code> were the metadata, while the readings were the measurements. This separation allows MongoDB to optimize how it indexes the data.</p>
    `
  }
];
