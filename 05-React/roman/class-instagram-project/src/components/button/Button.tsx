import { memo, ReactNode } from "react";
import './Button.css';

type ButtonProps = {
  name: string;
  text: string;
  span: ReactNode;
  onClick: () => void;
}


function Button({ name, text, span,onClick }: ButtonProps) {
  return (
    <button name={name} className="general-btn" onClick={onClick}>{span}{text}</button>
  );
}

export default memo(Button);