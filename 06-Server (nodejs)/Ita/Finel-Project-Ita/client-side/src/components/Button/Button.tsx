import { memo, useMemo } from "react";
import { useThemeContext } from "../../context/theme-context";
import "./Button.css"


type ButtonProps = {
  name: string;
  text: string;
  onClick: () => void;
  width?: string;
  height?: string;
  img?: string;
  altImg?: string;
  className?: string;
  variant?: "filled" | "outlined";
};

function Button({ name, text, onClick, width, height, img, altImg, className, variant = "filled" }: ButtonProps) {
  const { theme } = useThemeContext();
  
  // create a style object - if provided width/height - it will be exist in the style object
  const styleObj = useMemo(() => ({
    ...(width && { width }),
    ...(height && { height }),
  }), [width, height]);

  return (
    <button name={name} className={`${className} ${theme}-theme-btn general-btn ${variant}`}  style={styleObj} onClick={onClick}>
      {img && <img src={img} alt={altImg} />}
      {text}
    </button>
  );
}

export default memo(Button);