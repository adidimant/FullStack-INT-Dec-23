import { memo, ReactNode } from "react";
import SunSVG from "../SVGs/SunSVG";
import PartlyCloudyDaySVG from "../SVGs/PartlyCloudyDaySVG";
import CloudySVG from "../SVGs/CloudySVG";
import FogSVG from "../SVGs/FogSVG";
import PatchyRainSVG from "../SVGs/PatchyRainSVG";
import SnowSVG from "../SVGs/SnowSVG";
import SleetSVG from "../SVGs/SleetSVG";
import DrizzleSVG from "../SVGs/DrizzleSVG";
import ThunderstormSVG from "../SVGs/ThunderstormSVG";
import BlowingSnowSVG from "../SVGs/BlowingSnowSVG";
import BlizzardSVG from "../SVGs/BlizzardSVG";
import HeavyRainSVG from "../SVGs/HeavyRainSVG";
import HailSVG from "../SVGs/HailSVG";
import RainThunderSVG from "../SVGs/RainThunderSVG";
import RainSVG from "../SVGs/RainSVG";
import MoonSVG from "../SVGs/MoonSVG";
import PartlyCloudyNightSVG from "../SVGs/PartlyCloudyNightSVG";

type WeatherIconProps = {
  code: string | undefined;
  night: boolean;
  className: string;
};

function WeatherIcon({ code, night, className }: WeatherIconProps): ReactNode {
  switch (code) {
    case "113":
      return night ? <MoonSVG className={className} /> : <SunSVG className={className} />;
    case "114":
      return <SunSVG className={className} />;
    case "116":
      return night ? (
        <PartlyCloudyNightSVG className={className} />
      ) : (
        <PartlyCloudyDaySVG className={className} />
      );
    case "119":
    case "122":
      return <CloudySVG className={className} />;
    case "143":
      return <FogSVG className={className} />;
    case "176":
    case "177":
      return <PatchyRainSVG className={className} />;
    case "179":
      return <SnowSVG className={className} />;
    case "182":
      return <SleetSVG className={className} />;
    case "185":
      return <DrizzleSVG className={className} />;
    case "200":
      return <ThunderstormSVG className={className} />;
    case "227":
      return <BlowingSnowSVG className={className} />;
    case "230":
      return <BlizzardSVG className={className} />;
    case "248":
    case "260":
      return <FogSVG className={className} />;
    case "263":
    case "266":
    case "281":
    case "284":
      return <DrizzleSVG className={className} />;
    case "293":
    case "296":
    case "299":
    case "302":
      return <RainSVG className={className} />;
    case "305":
    case "308":
      return <HeavyRainSVG className={className} />;
    case "311":
      return <RainSVG className={className} />;
    case "314":
      return <HeavyRainSVG className={className} />;
    case "317":
    case "320":
      return <SleetSVG className={className} />;
    case "323":
    case "326":
    case "329":
    case "332":
    case "335":
    case "338":
      return <SnowSVG className={className} />;
    case "350":
      return <HailSVG className={className} />;
    case "353":
    case "356":
      return <HeavyRainSVG className={className} />;
    case "359":
      return <HeavyRainSVG className={className} />;
    case "362":
    case "365":
      return <SleetSVG className={className} />;
    case "368":
    case "371":
      return <SnowSVG className={className} />;
    case "386":
    case "389":
      return <RainThunderSVG className={className} />;
    case "392":
    case "395":
      return <ThunderstormSVG className={className} />;
    default:
      return <div>N/A</div>;
  }
}

export default memo(WeatherIcon);
