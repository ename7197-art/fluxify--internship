import React from 'react';

const colorMap = {
  purple: { header: 'bg-violet-50 dark:bg-violet-950', icon: 'bg-violet-600', title: 'text-violet-800 dark:text-violet-200' },
  teal:   { header: 'bg-teal-50 dark:bg-teal-950',     icon: 'bg-teal-600',   title: 'text-teal-800 dark:text-teal-200'   },
  coral:  { header: 'bg-orange-50 dark:bg-orange-950', icon: 'bg-orange-600', title: 'text-orange-800 dark:text-orange-200'},
  blue:   { header: 'bg-blue-50 dark:bg-blue-950',     icon: 'bg-blue-600',   title: 'text-blue-800 dark:text-blue-200'   },
  amber:  { header: 'bg-amber-50 dark:bg-amber-950',   icon: 'bg-amber-600',  title: 'text-amber-800 dark:text-amber-200' },
  green:  { header: 'bg-green-50 dark:bg-green-950',   icon: 'bg-green-600',  title: 'text-green-800 dark:text-green-200' },
};

export default function Card({ icon, title, subtitle, body, color = 'purple' }) {
  const c = colorMap[color] || colorMap.purple;
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className={`${c.header} px-4 py-3 flex items-center gap-3`}>
        <div className={`${c.icon} w-9 h-9 rounded-lg flex items-center justify-center text-white text-base`}>
          {icon}
        </div>
        <div>
          <p className={`text-sm font-medium ${c.title}`}>{title}</p>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </div>
      <div className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {body}
      </div>
      <div className="px-4 pb-4">
        <button className="w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-800 active:scale-95 text-white text-sm font-medium transition-all duration-150">
          View project
        </button>
      </div>
    </div>
  );
}