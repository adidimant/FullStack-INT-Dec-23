import { memo } from "react";
import "./formSeperator.css";

function FormSeperator() {
  return (
    <>
      <div className="form-seperator">
        <span className="form-seperator-left"></span>
        OR
        <span className="form-seperator-right"></span>
      </div>
    </>
  );
}

export default memo(FormSeperator);
