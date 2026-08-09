import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { DAY_12_TASK } from '../data/mockData';
import { AIPostGeneratorModal } from '../components/AIPostGeneratorModal';
import { RecruiterProofCard } from '../components/RecruiterProofCard';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import confetti from 'canvas-confetti';
import {
  Code2,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Send,
  Clock,
  BookOpen,
  ArrowRight,
  Flame
} from 'lucide-react';

export const ChallengeDayPage: React.FC = () => {
  const navigate = useNavigate();
  const { submissions, submitProof, profile } = useApp();

  const dayNumber = 12; // Target required route /day/12
  const task = DAY_12_TASK;

  const existingSubmission = submissions[dayNumber];

  const [githubUrl, setGithubUrl] = useState(
    existingSubmission?.githubUrl || `https://github.com/${profile.githubUsername}/60days-abtalks/commit/e1f2a3b`
  );
  const [linkedinUrl, setLinkedinUrl] = useState(
    existingSubmission?.linkedinUrl || `https://linkedin.com/posts/${profile.linkedinUsername}-day12`
  );
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'prompt' | 'submission'>('prompt');

  const handleCopyCode = () => {
    navigator.clipboard.writeText(task.starterCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitProof(dayNumber, githubUrl, linkedinUrl);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <div className="space-y-6 pb-28 px-4 max-w-4xl mx-auto pt-4">
      
      {/* Top Breadcrumb & Day Navigator */}
      <div className="flex items-center justify-between text-xs font-semibold">
        <button
          onClick={() => navigate('/dashboard')}
          className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/day/12')}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            title="Previous Day 11"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 font-bold">
            Day 12 of 60
          </span>
          <button
            onClick={() => navigate('/day/12')}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            title="Next Day 13"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Challenge Spec Title Header */}
      <div className="glass-panel-glow p-5 rounded-3xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-extrabold uppercase border border-purple-500/30">
            {task.phaseTitle}
          </span>

          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
            existingSubmission ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-orange-500/20 text-orange-400 border-orange-500/30'
          }`}>
            {existingSubmission ? '✓ Proof Verified' : '● Action Required Tonight'}
          </span>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white">{task.title}</h1>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">{task.summary}</p>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            <span>Est. Time: <strong className="text-white font-semibold">{task.estimatedMinutes} mins</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Difficulty: <strong className="text-white font-semibold">{task.difficulty}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span>Track: <strong className="text-white font-semibold">Full-Stack MERN</strong></span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs (Mobile optimized) */}
      <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-2xl border border-slate-800">
        <button
          onClick={() => setActiveTab('prompt')}
          className={`flex-1 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
            activeTab === 'prompt' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>1. Read Task & Starter Code</span>
        </button>

        <button
          onClick={() => setActiveTab('submission')}
          className={`flex-1 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
            activeTab === 'submission' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Send className="w-4 h-4" />
          <span>2. Submit Proof of Work</span>
          {existingSubmission && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 fill-emerald-500" />}
        </button>
      </div>

      {/* TAB 1: Task Prompt & Starter Code */}
      {activeTab === 'prompt' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Detailed Prompt */}
          <div className="glass-panel p-5 rounded-3xl space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-400" />
              Detailed Challenge Specification
            </h3>
            
            <div className="text-xs text-slate-300 leading-relaxed space-y-3 font-sans">
              <p>
                Tonight you will build an essential production feature: <strong>API Rate Limiting</strong>. High-frequency traffic can bring down servers and drain cloud budgets.
              </p>
              <p>
                Your goal is to build an Express middleware using a <strong>Sliding Window Counter algorithm</strong> that caps incoming requests to <strong>10 requests per minute per IP address</strong>.
              </p>
              <p>
                When a user exceeds their quota, return a standard HTTP status <strong>429 (Too Many Requests)</strong> along with a custom retry header (<code className="bg-slate-950 px-1.5 py-0.5 rounded text-orange-300 font-mono">Retry-After: 60</code>).
              </p>
            </div>

            {/* Learning Objectives */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-bold text-slate-200">Learning Objectives:</h4>
              <ul className="space-y-1.5">
                {task.learningObjectives.map((obj, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Step by Step Guide */}
          <div className="glass-panel p-5 rounded-3xl space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Step-by-Step Build Guide</h3>
            <div className="space-y-3">
              {task.steps.map((step, index) => (
                <div key={step.id} className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800/80 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-xl bg-orange-500/20 text-orange-400 text-xs font-extrabold flex items-center justify-center shrink-0 border border-orange-500/30">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-100">{step.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Starter Code Snippet Box */}
          <div className="glass-panel p-5 rounded-3xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-orange-400" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Starter Code (rateLimiter.js)</h3>
              </div>
              <button
                onClick={handleCopyCode}
                className="px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/90 overflow-x-auto">
              <pre className="text-xs font-mono text-emerald-300 leading-relaxed">
                <code>{task.starterCodeSnippet}</code>
              </pre>
            </div>
          </div>

          {/* Jump to Submission CTA */}
          <button
            onClick={() => setActiveTab('submission')}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-orange-500/20"
          >
            <span>Ready to Submit Proof of Work?</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>
      )}

      {/* TAB 2: Proof of Work Submission Form & Recruiter Card */}
      {activeTab === 'submission' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Form Container */}
          <div className="glass-panel p-5 rounded-3xl space-y-5">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-orange-400" />
                Submit Daily Proof of Work
              </h3>
              <p className="text-xs text-slate-400">Provide your public GitHub commit & LinkedIn post URLs to verify Day 12.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* GitHub Commit URL Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-200 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                    GitHub Commit or Repository URL
                  </span>
                  <span className="text-[10px] text-orange-400 font-normal">*Required</span>
                </label>

                <input
                  type="url"
                  required
                  value={githubUrl}
                  onChange={e => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/username/repo/commit/hash"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 font-mono outline-none transition-colors"
                />
              </div>

              {/* LinkedIn Post URL Input */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                    <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                    LinkedIn Post URL
                  </label>

                  {/* AI Drafter Button */}
                  <button
                    type="button"
                    onClick={() => setAiModalOpen(true)}
                    className="px-2.5 py-1 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-[11px] font-bold border border-purple-500/30 flex items-center gap-1 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    <span>AI Post Drafter</span>
                  </button>
                </div>

                <input
                  type="url"
                  required
                  value={linkedinUrl}
                  onChange={e => setLinkedinUrl(e.target.value)}
                  placeholder="https://linkedin.com/posts/username-day12"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 font-mono outline-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-orange-500/25 active:scale-95 transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Verify & Lock Day 12 Streak</span>
              </button>

            </form>
          </div>

          {/* Recruiter Proof Card (Rendered live!) */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live Shareable Card Preview:</h4>
            <RecruiterProofCard
              task={task}
              githubUrl={githubUrl}
              linkedinUrl={linkedinUrl}
            />
          </div>

        </div>
      )}

      {/* AI Post Drafter Modal */}
      <AIPostGeneratorModal
        task={task}
        githubUrl={githubUrl}
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        onApplyPostText={() => {
          setLinkedinUrl(`https://linkedin.com/posts/${profile.linkedinUsername}-day12-verified`);
        }}
      />

    </div>
  );
};
