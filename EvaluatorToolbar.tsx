import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Smartphone, Monitor, ChevronDown, Sparkles, CheckCircle2, RotateCcw, AlertTriangle, Play, HelpCircle } from 'lucide-react';
import type { ScenarioPreset } from '../types';

export const EvaluatorToolbar: React.FC = () => {
  const { currentScenario, setScenario, is390pxFrame, toggle390pxFrame } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [openScenarioMenu, setOpenScenarioMenu] = useState(false);

  const scenarioLabels: Record<ScenarioPreset, { title: string; desc: string; icon: any; badgeBg: string }> = {
    active_day_12: {
      title: 'Active Day 12 (Default)',
      desc: '12-day streak, 11 submitted, ready for Day 12',
      icon: Play,
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
    },
    fresh_day_1: {
      title: 'First Day (No Streak)',
      desc: 'Fresh student profile, zero commits, day 1 setup',
      icon: RotateCcw,
      badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    },
    missed_day: {
      title: 'Missed Day (Streak Broken)',
      desc: 'Missed yesterday, triggers Streak Freeze & recovery modal',
      icon: AlertTriangle,
      badgeBg: 'bg-red-500/20 text-red-300 border-red-500/30'
    },
    completed_60: {
      title: 'Completed Challenge (Day 60)',
      desc: '60/60 completed, graduate certificate unlocked',
      icon: CheckCircle2,
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
    }
  };

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl">
      <div className="bg-slate-900/90 backdrop-blur-md border border-orange-500/30 rounded-2xl p-2.5 shadow-2xl shadow-black/80 flex flex-col gap-2">
        
        {/* Main Control Bar Header */}
        <div className="flex items-center justify-between gap-2">
          
          {/* Title */}
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
            <span className="text-xs font-bold text-slate-200 tracking-wide flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              EVALUATOR TOOLBAR
            </span>
          </div>

          {/* Quick Route Buttons */}
          <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-[11px] font-semibold">
            <button
              onClick={() => navigate('/')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                location.pathname === '/' ? 'bg-orange-500 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              /
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                location.pathname === '/dashboard' ? 'bg-orange-500 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              /dashboard
            </button>
            <button
              onClick={() => navigate('/day/12')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                location.pathname === '/day/12' ? 'bg-orange-500 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              /day/12
            </button>
          </div>

          {/* Mobile Viewport Toggle */}
          <button
            onClick={toggle390pxFrame}
            className={`px-2.5 py-1 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
              is390pxFrame
                ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
            }`}
            title="Toggle 390px Mobile Device Container View"
          >
            {is390pxFrame ? <Smartphone className="w-3.5 h-3.5 text-purple-400" /> : <Monitor className="w-3.5 h-3.5 text-slate-400" />}
            <span>{is390pxFrame ? '390px Frame' : 'Full Width'}</span>
          </button>
        </div>

        {/* Edge Case Scenario Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpenScenarioMenu(prev => !prev)}
            className="w-full bg-slate-950/90 border border-slate-800 hover:border-orange-500/40 rounded-xl px-3 py-1.5 flex items-center justify-between text-left transition-colors"
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider shrink-0">Edge Case State:</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold border truncate ${scenarioLabels[currentScenario].badgeBg}`}>
                {scenarioLabels[currentScenario].title}
              </span>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openScenarioMenu ? 'rotate-180' : ''}`} />
          </button>

          {/* Scenario Selection Menu */}
          {openScenarioMenu && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-slate-900 border border-slate-700 rounded-xl p-1.5 shadow-xl flex flex-col gap-1 z-50">
              <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Select Real-World Edge Case</span>
                <HelpCircle className="w-3 h-3 text-slate-500" />
              </div>
              {(Object.keys(scenarioLabels) as ScenarioPreset[]).map(key => {
                const item = scenarioLabels[key];
                const Icon = item.icon;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setScenario(key);
                      setOpenScenarioMenu(false);
                    }}
                    className={`w-full p-2 rounded-lg text-left transition-colors flex items-start gap-2.5 ${
                      currentScenario === key
                        ? 'bg-orange-500/10 border border-orange-500/40 text-white'
                        : 'hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <Icon className="w-4 h-4 mt-0.5 shrink-0 text-orange-400" />
                    <div>
                      <div className="text-xs font-bold">{item.title}</div>
                      <div className="text-[10px] text-slate-400">{item.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
