import { memo } from "react";
import './Button.css';

type ButtonProps = {
  name: string;
  text: string;
  onClick: (value: unknown) => void;
  width?: string;
  height?: string;
  img?: string;
  altImg?: string;
  className?: string;
  btnDisabled?: boolean; // add btnDisabled to the props 
};

function Button({ name, text, onClick, width, height, img, altImg, className, btnDisabled }: ButtonProps) {// add btnDisabled to the props  
  // create a style object - if provided width/height - it will be exist in the style object
  const styleObj = {
    ...(width && { width }),
    ...(height && { height }),
    ...(btnDisabled === true ? { backgroundColor: '#ADD8E6'} : { backgroundColor: '#0095f6', cursor: 'pointer' }),// if btnDisabled is true - set backgroundColor to light blue and cursor to normal, else set backgroundColor to blue and cursor to pointer 

  };

  return (
    <button name={name} className={`${className} general-btn`} style={styleObj} onClick={onClick} disabled={btnDisabled}>
      {img && <img src={img} alt={altImg} />}
      {text}
    </button>
  );
}

export default memo(Button);