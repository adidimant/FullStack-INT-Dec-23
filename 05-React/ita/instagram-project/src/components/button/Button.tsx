import { memo } from "react";
import './Button.css';

type ButtonProps = {
  name: string;
  text: string;
  onClick: () => void;
  img?: string;
  altImg?: string;
  className?: string;
};

function Button({ name, text, onClick, img, altImg, className }: ButtonProps) {
  return (
    <button name={name} className={`${className} general-btn`} onClick={onClick}>
      {img && <img src={img} alt={altImg} />}
      {text}
    </button>
  );
}

export default memo(Button);