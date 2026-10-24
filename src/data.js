// ============================================================
//  All editable content lives here. Update freely.
// ============================================================

export const profile = {
  name: 'Muaz Ramzi',
  firstName: 'Muaz',
  lastName: 'Ramzi',
  role: 'Full-Stack Developer / Software Engineer / Frontend Developer / Backend Developer / Mobile Developer / AI Enthusiast / Machine Learning / Data Science',
  tagline:
    'From ideas to real-world applications.',
  status: 'available for internship 3 aug 2026 – 15 jan 2027',
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
  { value: 5, suffix: '+', label: 'Shipped projects' },
  { value: 3.34, decimals: 2, label: "CGPA " },
  { value: 2, suffix: '', label: 'Live in production' },
]

export const facts = [
  { big: 'UTHM', small: 'FSKTM · IT (Hons)' },
  { big: 'Batu Pahat', small: 'Johor, Malaysia' },
  { big: 'EN / BM', small: 'Fluent, both' },
  { big: 'Aug 2026', small: 'Internship ready' },
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
    year: 'Aug 2026 -Jan 2027',
    title: 'Internship',
    tag: 'seeking',
    detail: 'Open to software engineering, web developer, software tester roles and Data Analytics.',
  },
]

export const skills = [
  { icon: 'Code2', title: 'Frontend', note: '// interface & experience', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'HTML5', 'CSS3', 'JavaScript'] },
  { icon: 'Server', title: 'Backend', note: '// logic & APIs', items: ['Node.js', 'Express', 'PHP', 'REST APIs', 'JWT Auth', 'Prisma'] },
  { icon: 'Smartphone', title: 'Mobile', note: '// cross-platform', items: ['Flutter', 'Dart'] },
  { icon: 'Database', title: 'Database', note: '// data & design', items: ['MySQL', 'PostgreSQL', 'SQL', 'ERD / Normalization', 'Prisma ORM'] },
  { icon: 'Wrench', title: 'Tools & Platforms', note: '// ship & maintain', items: ['Git / GitHub', 'VS Code', 'Hostinger', 'Railway', 'Vite', 'XAMPP'] },
  { icon: 'BrainCircuit', title: 'AI / ML', note: '// applied', items: ['OpenAI GPT-4o', 'SAS Viya', 'Classification', 'Model Eval'] },
]

export const marquee = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'PHP', 'MySQL', 'PostgreSQL',
  'Prisma', 'Tailwind', 'Flutter', 'Dart', 'Framer Motion', 'Git', 'Vite', 'JWT', 'GPT-4o',
]

export const experience = [
  {
    title: 'Software Engineering Intern',
    tag: 'upcoming',
    company: 'Open - seeking a host company',
    when: 'Aug 2026 - Jan 2027',
    points: [
      'Available full-time for a 6-month internship window.',
      'Targeting software engineering, web development, and QA / software testing roles.',
    ],
  },
  {
    title: 'Final Year Project - Solo Developer',
    company: 'ARAMS · UTHM FSKTM',
    when: '2026',
    points: [
      'Designed and built a PHP/MySQL MVC web app for faculty research monitoring, serving three user roles.',
      'Deployed to production on Hostinger (arams.site) with analytics dashboards, KPI tracking and PDF reporting.',
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
      'Shipped an AI meal-monitoring tool, a study planner and a Flutter password manager.',
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
    short: 'A research performance monitoring system for university faculty — live in production.',
    desc: 'ARAMS is my final-year project: a PHP/MySQL MVC web application that lets a faculty track research output across three user roles (Lecturer, TDPP, Admin). It is deployed and running in production on Hostinger.',
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
    desc: 'A school / small-business inventory system built from scratch across 11 modules. The core challenge was safe concurrent stock movement — solved with atomic transactions using row-level locking.',
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
    desc: 'A clinical meal-monitoring system for three roles (Nurse, Dietitian, Admin) that uses GPT-4o vision to recognise food from photos and track patient nutrition over time.',
    tech: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth', 'GPT-4o', 'Recharts'],
    features: [
      'AI food recognition from meal photos',
      'Three-role access: Nurse, Dietitian, Admin',
      'Nutrition analytics with Recharts',
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
    desc: 'A Node/Express + vanilla JS study task manager for students tracking coursework across several subjects at once. Subjects are colour-coded, tasks carry deadlines and priority, and a sidebar makes overall progress and this week\'s completions visible at a glance instead of guessed at.',
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
    short: 'A cross-platform password manager built with Flutter.',
    desc: 'A mobile app for securely storing and managing credentials, built with Flutter and Dart to run on both Android and iOS from a single codebase.',
    tech: ['Flutter', 'Dart'],
    features: [
      'Securely store and organise credentials',
      'Cross-platform from one Flutter codebase',
      'Clean, simple mobile-first UI',
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
    short: 'A three-lane endless runner built in Unity with a clean, testable architecture.',
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
  { icon: 'CheckCircle2', title: 'ARAMS in Production', issuer: 'Live · arams.site', desc: 'Solo-built a full research monitoring system and deployed it to a live production server.' },
  { icon: 'BarChart3', title: 'CGPA 3.34', issuer: 'Bachelor of IT (Hons)', desc: 'Consistent academic standing across a full-stack and software engineering curriculum.' },
  { icon: 'FileText', title: 'Your Certification', issuer: 'Add issuer · year', desc: 'Replace this card with a real certificate, course or competition you have completed.' },
]
