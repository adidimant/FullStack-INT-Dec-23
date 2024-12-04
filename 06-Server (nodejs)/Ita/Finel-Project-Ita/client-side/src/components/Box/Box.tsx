import { memo, ReactNode } from "react";
import "./Box.css";
import { useThemeContext } from "../../context/theme-context";

type boxProp = {
    children: ReactNode;
    width?: string;
    height?: string;
    className?: string; 
};

function Box({ children, width, height, className }: boxProp) {
    const { theme } = useThemeContext();

    return (
        <div
            className={`${className} ${theme}-theme-box general-box`}
            style={{ width, height }}
        >
            {children}
        </div>
    );
}

export default memo(Box);