import { memo } from "react";
import { Link } from "react-router-dom";
import "./LittleLink.css";

type LittleLinkProps = { text: string; to: string };

function LittleLink({ text, to }: LittleLinkProps): JSX.Element {
    return (
      <Link className="LittleLink" to={to}>{text}</Link>
    )
  }

export default memo(LittleLink);