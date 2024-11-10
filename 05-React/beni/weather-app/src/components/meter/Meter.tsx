import { memo, useCallback } from "react";
import "./meter.css";

const Meter = ({ value }: { value: string }) => {
  const isNumber = useCallback((value: string): number => {
    if (isNaN(Number(value))) {
      return 0;
    } else return Number(value);
  }, []);

  return (
    <>
      <div className="meter-container">
        <div className="meter-body">
          <div className="meter-indicator" style={{ height: `${isNumber(value)}%` }}></div>
        </div>
      </div>
    </>
  );
};

export default memo(Meter);
