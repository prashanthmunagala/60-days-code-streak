import React, { useState } from 'react';
import { CheckCircle2, ExternalLink, Share2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useApp } from '../context/AppContext';
import type { DayTask } from '../types';

interface Props {
  task: DayTask;
  githubUrl: string;
  linkedinUrl: string;
  commitHash?: string;
}

export const RecruiterProofCard: React.FC<Props> = ({
  task,
  githubUrl,
  linkedinUrl,
  commitHash = 'e1f2a3b'
}) => {
  const { profile, showToast } = useApp();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(`Verified Proof of Work - Day ${task.dayNumber} by ${profile.name} (${profile.collegeName}): ${githubUrl || 'https://github.com/aaravdev99/60days-abtalks'}`);
    setCopied(true);
    showToast('📋 Recruiter proof link copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="gradient-border-glow rounded-3xl bg-slate-900/90 p-5 shadow-2xl space-y-4">
      
      {/* Top Banner */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">VERIFIED PROOF OF WORK</span>
            <span className="text-[10px] text-slate-400">ABTalks 60-Day Challenge • Day {task.dayNumber}</span>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-mono font-bold">
          #{commitHash}
        </span>
      </div>

      {/* Main Student Spec Header */}
      <div className="flex items-center gap-3 bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="w-11 h-11 rounded-xl object-cover border border-orange-500/40"
        />
        <div className="flex-1 overflow-hidden">
          <h4 className="text-sm font-bold text-white truncate">{profile.name}</h4>
          <p className="text-xs text-slate-400 truncate">{profile.collegeName} • {profile.degreeYear}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-bold border border-orange-500/30">
              🔥 {profile.currentStreak} Day Streak
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">
              ⭐ Recruiter Index {profile.standing.recruiterScore}/100
            </span>
          </div>
        </div>
      </div>

      {/* Task Completed Title & Details */}
      <div className="space-y-2">
        <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Completed Spec:</h5>
        <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800/80">
          <p className="text-xs font-bold text-slate-200">{task.title}</p>
          <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{task.summary}</p>
        </div>
      </div>

      {/* Verification Links */}
      <div className="grid grid-cols-2 gap-2">
        <a
          href={githubUrl || 'https://github.com/aaravdev99/60days-abtalks'}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center justify-between group transition-colors"
        >
          <div className="flex items-center gap-2">
            <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-white" />
            <span className="truncate">GitHub Commit</span>
          </div>
          <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
        </a>

        <a
          href={linkedinUrl || 'https://linkedin.com'}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center justify-between group transition-colors"
        >
          <div className="flex items-center gap-2">
            <LinkedinIcon className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
            <span className="truncate">LinkedIn Post</span>
          </div>
          <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
        </a>
      </div>

      {/* Share CTA */}
      <button
        onClick={handleShare}
        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all"
      >
        <Share2 className="w-4 h-4" />
        <span>{copied ? 'Proof Link Copied!' : 'Share Proof Card with Recruiter'}</span>
      </button>

    </div>
  );
};
