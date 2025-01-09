import { memo, useCallback, useEffect, useState } from "react";
import sidebarItems from "./dataLink";
import { Popper } from "@mui/material";
import altLogo from "../../assets/altLogo.png";
import "./SideBar.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ButtonModeTheme from "../ButtonModeTheme/ButtonModeTheme";
import { axiosClient } from "../../axiosClient";
import { jwtDecode } from "jwt-decode";
import { useAuthContext } from "../../context/Auth-context";
import SettingsIcon from '@mui/icons-material/Settings';
import { extractUserIdFromToken } from "../../utils";


function SideBar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popupLinks, setPopupLinks] = useState([]); // Array of links displayed in Popper
  const [selectedLinks, setSelectedLinks] = useState([]); // Links passed to Navbar
  const [closeTimeout, setCloseTimeout] = useState(null); // Timeout for delayed popup close
  const [userDetails, setUserDetails] = useState<any>(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState<HTMLElement | null>(null);
  const { logout } = useAuthContext();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userId = extractUserIdFromToken()

        const response = await axiosClient.get(`/api/users/details/${userId}`);;
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  
  // Handle mouse enter
  const handleMouseEnter = useCallback((event: React.MouseEvent<HTMLElement>, links: PopupLink[]) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setAnchorEl(event.currentTarget);
    setPopupLinks(links);
  }, [closeTimeout]);

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


  const handleLogout = () => {
    if (logout) {
      logout();
    }
  };

  const handleSettingsMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setSettingsAnchorEl(null);
    }, 500);
    setCloseTimeout(timeout);
  };

  const settingsLinks = [
    { url: '/update-details', text: 'עדכון פרטים' },
    { url: '/logout', text: 'התנתק' }
  ];

  

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

        {/* Company Logo Section */}
        <div className="companySection">
        <div>
          <ButtonModeTheme />
        </div>
        <div 
            onClick={handleSettingsMouseEnter}
            onMouseLeave={handleSettingsMouseLeave}
          >
            <SettingsIcon sx={{ 
              color: 'orange',
              fontSize: '28px',
              transition: 'all 0.3s ease',
              '&:hover': {
                fontSize: '32px',
                filter: 'drop-shadow(0px 0px 3px rgba(0,0,0,0.3))',
                transform: 'scale(1.1)'
              }
            }} />
          </div>
          {userDetails && (
            <>
              <img
                src={userDetails.logoUrl || altLogo}
                className="companyLogo"
                alt="Company Logo"
                onError={(e) => (e.currentTarget.src = altLogo)} // Fallback to altLogo on error
              />
              <div>{userDetails.companyName}</div>
            </>
          )}
        </div>

        



      
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

      <Popper
          open={Boolean(settingsAnchorEl)}
          anchorEl={settingsAnchorEl}
          placement="right-start"
          onMouseEnter={() => {
            if (closeTimeout) {
              clearTimeout(closeTimeout);
              setCloseTimeout(null);
            }
          }}
          onMouseLeave={handleSettingsMouseLeave}
          modifiers={[
            {
              name: "offset",
              options: { offset: [0, 20] },
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
            {settingsLinks.map((link, index) => (
              <div
                key={index}
                className="popupItem"
                onClick={() => {
                  if (link.url === '/logout') {
                    handleLogout();
                  }
                }}
              >
                <Link to={link.url}>{link.text}</Link>
              </div>
            ))}
          </div>
        </Popper>

      
      
    </div>
    </>
    
  );
}

export default memo(SideBar);
