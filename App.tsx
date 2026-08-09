import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { EvaluatorToolbar } from './components/EvaluatorToolbar';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { ChallengeDayPage } from './pages/ChallengeDayPage';
import { Sparkles } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { is390pxFrame, nightMode, toastMessage } = useApp();

  return (
    <div className={`min-h-screen transition-colors ${nightMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-900 text-slate-100'}`}>
      
      {/* Toast Notification Popup */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-orange-500 text-white px-4 py-2.5 rounded-2xl shadow-2xl font-bold text-xs flex items-center gap-2 animate-in slide-in-from-top duration-200 border border-amber-300">
          <Sparkles className="w-4 h-4 fill-current" />
          <span>{toastMessage}</span>
        </div>
      )}

      <Header />

      {/* Main Content Viewport Container */}
      <main className="w-full transition-all duration-300">
        {is390pxFrame ? (
          <div className="py-6 px-2 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
            
            {/* 390px iPhone Frame Outer Box */}
            <div className="mobile-device-frame bg-slate-950 flex flex-col">
              <div className="mobile-device-notch"></div>
              
              {/* Inner Scrollable Device Viewport */}
              <div className="flex-1 overflow-y-auto pt-7 pb-16">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/day/12" element={<ChallengeDayPage />} />
                  <Route path="/day/:id" element={<ChallengeDayPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-400 mt-2 font-mono">
              📱 390px Viewport Frame Active (iPhone 14/15 format)
            </p>
          </div>
        ) : (
          <div className="min-h-[calc(100vh-80px)]">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/day/12" element={<ChallengeDayPage />} />
              <Route path="/day/:id" element={<ChallengeDayPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        )}
      </main>

      {/* Evaluator Quick Navigation & Scenario Switcher Bar */}
      <EvaluatorToolbar />

      {/* Simple Footer */}
      <footer className="w-full border-t border-slate-800/80 py-6 text-center text-xs text-slate-400">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>ABTalks 60-Day Challenge • Built for Indian College Coders</span>
          <span className="font-mono text-[11px] text-slate-400">Route Map: / • /dashboard • /day/12</span>
        </div>
      </footer>

    </div>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <MainLayout />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
