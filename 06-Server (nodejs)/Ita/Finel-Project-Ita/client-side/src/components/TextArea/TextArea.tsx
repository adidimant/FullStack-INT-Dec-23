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
    value?: string;
    isRequired?: boolean;
    fullFrame?: boolean;
    onBlur?: () => void;
    validate?: (value: unknown) => boolean;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    children?: React.ReactNode;
  };

function TextArea({ id, placeholder, title, fullFrame = true, fontSize, width, height, onChange ,value, rows }: TextAreaProps) {
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
                value={value}
                onChange={onChange}
                style={{ fontSize: fontSize, width: width, height: height }}
            />
        </div>
    );
}

export default memo(TextArea)