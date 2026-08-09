import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { GENERATED_DAYS } from '../data/mockData';
import { StreakRecoveryModal } from '../components/StreakRecoveryModal';
import {
  Flame,
  CheckCircle2,
  Calendar,
  Award,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { profile, submissions, currentScenario } = useApp();
  const [recoveryModalOpen, setRecoveryModalOpen] = useState(false);

  const completedCount = Object.keys(submissions).length;
  const totalDays = 60;
  const progressPercent = Math.round((completedCount / totalDays) * 100);

  // Determine current focus day
  const activeFocusDay = currentScenario === 'fresh_day_1' ? 1 : 12;

  return (
    <div className="space-y-6 pb-24 px-4 max-w-4xl mx-auto pt-4">
      
      {/* Edge Case Alert Banner: Missed Day */}
      {currentScenario === 'missed_day' && (
        <div className="gradient-border-glow rounded-3xl bg-red-950/40 p-4 border border-red-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/40">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-red-300 uppercase tracking-wider">MISSED YESTERDAY'S CHALLENGE</h3>
              <p className="text-xs text-slate-200">Your 11-day streak is frozen. Use a freeze token or complete catch-up.</p>
            </div>
          </div>
          <button
            onClick={() => setRecoveryModalOpen(true)}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-red-500/20 shrink-0"
          >
            <span>Resolve Streak</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Edge Case Alert Banner: Day 1 Fresh */}
      {currentScenario === 'fresh_day_1' && (
        <div className="glass-panel p-4 rounded-3xl border border-blue-500/30 bg-blue-950/20 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-blue-300">WELCOME TO DAY 1!</h3>
              <p className="text-xs text-slate-300">Your 60-day transformation starts tonight. Let's make your first commit!</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/day/12')}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shrink-0"
          >
            Start Day 1
          </button>
        </div>
      )}

      {/* Profile Header & Main Streak Card */}
      <div className="glass-panel-glow p-5 rounded-3xl space-y-4">
        
        {/* Top Profile Strip */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-12 h-12 rounded-2xl object-cover border-2 border-orange-500/50 shadow-md"
            />
            <div>
              <h2 className="text-base font-extrabold text-white flex items-center gap-2">
                {profile.name}
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono font-medium">
                  {profile.degreeYear}
                </span>
              </h2>
              <p className="text-xs text-slate-400">{profile.collegeName} • Full-Stack Track</p>
            </div>
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">CAMPUS RANK</span>
            <span className="text-sm font-black text-orange-400">#{profile.standing.campusRank} of {profile.standing.totalStudentsInCampus}</span>
          </div>
        </div>

        {/* Big Flame Streak Counter Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          
          <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-500 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 animate-flame" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">CURRENT STREAK</span>
              <span className="text-lg font-black text-white">{profile.currentStreak} Days</span>
            </div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">RECRUITER SCORE</span>
              <span className="text-lg font-black text-purple-300">{profile.standing.recruiterScore}/100</span>
            </div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">PROOFS SUBMITTED</span>
              <span className="text-lg font-black text-emerald-400">{completedCount} / 60</span>
            </div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">STREAK FREEZE</span>
              <span className="text-lg font-black text-blue-300">{profile.streakFreezeAvailable} Token</span>
            </div>
          </div>

        </div>

      </div>

      {/* Today's Task Action Banner */}
      <div className="gradient-border-glow rounded-3xl bg-slate-900/90 p-5 shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-extrabold uppercase border border-orange-500/30">
              TODAY'S TASK • DAY {activeFocusDay}
            </span>
            <span className="text-[11px] text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-500" /> ~45 mins
            </span>
          </div>
          <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5" /> Intermediate
          </span>
        </div>

        <div>
          <h3 className="text-base font-extrabold text-white">
            {activeFocusDay === 12 ? 'Build a Rate-Limited API Gateway in Node.js' : 'Git Setup & Semantic HTML Challenge'}
          </h3>
          <p className="text-xs text-slate-300 mt-1 line-clamp-2">
            {activeFocusDay === 12
              ? 'Protect Express APIs against high-frequency brute force traffic using Sliding Window Counter algorithm.'
              : 'Initialize your public 60-day challenge GitHub repository and commit your first semantic layout project.'}
          </p>
        </div>

        <div className="pt-1 flex items-center justify-between border-t border-slate-800">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1 text-white font-medium">
              <GithubIcon className="w-3.5 h-3.5" /> Commit Required
            </span>
            <span className="flex items-center gap-1 text-blue-400 font-medium">
              <LinkedinIcon className="w-3.5 h-3.5" /> Post Required
            </span>
          </div>

          <button
            onClick={() => navigate('/day/12')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all active:scale-95"
          >
            <span>Open Day {activeFocusDay} Challenge</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 60-Day Progress Tracker & Interactive Heatmap */}
      <div className="glass-panel p-5 rounded-3xl space-y-4">
        
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-400" />
              60-Day Challenge Matrix
            </h3>
            <p className="text-xs text-slate-400">Phase 1: Days 1-20 • Phase 2: Days 21-40 • Phase 3: Days 41-60</p>
          </div>
          <span className="text-xs font-black text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
            {progressPercent}% Complete
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
          <div
            className="bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Heatmap Grid of 60 Days */}
        <div className="grid grid-cols-10 gap-1.5 pt-2">
          {GENERATED_DAYS.map(d => {
            const isSubmitted = !!submissions[d.dayNumber];
            const isCurrent = d.dayNumber === activeFocusDay;
            const isMissed = currentScenario === 'missed_day' && d.dayNumber === 11;

            return (
              <button
                key={d.dayNumber}
                onClick={() => navigate('/day/12')}
                title={`Day ${d.dayNumber}: ${d.title}`}
                className={`h-9 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center relative ${
                  isSubmitted
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30'
                    : isCurrent
                    ? 'bg-orange-500 text-white border-2 border-amber-300 shadow-md shadow-orange-500/30 animate-pulse'
                    : isMissed
                    ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                    : 'bg-slate-950/80 text-slate-500 border border-slate-800 hover:border-slate-700 hover:text-slate-300'
                }`}
              >
                {d.dayNumber}
                {isSubmitted && <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-5 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500/40 border border-emerald-500"></span> Verified Proof
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-orange-500"></span> Today's Target
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-950 border border-slate-800"></span> Upcoming
          </span>
        </div>

      </div>

      {/* Achievements & Badges Earned */}
      <div className="glass-panel p-5 rounded-3xl space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-purple-400" />
            Achievements & Badges
          </h3>
          <span className="text-xs text-slate-400">{profile.badges.length} Unlocked</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {profile.badges.map(b => (
            <div key={b.id} className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1 text-center">
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mx-auto">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-white truncate">{b.title}</h4>
              <p className="text-[10px] text-slate-400 line-clamp-1">{b.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Streak Recovery Modal */}
      <StreakRecoveryModal
        isOpen={recoveryModalOpen}
        onClose={() => setRecoveryModalOpen(false)}
        onNavigateToDay={() => navigate('/day/12')}
      />

    </div>
  );
};
