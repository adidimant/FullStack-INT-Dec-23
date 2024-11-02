import { memo, useState, ChangeEvent } from "react";
import "./FormInput.css";

type FormInputProps = {
  className?: string;
  name: string;
  text: string;
  htmlFor: string;
  type: string;
  id: string;
  onBlur?: () => void;
  validate?: (value: string) => boolean;
};

type ValidIcon = {
  icon: string;
  classNameIcon: string;
} | null;

function FormInput({ className, name, text, htmlFor, type, id, validate }: FormInputProps) {
  const [inputValue, setValue] = useState<string>("");
  const [validIcon, setValidIcon] = useState<ValidIcon>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    handleValid(event.target.value);
  };

  const handleValid = (value: string) => {
    if (!value) {
      console.log("entered if");
      setValidIcon(null);
      return;
    }

    if (validate) {
      const isValid = validate(value);
      if (isValid) {
        setValidIcon({ icon: "check_circle", classNameIcon: "iconV" });
      } else {
        setValidIcon({ icon: "cancel", classNameIcon: "iconX" });
      }
      // currently not supported for username: setValidIcon({ icon: "refresh", classNameIcon: "icon-refresh" });
    }
  };

  return (
    <div className={`form-input-wrapper ${className || ""}`}>
      <label htmlFor={htmlFor} className={inputValue ? "active" : ""}>
        {text}
      </label>
      <input name={name} type={type} id={id} onChange={handleChange} />
      {validIcon && (
        <span className={`material-symbols-outlined validation-icon ${validIcon.classNameIcon}`}>
          {validIcon.icon}
        </span>
      )}
    </div>
  );
}

export default memo(FormInput);
