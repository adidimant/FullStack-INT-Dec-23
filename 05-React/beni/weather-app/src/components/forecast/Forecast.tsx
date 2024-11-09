import { memo } from "react";
import SumCard from "../sum-card/SumCard";
import MoreInfo from "../more-info/MoreInfo";
import "./forecast.css";
import HourSelect from "../hour-select/HourSelect";

function Forecast() {
  return (
    <>
      <section id="forecast">
        <HourSelect />
        <SumCard />
        <MoreInfo />
      </section>
    </>
  );
}

export default memo(Forecast);
