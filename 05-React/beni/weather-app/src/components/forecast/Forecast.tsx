import { memo } from "react";
import SumCard from "../sum-card/SumCard";
import "./forecast.css";

function Forecast() {
  return (
    <>
      <section id="forecast">
        <SumCard />
        <button className="advanced-btn">More Info</button>
      </section>
    </>
  );
}

export default memo(Forecast);
