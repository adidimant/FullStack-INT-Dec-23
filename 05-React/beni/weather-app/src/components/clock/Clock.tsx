import { memo, useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState<string>(getCurrentTime());

  function getCurrentTime(): string {
    const now = new Date();
    let hours: number | string = now.getHours();
    let minutes: number | string = now.getMinutes();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <>{time}</>;
}

export default memo(Clock);
