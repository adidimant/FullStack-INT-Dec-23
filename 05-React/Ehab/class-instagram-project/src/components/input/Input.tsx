import { memo, useState, ChangeEvent, useCallback, useMemo } from "react";
import { useThemeContext } from "../../contexts/theme-context";
import "./Input.css";
import '../../contexts/theme-style.css'

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
  const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);

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
  const inputStyle = useMemo(()=>{
    return ({
      backgroundColor: isDark ? '#000000':'#ffffff',
      color: isDark ? '#ffffff':'#000000'
    })
  },[isDark])
  return (
    <div className= {isDark ? 'input-wrapper dark' : 'input-wrapper light'}>
      <label htmlFor={htmlFor} className={inputValue ? "active" : ""}>
        {text}
      </label>
      <input name={name} type={type} id={id} onChange={handleChange} onBlur={handleValid} style={inputStyle} />
      {validIcon &&  <span className={`material-symbols-outlined validation-icon ${validIcon.classNameIcon}`}>
          {validIcon.icon}
        </span>}
    </div>
  );
}

export default memo(Input);