import { memo, useEffect, useMemo, useState } from "react";

function WeekDay() {
  const daysArr: string[] = useMemo(
    () => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    []
  );

  const [day, setDay] = useState<string>(getWeekDay());

  function getWeekDay(): string {
    const dayNumber: number = new Date().getDay();
    const today: string = daysArr[dayNumber];
    return today;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDay(getWeekDay());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  return <>{day}</>;
}

export default memo(WeekDay);
