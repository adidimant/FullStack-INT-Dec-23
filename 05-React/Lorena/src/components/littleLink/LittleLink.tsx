import { memo } from "react";
import { Link } from "react-router-dom";
import "./LittleLink.css";

function LittleLink({ text, to }: any): JSX.Element {
    return (
      <Link className="LittleLink" to={to}>{text}</Link>
    )
  }

export default memo(LittleLink);