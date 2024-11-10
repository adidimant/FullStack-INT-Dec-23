import { memo, useCallback } from "react";
import "./artMeter.css";

const ArcMeter = ({ value }: { value: string }) => {
  const isNumber = useCallback((value: string): number => {
    if (isNaN(Number(value))) {
      return 0;
    } else return Number(value);
  }, []);

  return (
    <>
      <div className="arc-meter-container">
        <div className="arc-meter-body">
          <div
            className="arc-meter-fill"
            style={{
              transform: `rotate(${isNumber(value) <= 12 ? (isNumber(value) / 12) * 180 : 180}deg`,
            }}
          ></div>
        </div>
        <div className="arc-meter-cover"></div>
        <div className="arc-meter-value">{value}</div>
      </div>
    </>
  );
};

export default memo(ArcMeter);
