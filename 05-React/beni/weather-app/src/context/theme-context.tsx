import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";

type ThemeType = "light" | "dark";
type ThemeContextType = {
  theme: ThemeType;
  toggleTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({ theme: "light" });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const savedTheme: string | null = localStorage.getItem("defaultTheme") as ThemeType;
  const defaultTheme: ThemeType = useMemo(() => {
    if (savedTheme == "light" || savedTheme == "dark") {
      return savedTheme;
    }
    return "light";
  }, [savedTheme]);
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);
  const toggleTheme = useCallback(() => {
    setTheme(theme == "light" ? "dark" : "light");
  }, [theme]);

  const themeContextData: ThemeContextType = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  useEffect(() => {
    localStorage.setItem("defaultTheme", theme);
  }, [theme]);
  return <ThemeContext.Provider value={themeContextData}>{children}</ThemeContext.Provider>;
};
