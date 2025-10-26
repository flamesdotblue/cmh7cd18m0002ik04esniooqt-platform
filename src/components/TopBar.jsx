import React, { useCallback, useEffect, useState } from 'react';

export default function TopBar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = useCallback(() => {
    const html = document.documentElement;
    const next = !html.classList.contains('dark');
    html.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  }, []);

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-slate-950/70 border-b border-slate-200/60 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 rounded-md bg-emerald-500" />
          <span className="text-slate-900 dark:text-white font-semibold">Vclar</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
          <a href="#how-it-works" className="hover:text-slate-900 dark:hover:text-white">How it works</a>
          <a href="#features" className="hover:text-slate-900 dark:hover:text-white">Features</a>
          <a href="#demo" className="hover:text-slate-900 dark:hover:text-white">Demo</a>
          <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="hidden sm:inline-flex items-center justify-center rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-emerald-600 transition">Try Free</a>
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition">
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M21.64 13.02A9 9 0 1 1 10.98 2.36a7 7 0 1 0 10.66 10.66z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10-5a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1ZM5 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm12.95 6.36a1 1 0 0 1 0 1.41l-1.41 1.41a1 1 0 0 1-1.41-1.41l1.41-1.41a1 1 0 0 1 1.41 0ZM8.88 5.05a1 1 0 0 1 0-1.41L10.3 2.23a1 1 0 1 1 1.41 1.41L10.3 5.05a1 1 0 0 1-1.41 0Zm9.07-1.17a1 1 0 0 1 1.41 0l1.41 1.41a1 1 0 0 1-1.41 1.41l-1.41-1.41a1 1 0 0 1 0-1.41ZM5.05 15.12a1 1 0 0 1 1.41 0l1.41 1.41a1 1 0 1 1-1.41 1.41L5.05 16.53a1 1 0 0 1 0-1.41Z"/></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
