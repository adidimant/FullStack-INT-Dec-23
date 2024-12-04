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
  const id = open ? 'simple-popper' : undefined;

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


      <div>
        <button
          className={`iconPlus ${open ? "rotated" : ""}`}
          onClick={handleClick}
          // onMouseLeave={handleMouseLeave}
          aria-describedby={id}
          aria-expanded={open}
        >
        <AddIcon style={{ fontWeight: "500", fontSize: "45px" }} />
        </button>
        <Popper 
              id={id} 
              open={open} 
              anchorEl={anchorEl} 
              placement="left-start"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              >
          <div className="customPopup">
            <Link to="/new-invoice" className="popperLink">
              חשבונית חדשה
            </Link>
            <Link to="/new-quote" className="popperLink">
              הצעת מחיר חדשה
            </Link>
          </div>
        </Popper>
      </div>
      
    </div>
  );
}

export default memo(Navbar);
