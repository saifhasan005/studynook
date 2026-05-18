'use client'
import React, { useState, useEffect } from 'react';

export default function ThemeSwitching() {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = () => {
        setIsDark((prev) => {
            const nextDark = !prev;
            if (nextDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return nextDark;
        });
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-14 h-8 rounded-full bg-blue-400 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Toggle theme"
        >
        
            <span className={`absolute top-1 left-1 text-lg transition-all duration-300 ${
                isDark ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'
            }`}>
                ☀️
            </span>
            
          
            <span className={`absolute top-1 right-1 text-lg transition-all duration-300 ${
                isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-90'
            }`}>
                🌙
            </span>
            
            {/* Slider */}
            <span className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isDark ? 'translate-x-6' : 'translate-x-0'
            }`} />
        </button>
    );
}