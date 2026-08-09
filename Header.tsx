import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Flame, Moon, Sun, Code, Menu, X, ShieldAlert, LayoutDashboard, Home } from 'lucide-react';

export const Header: React.FC = () => {
  const { profile, nightMode, toggleNightMode, currentScenario } = useApp();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
            AB
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-extrabold tracking-tight text-white text-base">
              ABTalks <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold border border-orange-500/30">60 DAYS</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium">Build • Commit • LinkedIn</p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800">
          <Link
            to="/"
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              isActive('/') 
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              isActive('/dashboard') 
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            Dashboard
          </Link>
          <Link
            to="/day/12"
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              isActive('/day/12') 
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            Day 12 Task
          </Link>
        </nav>

        {/* Right Status Actions */}
        <div className="flex items-center gap-2.5">

          {/* Streak Badge */}
          <Link 
            to="/dashboard" 
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-transform active:scale-95 ${
              currentScenario === 'missed_day'
                ? 'bg-red-500/10 border-red-500/30 text-red-400 animate-pulse'
                : 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 border-orange-500/30 text-orange-400 shadow-sm shadow-orange-500/10'
            }`}
          >
            <Flame className={`w-4 h-4 ${currentScenario === 'missed_day' ? 'text-red-400' : 'text-orange-500 animate-flame'}`} />
            <span>{profile.currentStreak}d Streak</span>
          </Link>

          {/* Night Owl Theme Toggle */}
          <button
            onClick={toggleNightMode}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Toggle Night Owl Mode"
          >
            {nightMode ? <Moon className="w-4 h-4 text-purple-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Profile Avatar */}
          <Link to="/dashboard" className="relative group">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-8 h-8 rounded-full border-2 border-orange-500/50 object-cover"
            />
            {currentScenario === 'missed_day' && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            )}
          </Link>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-800 flex flex-col gap-2 animate-in slide-in-from-top duration-200">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 ${
              isActive('/') ? 'bg-orange-500 text-white' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            <Home className="w-4 h-4" />
            1. Landing Page (/)
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 ${
              isActive('/dashboard') ? 'bg-orange-500 text-white' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            2. Student Dashboard (/dashboard)
          </Link>
          <Link
            to="/day/12"
            onClick={() => setMobileMenuOpen(false)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 ${
              isActive('/day/12') ? 'bg-orange-500 text-white' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            <Code className="w-4 h-4" />
            3. Challenge Day (/day/12)
          </Link>

          {currentScenario === 'missed_day' && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-300 flex items-center gap-2 mt-1">
              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
              <span>Yesterday was missed! Tap to activate Streak Freeze.</span>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
