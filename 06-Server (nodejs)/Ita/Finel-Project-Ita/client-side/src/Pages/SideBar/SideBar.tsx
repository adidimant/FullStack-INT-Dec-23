import { memo, useCallback, useEffect, useState } from "react";
import sidebarItems, { settingsLinks } from "./dataLink";
import { Popper } from "@mui/material";
import altLogo from "../../assets/altLogo.png";
import "./SideBar.css";
import Navbar from "./Navbar";
import menu from "../../assets/menu.png"
import { Link } from "react-router-dom";
import ButtonModeTheme from "../ButtonModeTheme/ButtonModeTheme";
import { axiosClient } from "../../axiosClient";
import { useAuthContext } from "../../context/Auth-context";
import SettingsIcon from '@mui/icons-material/Settings';
import { extractUserIdFromToken } from "../../utils";

interface CompanyDetails {
  companyName: string;
  profilePic: string; 
}

function SideBar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popupLinks, setPopupLinks] = useState([]);
  const [selectedLinks, setSelectedLinks] = useState([]);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState<HTMLElement | null>(null);
  const [logoError, setLogoError] = useState(false);
  const { logout } = useAuthContext();

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const userId = extractUserIdFromToken();
        if (!userId) return;

        const response = await axiosClient.get(`/api/users/details/${userId}`);
        console.log("Server response:", response.data);
        setCompanyDetails(response.data);
        setLogoError(false); // Reset error state when new data is fetched
      } catch (error) {
        console.error("Error fetching company details:", error);
        setLogoError(true);
      }
    };

    fetchCompanyDetails();
  }, []);

  const handleMouseEnter = useCallback(
    (event: React.MouseEvent<HTMLElement>, links: any[]) => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        setCloseTimeout(null);
      }
      setAnchorEl(event.currentTarget);
      setPopupLinks(links);
    },
    [closeTimeout]
  );

  const handleMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setAnchorEl(null);
    }, 500);
    setCloseTimeout(timeout);
  }, []);

  const handleLinkClick = useCallback((links: any[]) => {
    setSelectedLinks(links);
  }, []);

  const handleLogout = useCallback(() => {
    if (logout) {
      logout();
    }
  }, [logout]);

  const handleSettingsMouseEnter = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        setCloseTimeout(null);
      }
      setSettingsAnchorEl(event.currentTarget);
    },
    [closeTimeout]
  );

  const handleSettingsMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setSettingsAnchorEl(null);
    }, 500);
    setCloseTimeout(timeout);
  }, []);

  const handleLogoError = useCallback(() => {
    setLogoError(true);
  }, []);

  return (
    <>
      <Navbar popupLinks={selectedLinks}/>
      <div className="SideBarContainer">
        <div 
          className="itemSideBar"
          onClick={() => window.location.href = "/"} 
        >
          <div>
            <img src={menu} className="iconSideBar" alt="Home" />
          </div>
          <div>בית</div>
        </div>
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
          {companyDetails && (
            <>
              <img
                src={logoError ? altLogo : companyDetails.profilePic} 
                className="companyLogo"
                alt="Company Logo"
                onError={handleLogoError}
              />
              <div>{companyDetails.companyName}</div>
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
                onClick={() => handleLinkClick(popupLinks)}
              >
                <Link to={link.url}>{link.text}</Link>
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