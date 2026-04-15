// App.jsx
import React, { useState, useEffect } from 'react';

const DarkModeToggle = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all duration-300 hover:scale-105"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

const App = () => {
  const cards = [
    { id: 1, title: "First Card", description: "This is the first card. It contains important information about our services. Click the button below to learn more.", color: "bg-blue-600" },
    { id: 2, title: "Second Card", description: "This is the second card. It contains important information about our services. Click the button below to learn more.", color: "bg-blue-600" },
    { id: 3, title: "Third Card", description: "This is the third card. It contains important information about our services. Click the button below to learn more.", color: "bg-blue-600" },
    { id: 4, title: "Fourth Card", description: "This is the fourth card. It contains important information about our services. Click the button below to learn more.", color: "bg-blue-600" },
    { id: 5, title: "Fifth Card", description: "This is the fifth card. It contains important information about our services. Click the button below to learn more.", color: "bg-blue-600" },
    { id: 6, title: "Sixth Card", description: "This is the sixth card. It contains important information about our services. Click the button below to learn more.", color: "bg-blue-600" }
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <aside className={`
        fixed md:relative w-64 bg-gray-900 dark:bg-gray-950 text-white h-full z-10 
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
      `}>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-700 dark:border-gray-800 pb-4">
            Our Menu
          </h2>
          <nav>
            <ul className="space-y-3">
              <li><a href="#" className="block py-2 px-4 hover:bg-blue-600 rounded transition duration-300">Home</a></li>
              <li><a href="#" className="block py-2 px-4 hover:bg-blue-600 rounded transition duration-300">About Us</a></li>
              <li><a href="#" className="block py-2 px-4 hover:bg-blue-600 rounded transition duration-300">Services</a></li>
              <li><a href="#" className="block py-2 px-4 hover:bg-blue-600 rounded transition duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </aside>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      <main className="flex-1">
        <div className="bg-white dark:bg-gray-800 shadow-md p-4 md:hidden">
          <div className="flex justify-between items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              ☰ Menu
            </button>
            <DarkModeToggle theme={theme} onToggle={toggleTheme} />
          </div>
          <h1 className="text-xl font-bold text-center mt-2 text-gray-800 dark:text-white">Our Dashboard</h1>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md p-6 hidden md:flex md:justify-between md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Our Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Welcome to our platform!</p>
          </div>
          <DarkModeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map(card => (
              <div key={card.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`${card.color} p-4`}>
                  <h3 className="text-white text-xl font-bold">{card.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 dark:text-gray-300">{card.description}</p>
                </div>
                <div className="p-4 pt-0">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-semibold">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;