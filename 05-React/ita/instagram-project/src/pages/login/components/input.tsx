import { memo, useState, ChangeEvent } from "react";
import "./input.css";

type InputProps = {
  name: string;
  text: string;
  htmlFor: string;
  type: string;
  id: string;
};

function Input({ name, text, htmlFor, type, id }: InputProps) {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={htmlFor} className={value ? "active" : ""}>
        {text}
      </label>
      <input name={name} type={type} id={id} onChange={handleChange} />
    </div>
  );
}

export default memo(Input);