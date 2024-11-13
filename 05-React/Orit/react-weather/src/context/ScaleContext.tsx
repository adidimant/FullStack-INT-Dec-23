import { ReactNode, createContext, useState, useMemo, useContext } from "react";

type TempScale = 'C' | 'F';

type DistScale = 'Km' | 'Miles';

type ScaleContextType = {
  tempScale: TempScale,
  distScale: DistScale,
  setTempScale: (scale: TempScale) => void,
  setDistScale: (scale: DistScale) => void,
}

const ScaleContext = createContext<ScaleContextType | undefined>(undefined);

export const useScaleContext = (): ScaleContextType => {
  const context = useContext(ScaleContext);
  if (context === undefined) {
    // if there is no value the hook is not being called within a function component that is rendered within a `ThemeContext`
    throw new Error('useThemeContext must be used within App');
  }
  return context;
};

export function ScaleProvider ({ children }: { children: ReactNode }) {
  const [tempScale, setTempScale] = useState<TempScale>('C');
  const [distScale, setDistScale] = useState<DistScale>('Km');

  const contextData: ScaleContextType = useMemo(() => ({
    tempScale,
    distScale,
    setTempScale,
    setDistScale,
  }), [tempScale, distScale]);

  return (
    <ScaleContext.Provider value={contextData} >
      {children}
    </ScaleContext.Provider>
  );
}