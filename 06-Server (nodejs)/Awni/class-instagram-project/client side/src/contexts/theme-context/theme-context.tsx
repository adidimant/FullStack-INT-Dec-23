import { ReactNode, createContext, useState, useMemo, useContext } from "react";
import '../../App.css';
import ReactSwitch from "react-switch";

/*
 1) createContext()
 2) build & export the provider component, that we should wrap it around the desired children (that needs this context)
 3) useContext in one of the child components
 */


type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme,
  dispatch: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = useMemo(() => {
    return () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  }, [theme]);


  const contextData: ThemeContextType = useMemo(() => ({
    theme,
    dispatch: setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={contextData}>
      <div className="App" id={theme}>
        {children}
        <span className="theme-btn"><ReactSwitch checked={theme === 'light'} onChange={toggleTheme} /></span>
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

