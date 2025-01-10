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
  value?: string | number | undefined; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onBlur?: () => void;
  validate?: (value: unknown) => boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  accept?: string;
};
  function Input({  type, id, placeholder, title, isRequired = false,  fullFrame = false, fontSize, width, height, value, onChange, disabled, accept }: InputProps) {
    const { theme } = useThemeContext();
    const [isTouched, setIsTouched] = useState(false);

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
              onChange={onChange}
              onBlur={handleBlur}
              placeholder={placeholder}
              className={`input-field ${fullFrame ? 'full-frame' : ''} ${hasError ? 'error' : ''}`}
              style={{ fontSize: fontSize, width: width, height: height }}
              disabled={disabled}
              accept={accept}
          />
      </div>
      {hasError && <span className="error-message">Required field</span>}
      </div>
    );
  }
  
  export default memo(Input);