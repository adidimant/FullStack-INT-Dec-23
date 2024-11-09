import { memo } from "react";
import "./hourSelect.css";

function HourSelect() {
  return (
    <>
      <section id="hour-select">
        <button className="hour-select-btn active">Currently</button>
        <button className="hour-select-btn">00:00</button>
        <button className="hour-select-btn">03:00</button>
        <button className="hour-select-btn">06:00</button>
        <button className="hour-select-btn">09:00</button>
        <button className="hour-select-btn">12:00</button>
        <button className="hour-select-btn">15:00</button>
        <button className="hour-select-btn">18:00</button>
        <button className="hour-select-btn">21:00</button>
      </section>
    </>
  );
}

export default memo(HourSelect);
