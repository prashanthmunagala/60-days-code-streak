import React from 'react';
import { ShieldAlert, Zap, X, ShieldCheck, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToDay: (day: number) => void;
}

export const StreakRecoveryModal: React.FC<Props> = ({ isOpen, onClose, onNavigateToDay }) => {
  const { activateStreakFreeze, profile } = useApp();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-red-500/40 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">
                Streak Recovery Options
              </h3>
              <p className="text-xs text-red-400 font-medium">Yesterday's challenge was missed</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Banner */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2">
          <p className="font-semibold text-slate-100">
            Hey {profile.name}, don't sweat it! College exams and assignment deadlines happen.
          </p>
          <p className="text-slate-400 leading-relaxed">
            We built two empathetic streak recovery systems so you never lose motivation or drop off your 60-day goal.
          </p>
        </div>

        {/* Option 1: Use Streak Freeze Token */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <h4 className="text-xs font-bold text-blue-300">Option A: Activate Streak Freeze Token</h4>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold border border-blue-500/30">
              {profile.streakFreezeAvailable} Token Left
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Consumes 1 monthly freeze token to protect your 11-day streak.
          </p>
          <button
            onClick={() => {
              activateStreakFreeze();
              onClose();
            }}
            className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Apply Streak Freeze Now</span>
          </button>
        </div>

        {/* Option 2: Double-Down Catch-Up Challenge */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-400" />
              <h4 className="text-xs font-bold text-orange-300">Option B: Double-Down Catch Up</h4>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-bold border border-orange-500/30">
              Bonus XP
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Complete yesterday's task alongside today's task within 24 hours to earn double recruiter points!
          </p>
          <button
            onClick={() => {
              onNavigateToDay(11);
              onClose();
            }}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all"
          >
            <span>Complete Day 11 Catch-Up</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
