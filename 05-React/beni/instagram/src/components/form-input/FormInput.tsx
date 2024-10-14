import { ChangeEvent, CSSProperties, memo, useRef } from "react";
import "./FormInput.css";

interface FormInputProps {
  id: string;
  labelText: string;
  inputType: string;
  style?: CSSProperties;
}

function FormInput({ id, labelText, inputType, style }: FormInputProps) {
  const labelRef = useRef<HTMLLabelElement | null>(null);

  const handleAnimation = (e: ChangeEvent<HTMLInputElement>) => {
    if (labelRef.current) {
      if (e.target.value) {
        labelRef.current.classList.add("active");
      } else {
        labelRef.current.classList.remove("active");
      }
    }
  };

  return (
    <>
      <div className="form-input-wrapper" style={style}>
        <label htmlFor={id} className="form-label" ref={labelRef}>
          {labelText}
        </label>
        <input
          type={inputType}
          name={id}
          id={id}
          className="form-input"
          onChange={handleAnimation}
        ></input>
      </div>
    </>
  );
}

export default memo(FormInput);
