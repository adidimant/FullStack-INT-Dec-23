import { memo } from "react";
import { useThemeContext } from "../../context/theme-context";
import "./TextArea.css";

type TextAreaProps = {
    id: string;
    placeholder?: string;
    rows: number;
    title?: string;
    fontSize?: string;
    width?: string;
    height?: string;
    isRequired?: boolean;
    fullFrame?: boolean;
    onBlur?: () => void;
    validate?: (value: unknown) => boolean;
    children?: React.ReactNode;
  };

function TextArea({ id, placeholder, title, fullFrame = true, fontSize, width, height, rows }: TextAreaProps) {
    const { theme } = useThemeContext();
   


    return (
        <div className={`general-input ${theme}`}>
            <label htmlFor={id} className="input-title">
                {title}
            </label>
            <textarea
                id={id}
                placeholder={placeholder}
                className={`input-field ${fullFrame ? 'full-frame' : ''}`}
                rows={rows}
                style={{ fontSize: fontSize, width: width, height: height }}
            />
        </div>
    );
}

export default memo(TextArea)