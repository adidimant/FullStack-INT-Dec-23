import { memo } from "react";
import SumCard from "../sum-card/SumCard";
import MoreInfo from "../more-info/MoreInfo";
import "./forecast.css";

function Forecast() {
  return (
    <>
      <section id="forecast">
        <SumCard />
        <MoreInfo />
      </section>
    </>
  );
}

export default memo(Forecast);
