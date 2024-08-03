import { memo, useState, useEffect } from "react";
import HomePhones from "../../../../assets/home-phones.png";
import Screenshot1 from "../../../../assets/screenshot1.png";
import Screenshot2 from "../../../../assets/screenshot2.png";
import Screenshot3 from "../../../../assets/screenshot3.png";
import Screenshot4 from "../../../../assets/screenshot4.png";
import "./ScreenshotCarousel.css";

function ScreenshotCarousel() {
  const [prevScreenshot, setPrevScreenshot] = useState<string>(Screenshot1);
  const [nextScreenshot, setNextScreenshot] = useState<string>(Screenshot2);
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    const allScreenShots = [Screenshot1, Screenshot2, Screenshot3, Screenshot4];
    let index = 0;
    const interval = setInterval(() => {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 2000);
      if (index > 3) {
        index = 0;
      }
      setPrevScreenshot(allScreenShots[index]);
      if (index >= 3) {
        setNextScreenshot(allScreenShots[0]);
      } else {
        setNextScreenshot(allScreenShots[index + 1]);
      }
      index++;
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="phones-container">
      <img src={HomePhones} alt="phones" />
      <div className="screenshot-container">
        <img
          src={prevScreenshot}
          alt="screenshot-image"
          className={`screenshot prev ${isActive ? "active" : "disabled"}`}
        />
        <img
          src={nextScreenshot}
          alt="screenshot-image"
          className={`screenshot next ${isActive ? "disabled" : "active"}`}
        />
      </div>
    </div>
  );
}

export default memo(ScreenshotCarousel);
