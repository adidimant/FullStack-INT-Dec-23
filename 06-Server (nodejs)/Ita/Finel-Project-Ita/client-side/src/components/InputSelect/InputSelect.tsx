import { memo } from "react";
import { useThemeContext } from "../../context/theme-context";
import "./InputSelect.css";

type SelectProps = {
  id: string;
  title?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  isRequired?: boolean;
  fullFrame?: boolean;
  width?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function InputSelect({
  id,
  title,
  options,
  isRequired = false,
  fullFrame = false,
  width,
  value,
  onChange,
}: SelectProps) {
  const { theme } = useThemeContext();

  return (
    <div className={`general-select ${theme}`}>
      {title && <label htmlFor={id} className="select-title">{title}</label>}
      <select
        id={id}
        value={value || ""}
        onChange={onChange}
        className={`select-field ${fullFrame ? "full-frame" : ""}`}
        style={{ width }}
        required={isRequired}
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
