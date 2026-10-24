// ============================================================
//  All editable content lives here. Update freely.
// ============================================================

export const profile = {
  name: 'Muaz Ramzi',
  firstName: 'Muaz',
  lastName: 'Ramzi',
  role: 'Full-Stack Developer / Software Engineer / Frontend Developer / Backend Developer / Mobile Developer / AI Enthusiast / Machine Learning / Data Science',
  tagline: 'Building Software. Solving Real Problems.',
  intro:
    "I'm a final-year IT student with hands-on software development experience, interested in building reliable applications and solving real-world problems. I'm looking forward to contributing my skills and growing as a software engineer.",
  badge: 'Full-stack intern · Secure LabX',
  status: 'Open to full-time roles after Jan 2027',
  email: 'muazramzi.123@gmail.com', 
  phone: '+60 18 9199 054', // EDIT: your real phone
  phoneLink: 'https://wa.link/wzm6bq',
  location: 'Kuala Lumpur / Johor / Melaka / Penang /Terengganu',
  github: 'https://github.com/muazramzii',
  githubUser: 'muazramzii',
  linkedin: 'https://www.linkedin.com/in/muaz-ramzi-a748a4234',
  linkedinUser: 'muaz ramzi',
  resume: 'Muhammad Muaz Ramzi bin Mohamad Ramzi - Resume.pdf', // EDIT: drop resume.pdf in /public
  formspree: 'https://formspree.io/f/xgojvozg', // contact form endpoint
}

export const heroStats = [
  { value: 5, suffix: '+', label: 'Projects built' },
  { value: 3.34, decimals: 2, label: "CGPA " },
  { value: 4, suffix: '', label: 'Live deployments' },
]

export const facts = [
  { big: 'UTHM', small: 'FSKTM · IT (Hons)' },
  { big: 'Batu Pahat', small: 'Johor, Malaysia' },
  { big: 'EN / BM', small: 'Fluent, both' },
  { big: 'Jan 2027', small: 'Open to full-time roles' },
]

export const education = [
  {
    year: '2024 - 2027 (expected)',
    title: 'Bachelor of IT (Hons)',
    detail: "UTHM · Faculty of Computer Science & IT.",
  },
  {
    year: 'Final Year Project',
    title: 'ARAMS - Research Monitoring System',
    detail: 'Solo-built and deployed a PHP/MySQL MVC web app for faculty research tracking.',
  },
  {
    year: '3 Aug 2026 – 15 Jan 2027',
    title: 'Internship · Secure LabX Sdn. Bhd.',
    tag: 'current',
    detail: 'Full-Stack Developer Intern.',
  },
  {
    year: 'Aug 2019 – Feb 2022',
    title: 'Diploma in Information Technology (Technology Digital)',
    detail: 'Politeknik Ungku Omar · First Class Honours.',
  },
]

export const skills = [
  { icon: 'Server', title: 'Backend & API Development', note: '// logic & APIs', items: ['Node.js', 'LoopBack 4', 'Express.js', 'PHP', 'REST APIs', 'OpenAPI', 'JWT Auth', 'Prisma'] },
  { icon: 'Database', title: 'Database Management', note: '// data & design', items: ['MySQL', 'MariaDB', 'PostgreSQL', 'SQL', 'Supabase', 'Firebase', 'ERD / Normalization'] },
  { icon: 'Smartphone', title: 'Frontend & Mobile', note: '// interfaces & apps', items: ['React', 'Redux', 'Next.js', 'CoreUI Pro', 'SCSS', 'Tailwind', 'HTML5', 'CSS3', 'Flutter'] },
  { icon: 'Code2', title: 'Programming Languages', note: '// day to day', items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Java', 'C++', 'Dart'] },
  { icon: 'Wrench', title: 'Development Tools', note: '// build & maintain', items: ['Git', 'GitHub', 'Docker', 'GitLab CI/CD', 'Puppeteer', 'VS Code', 'Vite', 'XAMPP', 'Hostinger', 'Railway'] },
  { icon: 'BrainCircuit', title: 'Data & AI', note: '// analytics & applied ML', items: ['Power BI', 'SAS Viya', 'Classification', 'Model Eval', 'OpenAI GPT-4o'] },
]

export const marquee = [
  'Node.js', 'LoopBack 4', 'Express.js', 'PHP', 'MySQL', 'MariaDB', 'PostgreSQL', 'Supabase', 'Python', 'React',
  'Next.js', 'TypeScript', 'Flutter', 'Dart', 'Power BI', 'Prisma', 'Tailwind', 'Docker', 'GitLab CI/CD', 'Git', 'GitHub', 'JWT',
]

export const experience = [
  {
    title: 'Full-Stack Developer Intern',
    tag: 'internship',
    company: 'Secure LabX Sdn. Bhd.',
    when: '3 Aug 2026 – 15 Jan 2027',
    points: [
      'Work on different parts of the project, including database, API, and frontend development.',
      'Develop and maintain REST APIs using Node.js, TypeScript, LoopBack 4, and MySQL/MariaDB.',
      'Implement JWT authentication, role-based access control, and OpenAPI documentation.',
      'Create database migrations and test them using a copy of the production database.',
      'Build responsive, bilingual (BM/EN) user interfaces using React, TypeScript, Vite, Redux, and CoreUI Pro.',
      'Generate PDF reports using Puppeteer and work on email services, system integrations, and audit logging.',
      'Use Docker and GitLab CI/CD to prepare releases and manage staging environments.',
      'Investigate software issues by checking logs, API responses, and database records.',
    ],
  },
  {
    title: 'Final Year Project - Solo Developer',
    company: 'ARAMS · UTHM FSKTM',
    when: '2025 – 2026',
    points: [
      'Designed and built a PHP/MySQL MVC web app for faculty research monitoring, serving three user roles.',
      'Deployed on Hostinger (arams.site) with analytics dashboards, KPI tracking and PDF reporting.',
      'Implemented role-based access, security hardening and historical faculty-transfer attribution.',
    ],
  },
  {
    title: 'Machine Learning Project',
    company: 'BIT34303 · Group Project',
    when: '2026',
    points: [
      'Built and compared four classifiers to predict bank term-deposit subscription on an 11,162-record dataset.',
      'Random Forest performed best (74% accuracy, 0.80 ROC-AUC); identified and excluded data leakage by design.',
    ],
  },
  {
    title: 'Full-Stack Side Projects',
    company: 'Self-directed',
    when: '2024 — 2026',
    points: [
      'Built a React + Node inventory system with atomic stock transactions and JWT auth.',
      'Built an AI meal-monitoring tool, a study planner (live demo on Railway) and a Flutter password manager.',
    ],
  },
]

export const projects = [
  {
    id: 'arams',
    label: 'AR',
    cats: ['web', 'academic'],
    catLabel: 'Web · Academic',
    title: 'ARAMS',
    img: '/projects/arams/uthm-logo.png',
    imgFit: 'contain',
    imgBg: '#ffffff',
    short: 'A research performance monitoring system for university faculty, built as my final-year project.',
    desc: 'A faculty needs one place to track lecturer research output and report on research performance. For my final-year project I designed and built ARAMS, a PHP/MySQL MVC web application for this, with three user roles (Lecturer, TDPP, Admin). It is deployed on Hostinger.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'MVC', 'Hostinger'],
    features: [
      'Tracks publications, grants, h-index, IP and research income',
      'KPI task management with analytics dashboards',
      'PDF report generation for research output',
      'Role-based access with security hardening',
      'Historical faculty-transfer attribution',
    ],
    live: 'https://arams.site',
    repo: 'https://github.com/muazramzii/arams',
  },
  {
    id: 'inventory',
    label: 'SI',
    cats: ['web'],
    catLabel: 'Web Development',
    title: 'Smart Inventory System',
    img: '/projects/smart-inventory/login.png',
    short: 'Full-stack inventory platform with atomic stock transactions and reversal.',
    desc: 'An inventory system for schools and small businesses that I built from scratch across 11 modules. The main challenge was keeping stock correct when several users move stock at the same time, which I handled with atomic transactions and row-level locking.',
    tech: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'MySQL', 'JWT'],
    features: [
      'Role-based access for Admin and Staff',
      'Atomic stock transactions with SELECT FOR UPDATE',
      'Transaction reversal and low-stock alerts',
      'PDF reports generated in-memory (no disk writes)',
      'Fully responsive interface',
    ],
    live: 'https://smart-inventory-seven-indol.vercel.app',
    repo: 'https://github.com/muazramzii/smart-inventory',
  },
  {
    id: 'nutriscan',
    label: 'NS',
    cats: ['ai', 'web'],
    catLabel: 'AI / ML · Web',
    title: 'NutriScan Clinical',
    short: 'Hospital meal-monitoring tool with AI food recognition via GPT-4o vision.',
    desc: 'A meal-monitoring system for hospital wards with three roles (Nurse, Dietitian, Admin). Nurses photograph a meal tray, GPT-4o vision recognises the food and estimates portions, and dietitians follow intake over time through dashboards and low-intake alerts.',
    tech: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth', 'GPT-4o', 'Recharts'],
    features: [
      'AI food recognition from meal photos',
      'Three-role access: Nurse, Dietitian, Admin',
      'Nutrition analytics and low-intake alerts, charted with Recharts',
      'Clean glassmorphism login and dashboard UI',
      'Type-safe data layer with Prisma',
    ],
    live: '',
    repo: 'https://github.com/muazramzii/nutriscan-clinical',
  },
  {
    id: 'planner',
    label: 'SP',
    cats: ['web'],
    catLabel: 'Web Development',
    title: 'Smart Study Planner',
    img: '/projects/smart-study-planner/light-mode.png',
    short: 'A full-stack study board for students juggling several subjects at once — live on Railway.',
    desc: 'Students who study several subjects at once can easily lose track of what is due. I built this task manager with Node/Express and vanilla JavaScript: colour-coded subjects, deadlines and priorities, a progress sidebar with a 7-day chart, deadline reminders and recurring tasks. Data is stored in a JSON file, so the live demo is for trying the app, not for long-term data.',
    tech: ['Node.js', 'Express', 'HTML5', 'CSS3', 'JavaScript', 'Railway'],
    features: [
      'Colour-coded subjects with live search and one-click priority/status filters',
      'Progress sidebar with a 7-day completion chart and overdue highlighting',
      'Drag-and-drop task reordering and one-click completion',
      'Browser deadline reminders and auto-renewing recurring tasks',
      'Light / dark theme with saved preference and OS auto-detect',
    ],
    live: 'https://smart-study-planner-production-9021.up.railway.app/',
    repo: 'https://github.com/muazramzii/smart-study-planner',
  },
  {
    id: 'passmanager',
    label: 'PM',
    cats: ['mobile'],
    catLabel: 'Mobile Development',
    title: 'Password Manager App',
    img: '/projects/password-manager/logo.png',
    imgFit: 'contain',
    imgBg: '#1a56b8',
    short: 'A Flutter password manager with client-side AES-256 encryption.',
    desc: 'A mobile vault for website and app credentials. It started as a group diploma final-year project (Politeknik Ungku Omar, 2021) and was rebuilt in 2026 on Supabase, with passwords encrypted on the device so the backend only stores ciphertext. It is installed as an Android APK from GitHub Releases and is not on the Play Store.',
    tech: ['Flutter', 'Dart', 'Supabase', 'AES-256', 'PostgreSQL'],
    features: [
      'Register and log in, then keep credentials in an encrypted vault',
      'AES-256 encryption on the device, keyed from the login password with PBKDF2',
      'Supabase (Postgres + Auth) with Row Level Security',
      'Original diploma version used a PHP/MySQL backend that no longer runs',
    ],
    live: '',
    repo: 'https://github.com/muazramzii/password-manager',
  },
  {
    id: 'bankml',
    label: 'BM',
    cats: ['ai', 'academic'],
    catLabel: 'AI / ML · Academic',
    title: 'Bank Subscription ML',
    short: 'Predicting term-deposit subscription with four ML models.',
    desc: 'A group machine-learning project comparing four classifiers on an 11,162-record bank marketing dataset. The most important insight was spotting and removing data leakage from the call-duration feature.',
    tech: ['Machine Learning', 'Random Forest', 'Classification', 'Model Eval'],
    features: [
      'Compared Logistic Regression, Random Forest, Gradient Boosting and Neural Network',
      'Random Forest best: 74% accuracy, 0.80 ROC-AUC',
      'Identified and excluded data leakage by design',
      'Confusion-matrix evaluation and reporting',
    ],
    live: '',
    repo: '',
  },
  {
    id: 'tabara',
    label: 'TB',
    cats: ['mobile', 'ai'],
    catLabel: 'Mobile · AI',
    title: 'Tabara',
    img: '/projects/tabara/welcome.jpg',
    imgPosition: 'center 42%',
    short: 'AI-powered personal finance app for young Malaysians, fronted by a capybara called Kapy.',
    desc: 'A React Native (Expo) finance app that tracks income and spending against a 50/30/20 split, reads receipts with Gemini vision (including day-first Malaysian dates), and lets you chat with an assistant that can log a transaction from a message like "masukkan RM 50 ke tabung".',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Google Gemini'],
    features: [
      'Income, spending and per-category budgets against a 50/30/20 split',
      'Receipt scanning — Gemini extracts merchant, total, category and date',
      'Kapy chat assistant: understands Malay, English or rojak, can log transactions',
      'Mon–Sun logging streak with achievements and a flame animation',
    ],
    live: '',
    repo: 'https://github.com/muazramzii/tabara',
  },
  {
    id: 'hearspeak',
    label: 'HS',
    cats: ['mobile', 'ai'],
    catLabel: 'Mobile · AI',
    title: 'Hear & Speak Together',
    short: 'Bilingual speech-learning app that scores children\'s pronunciation with a self-hosted engine.',
    desc: 'A Flutter mobile app paired with a Django REST API where children hear a target word, record themselves saying it, and get age-appropriate feedback. Speech recognition (self-hosted Whisper) and pronunciation scoring (a deterministic phonetic-feature engine, no paid API) both run server-side.',
    tech: ['Flutter', 'Dart', 'Django', 'PostgreSQL', 'Whisper', 'JWT'],
    features: [
      'Bilingual (English / Bahasa Melayu) listen-and-speak practice for children',
      'Self-hosted Whisper speech recognition — no third-party speech API',
      'Deterministic phonetic-feature pronunciation scoring engine',
      'Four learning modes with analytics, achievements and a parent/teacher dashboard',
    ],
    live: '',
    repo: 'https://github.com/muazramzii/hear-and-speak-together',
  },
  {
    id: 'moverush',
    label: 'MR',
    cats: [],
    catLabel: 'Game Development',
    title: 'MoveRush',
    short: 'A three-lane endless runner built in Unity (in progress).',
    desc: 'A Unity 6 LTS endless runner built phase by phase: a foundation layer (state machine, boot flow, JSON save, config assets) followed by the runner core — three-lane movement, jump/slide, coin and obstacle pooling, an infinite world, scaling difficulty and Cinemachine camera work.',
    tech: ['Unity 6', 'C#', 'URP', 'Cinemachine', 'Input System'],
    features: [
      'Three-lane running with jump and slide controls',
      'Pooled coins and obstacles across an infinite, scaling-difficulty world',
      'Explicit application state machine and JSON save system',
      'Cinemachine-driven camera and TextMeshPro UI',
    ],
    live: '',
    repo: 'https://github.com/muazramzii/MoveRush',
  },
  {
    id: 'invitation',
    label: 'IC',
    cats: ['web'],
    catLabel: 'Web Development',
    img: '/projects/invitation-card/intro.png',
    imgPosition: 'center 43%',
    title: 'Digital Invitation Card',
    short: 'A single-page animated invitation card with an envelope intro, RSVP and a background music player.',
    desc: 'A single-file (HTML/CSS/JS, no framework) digital invitation site with a silver/ivory theme. Visitors "open" a wax-sealed envelope with a shimmer animation before the card reveals itself, then move through a cover, a personal message, a theme picker, a checklist, an itinerary, a photo gallery and an animated RSVP.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'CSS Animations', 'Netlify'],
    features: [
      'Wax-seal envelope intro with shimmer and sparkle animation',
      'Light/dark colour theme picker for guests',
      'Swipeable itinerary and checklist carousel, grid layout on desktop',
      'Background music player with play/pause control',
      'Animated Attending / Not Attending RSVP buttons',
    ],
    live: 'https://super-truffle-3905ae.netlify.app/',
    repo: 'https://github.com/muazramzii/invitation-card-birthday-',
  },
]

export const filters = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web Development' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'academic', label: 'Academic' },
]

export const certifications = [
  { icon: 'Award', title: "Dean's List Recognition", issuer: 'UTHM · FSKTM', desc: 'Awarded for academic performance during the undergraduate programme.' },
  { icon: 'CheckCircle2', title: 'ARAMS Deployed', issuer: 'Live · arams.site', desc: 'Solo-built a full research monitoring system and deployed it to a live server.' },
  { icon: 'BarChart3', title: 'CGPA 3.34', issuer: 'Bachelor of IT (Hons)', desc: 'Consistent academic standing across a full-stack and software engineering curriculum.' },
  { icon: 'Award', title: 'Diploma — First Class Honours', issuer: 'Politeknik Ungku Omar', desc: 'Completed the Diploma in Information Technology (Technology Digital) with First Class Honours.' },
]
