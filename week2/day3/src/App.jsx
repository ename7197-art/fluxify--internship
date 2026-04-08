import React, { useState, useEffect } from 'react';

function App() {
  // Task 2: Gucunga Dark Mode na LocalStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const cards = [
    { id: 1, title: "Imirimo", text: "Genzura imirimo yose igomba gukorwa uyu munsi." },
    { id: 2, title: "Ububiko", text: "Reba ibikoresho byose bihari n'ibibura." },
    { id: 3, title: "Raporo", text: "Soma raporo y'imikorere y'icyumweru." }
  ];

  return (
    // Task 1: Responsive Layout (Flexbox)
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      
      {/* Sidebar: Hidden on mobile, fixed on desktop (md:flex) */}
      <aside className="hidden md:flex flex-col w-64 bg-blue-600 dark:bg-gray-800 text-white p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-10">Fluxify Dash</h2>
        <nav className="space-y-4">
          <a href="#" className="block py-2 px-4 rounded bg-blue-700 dark:bg-gray-700">Ahabanza</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-blue-500">Igenamiterere</a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Ibiro by'Akazi</h1>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all cursor-pointer"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        {/* 3-column Grid (Task 1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Colored Header */}
              <div className="bg-blue-600 h-3 w-full"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{card.text}</p>
                {/* Styled Button with Hover */}
                <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Fungura
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;