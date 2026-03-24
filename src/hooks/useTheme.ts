import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light' | null;

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('shadowsmp-theme');
    return saved === 'dark' || saved === 'light' ? saved : null;
  });

  useEffect(() => {
    if (theme) {
      localStorage.setItem('shadowsmp-theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  const setTheme = (t: 'dark' | 'light') => {
    setThemeState(t);
  };

  return { theme, setTheme };
}
