import { memo } from "react";
import "./jellyLoader.css";

const JellyLoader = () => {
  return (
    <>
      <div className="jelly-loader-container">
        <svg width="0" height="0" className="jelly-loader-svg">
          <defs>
            <filter id="uib-jelly-ooze">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="ooze"
              />
              <feBlend in="SourceGraphic" in2="ooze" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default memo(JellyLoader);
