import { memo } from "react";
import './Button.css';

type ButtonProps = {
  name: string;
  text: string;
  span: Element;
  onClick: () => void;
}


function Button({ name, text, span,onClick }: ButtonProps) {
  return (
    <button name={name} className="general-btn" onClick={onClick}>{span}{text}</button>
  );
}

export default memo(Button);