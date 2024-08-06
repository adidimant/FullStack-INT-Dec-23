import { memo, useState, ChangeEvent } from "react";
import "./Input.css";

type InputProps = {
  name: string;
  text: string;
  htmlFor: string;
  type: string;
  id: string;
  onBlur?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void; // add onChange function to the props 
  validate?: (value: unknown) => boolean;
  children?: React.ReactNode;
};

type ValidIcon = {
  icon: string;
  classNameIcon: string;
} | null;

function Input({ name, text, htmlFor, type, id, validate, onChange }: InputProps) { // add validate and onChange to the props 
  const [inputValue, setValue] = useState<string>("");
  const [validIcon, setValidIcon] = useState<ValidIcon>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) { // if onChange function exists - call it  
      onChange(event); // call the onChange function with the event  
    }
  };

  const handleValid = () => {
    if (!inputValue) {
      setValidIcon(null);
      return;
    }

    if (validate) {
      const isValid = validate(inputValue);
      if (isValid) {
        setValidIcon({ icon: "check_circle", classNameIcon: "iconV" });
      } else {
        setValidIcon({ icon: "cancel", classNameIcon: "iconX" });
      }
      // currently not supported for username: setValidIcon({ icon: "refresh", classNameIcon: "icon-refresh" });
    }
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={htmlFor} className={inputValue ? "active" : ""}>
        {text}
      </label>
      <input name={name} type={type} id={id} onChange={handleChange} onBlur={handleValid} />
      {validIcon && (
        <span className={`material-symbols-outlined validation-icon ${validIcon.classNameIcon}`}>
          {validIcon.icon}
        </span>
      )}
    </div>
  );
}

export default memo(Input);
