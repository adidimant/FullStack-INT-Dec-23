import { memo } from "react";
import './Button.css';

type ButtonProps = {
  name: string;
  text: string;
  onClick: () => void;
  img?: string;
  altImg?: string;
  className?: string;
}


function Button({ name, text, onClick, img }: ButtonProps) {
  return (
    <button name={name} className="general-btn" onClick={onClick}>{img && <img src={img} />}{text}</button>
  );
}

export default memo(Button);
