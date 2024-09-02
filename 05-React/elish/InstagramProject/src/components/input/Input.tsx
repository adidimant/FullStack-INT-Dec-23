import { memo, useState, ChangeEvent, useCallback } from "react";
import './Input.css';

type InputProps = {
  name: string;
  text: string;
  htmlFor: string;
  type: string;
  id: string;
  onBlur?: () => void;
  validate?: (value: unknown) => boolean;
  children?: React.ReactNode;
};

type ValidIcon = {
  icon: string;
  classNameIcon: string;
} | null;

function Input({ name, text, htmlFor, type, id, validate }: InputProps) {
  const [inputValue, setValue] = useState<string>("");
  const [validIcon, setValidIcon] = useState<ValidIcon>(null);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    }, []);

    const handleValid = useCallback(() => {
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
  }, [inputValue, validate]);

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