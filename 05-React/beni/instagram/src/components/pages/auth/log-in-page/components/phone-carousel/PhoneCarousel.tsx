import { useEffect, useMemo, useRef } from "react";
import phoneContainer from "../../../../../../assets/phone-container.png";
import screen1 from "../../../../../../assets/screenshot1.png";
import screen2 from "../../../../../../assets/screenshot2.png";
import screen3 from "../../../../../../assets/screenshot3.png";
import screen4 from "../../../../../../assets/screenshot4.png";
import "./phoneCarousel.css";

export default function PhoneCarousel() {
  const screenshots = useMemo<string[]>(() => [screen1, screen2, screen3, screen4], []);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const index = useRef<number>(0);

  useEffect(() => {
    function handleCarousel() {
      if (index.current == imgRefs.current.length) {
        index.current = 0;
      }

      imgRefs.current.forEach((img) => {
        if (img) {
          img.classList.remove("active");
        }
      });

      imgRefs.current[index.current]?.classList.add("active");
      index.current++;
    }

    index.current = 0;

    handleCarousel();

    const interval = setInterval(() => {
      handleCarousel();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [screenshots]);

  return (
    <>
      <div className="phone-container">
        <img className="phone-container-image" src={phoneContainer} alt="phone container" />
        <div className="screenshot-wrapper">
          {screenshots.map((shot, i) => (
            <img
              className="screenshot-image"
              src={shot}
              key={i}
              alt="screenshot"
              ref={(el) => (imgRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
