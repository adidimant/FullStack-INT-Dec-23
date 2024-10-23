import { memo, MouseEvent, useMemo } from "react";
import SumCard from "../sum-card/SumCard";
import sunny from "../../../../figma-svgs/sunny.svg";
import cloudy from "../../../../figma-svgs/cloudy.svg";
import rainy from "../../../../figma-svgs/rainy.svg";
import stormy from "../../../../figma-svgs/stormy.svg";
import partlyCloudy from "../../../../figma-svgs/partly-cloudy.svg";
import "./week.css";

function Week() {
  const delayArr = useMemo(() => [0.03, 0.06, 0.09, 0.12, 0.15, 0.18], []);

  const handleClick = (e: MouseEvent) => {
    document.querySelectorAll(".sum-card").forEach((c) => {
      c.classList.remove("selected");
    });

    e.currentTarget.classList.add("selected");
  };
  return (
    <>
      <section id="week">
        <div className="week-sum-container">
          <SumCard
            delay={0}
            clickFn={handleClick}
            className="selected"
            day="Sun"
            img={sunny}
            highest={26}
            lowest={12}
          />
          <SumCard
            delay={delayArr[0]}
            clickFn={handleClick}
            day="Mon"
            img={cloudy}
            highest={23}
            lowest={14}
          />
          <SumCard
            delay={delayArr[1]}
            clickFn={handleClick}
            day="Tue"
            img={rainy}
            highest={21}
            lowest={11}
          />
          <SumCard
            delay={delayArr[2]}
            clickFn={handleClick}
            day="Wed"
            img={stormy}
            highest={19}
            lowest={9}
          />
          <SumCard
            delay={delayArr[3]}
            clickFn={handleClick}
            day="Thu"
            img={sunny}
            highest={25}
            lowest={13}
          />
          <SumCard
            delay={delayArr[4]}
            clickFn={handleClick}
            day="Fri"
            img={cloudy}
            highest={24}
            lowest={12}
          />
          <SumCard
            delay={delayArr[5]}
            clickFn={handleClick}
            day="Sat"
            img={partlyCloudy}
            highest={22}
            lowest={10}
          />
        </div>
      </section>
    </>
  );
}

export default memo(Week);
