import React, { useState, useEffect } from "react";
import BugForm from "./components/BugForm";
import BugList from "./components/BugList";

function App() {
  const [bugAdded, setBugAdded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center gap-2 text-green-700 dark:text-green-400">
            🐛 Bug Tracker
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <BugForm onSuccess={() => setBugAdded(!bugAdded)} />
        <BugList refresh={bugAdded} />
      </div>
    </div>
  );
}

export default App;
