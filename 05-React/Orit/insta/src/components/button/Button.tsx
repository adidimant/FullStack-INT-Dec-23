import { memo } from "react";
import './Button.css';

type ButtonProps = {
  name: string;
  text: string;
  onClick: () => void;
  icon?: string; // Add icon as an optional
}


function Button({ name, text, onClick }: ButtonProps) {
  return (
    <button 
    name={name} 
    className="general-btn" 
    onClick={onClick}>
      <span className={name}></span>
      {/*{icon && <img src={icon} alt="" className="button-icon" />}*/} {/* Conditionally render the icon */}
      {text}
    </button>
  );
}

export default memo(Button);