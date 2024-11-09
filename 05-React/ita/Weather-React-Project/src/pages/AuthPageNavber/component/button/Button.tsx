import { memo } from 'react';
import './Button.css';

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
    width?: string;
    height?: string;
    className?: string;
}

function Button ({ onClick, children, width = '100px', height = '40px', className } : ButtonProp) {
    return (
        <button 
            onClick={onClick} 
            style={{width, height}}
            className={`weather-button ${className}`}
        >
            {children}
        </button>
    );
};

export default memo(Button);