import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";

interface HourContextType {
  hour: string;
  changeHour: (hour: string) => void;
}

export const HourContext = createContext<HourContextType>({
  hour: "currently",
  changeHour: () => {},
});

export const HourProvider = ({ children }: { children: ReactNode }) => {
  const savedHour: string | null = localStorage.getItem("defaultHour");
  const defaultHour = useMemo(() => {
    if (savedHour == null) {
      return "currently";
    }
    return savedHour;
  }, [savedHour]);

  const [hour, setHour] = useState<string>(defaultHour);

  const changeHour = useCallback((selectedHour: string) => {
    localStorage.setItem("defaultHour", selectedHour);
    setHour(selectedHour);
  }, []);

  useEffect(() => {
    localStorage.setItem("defaultHour", defaultHour);
  }, [defaultHour, savedHour]);

  return <HourContext.Provider value={{ hour, changeHour }}>{children}</HourContext.Provider>;
};
