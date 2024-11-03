import { memo, ReactNode } from "react";
import "./switch.css";

interface SwitchProps {
  imgA?: string;
  imgB?: string;
  textA?: string;
  textAClassName?: string;
  textB?: string;
  textBClassName?: string;
  childrenA?: ReactNode;
  childrenB?: ReactNode;
  active?: string;
  clickFn?: () => void;
}

function Switch({
  imgA,
  imgB,
  textA,
  textAClassName,
  textB,
  textBClassName,
  childrenA,
  childrenB,
  active,
  clickFn,
}: SwitchProps) {
  return (
    <>
      <div className="switch-btn-container">
        <button className="switch-btn" onClick={clickFn}>
          <div className={`switch-btn-options-container ${active}`}>
            <div className="switch-btn-option">
              {childrenA}
              {imgA && <img src={imgA} className="switch-btn-img" />}
              {textA && <div className={textAClassName}>{textA}</div>}
            </div>

            <div className="switch-btn-option">
              {childrenB}
              {imgB && <img src={imgB} className="switch-btn-img" />}
              {textB && <div className={textBClassName}>{textB}</div>}
            </div>
          </div>
        </button>
      </div>
    </>
  );
}

export default memo(Switch);
