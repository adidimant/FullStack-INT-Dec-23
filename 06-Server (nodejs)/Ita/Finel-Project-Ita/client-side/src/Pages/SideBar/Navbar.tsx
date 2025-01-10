import { memo } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'




function Navbar({ popupLinks = [] }) {

  if (!popupLinks) {
    return <div className="navBarContainer"></div>;
  }

  return (
    <div className="navBarContainer">
      
      <div className="navBarTop">
      {popupLinks.map((link, index) => (
       <Link 
       key={index}
       to={link.url} 
       className="navLink"
     >
       {link.text}
     </Link>
      ))}
      </div> 
      <div className="logo"><img src={logo} style={{height: '75px'}}></img></div>
      
    </div>
  );
}

export default memo(Navbar);
