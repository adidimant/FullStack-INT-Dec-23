import { memo } from "react";
import { svgPropType } from "../../types/svgPropTypes";

const HeavyRainSVG = ({ className }: svgPropType) => {
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
        d="M2 13C2 17.3628 4.44938 21.1323 8 22.9107V20.6003C5.61019 19.0152 4 16.2291 4 13C4 7.96046 7.92179 4 12.6083 4C16.5839 4 20.0091 6.85004 20.9569 10.7911L20.9599 10.7899C21.0937 11.3367 21.1791 11.9037 21.2108 12.4855C21.8339 12.1732 22.5272 12 23.2493 12C25.8053 12 28 14.1696 28 17C28 18.7105 27.1984 20.1797 26 21.0745V23.3944C28.3573 22.3025 30 19.8501 30 17C30 13.134 26.9776 10 23.2493 10C23.1054 10 22.9626 10.0047 22.821 10.0139C21.5661 5.38976 17.469 2 12.6083 2C6.74949 2 2 6.92487 2 13ZM18.719 20.2026C18.9287 20.3237 19.2571 20.2708 19.4251 19.9798C19.5171 19.8204 19.6353 19.4894 19.721 18.9505C19.7551 18.7357 19.7808 18.5091 19.7995 18.2764C19.2154 18.6896 18.7729 19.1085 18.5588 19.4795C18.3908 19.7705 18.5093 20.0815 18.719 20.2026ZM19.7944 15.9217C20.8367 15.3377 21.7192 15.0042 21.7192 15.0042C21.7192 15.0042 21.8347 15.9432 21.8392 17.1264C21.8441 18.4226 21.7159 20.0116 21.157 20.9801C20.4541 22.198 18.915 22.6254 17.7192 21.9348C16.5235 21.2442 16.124 19.6971 16.8269 18.4792C17.4402 17.4164 18.7047 16.5323 19.7944 15.9217ZM12.1161 21.2203C12.3258 21.3414 12.6543 21.2885 12.8223 20.9975C12.9142 20.8381 13.0325 20.5071 13.1181 19.9682C13.1522 19.7534 13.178 19.5268 13.1966 19.2941C12.6126 19.7073 12.17 20.1262 11.9559 20.4972C11.788 20.7882 11.9064 21.0992 12.1161 21.2203ZM13.1916 16.9394C14.2339 16.3554 15.1164 16.0218 15.1164 16.0218C15.1164 16.0218 15.2318 16.9609 15.2363 18.1441C15.2413 19.4402 15.1131 21.0293 14.5541 21.9978C13.8513 23.2157 12.3121 23.6431 11.1164 22.9525C9.92065 22.2619 9.52113 20.7148 10.224 19.4969C10.8374 18.4341 12.1018 17.5499 13.1916 16.9394ZM21.6793 26.1129C21.5113 26.4039 21.1829 26.4567 20.9732 26.3356C20.7635 26.2145 20.645 25.9035 20.813 25.6125C21.0271 25.2415 21.4696 24.8227 22.0537 24.4095C22.0351 24.6421 22.0093 24.8687 21.9752 25.0836C21.8895 25.6225 21.7713 25.9535 21.6793 26.1129ZM23.9734 21.1372C23.9734 21.1372 23.0909 21.4708 22.0486 22.0548C20.9589 22.6653 19.6944 23.5495 19.0811 24.6122C18.3782 25.8301 18.7777 27.3772 19.9734 28.0678C21.1692 28.7584 22.7083 28.331 23.4112 27.1131C23.9701 26.1447 24.0983 24.5556 24.0934 23.2594C24.0889 22.0763 23.9734 21.1372 23.9734 21.1372ZM14.2549 27.9375C14.4645 28.0586 14.793 28.0058 14.961 27.7147C15.053 27.5554 15.1712 27.2244 15.2568 26.6855C15.291 26.4706 15.3167 26.244 15.3354 26.0113C14.7513 26.4246 14.3088 26.8434 14.0947 27.2144C13.9267 27.5054 14.0452 27.8164 14.2549 27.9375ZM15.3303 23.6566C16.3726 23.0727 17.2551 22.7391 17.2551 22.7391C17.2551 22.7391 17.3706 23.6781 17.3751 24.8613C17.38 26.1575 17.2518 27.7466 16.6929 28.715C15.99 29.9329 14.4509 30.3603 13.2551 29.6697C12.0594 28.9791 11.6599 27.432 12.3628 26.2141C12.9761 25.1514 14.2406 24.2672 15.3303 23.6566Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default memo(HeavyRainSVG);
