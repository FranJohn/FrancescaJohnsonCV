'use client'
import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Apply dark mode preference from local storage, if available
    const savedDarkMode = localStorage.getItem('darkMode');
    setIsDarkMode(savedDarkMode === 'true');
  }, []);

  useEffect(() => {
    // Update the dark mode preference in local storage
    localStorage.setItem('darkMode', String(isDarkMode));

    // Apply dark mode styles
    const root = document.documentElement;
    root.style.setProperty('--background-color', isDarkMode ? '#333' : '#fff');
    root.style.setProperty('--text-color', isDarkMode ? '#fff' : '#333');
  }, [isDarkMode]);

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
