import { memo, useEffect, useMemo, useState } from "react"
import Box from "../../components/Box/Box"
import "./Home.css"
import DataGraph from "./DataGraph/DataGraph"
import { Link } from "react-router-dom"
import altLogo from "../../assets/altLogo.png";
import clickAnimation from "../../assets/clickAnimation.gif"
import flowers from "../../assets/flowers.png"
import ExchangeRatesTable from "./ExchangeRatesTable/ExchangeRatesTable";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { axiosClient } from "../../axiosClient"
import { extractUserIdFromToken } from "../../utils"
import { useThemeContext } from "../../context/theme-context"

interface CompanyDetails {
    address: string;
    city: string,
    companyName: string, 
    companyNumber: string,
    fullName: string,
    profilePic: string
}

function Home() {
    const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(null);
    const [logoError, setLogoError] = useState(false);
    const { theme } = useThemeContext()
    
    useEffect(() => {
        const fetchCompanyDetails = async () => {
          try {
            const userId = extractUserIdFromToken();
            if (!userId) return;
    
            const response = await axiosClient.get(`/api/users/details/${userId}`);
            console.log("Server response:", response.data);
            setCompanyDetails(response.data);
            setLogoError(false); 
          } catch (error) {
            console.error("Error fetching company details:", error);
            setLogoError(true);
          }
        };
    
        fetchCompanyDetails();
      }, []);

    const linkStyle = useMemo(() => ({
    color: theme === 'dark' ? '#77c9c9' : '#0b6969', 
    }), [theme]);

    return (
        <>
        <div className="main">
            <div className="title-home">
                {companyDetails && (
                    <>
                    <div><img src={logoError ? altLogo : companyDetails.profilePic} className="logo-home"></img></div>
                    <div className="title-main1">
                    <div style={{fontWeight: "bolder"}}> היי {companyDetails.fullName}</div>
                    <div style={{fontSize: "20px"}}>אנחנו כאן לכל דבר.</div>
                </div>
                    </>
                )}
            </div>
                <Box width="1080px" className="flex-links">
                    <Link to="/new-invoice" className="links-home" style={linkStyle}>
                        חשבונית חדשה <ArrowBackIosIcon/>
                    </Link>
                    <Link to="/new-invoice" className="links-home" style={linkStyle}>
                        הצעת עבודה<ArrowBackIosIcon/>
                    </Link>
                    <Link to="/new-invoice" className="links-home" style={linkStyle}>
                        הוצאה חדשה<ArrowBackIosIcon/> 
                    </Link>
                </Box>
                <div>
                    <DataGraph/>
                </div>
                <div className="flex-bottom-home">
                    <div><Box width="300px" height="300px"><div className="flex3">
                        <div className="inspirationalPhrases">פשוט. מהיר. חכם. <br></br>כל מה שצריך בלחיצה אחת!</div>
                        <div><img style={{width: "90px", height: "90px"}} src={clickAnimation}/></div>
                        </div></Box></div>
                    <div><Box width="700px" height="300px">
                        <div><ExchangeRatesTable/></div>
                    </Box></div>
                    <div><Box width="400px" height="300px"><div className="flex3">
                        <div className="inspirationalPhrases" style={{fontSize: "25px"}}>להפוך את הכבד לקליל <br></br> חשבונית בקליק, בכל זמן ובכל מקום.</div>
                        <div><img style={{height: "210px"}} src={flowers}/></div>
                    </div></Box></div>

                    
                </div>
        </div>
        </>
    )
}

export default memo(Home)