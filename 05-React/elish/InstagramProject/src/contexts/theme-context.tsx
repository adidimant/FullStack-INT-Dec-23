import { ReactNode, createContext, useState, useMemo, useContext, useEffect } from "react";

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme,
  dispatch?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
});

function ThemeProvider({ children }: { children: ReactNode }) {
  // שימוש בנתון מה-localStorage כדי לקבוע את המצב ההתחלתי
  const storedTheme = localStorage.getItem('theme') as Theme | null;
  const [theme, setTheme] = useState<Theme>(storedTheme || 'light');

  useEffect(() => {
    // שמירת הנושא ב-localStorage בכל פעם שהוא משתנה
    localStorage.setItem('theme', theme);
  }, [theme]); // התלות היא ב-theme כדי שהקוד ירוץ רק כש-theme משתנה

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
