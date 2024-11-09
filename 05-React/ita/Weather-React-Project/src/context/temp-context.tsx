import { ReactNode, createContext, useState, useMemo, useContext } from "react";

type Temp = 'C' | 'F';

type TempContextType = {
  temp: Temp,
  dispatch?: (unit: Temp) => void;
}

export const TempContext = createContext({
  temp: 'C' as Temp,
});

function TempProvider ({ children }: { children: ReactNode }) {
  const [temp, setTemp] = useState<Temp>('C');

  const contextData: TempContextType = useMemo(() => ({
    temp,
    dispatch: setTemp,
  }), [temp]);

  return (
    <TempContext.Provider value={contextData} >
      {children}
    </TempContext.Provider>
  );
}

export default TempProvider;


export const useTempContext = (): TempContextType => {
  const context = useContext(TempContext);
  if (context === undefined) {
    // if there is no value the hook is not being called within a function component that is rendered within a `ThemeContext`
    throw new Error('useTempContext must be used within App');
  }
  return context;
};

