import { memo, useState } from "react";
import { useThemeContext } from "../../context/theme-context";
import "./InputSelect.css"

type SelectProps = {
  id: string;
  title?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  isRequired?: boolean;
  fullFrame?: boolean;
  withd?: string
};

function InputSelect({ id, title, options, isRequired = false, fullFrame = false, withd }: SelectProps) {
  const { theme } = useThemeContext();
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };



  return (
    <div className={`general-select ${theme}`}>
    {title && <label htmlFor={id} className="select-title">{title}</label>}
    <select
      id={id}
      value={value}
      onChange={handleChange}
      className={`select-field ${fullFrame ? "full-frame" : ""}`}
      style={{ width: withd }}
    >
      <option value="" disabled hidden>
        {options[0]?.label || "Select an option"}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
  );
}

export default memo(InputSelect);
