import { memo } from "react";
import './Button.css';

type ButtonProps = {
  name: string;
  text: string;
  onClick?: () => void;
}


function Button({ name, text, onClick }: ButtonProps) {
  return (
    <button name={name} className="general-btn" onClick={onClick}>{text}</button>
  );
}

export default memo(Button);