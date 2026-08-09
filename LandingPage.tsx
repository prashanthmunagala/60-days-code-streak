import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { TRACKS, TESTIMONIALS, FAQS, CAMPUS_LEADERBOARD } from '../data/mockData';
import type { TrackId } from '../types';
import {
  Flame,
  ArrowRight,
  Code2,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Users
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { activeTrackId, setActiveTrackId, setScenario } = useApp();

  const handleStartChallenge = (trackId: TrackId) => {
    setActiveTrackId(trackId);
    setScenario('fresh_day_1');
    navigate('/dashboard');
  };

  return (
    <div className="space-y-12 pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-6 px-4 max-w-4xl mx-auto text-center space-y-6">
        
        {/* Top Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-amber-500/10 border border-orange-500/30 text-xs font-semibold text-orange-400 backdrop-blur-md shadow-lg shadow-orange-500/10">
          <Flame className="w-4 h-4 text-orange-500 animate-flame" />
          <span>60-Day Proof of Work Challenge for Indian Engineering Students</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
          Turn Late-Night Code into <br className="hidden sm:inline" />
          <span className="gradient-text-orange">Recruiter Proof of Work.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Pick a track. Build something every single day after college. Submit a daily <span className="text-white font-semibold underline decoration-orange-500">GitHub commit</span> and <span className="text-white font-semibold underline decoration-blue-500">LinkedIn post</span>. Build discipline recruiters actually care about.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => handleStartChallenge('fullstack')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-orange-500/25 active:scale-95 transition-all"
          >
            <span>Start 60-Day Challenge (Free)</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => navigate('/day/12')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-bold text-sm flex items-center justify-center gap-2 transition-all"
          >
            <Code2 className="w-4 h-4 text-orange-400" />
            <span>Explore Day 12 Spec</span>
          </button>
        </div>

        {/* Social Proof Bar */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80 max-w-xl mx-auto">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-orange-400" />
            <span><strong className="text-white font-bold">4,820+</strong> Active Students</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span><strong className="text-white font-bold">89%</strong> Interview Shortlists</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span><strong className="text-white font-bold">100%</strong> Free Forever</span>
          </div>
        </div>

      </section>

      {/* How It Works - 3 Step Formula */}
      <section className="px-4 max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">THE DAILY WORKFLOW</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">How You Build Your Streak</h2>
          <p className="text-xs text-slate-400">Designed for 30 to 45 minutes of midnight coding</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          
          {/* Step 1 */}
          <div className="glass-panel p-5 rounded-3xl space-y-3 relative overflow-hidden group hover:border-orange-500/30 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center font-black text-orange-400 text-base">
              01
            </div>
            <h3 className="text-sm font-bold text-white">Read Daily Spec</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open today's challenge. Get step-by-step instructions, learning goals, and starter code snippets tailored to your track.
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass-panel p-5 rounded-3xl space-y-3 relative overflow-hidden group hover:border-purple-500/30 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <GithubIcon className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Push GitHub Commit</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Write clean, working code. Push your changes to your public GitHub repository to lock in your daily contribution grid tile.
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass-panel p-5 rounded-3xl space-y-3 relative overflow-hidden group hover:border-blue-500/30 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Post on LinkedIn</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Use our 1-click AI LinkedIn post drafter. Document what you learned and make your proof of work visible to recruiters.
            </p>
          </div>

        </div>
      </section>

      {/* Select Your Track */}
      <section className="px-4 max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">CHOOSE YOUR PATH</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">4 Specialized 60-Day Tracks</h2>
          <p className="text-xs text-slate-400">Pick what aligns with your dream internship or role</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {TRACKS.map(track => {
            const isSelected = activeTrackId === track.id;
            return (
              <div
                key={track.id}
                onClick={() => handleStartChallenge(track.id)}
                className={`p-5 rounded-3xl border cursor-pointer transition-all space-y-4 relative ${
                  isSelected
                    ? 'bg-slate-900/90 border-orange-500 shadow-xl shadow-orange-500/10'
                    : 'glass-panel border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${track.badgeColor}`}>
                      {track.popularTarget}
                    </span>
                    <h3 className="text-base font-extrabold text-white mt-2">{track.name}</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${track.gradient} flex items-center justify-center text-white font-bold shrink-0`}>
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{track.fullDescription}</p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {track.techStack.map(tech => (
                    <span key={tech} className="px-2 py-0.5 rounded-md bg-slate-950 text-slate-400 text-[10px] font-mono border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-800/60 text-xs">
                  <span className="text-slate-400 text-[11px]">60 Daily Challenges</span>
                  <span className="text-orange-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Join Track <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* College Campus Leaderboard */}
      <section className="px-4 max-w-4xl mx-auto space-y-5">
        <div className="glass-panel p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">CAMPUS SQUADS</span>
              <h2 className="text-lg font-bold text-white">Top Active Colleges</h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold border border-orange-500/20">
              Live Standings
            </span>
          </div>

          <div className="space-y-2">
            {CAMPUS_LEADERBOARD.map(c => (
              <div key={c.campusName} className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-extrabold text-slate-400 w-5">#{c.rank}</span>
                  <span className="text-base">{c.logo}</span>
                  <div>
                    <span className="font-bold text-white">{c.campusName}</span>
                    <span className="text-[10px] text-slate-400 block">{c.activeStudents} active coders</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-orange-400">{c.avgStreak}d avg</span>
                  <span className="text-[10px] text-slate-400 block">streak</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="px-4 max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">PROVED IN RECRUITING</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Student Placement Alumni</h2>
          <p className="text-xs text-slate-400">How 60 days of proof changed their tech careers</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="glass-panel p-5 rounded-3xl space-y-3 flex flex-col justify-between">
              <p className="text-xs text-slate-300 italic leading-relaxed">"{t.quote}"</p>
              
              <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full object-cover border border-orange-500/40" />
                <div>
                  <h4 className="text-xs font-bold text-white">{t.name}</h4>
                  <p className="text-[10px] text-slate-400">{t.college}</p>
                  <span className="text-[10px] font-semibold text-emerald-400">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map(faq => (
            <div key={faq.question} className="glass-panel p-4 rounded-2xl space-y-1.5">
              <h3 className="text-xs font-bold text-slate-200">{faq.question}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="px-4 max-w-4xl mx-auto">
        <div className="gradient-border-glow rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-8 text-center space-y-4">
          <h2 className="text-2xl font-extrabold text-white">Ready to Build Your 60-Day Proof of Work?</h2>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Join 4,800+ college students coding every night. Zero cost, zero fluff.
          </p>
          <button
            onClick={() => handleStartChallenge('fullstack')}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm inline-flex items-center gap-2 shadow-xl shadow-orange-500/30 transition-all"
          >
            <span>Launch Your Challenge Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
