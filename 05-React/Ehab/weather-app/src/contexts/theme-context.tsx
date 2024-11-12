import { ReactNode, createContext, useState, useMemo, useContext } from "react";

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme,
  dispatch?: (theme: Theme) => void;
}

export const ThemeContext = createContext({
  theme: 'dark' as Theme,
});

function ThemeProvider ({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  const contextData: ThemeContextType = useMemo(() => ({
    theme,
    dispatch: setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={contextData} >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;


export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // if there is no value the hook is not being called within a function component that is rendered within a `ThemeContext`
    throw new Error('useThemeContext must be used within App');
  }
  return context;
};

