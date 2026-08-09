import React, { createContext, useContext, useState } from 'react';
import type { AppState, ScenarioPreset, TrackId, ProofSubmission, StudentProfile } from '../types';
import {
  PROFILE_ACTIVE_DAY_12,
  PROFILE_FRESH_DAY_1,
  PROFILE_MISSED_DAY
} from '../data/mockData';

interface AppContextType extends AppState {
  setScenario: (scenario: ScenarioPreset) => void;
  toggleNightMode: () => void;
  toggle390pxFrame: () => void;
  setActiveTrackId: (trackId: TrackId) => void;
  submitProof: (dayNumber: number, githubUrl: string, linkedinUrl: string) => void;
  activateStreakFreeze: () => void;
  showToast: (msg: string) => void;
}

const initialSubmissions: Record<number, ProofSubmission> = {
  1: { dayNumber: 1, githubUrl: 'https://github.com/aaravdev99/60days-abtalks/commit/a1b2c3d', linkedinUrl: 'https://linkedin.com/posts/aarav-sharma-day1', submittedAt: '2026-07-29T23:45:00Z', status: 'verified' },
  2: { dayNumber: 2, githubUrl: 'https://github.com/aaravdev99/60days-abtalks/commit/b2c3d4e', linkedinUrl: 'https://linkedin.com/posts/aarav-sharma-day2', submittedAt: '2026-07-30T23:50:00Z', status: 'verified' },
  3: { dayNumber: 3, githubUrl: 'https://github.com/aaravdev99/60days-abtalks/commit/c3d4e5f', linkedinUrl: 'https://linkedin.com/posts/aarav-sharma-day3', submittedAt: '2026-07-31T23:30:00Z', status: 'verified' },
  4: { dayNumber: 4, githubUrl: 'https://github.com/aaravdev99/60days-abtalks/commit/d4e5f6a', linkedinUrl: 'https://linkedin.com/posts/aarav-sharma-day4', submittedAt: '2026-08-01T23:15:00Z', status: 'verified' },
  5: { dayNumber: 5, githubUrl: 'https://github.com/aaravdev99/60days-abtalks/commit/e5f6a7b', linkedinUrl: 'https://linkedin.com/posts/aarav-sharma-day5', submittedAt: '2026-08-02T23:40:00Z', status: 'verified' },
  6: { dayNumber: 6, githubUrl: 'https://github.com/aaravdev99/60days-abtalks/commit/f6a7b8c', linkedinUrl: 'https://linkedin.com/posts/aarav-sharma-day6', submittedAt: '2026-08-03T23:55:00Z', status: 'verified' },
  7: { dayNumber: 7, githubUrl: 'https://github.com/aaravdev99/60days-abtalks/commit/a7b8c9d', linkedinUrl: 'https://linkedin.com/posts/aarav-sharma-day7', submittedAt: '2026-08-04T23:10:00Z', status: 'verified' },
  8: { dayNumber: 8, githubUrl: 'https://github.com/aaravdev99/60days-abtalks/commit/b8c9d0e', linkedinUrl: 'https://linkedin.com/posts/aarav-sharma-day8', submittedAt: '2026-08-05T23:25:00Z', status: 'verified' },
  9: { dayNumber: 9, githubUrl: 'https://github.com/aaravdev99/60days-abtalks/commit/c9d0e1f', linkedinUrl: 'https://linkedin.com/posts/aarav-sharma-day9', submittedAt: '2026-08-06T23:48:00Z', status: 'verified' },
  10: { dayNumber: 10, githubUrl: 'https://github.com/aaravdev99/60days-abtalks/commit/d0e1f2a', linkedinUrl: 'https://linkedin.com/posts/aarav-sharma-day10', submittedAt: '2026-08-07T23:35:00Z', status: 'verified' },
  11: { dayNumber: 11, githubUrl: 'https://github.com/aaravdev99/60days-abtalks/commit/e1f2a3b', linkedinUrl: 'https://linkedin.com/posts/aarav-sharma-day11', submittedAt: '2026-08-08T23:52:00Z', status: 'verified' }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScenario, setCurrentScenario] = useState<ScenarioPreset>('active_day_12');
  const [nightMode, setNightMode] = useState<boolean>(true);
  const [is390pxFrame, setIs390pxFrame] = useState<boolean>(false);
  const [activeTrackId, setActiveTrackId] = useState<TrackId>('fullstack');
  const [submissions, setSubmissions] = useState<Record<number, ProofSubmission>>(initialSubmissions);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Derive profile based on scenario
  const getProfile = (): StudentProfile => {
    switch (currentScenario) {
      case 'fresh_day_1':
        return PROFILE_FRESH_DAY_1;
      case 'missed_day':
        return PROFILE_MISSED_DAY;
      case 'completed_60':
        return {
          ...PROFILE_ACTIVE_DAY_12,
          currentStreak: 60,
          longestStreak: 60,
          completedDaysCount: 60,
          standing: { ...PROFILE_ACTIVE_DAY_12.standing, campusRank: 1, globalRank: 4, recruiterScore: 99 }
        };
      case 'active_day_12':
      default:
        return PROFILE_ACTIVE_DAY_12;
    }
  };

  const profile = getProfile();

  const setScenario = (scenario: ScenarioPreset) => {
    setCurrentScenario(scenario);
    if (scenario === 'fresh_day_1') {
      setSubmissions({});
    } else if (scenario === 'active_day_12' || scenario === 'missed_day') {
      setSubmissions(initialSubmissions);
    }
    showToast(`Loaded Edge Case Scenario: ${scenario.replace('_', ' ').toUpperCase()}`);
  };

  const toggleNightMode = () => setNightMode(prev => !prev);
  const toggle390pxFrame = () => setIs390pxFrame(prev => !prev);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const submitProof = (dayNumber: number, githubUrl: string, linkedinUrl: string) => {
    const newSubmission: ProofSubmission = {
      dayNumber,
      githubUrl,
      linkedinUrl,
      submittedAt: new Date().toISOString(),
      status: 'verified',
      commitHash: Math.random().toString(36).substring(2, 9)
    };

    setSubmissions(prev => ({
      ...prev,
      [dayNumber]: newSubmission
    }));

    if (currentScenario === 'missed_day') {
      setCurrentScenario('active_day_12');
    }

    showToast(`🎉 Day ${dayNumber} Proof Submitted & Verified! Streak maintained!`);
  };

  const activateStreakFreeze = () => {
    if (currentScenario === 'missed_day') {
      setCurrentScenario('active_day_12');
      showToast('🛡️ Streak Freeze Token activated! Streak restored to 11 Days!');
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentScenario,
        nightMode,
        is390pxFrame,
        activeTrackId,
        profile,
        submissions,
        toastMessage,
        setScenario,
        toggleNightMode,
        toggle390pxFrame,
        setActiveTrackId,
        submitProof,
        activateStreakFreeze,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
