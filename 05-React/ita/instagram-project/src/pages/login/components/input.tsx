import { memo, useState, ChangeEvent } from "react";
import "./input.css";

type InputProps = {
  name: string;
  text: string;
  htmlFor: string;
  type: string;
  id: string;
  onBlur?: () => void;
  children?: React.ReactNode;
};

type ValidIcon = {
  icon: string;
  classNameIcon: string;
} | null;

function Input({ name, text, htmlFor, type, id }: InputProps) {
  const [inputValue, setValue] = useState<string>("");
  const [validIcon, setValidIcon] = useState<ValidIcon>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const handleValid = () => {
      if (!inputValue) {
        setValidIcon(null);
      } else if (name === "Username" && inputValue.length < 5) {
        setValidIcon({ icon: "refresh", classNameIcon: "icon-refresh" });
      } else if (inputValue.length < 5) {
        setValidIcon({ icon: "cancel", classNameIcon: "iconX" });
      } else {
        setValidIcon({ icon: "check_circle", classNameIcon: "iconV" });
      }

    
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={htmlFor} className={inputValue ? "active" : ""}>
        {text}
      </label>
      <input name={name} type={type} id={id} onChange={handleChange} onBlur={handleValid} />
      {validIcon &&  <span className={`material-symbols-outlined validation-icon ${validIcon.classNameIcon}`}>
          {validIcon.icon}
        </span>}
    </div>
  );
}

export default memo(Input);