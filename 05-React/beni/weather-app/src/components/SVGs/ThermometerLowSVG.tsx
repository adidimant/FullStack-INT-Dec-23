import { memo } from "react";
import { svgPropType } from "../../types/svgPropTypes";

const ThermometerLowSVG = ({ className }: svgPropType) => {
  return (
    <svg
      className={className}
      width="43"
      height="87"
      viewBox="0 0 43 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33328 58.8281V10.6148C7.33328 5.30469 11.638 1 16.9481 1V1C22.2582 1 26.5629 5.30469 26.5629 10.6148V58.8281"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M26.5629 58.8281C30.0287 61.6295 32.2296 65.9154 32.2296 70.7189C32.2296 79.1586 25.3878 86.0004 16.9481 86.0004C8.50834 86.0004 1.66659 79.1586 1.66659 70.7189C1.66659 65.9154 3.86749 61.6295 7.33328 58.8281"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="14.5792" y="50" width="4.64483" height="20" rx="2.32241" fill="currentColor" />
      <path
        d="M25.7268 71.0904C25.7268 75.9388 21.7964 79.8692 16.9481 79.8692C12.0997 79.8692 8.16935 75.9388 8.16935 71.0904C8.16935 66.2421 12.0997 62.3117 16.9481 62.3117C21.7964 62.3117 25.7268 66.2421 25.7268 71.0904Z"
        fill="currentColor"
      />
      <path d="M35 24.6886H60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M35 17.4891H60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M35 10.2896H60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

export default memo(ThermometerLowSVG);
