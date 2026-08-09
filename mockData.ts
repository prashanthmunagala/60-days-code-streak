import type { Track, DayTask, StudentProfile, Badge, StudentStanding } from '../types';

export const TRACKS: Track[] = [
  {
    id: 'fullstack',
    name: 'Full-Stack Web (MERN + Next.js)',
    shortDescription: 'Build modern web apps, APIs, real-time engines, & cloud deployments.',
    fullDescription: 'Master modern frontend and backend web development. From HTML/CSS fundamentals to building scalable microservices, Next.js App Router, PostgreSQL/MongoDB, and Docker deployment.',
    iconName: 'Code2',
    techStack: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    gradient: 'from-orange-500 to-amber-500',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    popularTarget: '87% hired as Full-Stack Developers'
  },
  {
    id: 'ai_data',
    name: 'AI & Data Engineering',
    shortDescription: 'Build LLM agents, RAG pipelines, Vector DBs, & ML models.',
    fullDescription: 'From Python basics to building production RAG systems with LangChain, Pinecone, FastAPI, and fine-tuning open-source LLMs like Llama 3 for real-world enterprise applications.',
    iconName: 'Sparkles',
    techStack: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'PyTorch'],
    gradient: 'from-purple-500 to-indigo-500',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    popularTarget: 'Highest demand in 2026 tech campus drives'
  },
  {
    id: 'mobile',
    name: 'Cross-Platform Mobile (Flutter / React Native)',
    shortDescription: 'Create high-performance iOS & Android apps with offline storage.',
    fullDescription: 'Master declarative UI, reactive state management, background sync, Firebase/Supabase backends, and app store deployment workflows.',
    iconName: 'Smartphone',
    techStack: ['Flutter', 'Dart', 'React Native', 'Firebase', 'SQLite'],
    gradient: 'from-blue-500 to-cyan-500',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    popularTarget: 'Popular among student startup founders'
  },
  {
    id: 'systems',
    name: 'Systems & Cloud DevOps',
    shortDescription: 'Architect cloud infrastructure, Go microservices, & Kubernetes.',
    fullDescription: 'Learn low-level systems in Go and Rust, CI/CD automated pipelines, Linux kernel basics, Docker orchestration, and Terraform AWS cloud provisioning.',
    iconName: 'Server',
    techStack: ['Go', 'Docker', 'Kubernetes', 'AWS', 'Terraform'],
    gradient: 'from-emerald-500 to-teal-500',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    popularTarget: 'Top choice for high-salary backend roles'
  }
];

export const MOCK_STANDING_ACTIVE: StudentStanding = {
  campusRank: 14,
  totalStudentsInCampus: 340,
  campusName: 'VIT Vellore',
  globalRank: 182,
  totalGlobalStudents: 4820,
  recruiterScore: 92
};

export const MOCK_BADGES: Badge[] = [
  {
    id: 'badge_1',
    title: 'Night Owl Coder',
    description: 'Submitted proof of work between 11 PM and 3 AM 5 days in a row.',
    icon: 'Moon',
    category: 'special',
    unlockedAt: 'Day 5'
  },
  {
    id: 'badge_2',
    title: '7-Day Streak Warrior',
    description: 'Completed 7 full days without breaking streak.',
    icon: 'Flame',
    category: 'streak',
    unlockedAt: 'Day 7'
  },
  {
    id: 'badge_3',
    title: 'LinkedIn Catalyst',
    description: 'Generated 1,000+ impressions on daily build proof posts.',
    icon: 'Share2',
    category: 'social',
    unlockedAt: 'Day 10'
  },
  {
    id: 'badge_4',
    title: 'Backend Maestro',
    description: 'Mastered API routing and middleware challenges.',
    icon: 'Terminal',
    category: 'submission',
    unlockedAt: 'Day 12'
  },
  {
    id: 'badge_5',
    title: '60-Day Titan',
    description: 'Graduate title awarded upon completing all 60 days.',
    icon: 'Award',
    category: 'special'
  }
];

// Profile states for edge cases
export const PROFILE_ACTIVE_DAY_12: StudentProfile = {
  id: 'std_101',
  name: 'Aarav Sharma',
  collegeName: 'VIT Vellore',
  degreeYear: '3rd Year B.Tech CSE',
  selectedTrack: 'fullstack',
  avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
  githubUsername: 'aaravdev99',
  linkedinUsername: 'aarav-sharma-tech',
  currentStreak: 12,
  longestStreak: 12,
  completedDaysCount: 11,
  streakFreezeAvailable: 1,
  hasMissedYesterday: false,
  standing: MOCK_STANDING_ACTIVE,
  badges: MOCK_BADGES.slice(0, 4)
};

export const PROFILE_FRESH_DAY_1: StudentProfile = {
  id: 'std_102',
  name: 'Priya Patel',
  collegeName: 'IIT Bombay',
  degreeYear: '2nd Year B.Tech CSE',
  selectedTrack: 'fullstack',
  avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  githubUsername: 'priyacodes',
  linkedinUsername: 'priya-patel-dev',
  currentStreak: 0,
  longestStreak: 0,
  completedDaysCount: 0,
  streakFreezeAvailable: 1,
  hasMissedYesterday: false,
  standing: {
    campusRank: 240,
    totalStudentsInCampus: 340,
    campusName: 'IIT Bombay',
    globalRank: 3420,
    totalGlobalStudents: 4820,
    recruiterScore: 10
  },
  badges: []
};

export const PROFILE_MISSED_DAY: StudentProfile = {
  id: 'std_103',
  name: 'Rohan Gupta',
  collegeName: 'BITS Pilani',
  degreeYear: '4th Year ECE',
  selectedTrack: 'fullstack',
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  githubUsername: 'rohangupta_dev',
  linkedinUsername: 'rohan-gupta-bits',
  currentStreak: 0,
  longestStreak: 11,
  completedDaysCount: 11,
  streakFreezeAvailable: 1,
  hasMissedYesterday: true,
  standing: {
    ...MOCK_STANDING_ACTIVE,
    campusName: 'BITS Pilani'
  },
  badges: MOCK_BADGES.slice(0, 3)
};

// Detailed Day 12 Task (Target route /day/12)
export const DAY_12_TASK: DayTask = {
  dayNumber: 12,
  title: 'Build a Rate-Limited API Gateway in Node.js',
  trackId: 'fullstack',
  phase: 1,
  phaseTitle: 'Phase 1: Backend Architecture & Resilience',
  estimatedMinutes: 45,
  difficulty: 'Intermediate',
  summary: 'Protect backend endpoints against brute-force spam attacks using Redis / In-Memory Sliding Window Rate Limiting middleware.',
  detailedPrompt: `Tonight you will build an essential production feature: **API Rate Limiting**. High-frequency traffic can bring down servers and drain cloud budgets. 

Your goal is to build an Express middleware using a **Sliding Window Counter algorithm** that caps incoming requests to **10 requests per minute per IP address**. 

When a user exceeds their quota, return a standard HTTP status **429 (Too Many Requests)** along with a custom retry header (\`Retry-After: 60\`).`,
  learningObjectives: [
    'Understand HTTP headers for rate limiting (`X-RateLimit-Limit`, `X-RateLimit-Remaining`)',
    'Implement memory store tracking per client IP address',
    'Handle HTTP 429 Too Many Requests status codes gracefully',
    'Write clean, modular Express middleware'
  ],
  steps: [
    {
      id: 's1',
      title: 'Initialize Express App & Setup Express Middleware structure',
      description: 'Create a clean `server.js` file with route `/api/v1/data`.'
    },
    {
      id: 's2',
      title: 'Implement In-Memory Request Counter per IP',
      description: 'Track timestamp array for each client IP address and prune timestamps older than 60 seconds.'
    },
    {
      id: 's3',
      title: 'Return Standard Rate Limit Headers',
      description: 'Inject `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset` into the response headers.'
    },
    {
      id: 's4',
      title: 'Test Brute Force Request Simulation',
      description: 'Use a script or Postman/curl loop to fire 12 consecutive requests and verify that requests 11 and 12 trigger HTTP 429.'
    }
  ],
  starterCodeSnippet: `// rateLimiter.js - Day 12 ABTalks Challenge
import express from 'express';

const app = express();
const windowMs = 60 * 1000; // 1 minute window
const maxRequests = 10;
const ipRequestStore = new Map();

function rateLimiterMiddleware(req, res, next) {
  const clientIp = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';
  const now = Date.now();

  if (!ipRequestStore.has(clientIp)) {
    ipRequestStore.set(clientIp, []);
  }

  const timestamps = ipRequestStore.get(clientIp);
  // Remove timestamps outside current window
  const validTimestamps = timestamps.filter(ts => now - ts < windowMs);

  if (validTimestamps.length >= maxRequests) {
    res.setHeader('Retry-After', '60');
    return res.status(429).json({
      error: 'Too Many Requests',
      message: \`Quota exceeded. Max \${maxRequests} requests per minute.\`,
      retryInSeconds: 60
    });
  }

  validTimestamps.push(now);
  ipRequestStore.set(clientIp, validTimestamps);

  res.setHeader('X-RateLimit-Limit', maxRequests);
  res.setHeader('X-RateLimit-Remaining', maxRequests - validTimestamps.length);
  next();
}

app.use(rateLimiterMiddleware);

app.get('/api/v1/data', (req, res) => {
  res.json({ status: 'success', message: 'Access granted to secure API payload.' });
});

app.listen(3000, () => console.log('🚀 Day 12 Rate Limiter running on port 3000'));`,
  codeLanguage: 'javascript',
  helpfulResources: [
    { title: 'MDN Web Docs: HTTP 429 Status Code', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429', category: 'Documentation' },
    { title: 'Understanding Sliding Window Rate Limiting Algorithms', url: 'https://cloud.google.com/architecture/rate-limiting-strategies-multi-region-architectures', category: 'Guide' }
  ],
  linkedinPostPromptHint: 'Share what you learned about HTTP 429 status codes, rate limiting algorithm, and how you protected an API against brute force traffic!'
};

export const GENERATED_DAYS: DayTask[] = Array.from({ length: 60 }, (_, index) => {
  const day = index + 1;
  if (day === 12) return DAY_12_TASK;

  let title = `Day ${day} Challenge`;
  let phase = 1;
  let phaseTitle = 'Phase 1: Core Fundamentals';

  if (day <= 20) {
    phase = 1;
    phaseTitle = 'Phase 1: Core Architecture & Fundamentals';
    const topics = [
      'Git Workflow & Clean Commit Strategy',
      'HTML5 Semantic Layout & Accessibility Audit',
      'Modern CSS Grid & Responsive Layouts',
      'JavaScript ES6 Async/Await & Event Loop',
      'TypeScript Strict Interfaces & Utility Types',
      'Node.js HTTP Server & Buffer Operations',
      'Express REST Routing & Controller Layer',
      'Middleware Pattern & Centralized Error Handler',
      'Data Validation with Zod Schema',
      'Environment Variables & Security Config',
      'JWT Authentication & Refresh Token Strategy',
      'Rate-Limited API Gateway in Node.js',
      'PostgreSQL Schema Design & Migration',
      'Prisma ORM Relations & Transaction Safety',
      'Database Indexing & Query Cost Tuning',
      'Redis Caching Layer & Cache Invalidation',
      'WebSocket Server for Real-Time Messages',
      'File Upload Pipeline with AWS S3 Presigned URLs',
      'Background Job Queue with BullMQ & Redis',
      'Docker Containerization & Multi-Stage Builds'
    ];
    title = topics[day - 1] || `Backend Core Challenge ${day}`;
  } else if (day <= 40) {
    phase = 2;
    phaseTitle = 'Phase 2: Micro-Services & Scalability';
    title = `Day ${day}: Advanced Microservice Component ${day - 20}`;
  } else {
    phase = 3;
    phaseTitle = 'Phase 3: Production Capstone Project';
    title = `Day ${day}: Capstone Deployment & Performance Tuning ${day - 40}`;
  }

  return {
    dayNumber: day,
    title: title,
    trackId: 'fullstack',
    phase,
    phaseTitle,
    estimatedMinutes: 45,
    difficulty: day > 40 ? 'Advanced' : day > 20 ? 'Intermediate' : 'Beginner',
    summary: `Build and deploy practical proof-of-work code for Day ${day}.`,
    detailedPrompt: `Complete Day ${day} project task requirements and submit proof of work.`,
    learningObjectives: ['Master practical code implementation', 'Commit changes to GitHub', 'Post publicly on LinkedIn'],
    steps: [
      { id: 's1', title: 'Code core functionality', description: 'Follow requirements and test locally.' },
      { id: 's2', title: 'Push git commit', description: 'Push to public GitHub repository.' },
      { id: 's3', title: 'Post on LinkedIn', description: 'Document your key takeaway with #ABTalks60Days.' }
    ],
    starterCodeSnippet: `// Day ${day} Challenge Starter\nconsole.log("ABTalks Day ${day} Challenge");`,
    codeLanguage: 'typescript',
    helpfulResources: [{ title: 'Official Documentation', url: '#', category: 'Docs' }],
    linkedinPostPromptHint: `Documented Day ${day} of #ABTalks60Days challenge!`
  };
});

export const CAMPUS_LEADERBOARD = [
  { campusName: 'IIT Bombay', activeStudents: 412, avgStreak: 18.4, rank: 1, logo: '🎓' },
  { campusName: 'VIT Vellore', activeStudents: 340, avgStreak: 16.2, rank: 2, logo: '🏛️' },
  { campusName: 'BITS Pilani', activeStudents: 289, avgStreak: 15.8, rank: 3, logo: '⚡' },
  { campusName: 'DTU Delhi', activeStudents: 245, avgStreak: 14.1, rank: 4, logo: '🚀' },
  { campusName: 'SRM Chennai', activeStudents: 210, avgStreak: 13.9, rank: 5, logo: '💻' }
];

export const TESTIMONIALS = [
  {
    name: 'Siddharth Rao',
    college: 'BMSCE Bengaluru',
    role: 'SDE-1 @ Swiggy',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    quote: 'Before ABTalks, I had 0 commits on GitHub. In 60 days, I built 12 real projects and posted every single day. A Swiggy recruiter DMed me on LinkedIn because of my Day 34 Redis post!'
  },
  {
    name: 'Ananya Sharma',
    college: 'IGDTUW Delhi',
    role: 'Frontend Dev @ Razorpay',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'The late-night vibe kept me accountable. Coding at 1 AM with 4,000 other Indian students on the leaderboard changed my mindset completely.'
  },
  {
    name: 'Kabir Verma',
    college: 'NIT Trichy',
    role: 'Backend Intern @ Cred',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    quote: 'The daily streak proof forced me to write clean commits. By Day 60, my LinkedIn profile stood out from 500 applicant resumes.'
  }
];

export const FAQS = [
  {
    question: 'Is the ABTalks 60-Day Challenge free for college students?',
    answer: 'Yes, 100% free! ABTalks is on a mission to empower Indian engineering & CS students with real proof-of-work resumes.'
  },
  {
    question: 'What if I miss a day due to college exams or project submissions?',
    answer: 'We know college life gets crazy! You get 1 Streak Freeze token per month, plus you can take on a "Double-Down Catch Up" challenge to restore your streak.'
  },
  {
    question: 'How long does each daily challenge take?',
    answer: 'Challenges are designed to take 30 to 45 minutes late at night. Clear instructions and copyable starter templates ensure you spend time building, not stuck on setup.'
  },
  {
    question: 'Do recruiters actually look at LinkedIn proof posts?',
    answer: 'Yes! Recruiters filter candidates by consistency. 60 consecutive days of verified GitHub commits + detailed LinkedIn posts proves discipline that standard resumes cannot fake.'
  }
];
