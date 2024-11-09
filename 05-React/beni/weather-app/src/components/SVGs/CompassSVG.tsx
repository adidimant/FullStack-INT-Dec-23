import { memo } from "react";
import { svgPropType } from "../../types/svgPropTypes";

const CompassSVG = ({ className, rotation }: svgPropType & { rotation: string }) => {
  return (
    <svg
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      width="50"
      height="50"
      viewBox="0 0 75 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75 61.3675C75 82.1505 58.2098 99 37.5 99C16.7902 99 0 82.1505 0 61.3675C0 32.3346 37.5 0 37.5 0C37.5 0 75 33.0716 75 61.3675ZM14.4091 50.124C14.4091 37.49 24.615 27.2481 37.2046 27.2481C49.7941 27.2481 60 37.49 60 50.124C60 62.7581 49.7941 73 37.2046 73C24.615 73 14.4091 62.7581 14.4091 50.124Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default memo(CompassSVG);
