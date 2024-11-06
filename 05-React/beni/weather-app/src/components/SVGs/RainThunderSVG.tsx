import { memo } from "react";
import { svgPropType } from "../../types/svgPropTypes";

const RainThunderSVG = ({ className }: svgPropType) => {
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
        className="rainy-path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 23.3473C4.91752 21.8163 2 17.7615 2 13C2 6.92487 6.74949 2 12.6083 2C17.469 2 21.5661 5.38976 22.821 10.0139C22.9626 10.0047 23.1054 10 23.2493 10C26.9776 10 30 13.134 30 17C30 20.866 26.9776 24 23.2493 24C23.1658 24 23.0827 23.9984 23 23.9953V22H23.3029V21.9996C25.8359 21.9695 28 19.8105 28 17C28 14.1696 25.8053 12 23.2493 12C22.5272 12 21.8339 12.1732 21.2108 12.4855C21.1791 11.9037 21.0937 11.3367 20.9599 10.7899L20.9569 10.7911C20.0091 6.85004 16.5839 4 12.6083 4C7.92179 4 4 7.96046 4 13C4 16.6616 6.0703 19.7535 9 21.1706V23.3473Z"
        fill="currentColor"
      />
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
        d="M20.3609 26.9244C20.1533 27.4108 20.0009 27.9308 20.001 28.4091C20.0013 29.2877 20.6731 30 21.5015 30C22.33 30 23.0013 29.2877 23.001 28.4091C23.0009 27.9619 22.8327 27.4321 22.609 26.9252C22.1643 25.9175 21.5 25 21.5 25C21.5 25 20.8044 25.8856 20.3609 26.9244Z"
        fill="currentColor"
      />
      <path
        className="rainy-path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.36092 26.9244C9.15328 27.4108 9.0009 27.9308 9.00105 28.4091C9.00132 29.2877 9.67311 30 10.5015 30C11.33 30 12.0013 29.2877 12.001 28.4091C12.0009 27.9619 11.8327 27.4321 11.609 26.9252C11.1643 25.9175 10.5 25 10.5 25C10.5 25 9.80441 25.8856 9.36092 26.9244Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default memo(RainThunderSVG);
