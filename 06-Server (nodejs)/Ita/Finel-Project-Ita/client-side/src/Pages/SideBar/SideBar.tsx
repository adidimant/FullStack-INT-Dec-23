import { memo, useCallback, useMemo, useState } from "react";
import sidebarItems from "./dataLink";
import { Popper } from "@mui/material";
import "./SideBar.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ButtonModeTheme from "../ButtonModeTheme/ButtonModeTheme";



function SideBar() {
  const [anchorEl, setAnchorEl] = useState(null); // Anchor for Popper
  const [popupLinks, setPopupLinks] = useState([]); // Array of links displayed in Popper
  const [selectedLinks, setSelectedLinks] = useState([]); // Links passed to Navbar
  const [closeTimeout, setCloseTimeout] = useState(null); // Timeout for delayed popup close
  
  // Handle mouse enter
  const handleMouseEnter = (event, links) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout); // Clear any existing close timeout
      setCloseTimeout(null);
    }
    setAnchorEl(event.currentTarget); // Set anchor to the current element
    setPopupLinks(links); // Set links for the Popper
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setAnchorEl(null); // Close the Popper after 500ms
    }, 500);
    setCloseTimeout(timeout); // Store the timeout for cleanup
  };

  // Handle link click
  const handleLinkClick = (links) => {
    setSelectedLinks(links); // Set the selected links to display in Navbar
  };

  

  return (
    <>
    <Navbar popupLinks={selectedLinks}/>
    <div className="SideBarContainer">
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className="itemSideBar"
          onMouseEnter={(event) => handleMouseEnter(event, item.links)}
          onMouseLeave={handleMouseLeave}
        >
          <div>
            <img src={item.icon} className="iconSideBar" alt={item.label} />
          </div>
          <div>{item.label}</div>
        </div>
      ))}

      <div><ButtonModeTheme/></div>

      
      
      
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="right-start"
        onMouseEnter={() => {
          if (closeTimeout) {
            clearTimeout(closeTimeout);
            setCloseTimeout(null);
          }
        }}
        onMouseLeave={handleMouseLeave}
        modifiers={[
          {
              name: "offset",
              options: { offset: [0, 5] },
          },
          {
            name: "arrow",
            options: {
              element: ".customPopup::before" 
              },
          },
      ]}
      >
        <div className="customPopup">
          {popupLinks.map((link, index) => (
            <div
              key={index}
              className="popupItem"
              onClick={() => handleLinkClick(popupLinks)} // Pass the entire array to Navbar on click
            >
              <Link to={link.url}>
                {link.text}
              </Link>
            </div>
          ))}
        </div>
      </Popper>

      
      
    </div>
    </>
    
  );
}

export default memo(SideBar);
