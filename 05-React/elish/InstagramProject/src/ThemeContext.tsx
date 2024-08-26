import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext('');

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const ToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      <div className={`App ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
