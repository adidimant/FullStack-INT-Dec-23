import { memo } from "react";
import { svgPropType } from "../../types/svgPropTypes";

const HumiditySVG = ({ className }: svgPropType) => {
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
        d="M23 20.3638C23 23.1811 20.1867 26 16 26C11.8133 26 9 23.1811 9 20.3638C9 17.4416 10.9006 13.8024 13.1345 10.6343C14.1442 9.20239 15.1575 7.95509 15.95 7.03368C16.7575 8.02709 17.8053 9.37938 18.8493 10.9055C19.9378 12.4967 20.9966 14.2398 21.7767 15.9363C22.5711 17.6638 23 19.1806 23 20.3638ZM7 20.3638C7 14.927 12.1312 8.37097 14.6448 5.48563C15.4601 4.5497 16 4 16 4C16 4 16.5172 4.57177 17.3037 5.52955C19.7979 8.56699 25 15.4867 25 20.3638C25 24.5812 20.9706 28 16 28C11.0294 28 7 24.5812 7 20.3638ZM11.4983 17H13.6499C13.2451 17.9239 13 18.8001 13 19.5455C13 20.6901 14.1196 22 16 22V24C13.2386 24 11 22.0057 11 19.5455C11 18.7246 11.191 17.86 11.4983 17Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default memo(HumiditySVG);
