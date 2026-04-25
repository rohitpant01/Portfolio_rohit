export const portfolioData = {
  hero: {
    eyebrow: "BA · MA · MCA — Humanities to Code, Deliberately",
    headlinePart1: "I understand",
    headlineEm: "people",
    headlinePart2: ". Then I build for them.",
    description: "Rohit Pant — developer, problem-finder, career-switcher. I studied literature before I studied algorithms, and that sequence was no accident. It's why my software starts with a human problem instead of a tech stack.",
    stats: [
      { num: "4+", label: "Real products built" },
      { num: "85%", label: "ML model accuracy" },
      { num: "2", label: "Years deep in tech" }
    ]
  },
  about: {
    title: "A deliberate evolution",
    paragraphs: [
      "I didn't stumble into software. I walked toward it — slowly, on purpose, from an unlikely direction. I started with a BA in humanities and an MA in English, not because I didn't know what I wanted, but because I needed to understand something first: how people think, communicate, and frame their problems.",
      "Literature trained me to read between the lines. To ask \"what's the real problem here?\" before jumping to answers. To think about the person on the other end of whatever I'm building. Those skills don't disappear when you switch to Python — they become your edge.",
      "In 2024, I made a deliberate choice: pursue an MCA and build real things. Not tutorials. Not clones. Systems for Alzheimer's patients, tools for secure elections, AI that helps solo travellers find people they can trust. Everything I've built comes from the same place — genuine curiosity about a real problem, and the technical discipline to solve it.",
      "I'm not the candidate who knew they'd be a developer at age 12. I'm the one who took a longer road, collected better questions along the way, and is now building answers."
    ],
    tags: ["AI/ML", "Mobile Dev", "System Design", "Human-centred thinking", "Real-world impact"],
    education: [
      { degree: "MCA — Master of Computer Applications", school: "Graphic Era Hill University, Dehradun", year: "2024 – Present" },
      { degree: "MA — English Literature", school: "S.S.J. University, Almora", year: "2024 · 62.31%" },
      { degree: "BA — Bachelor of Arts", school: "IGNOU", year: "2022 · 63.34%" },
      { degree: "Class 12 — PCM", school: "Uttarakhand Board", year: "2018 · 76.6%" }
    ]
  },
  skills: {
    core: ["Python", "Java", "C/C++", "JavaScript"],
    frontendMobile: ["React Native", "HTML5", "CSS3", "REST APIs"],
    backendData: ["MySQL", "SQL", "Oracle"],
    aiSecurity: ["TensorFlow", "Scikit-learn", "OpenCV", "NLP", "Face Recog."],
    security: ["AES-256", "Auth systems", "Encryption"],
    toolsConcepts: ["Git/GitHub", "VS Code", "DSA", "OOP", "SDLC", "DBMS"]
  },
  projects: [
    {
      id: "01",
      title: "EkalGo",
      isFlagship: true,
      phase: "2026 — Execution & Scaling Phase",
      problem: "Solo travel in India is stressful — itineraries pieced together across five apps, strangers you can't verify, no safety net. EkalGo is the product I built after spending a year mastering the components separately: the ML models from Neuro AI, the security thinking from the Voting System, the mobile architecture from React Native. This project is where all of it came together.",
      result: "Reduces trip planning time by 40% with AI-generated day-wise plans, cost estimation, real-time matching, and verified identity",
      proved: "EkalGo wasn't built to learn a concept. It was built because I finally had the foundation to build something real — and I wanted to prove it.",
      features: ["AI-generated itineraries with cost estimation", "Interest + budget-based partner matching", "Real-time chat", "Face verification", "Verified profiles", "Location mapping"],
      techStack: ["React Native", "AI/ML", "Real-time Chat", "Face Verification", "REST APIs"],
      github: "https://github.com/rohitpant01",
      demo: "https://ekalgo.com/"
    },
    {
      id: "02",
      title: "Neuro AI",
      phase: "2025 — Learning & Building Phase",
      problem: "Alzheimer's patients lose independence fast. Caregivers can't be everywhere. This was my first deep dive into production-grade ML — learning the full pipeline by solving a problem that genuinely needed solving: building an AI companion that recognizes faces, guides daily routines, and alerts caregivers before things go wrong.",
      result: "End-to-end ML pipeline from data preprocessing to deployment-ready inference — my first complete AI system",
      proved: "I could design and ship a real ML system — not just run a Jupyter notebook.",
      features: ["Real-time face recognition", "Voice guidance", "Emotion recognition", "Medication alerts", "Emergency contacts"],
      techStack: ["Python", "TensorFlow", "NLP", "Face Recognition"],
      github: "https://github.com/rohitpant01/alzheimer-helper",
      demo: "#"
    },
    {
      id: "03",
      title: "Parkinson's Detection System",
      phase: "2025 — Learning & Building Phase",
      problem: "Parkinson's diagnosis is expensive and inaccessible in rural areas. Building on what I learned with Neuro AI, I went deeper into model evaluation and image processing — detecting the disease from simple spiral/wave drawings. The constraint was intentional: no heavy hardware, no specialist required.",
      result: "85%+ accuracy using SVM and Random Forest — engineered to run in low-resource clinical environments",
      proved: "I could evaluate ML models with real clinical constraints in mind — not just maximize accuracy.",
      features: ["OpenCV preprocessing", "Feature extraction pipeline", "Lightweight + interpretable model", "No heavy dependencies"],
      techStack: ["Python", "OpenCV", "Scikit-learn", "Image Processing"],
      github: "https://github.com/rohitpant01/parkinsons-detection",
      demo: "#"
    },
    {
      id: "04",
      title: "Distance Voting System",
      phase: "2025 — Learning & Building Phase",
      problem: "Remote voting is either insecure or inaccessible — rarely both things at once. This project was about learning security architecture from first principles: how do you guarantee anonymity, prevent tampering, and still ship something a real voter can use? I built the encryption and auth layers from scratch rather than plugging in a library.",
      result: "Handled 50+ concurrent simulated submissions without data loss or integrity failures across Android and iOS",
      proved: "I understand security at an architectural level — and that understanding later shaped EkalGo's trust and verification systems.",
      features: ["AES-256 encryption", "Multi-layer auth", "Voter anonymity by design", "Android + iOS"],
      techStack: ["React Native", "AES-256", "Mobile Dev"],
      github: "https://github.com/rohitpant01/Distance_Voting_system",
      demo: "#"
    }
  ],
  journey: [
    { year: "2026 — Now", title: "EkalGo — First real product", desc: "Applied everything built over two years into a single, cohesive full-stack AI product. Proof that the foundation was solid." },
    { year: "2025", title: "First serious technical builds", desc: "Built Neuro AI, Parkinson's Detection, and the Voting System in parallel with MCA coursework — learning by building, not just studying." },
    { year: "2024 — Present", title: "MCA at Graphic Era Hill University", desc: "Made the switch deliberate. Software architecture, ML systems, algorithms, security — focused technical depth for the first time." },
    { year: "2022 – 2024", title: "MA in English + discovery of tech", desc: "While studying literature and language, I started noticing how the same analytical skills applied to systems, logic, and code. Started learning Python seriously." },
    { year: "2022", title: "BA from IGNOU — Foundation phase", desc: "Humanities training in structured thinking, argumentation, and user empathy. The skills that now make my software more human-centred than most." },
    { year: "2018", title: "Class 12 — PCM, 76.6%", desc: "Science background that quietly set the stage for logical thinking — long before I picked up a programming language.", isMuted: true }
  ],
  recruiterInsights: [
    { label: "Consistency", title: "Every step built on the last", desc: "No random jumps. BA → analytical thinking. MA → communication + empathy. MCA → technical execution. Projects → proof." },
    { label: "Rare combination", title: "Humanities depth + technical breadth", desc: "Most developers can code. Fewer can clearly define the problem worth solving first — and write code that actually serves the user." },
    { label: "Currently", title: "Scaling EkalGo + Launching Soon", desc: "Deeper into backend architecture, API design, and system scalability. We will soon be launching the EkalGo app on the Play Store!" }
  ],
  contact: {
    title: "I didn't start in tech — but I stayed to build.",
    description: "I come from a non-traditional background, but that’s exactly what shapes how I think. I don’t just write code — I try to understand the problem first. Right now, I’m looking for opportunities where I can grow, contribute, and build things that actually matter.",
    email: "rohitpant2815@gmail.com",
    linkedin: "https://www.linkedin.com/in/rohit-pant-51a095280/",
    github: "https://github.com/rohitpant01",
    phone: "+918474972007",
    closingLine: "Still learning. Still building. Every day."
  }
};
