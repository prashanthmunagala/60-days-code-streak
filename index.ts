export type TrackId = 'fullstack' | 'ai_data' | 'mobile' | 'systems';

export interface Track {
  id: TrackId;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  techStack: string[];
  gradient: string;
  badgeColor: string;
  popularTarget: string;
}

export interface StepRequirement {
  id: string;
  title: string;
  description: string;
}

export interface DayTask {
  dayNumber: number;
  title: string;
  trackId: TrackId;
  phase: number; // Phase 1 (1-20): Foundations, Phase 2 (21-40): Micro-Projects, Phase 3 (41-60): Production Capstones
  phaseTitle: string;
  estimatedMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  detailedPrompt: string;
  learningObjectives: string[];
  steps: StepRequirement[];
  starterCodeSnippet: string;
  codeLanguage: string;
  helpfulResources: { title: string; url: string; category: string }[];
  linkedinPostPromptHint: string;
}

export interface ProofSubmission {
  dayNumber: number;
  githubUrl: string;
  linkedinUrl: string;
  submittedAt: string; // ISO date string
  status: 'verified' | 'pending' | 'flagged';
  commitHash?: string;
  notes?: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  category: 'streak' | 'submission' | 'social' | 'special';
}

export interface StudentStanding {
  campusRank: number;
  totalStudentsInCampus: number;
  campusName: string;
  globalRank: number;
  totalGlobalStudents: number;
  recruiterScore: number; // e.g. 94/100
}

export interface StudentProfile {
  id: string;
  name: string;
  collegeName: string;
  degreeYear: string;
  selectedTrack: TrackId;
  avatarUrl: string;
  githubUsername: string;
  linkedinUsername: string;
  currentStreak: number;
  longestStreak: number;
  completedDaysCount: number;
  streakFreezeAvailable: number;
  hasMissedYesterday: boolean;
  standing: StudentStanding;
  badges: Badge[];
}

export type ScenarioPreset = 'active_day_12' | 'fresh_day_1' | 'missed_day' | 'completed_60';

export interface AppState {
  currentScenario: ScenarioPreset;
  nightMode: boolean;
  is390pxFrame: boolean;
  activeTrackId: TrackId;
  profile: StudentProfile;
  submissions: Record<number, ProofSubmission>;
  toastMessage: string | null;
}
