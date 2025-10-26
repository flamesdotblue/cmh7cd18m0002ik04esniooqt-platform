import React, { useEffect } from 'react';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import InfoSections from './components/InfoSections';
import SocialProof from './components/SocialProof';
import PlansAndFooter from './components/PlansAndFooter';

export default function App() {
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen font-inter text-slate-800 bg-white dark:bg-slate-950 dark:text-slate-100">
      <TopBar />
      <Hero />
      <InfoSections />
      <SocialProof />
      <PlansAndFooter />
    </div>
  );
}
