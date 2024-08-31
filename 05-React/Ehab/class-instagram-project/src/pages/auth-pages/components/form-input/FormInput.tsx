import { memo, useState, ChangeEvent, useMemo } from "react";
import { useThemeContext } from '../../../../contexts/theme-context'
import "./FormInput.css";
import '../../../../contexts/theme-style.css'

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
  const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);

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

  const inputStyle = useMemo(()=>{
    return ({
      backgroundColor: isDark ? '#000000':'#ffffff',
      color: isDark ? '#ffffff':'#000000'
    })
  },[isDark])
  return (
    <div className={isDark ? `form-input-wrapper ${className || ""} dark`  : `form-input-wrapper ${className || ""} light`}>
      <label htmlFor={htmlFor} className={`${inputValue ? "active" : ""} ${isDark ? "dark" : "light"}`}>
        {text}
      </label>
      <input name={name} type={type} id={id} onChange={handleChange} style={inputStyle} />
      {validIcon && (
        <span className={`material-symbols-outlined validation-icon ${validIcon.classNameIcon} ${isDark ? "dark" : "light"}`}>
          {validIcon.icon}
        </span>
      )}
    </div>
  );
}

export default memo(FormInput);
