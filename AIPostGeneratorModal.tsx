import React, { useState } from 'react';
import { Sparkles, Copy, Check, X } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import type { DayTask } from '../types';

interface Props {
  task: DayTask;
  githubUrl: string;
  isOpen: boolean;
  onClose: () => void;
  onApplyPostText: (text: string) => void;
}

export const AIPostGeneratorModal: React.FC<Props> = ({
  task,
  githubUrl,
  isOpen,
  onClose,
  onApplyPostText
}) => {
  const [copied, setCopied] = useState(false);
  const [tone, setTone] = useState<'recruiter' | 'technical' | 'casual'>('recruiter');

  if (!isOpen) return null;

  const generateDraftText = () => {
    const repoLink = githubUrl || 'https://github.com/aaravdev99/60days-abtalks';
    
    if (tone === 'recruiter') {
      return `🚀 Day ${task.dayNumber}/60 of #ABTalks60Days Challenge Complete!

Tonight I built a production-grade **${task.title}** to protect APIs against high-frequency traffic spikes and brute force attacks.

💡 Key Tech Learnings:
• Implemented sliding window rate-limiting middleware in Express.js
• Handled HTTP 429 (Too Many Requests) & injected Retry-After headers
• Optimized in-memory request timestamp tracking per client IP

👨‍💻 Public Proof of Work & Code Repo:
${repoLink}

Building consistently every single day after college classes with the @ABTalks community!

#FullStackDevelopment #NodeJS #ExpressJS #BackendEngineering #Recruiting #BuildInPublic #ABTalks`;
    }

    if (tone === 'technical') {
      return `⚡ Day ${task.dayNumber} Update: Sliding Window Rate Limiting in Express.js

Wrote custom middleware to throttle requests to 10 req/min per IP.

Key Architecture:
1. Map data structure tracking request timestamps per client IP.
2. Filter step removing expired timestamps (>60s).
3. Express response injection for \`X-RateLimit-Remaining\` & \`Retry-After: 60\`.

GitHub Commit: ${repoLink}

#SystemDesign #BackendArchitecture #NodeJS #WebDev #ABTalks60Days`;
    }

    return `🔥 Day ${task.dayNumber} down! Managed to finish building a Rate-Limited API Gateway late tonight after classes. 

Felt amazing to see HTTP 429 pop up when simulating request spam!

Check out the code here: ${repoLink}

#ABTalks60Days #CollegeCoder #100DaysOfCode #BuildInPublic`;
  };

  const currentText = generateDraftText();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleUseText = () => {
    onApplyPostText(currentText);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-orange-500/30 rounded-3xl max-w-lg w-full p-5 shadow-2xl space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                AI LinkedIn Post Drafter
              </h3>
              <p className="text-xs text-slate-400">1-click recruiter-tailored copy for Day {task.dayNumber}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tone Selector */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setTone('recruiter')}
            className={`flex-1 py-1.5 rounded-lg transition-colors ${
              tone === 'recruiter' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            👔 Recruiter Focus
          </button>
          <button
            onClick={() => setTone('technical')}
            className={`flex-1 py-1.5 rounded-lg transition-colors ${
              tone === 'technical' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🛠️ Deep Tech
          </button>
          <button
            onClick={() => setTone('casual')}
            className={`flex-1 py-1.5 rounded-lg transition-colors ${
              tone === 'casual' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🔥 Quick Post
          </button>
        </div>

        {/* Post Preview Box */}
        <div className="relative bg-slate-950/90 border border-slate-800 rounded-2xl p-4 text-xs font-mono text-slate-300 leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
          {currentText}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleCopy}
            className="flex-1 py-2.5 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Draft'}</span>
          </button>

          <button
            onClick={handleUseText}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>Use for Submission</span>
          </button>
        </div>

      </div>
    </div>
  );
};
