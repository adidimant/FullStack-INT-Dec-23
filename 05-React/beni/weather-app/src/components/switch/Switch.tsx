import { memo, useCallback, useState } from "react";
import "./switch.css";

interface SwitchProps {
  imgA?: string;
  imgB?: string;
  textA?: string;
  textB?: string;
  classNameA?: string;
  classNameB?: string;
  clickFn?: () => void;
}

function Switch({ imgA, imgB, textA, textB, classNameA, classNameB, clickFn }: SwitchProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleBtnClick = useCallback(() => {
    setIsActive((active) => !active);
    if (clickFn) {
      clickFn();
    }
  }, [clickFn]);

  return (
    <>
      <div className="switch-btn-container">
        <button className="switch-btn" onClick={handleBtnClick}>
          <div
            className={`switch-btn-option a ${
              classNameA !== undefined ? classNameA : isActive ? "active" : ""
            }`}
          >
            {imgA && <img src={imgA} className="switch-btn-img" />}
            {textA && <div className="switch-btn-text">{textA}</div>}
          </div>

          <div
            className={`switch-btn-option b ${
              classNameB !== undefined ? classNameB : isActive ? "active" : ""
            }`}
          >
            {imgB && <img src={imgB} className="switch-btn-img" />}
            {textB && <div className="switch-btn-text">{textB}</div>}
          </div>
        </button>
      </div>
    </>
  );
}

export default memo(Switch);
