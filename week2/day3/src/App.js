

import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import './App.css';
const cards = [
  { icon: '▪', title: 'Design system',    subtitle: 'UI / UX',     color: 'purple', body: 'Consolidate component libraries into a unified token-based design system.' },
  { icon: '▲', title: 'Growth pipeline',  subtitle: 'Marketing',   color: 'teal',   body: 'Track and optimize lead conversion funnels to improve acquisition targets.' },
  { icon: '●', title: 'API v3 launch',    subtitle: 'Engineering',  color: 'coral',  body: 'Ship the next generation API with improved rate limits and webhooks.' },
  { icon: '◆', title: 'Data warehouse',   subtitle: 'Data',         color: 'blue',   body: 'Migrate analytics infrastructure to a modern columnar store.' },
  { icon: '△', title: 'Mobile app',       subtitle: 'Product',      color: 'amber',  body: 'Build iOS and Android clients with offline support and real-time sync.' },
  { icon: '■', title: 'Compliance audit', subtitle: 'Legal',        color: 'green',  body: 'Complete SOC 2 Type II audit and update all data processing agreements.' },
];

const stats = [
  { label: 'Total users',     value: '12,480', change: '+8.2% this week'  },
  { label: 'Revenue',         value: '$84,320', change: '+12.5% this week' },
  { label: 'Active projects', value: '24',      change: '+3 new this week' },
];

export default function App() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark'; }
    catch { return false; }
  });

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add('dark') : root.classList.remove('dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); }
    catch {}
  }, [dark]);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 md:ml-56 flex flex-col">
        {/* Topbar */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-6 py-3.5 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-base font-medium">Dashboard overview</h1>
          <div className="flex items-center gap-3">
            <span className="bg-violet-600 text-white text-xs px-2.5 py-0.5 rounded-full">Live</span>
            <button
              onClick={() => setDark(prev => !prev)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400 hover:bg-violet-50 dark:hover:bg-violet-950 hover:text-violet-600 hover:border-violet-300 transition-all duration-200"
            >
              <span>{dark ? '☀' : '☽'}</span>
              <span>{dark ? 'Light mode' : 'Dark mode'}</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-medium mb-1">Good morning, Jamie</h2>
            <p className="text-sm text-gray-400">Here is what is happening across your workspace today.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-1">{s.label}</p>
                <p className="text-2xl font-medium">{s.value}</p>
                <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">{s.change}</p>
              </div>
            ))}
          </div>

          {/* Cards grid — 3 col desktop, 1 col mobile */}
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Featured projects</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}