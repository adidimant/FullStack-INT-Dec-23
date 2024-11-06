import { createContext, useState, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface DayContextType {
  day: number;
  setDay: (day: number) => void;
}

export const DayContext = createContext<DayContextType>({ day: 1, setDay: () => {} });

export const DayProvider = ({ children }: { children: ReactNode }) => {
  const [day, setDay] = useState<number>(1);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setDay(1);
        break;
      case "/tomorrow":
        setDay(2);
        break;
      case "/in-2-days":
        setDay(3);
        break;
      default:
        setDay(1);
        break;
    }
  }, [location.pathname]);

  return <DayContext.Provider value={{ day, setDay }}>{children}</DayContext.Provider>;
};
