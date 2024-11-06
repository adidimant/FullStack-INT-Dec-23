import { memo } from "react";
import { svgPropType } from "../../types/svgPropTypes";

const ThunderstormSVG = ({ className }: svgPropType) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="sunny-path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.168 16.4453L18.8321 17.5547L15.8685 22H20.9557L15.4773 29.5855L13.856 28.4145L17.0442 24H12.1315L17.168 16.4453Z"
        fill="currentColor"
      />
      <path
        className="rainy-path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 23.665C5.40237 22.4598 2 18.1419 2 13C2 6.92487 6.74949 2 12.6083 2C17.469 2 21.5661 5.38976 22.821 10.0139C22.9626 10.0047 23.1054 10 23.2493 10C26.9776 10 30 13.134 30 17C30 20.866 26.9776 24 23.2493 24C23.1658 24 23.0827 23.9984 23 23.9953V22H23.3029V21.9996C25.8359 21.9695 28 19.8105 28 17C28 14.1696 25.8053 12 23.2493 12C22.5272 12 21.8339 12.1732 21.2108 12.4855C21.1791 11.9037 21.0937 11.3367 20.9599 10.7899L20.9569 10.7911C20.0091 6.85004 16.5839 4 12.6083 4C7.92179 4 4 7.96046 4 13C4 17.0657 6.55261 20.4291 10 21.5772V23.665Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default memo(ThunderstormSVG);
