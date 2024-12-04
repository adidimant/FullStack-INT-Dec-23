import { memo, useState } from "react";
import { useThemeContext } from "../../context/theme-context";
import "./input.css"

type InputProps = {
    type: string;
    id: string;
    placeholder?: string;
    title?: string;
    fontSize?: string;
    width?: string;
    height?: string;
    isRequired?: boolean;
    fullFrame?: boolean;
    onBlur?: () => void;
    validate?: (value: unknown) => boolean;
    children?: React.ReactNode;
  };

  function Input({  type, id, placeholder, title, isRequired = false,  fullFrame = false, fontSize, width, height }: InputProps) {
    const { theme } = useThemeContext();
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      };
    
    const handleBlur = () => {
        setIsTouched(true);
      };
    
    const hasError = isRequired && isTouched && !value;
  
    return (
      <div className={`general-input ${theme}`}>
      <label htmlFor={id} className="input-title">
          {title}
      </label>
      <div className="input-wrapper">
          <input
              id={id}
              type={type}
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={placeholder}
              className={`input-field ${fullFrame ? 'full-frame' : ''} ${hasError ? 'error' : ''}`}
              style={{ fontSize: fontSize, width: width, height: height }}
          />
      </div>
      {hasError && <span className="error-message">Required field</span>}
      </div>
    );
  }
  
  export default memo(Input);