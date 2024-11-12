import { createContext, ReactNode, useContext, useState } from "react";
import { UnitType } from "../types/types";

// Define the context type
type UnitContextType = {
    unit: UnitType;
    dispatch: React.Dispatch<React.SetStateAction<UnitType>>;
};

// Create the context with an undefined initial value
const UnitContext = createContext<UnitContextType | undefined>(undefined);

// Define the provider component
type UnitProvider = {
    children: ReactNode;
};

// Set default values for `unit`
const defaultUnit: UnitType = {
  Celsius: true,
  Fahrenheit: false,
  KMs: true,
  Miles: false,
};

export const UnitProvider: React.FC<UnitProvider> = ({ children }) => {
    const [unit, dispatch] = useState<UnitType>(defaultUnit);
  
    return (
      <UnitContext.Provider value={{ unit, dispatch }}>
        {children}
      </UnitContext.Provider>
    );
};

// Custom hook to use the context
export const useUnitContext = () => {
    const context = useContext(UnitContext);
    if (!context) {
      throw new Error('useUnitContext must be used within a MyDataProvider');
    }
    return context;
};