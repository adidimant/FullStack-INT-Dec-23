import { memo, useMemo } from "react";
import { useThemeContext } from "../../contexts/theme-context";
import './Button.css';

type ButtonProps = {
  name: string;
  text: string;
  onClick: () => void;
  width?: string;
  height?: string;
  img?: string;
  altImg?: string;
  className?: string;
};

function Button({ name, text, onClick, width, height, img, altImg, className }: ButtonProps) {
  // create a style object - if provided width/height - it will be exist in the style object
  const styleObj = useMemo(() => ({
    ...(width && { width }),
    ...(height && { height }),
  }), [width, height]);

  const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);
  return (
    //<button name={name} className={`${className} general-btn`} style={styleObj} onClick={onClick}>
    <button name={name} className={ isDark ? `${className} general-btn-dark` : `${className} general-btn`} style={styleObj} onClick={onClick}>
      {img && <img src={img} alt={altImg} />}
      {text}
    </button>
  );
}

export default memo(Button);