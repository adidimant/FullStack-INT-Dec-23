import { ReactNode, memo } from "react";
import { Link } from "react-router-dom";
import './NavRow.css';

type NavRowProps = {
    className?: string;
    title: string;
    icon: ReactNode;
    isActive?: boolean;
    activeIcon?: ReactNode;
    extra?: ReactNode;
};

function NavRow({className, title, icon, isActive, activeIcon, extra}: NavRowProps): ReactNode {
    return (
      <div className={`nav-row-container ${className ? className : ''}`}>
        <Link to={'/'}>
            <div className={`nav-row ${isActive ? 'active' : ''}`}>
                <div className="nav-icon">{isActive && activeIcon ? activeIcon : icon}</div>
                <div className="nav-title">{title}</div>
                {extra ? <div className="nav-popout">{extra}</div> : ''}
            </div>
        </Link>
      </div>
    );
  }
  
  export default memo(NavRow);