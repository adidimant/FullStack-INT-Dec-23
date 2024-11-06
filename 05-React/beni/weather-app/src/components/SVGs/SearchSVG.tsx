import { memo } from "react";
import { svgPropType } from "../../types/svgPropTypes";

const SearchSVG = ({ className }: svgPropType) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
  >
    <g transform="translate(0,512) scale(0.1,-0.1)" fill="currentColor" stroke="none">
      <path d="M2150 4684 c-14 -2 -59 -9 -100 -15 -385 -55 -773 -253 -1060 -539 -282 -282 -460 -626 -537 -1035 -20 -111 -28 -408 -14 -531 52 -445 240 -836 550 -1145 335 -333 745 -521 1220 -559 442 -35 930 106 1275 367 l59 45 411 -410 c448 -447 437 -438 546 -430 105 8 180 83 188 188 8 109 16 98 -430 546 l-410 411 44 59 c318 425 443 998 333 1527 -165 798 -817 1405 -1624 1512 -94 13 -385 18 -451 9z m450 -440 c202 -33 448 -136 622 -261 109 -78 259 -229 338 -341 125 -176 215 -389 257 -607 24 -125 24 -405 -1 -530 -122 -618 -583 -1079 -1201 -1201 -125 -25 -405 -25 -530 -1 -300 58 -576 201 -784 406 -512 507 -593 1292 -194 1895 79 119 260 306 373 385 274 191 596 288 915 275 61 -3 153 -12 205 -20z" />
    </g>
  </svg>
);

export default memo(SearchSVG);
