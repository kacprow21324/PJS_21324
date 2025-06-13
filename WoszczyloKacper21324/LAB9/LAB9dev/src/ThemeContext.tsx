import React, { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext<{ dark: boolean; toggleTheme: () => void } | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(prev => !prev);

  // dopinamy klasę do <html>
  useEffect(() => {
    const cls = 'dark';
    document.documentElement.classList.toggle(cls, dark);
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}