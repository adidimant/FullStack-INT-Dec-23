import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { UnitType } from "../types/unitTypes";

type UnitContextType = {
  unit: UnitType;
  toggleUnit?: () => void;
};

export const UnitContext = createContext<UnitContextType>({ unit: "metric" });

export const UnitProvider = ({ children }: { children: ReactNode }) => {
  const savedUnit: string | null = localStorage.getItem("defaultUnit") as UnitType;
  const defaultUnit: UnitType = useMemo(() => {
    if (savedUnit == "metric" || savedUnit == "imperial") {
      return savedUnit;
    }
    return "metric";
  }, [savedUnit]);
  const [unit, setUnit] = useState<UnitType>(defaultUnit);
  const toggleUnit = useCallback(() => {
    setUnit(unit == "metric" ? "imperial" : "metric");
  }, [unit]);

  const unitContextData: UnitContextType = useMemo(
    () => ({
      unit,
      toggleUnit,
    }),
    [unit, toggleUnit]
  );

  useEffect(() => {
    localStorage.setItem("defaultUnit", unit);
  }, [unit]);

  return <UnitContext.Provider value={unitContextData}>{children}</UnitContext.Provider>;
};
