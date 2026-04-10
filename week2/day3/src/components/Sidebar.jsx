import React from 'react';

const navItems = [
  { icon: '▪', label: 'Dashboard', active: true },
  { icon: '▲', label: 'Analytics' },
  { icon: '●', label: 'Projects' },
  { icon: '◆', label: 'Messages' },
  { icon: '△', label: 'Reports' },
  { icon: '■', label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 h-screen fixed left-0 top-0">
      <div className="flex items-center gap-2 px-5 py-6">
        <div className="w-2 h-2 rounded-full bg-violet-600" />
        <span className="text-lg font-medium text-violet-600">Nucleus</span>
      </div>
      <nav className="flex flex-col gap-1 px-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-all duration-150 border-l-2
              ${item.active
                ? 'bg-violet-50 dark:bg-violet-950 text-violet-600 dark:text-violet-300 border-violet-600'
                : 'text-gray-400 dark:text-gray-500 border-transparent hover:bg-violet-50 dark:hover:bg-violet-950 hover:text-violet-600'
              }`}
          >
            <span className="w-4 text-center">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-auto px-4 py-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-medium">
            JD
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Jamie Doe</p>
            <p className="text-xs text-gray-400">Product Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
}