import { memo } from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  name?: string;
  className?: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  img?: string;
  altImg?: string;
};

function Button({ text, name, className, onClick, width, height, img, altImg }: ButtonProps) {
  // create a style object - if provided width/height - it will be exist in the style object
  const styleObj = {
    ...(width && { width }),
    ...(height && { height }),
  };

  return (
    <button
      name={name}
      className={`general-btn ${className || ""}`}
      style={styleObj}
      onClick={onClick}
    >
      {img && <img src={img} alt={altImg} />}
      {text}
    </button>
  );
}

export default memo(Button);
