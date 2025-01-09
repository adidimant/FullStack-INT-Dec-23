import { memo, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Popper } from "@mui/material";

type NavbarProps = {
  popupLinks?: { url: string; text: string }[];
};

function Navbar({ popupLinks = [] }) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  // const [closeTimeout, setCloseTimeout] = useState(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  // const handleMouseLeave = () => {
  //   const timeout = setTimeout(() => {
  //     setAnchorEl(null); // Close the Popper after 500ms
  //   }, 1000);
  //   setCloseTimeout(timeout); // Store the timeout for cleanup
  // };

  // const handleMouseEnter = () => {
  //   if (closeTimeout) {
  //     clearTimeout(closeTimeout); // Prevent closing when the mouse enters the Popper
  //     setCloseTimeout(null);
  //   }
  // };


  const open = Boolean(anchorEl);
 

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
      
    </div>
  );
}

export default memo(Navbar);
