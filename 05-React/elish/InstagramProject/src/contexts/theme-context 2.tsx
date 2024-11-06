import { ReactNode, createContext, useState, useMemo, useContext, useEffect } from "react";

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme,
  dispatch?: (theme: Theme) => void;
}

export const ThemeContext = createContext({
  theme: 'light' as Theme,
});

function ThemeProvider({ children }: { children: ReactNode }) {
  
  const storedTheme = localStorage.getItem('theme') as Theme | null;
  const [theme, setTheme] = useState<Theme>(storedTheme || 'light');

  useEffect(() => {
   
    localStorage.setItem('theme', theme);
  }, [theme]); 

  const contextData: ThemeContextType = useMemo(() => ({
    theme,
    dispatch: setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={contextData}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }
  return context;
};
