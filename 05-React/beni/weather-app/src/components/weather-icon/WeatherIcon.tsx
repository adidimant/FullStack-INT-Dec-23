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
  desc: string | undefined;
  night: boolean;
  className: string;
};

function WeatherIcon({ desc, night, className }: WeatherIconProps): ReactNode {
  switch (desc) {
    case "Clear":
      return <MoonSVG className={className} />;
    case "Sunny":
      return <SunSVG className={className} />;
    case "Partly cloudy":
      return night ? (
        <PartlyCloudyNightSVG className={className} />
      ) : (
        <PartlyCloudyDaySVG className={className} />
      );
    case "Cloudy":
      return <CloudySVG className={className} />;
    case "Overcast":
      return <CloudySVG className={className} />;
    case "Mist":
      return <FogSVG className={className} />;
    case "Patchy rain nearby":
      return <PatchyRainSVG className={className} />;
    case "Patchy rain possible":
      return <PatchyRainSVG className={className} />;
    case "Patchy snow possible":
      return <SnowSVG className={className} />;
    case "Patchy sleet possible":
      return <SleetSVG className={className} />;
    case "Patchy freezing drizzle possible":
      return <DrizzleSVG className={className} />;
    case "Thundery outbreaks in nearby":
      return <ThunderstormSVG className={className} />;
    case "Thundery outbreaks possible":
      return <ThunderstormSVG className={className} />;
    case "Blowing snow":
      return <BlowingSnowSVG className={className} />;
    case "Blizzard":
      return <BlizzardSVG className={className} />;
    case "Fog":
      return <FogSVG className={className} />;
    case "Freezing fog":
      return <FogSVG className={className} />;
    case "Patchy light drizzle":
      return <DrizzleSVG className={className} />;
    case "Light drizzle":
      return <DrizzleSVG className={className} />;
    case "Freezing drizzle":
      return <DrizzleSVG className={className} />;
    case "Heavy freezing drizzle":
      return <DrizzleSVG className={className} />;
    case "Patchy light rain":
      return <RainSVG className={className} />;
    case "Light rain":
      return <RainSVG className={className} />;
    case "Moderate rain at times":
      return <RainSVG className={className} />;
    case "Moderate rain":
      return <RainSVG className={className} />;
    case "Heavy rain at times":
      return <HeavyRainSVG className={className} />;
    case "Heavy rain":
      return <HeavyRainSVG className={className} />;
    case "Light freezing rain":
      return <RainSVG className={className} />;
    case "Moderate or heavy freezing rain":
      return <HeavyRainSVG className={className} />;
    case "Light sleet":
      return <SleetSVG className={className} />;
    case "Moderate or heavy sleet":
      return <SleetSVG className={className} />;
    case "Patchy light snow":
      return <SnowSVG className={className} />;
    case "Light snow":
      return <SnowSVG className={className} />;
    case "Patchy moderate snow":
      return <SnowSVG className={className} />;
    case "Moderate snow":
      return <SnowSVG className={className} />;
    case "Patchy heavy snow":
      return <SnowSVG className={className} />;
    case "Heavy snow":
      return <SnowSVG className={className} />;
    case "Ice pellets":
      return <HailSVG className={className} />;
    case "Light rain shower":
      return <RainSVG className={className} />;
    case "Moderate or heavy rain shower":
      return <HeavyRainSVG className={className} />;
    case "Torrential rain shower":
      return <HeavyRainSVG className={className} />;
    case "Light sleet showers":
      return <SleetSVG className={className} />;
    case "Moderate or heavy sleet showers":
      return <SleetSVG className={className} />;
    case "Light snow showers":
      return <SnowSVG className={className} />;
    case "Moderate or heavy snow showers":
      return <SnowSVG className={className} />;
    case "Patchy light rain in area with thunder":
      return <RainThunderSVG className={className} />;
    case "Patchy light rain with thunder":
      return <RainThunderSVG className={className} />;
    case "Moderate or heavy rain in area with thunder":
      return <RainThunderSVG className={className} />;
    case "Moderate or heavy rain with thunder":
      return <RainThunderSVG className={className} />;
    case "Patchy light snow with thunder":
      return <ThunderstormSVG className={className} />;
    case "Moderate or heavy snow in area with thunder":
      return <ThunderstormSVG className={className} />;
    case "Moderate or heavy snow with thunder":
      return <ThunderstormSVG className={className} />;
    default:
      return <div>N/A</div>;
  }
}

export default memo(WeatherIcon);
