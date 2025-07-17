// src/App.js
import React from 'react';
import ResumeBuilder from './components/resume/ResumeBuilder';
import { useTheme } from './context/ThemeContext'; // Import useTheme
import './App.css';

function App() {
  const { darkMode } = useTheme();
  
  return (
    <div className={`App min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'
    }`}>
      <ResumeBuilder />
    </div>
  );
}

export default App;