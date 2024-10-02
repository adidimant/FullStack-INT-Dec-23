import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type of the context data
interface refreshContextType {
  value: boolean;
  setValue: (value: boolean) => void;
}

// Create the context 
const refreshContext = createContext<refreshContextType>({
  value: false,
  setValue: () => {},
});

// Create a provider component
interface refreshProviderProps {
  children: ReactNode;
}

export const RefreshProvider: React.FC<refreshProviderProps> = ({ children }) => {
  const [value, setValue] = useState(false);

  return (
    <refreshContext.Provider value={{ value, setValue }}>
      {children}
    </refreshContext.Provider>
  );
};

// Create a custom hook for easier context consumption
export const useRefreshContext = () => {
  const context = useContext(refreshContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
