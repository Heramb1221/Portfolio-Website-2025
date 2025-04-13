import { useState, useEffect } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDark(e.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDark(storedTheme === 'dark');
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 8;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 600);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading || !mounted) return null;

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      
      {/* Background tech symbols */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute text-xs font-mono ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {['</', '{', '}', 'H', '>', '<', '/>', '[]', '()', '&&', '||', '=>', '{}'][Math.floor(Math.random() * 13)]}
          </div>
        ))}
      </div>

      {/* Animated H and loading spinner */}
      <div className="relative mb-8">
        <div className="relative z-10 text-center">
          <div className={`text-8xl font-bold bg-clip-text text-transparent ${
            isDark 
              ? 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500' 
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
          }`}>
            H
          </div>
          <div className={`absolute -right-1 top-0 w-3 h-3 rounded-full ${
            isDark ? 'bg-blue-400' : 'bg-blue-600'
          } animate-pulse`}></div>
        </div>

        {/* Spinner Circles */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full 
          border-4 border-transparent animate-spin ${
            isDark 
              ? 'border-t-blue-500 border-r-indigo-500 border-b-purple-500 border-l-pink-500'
              : 'border-t-blue-600 border-r-indigo-600 border-b-purple-600 border-l-pink-600'
          }`} style={{ animationDuration: '3s' }}></div>

        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full 
          border-2 border-transparent animate-spin ${
            isDark 
              ? 'border-t-pink-500 border-r-purple-500 border-b-indigo-500 border-l-blue-500'
              : 'border-t-pink-600 border-r-purple-600 border-b-indigo-600 border-l-blue-600'
          }`} style={{ animationDuration: '5s', animationDirection: 'reverse' }}></div>

        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full blur-xl ${
          isDark ? 'bg-blue-500/20' : 'bg-blue-600/20'
        }`}></div>
      </div>

      {/* Progress Bar */}
      <div className={`w-64 h-2 rounded-full overflow-hidden mb-4 ${
        isDark ? 'bg-gray-700' : 'bg-gray-200'
      }`}>
        <div 
          className={`h-full relative ${
            isDark 
              ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' 
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
          }`} style={{ width: `${progress}%` }}>
          <div className="absolute inset-0 w-full h-full">
            <div className="w-1/2 h-full bg-white/30 blur-sm animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Progress Text */}
      <div className={`font-mono ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Loading {Math.round(progress)}%
      </div>

      {/* Theme Toggle */}
      <button 
        onClick={() => {
          const newTheme = !isDark;
          setIsDark(newTheme);
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
          }
        }}
        className={`mt-8 p-2 rounded-full ${
          isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'
        }`}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
    </div>
  );
}
