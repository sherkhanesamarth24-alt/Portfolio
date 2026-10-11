import { Project, SkillCategory, EducationItem, CertificateItem } from '../types/portfolio';

// Project image imports
import mpladImage from '../assets/images/project_mplad_ai_1791647969001.jpg';
import objectDetectionImage from '../assets/images/project_object_detection_1791647987400.jpg';
import xauPredictorImage from '../assets/images/project_xau_gold_ai_1791648004564.jpg';
import handGestureImage from '../assets/images/project_hand_gesture_1791648021253.jpg';
import aiCallerImage from '../assets/images/project_ai_caller_1791648034964.jpg';

export const PERSONAL_INFO = {
  name: 'Samarth V. Sherkhane',
  shortName: 'Samarth Sherkhane',
  initials: 'SS',
  title: 'AI/ML Engineer',
  titles: [
    'AI/ML Engineer',
    'Machine Learning Enthusiast',
    'Computer Vision Developer',
    'Software Developer',
  ],
  email: 'sherkhanesamarth24@gmail.com',
  phone: '+91 8275594515',
  phoneFormatted: '+91 8275594515',
  location: 'Kolhapur, Maharashtra, India',
  github: 'https://github.com/sherkhanesamarth24-alt',
  linkedin: 'https://www.linkedin.com/in/samarth-sherkhane-45204237a/',
  headline: 'Building Intelligent Solutions for Real-World Problems.',
  availability: 'Open to Internship Opportunities',
  about: `I am an AI/ML Engineer currently pursuing a B.Tech in Artificial Intelligence and Machine Learning at DY Patil Technical University. My interests include machine learning, deep learning, computer vision, data science, and software development. I enjoy building hands-on projects, exploring emerging technologies, and continuously improving my technical skills. I am looking for opportunities to contribute to meaningful projects, collaborate with innovative teams, and gain practical industry experience.`,
  lookingFor: `I am interested in AI/ML internships, computer vision projects, software development opportunities, and collaborative technology projects where I can apply my knowledge and continue learning.`,
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    skills: [
      {
        name: 'Machine Learning',
        description: 'Supervised & unsupervised learning, regression, classification, feature engineering',
        level: 'Core Discipline',
      },
      {
        name: 'Deep Learning',
        description: 'Neural network architectures, training workflows, loss functions, optimization',
        level: 'Core Discipline',
      },
      {
        name: 'Artificial Intelligence',
        description: 'Intelligent decision models, heuristic algorithms, predictive analytics',
        level: 'Core Discipline',
      },
      {
        name: 'Computer Vision',
        description: 'Image processing, object detection, spatial tracking, video frame analysis',
        level: 'Specialization',
      },
    ],
  },
  {
    id: 'languages',
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        description: 'Primary language for AI/ML pipelines, computer vision models, and scripting',
        level: 'Primary Language',
      },
      {
        name: 'C++',
        description: 'Object-oriented programming, data structures, algorithm problem solving (IBM Certified)',
        level: 'Foundation',
      },
      {
        name: 'C',
        description: 'Foundational procedural programming, memory awareness, core logic development',
        level: 'Foundation',
      },
    ],
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    skills: [
      {
        name: 'HTML',
        description: 'Semantic markup structure for interactive web interfaces and model dashboards',
        level: 'Front-End',
      },
      {
        name: 'CSS',
        description: 'Styling, layout orchestration, responsive design, modern UI styling',
        level: 'Front-End',
      },
    ],
  },
  {
    id: 'tools',
    name: 'Developer Tools',
    skills: [
      {
        name: 'Git',
        description: 'Version control, atomic commits, branching workflows, collaborative codebase history',
        level: 'Workflow',
      },
      {
        name: 'GitHub',
        description: 'Remote repository management, issue tracking, open-source portfolio publishing',
        level: 'Workflow',
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'mplad-monitoring',
    title: 'AI-Powered MPLAD Scheme Monitoring System',
    category: 'AI / Data Analytics / SIH 2026',
    shortDescription:
      'An AI-powered system designed to identify potential anomalies, fraud indicators, and inefficiencies in MPLAD Scheme implementation.',
    fullDescription:
      'An intelligent analytical platform conceived for Smart India Hackathon (SIH 2026) that leverages data analytics and anomaly detection models to monitor public development expenditures under the Members of Parliament Local Area Development Scheme (MPLADS). The platform processes project progress milestones, contractor disbursement timelines, and geographic delivery reports to highlight potential irregularities and safeguard public fund utilization.',
    image: mpladImage,
    tags: ['Python', 'AI Analytics', 'Anomaly Detection', 'Data Insights'],
    features: [
      'Anomaly identification concept for abnormal disbursement delays',
      'Monitoring and analysis dashboard for administrative transparency',
      'Transparency-focused reporting and automated audit checklists',
      'Data-driven insights comparing physical milestone completion vs fiscal allocation',
    ],
    problemStatement:
      'Traditional administrative tracking of public development schemes often suffers from delayed reporting, manual oversight gaps, and difficulties in identifying localized anomalies across thousands of concurrent constituency works.',
    solution:
      'Introduced a centralized intelligent monitoring framework utilizing pattern deviation scoring, temporal expenditure analysis, and structured reporting dashboards to bring transparency to civic resource allocation.',
    githubUrl: 'https://github.com/sherkhanesamarth24-alt',
    interactiveType: 'mplad',
  },
  {
    id: 'real-time-object-detection',
    title: 'Real-Time Object Detection',
    category: 'Computer Vision / AI',
    shortDescription:
      'A web application that uses a camera to detect objects in real time using AI-based computer vision on laptop and mobile devices.',
    fullDescription:
      'A responsive computer vision application enabling live, low-latency object classification and localized bounding box rendering directly through camera input. Built to operate smoothly across desktop webcams and handheld mobile cameras with immediate spatial feedback.',
    image: objectDetectionImage,
    tags: ['Computer Vision', 'Deep Learning', 'Python', 'Live Camera', 'HTML/CSS'],
    features: [
      'Live camera interaction with webcam & mobile camera support',
      'Real-time object detection stream processing',
      'Bounding box coordinates overlay with classification labels and confidence scoring',
      'Responsive interface optimized for desktop workstations and mobile handheld screens',
    ],
    problemStatement:
      'Deploying accessible vision models for everyday hardware often introduces high processing overhead and clunky interfaces for real-time video frames.',
    solution:
      'Designed an efficient vision pipeline architecture capable of streaming camera frames, evaluating detection bounding boxes in real time, and presenting a clean technical HUD.',
    githubUrl: 'https://github.com/sherkhanesamarth24-alt',
    interactiveType: 'detection',
  },
  {
    id: 'xau-ai-predictor',
    title: 'XAU AI Predictor',
    category: 'AI / Financial Data Analysis',
    shortDescription:
      'An AI-based web application concept for analyzing XAU/USD market data and presenting predictive insights through a user-friendly interface.',
    fullDescription:
      'A financial intelligence and analytics interface designed to explore machine learning methods applied to historical XAU/USD (Gold) price action. Formulates technical indicator correlations, trend momentum models, and scenario analysis while maintaining explicit analytical disclaimers.',
    image: xauPredictorImage,
    tags: ['Machine Learning', 'Data Analysis', 'FinTech UI', 'Python', 'Charts'],
    features: [
      'Market data visualization with interactive historical intervals',
      'AI-based exploratory trend analysis and moving average correlation',
      'Interactive candlestick and momentum charts',
      'Clearly labeled analytical insights with risk disclosure warnings',
    ],
    problemStatement:
      'Retail financial participants often struggle to synthesize complex macro signals and technical moving averages without structured statistical summaries.',
    solution:
      'Formulated a clean predictive visualization dashboard illustrating statistical momentum ranges and trend volatility distributions for educational and analytical inquiry.',
    githubUrl: 'https://github.com/sherkhanesamarth24-alt',
    interactiveType: 'market',
  },
  {
    id: 'hand-gesture-control',
    title: 'Python Hand Gesture Control',
    category: 'Python / Computer Vision',
    shortDescription:
      'A Python-based project that uses hand gestures to interact with and control computer functions.',
    fullDescription:
      'A touchless human-computer interface utilizing computer vision landmark tracking to map distinct hand gestures to system actions, such as volume adjustment, media navigation, and pointer manipulation.',
    image: handGestureImage,
    tags: ['Python', 'Computer Vision', 'Gesture Tracking', 'HCI'],
    features: [
      '21-point hand landmark coordinate tracking',
      'Gesture classification algorithm (pinch, open palm, index vector)',
      'Touchless system action execution (volume, media playback)',
      'Low latency visual frame processing pipeline',
    ],
    problemStatement:
      'Traditional physical peripheral inputs can be limiting or unfeasible in sterile, hands-busy, or accessibility-constrained environments.',
    solution:
      'Engineered a lightweight vision pipeline in Python tracking finger vectors in real-time to translate intuitive natural gestures into native operating commands.',
    githubUrl: 'https://github.com/sherkhanesamarth24-alt',
    interactiveType: 'gesture',
  },
  {
    id: 'ai-calling-agent',
    title: 'AI Calling Agent',
    category: 'AI / Software Development',
    shortDescription:
      'An AI calling agent application designed to explore automated voice interactions and conversational AI.',
    fullDescription:
      'An experimental conversational voice system exploring automated interactive voice response (IVR) flows, intent recognition, speech-to-text pipeline routing, and dynamic response generation for call handling.',
    image: aiCallerImage,
    tags: ['Conversational AI', 'Voice Agents', 'Python', 'Intent Recognition'],
    features: [
      'Interactive conversational voice flow modeling',
      'Intent parsing and contextual routing architecture',
      'Waveform speech state feedback visualization',
      'Structured dialogue trees for automated query resolution',
    ],
    problemStatement:
      'Standard automated voice calling systems are rigid and frustrate callers with monotone, multi-nested touch-tone menus.',
    solution:
      'Prototyped a conversational agent workflow that evaluates natural dialogue queries and formulates relevant context-aware spoken replies.',
    githubUrl: 'https://github.com/sherkhanesamarth24-alt',
    interactiveType: 'voice',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'btech',
    degree: 'B.Tech in Artificial Intelligence & Machine Learning',
    institution: 'DY Patil Technical University',
    period: '2024 – Present',
    location: 'Kolhapur, Maharashtra, India',
    description:
      'Specializing in core machine learning paradigms, deep neural networks, computer vision, data structures, and mathematical foundations of artificial intelligence.',
    highlights: [
      'Active participant in premier national engineering hackathons (IIT Madras, IIT BHU, IIIT Nagpur)',
      'Rigorous foundation in algorithm design, linear algebra, calculus, and probability',
      'Hands-on research and prototyping in computer vision and predictive models',
    ],
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'New Institute of Kolhapur',
    period: 'Completed 2023',
    location: 'Kolhapur, Maharashtra, India',
    description:
      'Science stream education with strong focus on Physics, Chemistry, and Mathematics.',
    highlights: [
      'Advanced mathematics and analytical problem-solving foundation',
      'Scientific method and lab experimentation',
    ],
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Irwin Christian High School',
    period: 'Completed 2020',
    location: 'Kolhapur, Maharashtra, India',
    description:
      'Secondary school curriculum emphasizing science, mathematics, logic, and computer fundamentals.',
    highlights: [
      'Excellence in science and numerical coursework',
      'Early exposure to logic and computer systems',
    ],
  },
];

export const CERTIFICATIONS: CertificateItem[] = [
  {
    id: 'ibm-c-plus-plus',
    title: 'Software Foundation Course C++',
    issuer: 'IBM Developer Skills Network / Etrain Education',
    year: '2025',
    type: 'course',
    description:
      'Comprehensive software foundation in C++ programming, object-oriented concepts, memory management, and data structures. Course CESWF4BIN provided by IBMCE.',
    credentialUrl:
      'https://courses.etrain.skillsnetwork.site/certificates/3bf612274b044958965ca6bd1a954d7f',
    verificationNote: 'Credential verified via IBM Developer Skills Network (ID: 3bf612274b044958965ca6bd1a954d7f)',
  },
  {
    id: 'iit-madras-reverse-coding',
    title: 'Reverse Coding X – Shaastra 2026',
    issuer: 'Indian Institute of Technology (IIT), Madras',
    year: '2026',
    type: 'competition',
    description:
      'Official certificate of participation in the Reverse Coding X algorithmic contest organized during Shaastra 2026 at IIT Madras.',
  },
  {
    id: 'iit-bhu-serve-smart',
    title: 'Serve-Smart Hackathon (Round 2 Submission)',
    issuer: 'Indian Institute of Technology (IIT - BHU), Varanasi',
    year: '2026',
    type: 'hackathon',
    description:
      'Participated in Round 2: Online Submission Round of the Serve-Smart Hackathon during Jagriti 2026 at IIT BHU.',
  },
  {
    id: 'iiit-nagpur-quantum',
    title: 'Quantum Computing Hackathon – TantraFiesta 2025',
    issuer: 'Indian Institute of Information Technology (IIIT), Nagpur',
    year: '2025',
    type: 'hackathon',
    description:
      'Participated in the Quantum Computing Hackathon representing Team sherkhanesamarth24 at TantraFiesta 2025.',
  },
  {
    id: 'iit-madras-ctf',
    title: 'Capture the Flag (CTF) – Shaastra 2026',
    issuer: 'Indian Institute of Technology (IIT), Madras',
    year: '2026',
    type: 'competition',
    description:
      'Participated in the cybersecurity and problem-solving CTF challenge of Shaastra 2026.',
  },
  {
    id: 'iim-nagpur-ai-agent',
    title: 'AI Agent Hackathon',
    issuer: 'Indian Institute of Management (IIM), Nagpur',
    year: '2025',
    type: 'hackathon',
    description:
      'Participated in the national AI Agent Hackathon exploring autonomous workflows and conversational architectures.',
  },
  {
    id: 'campus-ambassador-iit-bombay',
    title: 'Campus Ambassador – Techfest',
    issuer: 'Indian Institute of Technology (IIT), Bombay',
    year: '2025',
    type: 'leadership',
    description:
      'Represented Asia’s largest science and technology festival across collegiate networks.',
  },
  {
    id: 'campus-ambassador-iit-guwahati',
    title: 'Campus Ambassador',
    issuer: 'Indian Institute of Technology (IIT), Guwahati',
    year: '2025',
    type: 'leadership',
    description:
      'Selected student ambassador driving tech engagement and collegiate technical outreach.',
  },
  {
    id: 'eduveda-ambassador',
    title: 'Campus Ambassador Internship',
    issuer: 'Eduveda Academy',
    year: '2025',
    type: 'leadership',
    description:
      'Campus Ambassador appointment for collegiate engagement and technological learning programs.',
  },
  {
    id: 'tata-crucible',
    title: 'TATA Crucible Campus Quiz 2025',
    issuer: 'The Tata Group',
    year: '2025',
    type: 'competition',
    description:
      'Participated in the renowned national business and technology quiz organized by Tata Group.',
  },
  {
    id: 'vu-navratri-codethon',
    title: 'Navratri Codethon 2025 – Data Structures',
    issuer: 'Vishwakarma University (VU), Pune',
    year: '2025',
    type: 'competition',
    description:
      'Participated in the Day 2 Data Structures track (Brahmacharini: Perseverance & Devotion).',
  },
  {
    id: 'owasp-hackers-gambit',
    title: "Hacker's Gambit – OWASP National Level CTF",
    issuer: 'Jaihind College of Engineering / OWASP',
    year: '2025',
    type: 'competition',
    description:
      'Participated in the national-level cybersecurity and exploit evaluation CTF challenge.',
  },
  {
    id: 'python-cert',
    title: 'Certificate Course in Python',
    issuer: 'Certified Technical Training',
    year: '2024',
    type: 'course',
    description:
      'Comprehensive coursework covering Python syntax, data structures, object-oriented concepts, and computational scripting.',
  },
  {
    id: 'prathamesh-electronic',
    title: 'Prathamesh Electronic Internship Certification',
    issuer: 'Prathamesh Electronic',
    year: '2024',
    type: 'course',
    description:
      'Internship training certification in electronics fundamentals and systems integration.',
  },
  {
    id: 'mit-meerut-navachar',
    title: 'Navachar-Code Fest 2025 Certification',
    issuer: 'E-Cell MIT Meerut',
    year: '2025',
    type: 'competition',
    description:
      'Participation certification in the collegiate Navachar-Code Fest 2025 coding competition.',
  },
];
