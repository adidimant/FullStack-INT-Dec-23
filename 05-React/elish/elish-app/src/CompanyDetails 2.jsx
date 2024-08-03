import companiesArray from './CompanyData';
import NavBar from './NavBar';
import './CompanyDetails.css'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


function CompanyDetails(){
    const pathParts = window.location.pathname.split('/');
    const companyName = pathParts[pathParts.length -1].toLowerCase();
    const relevantCompany = companiesArray.find((company) => company.name.toLowerCase() === companyName);
   // const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(relevantCompany.location)}&output=embed`;

   const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 37.7749, // Default latitude
    lng: -122.4194 // Default longitude
  };


    return (
      <>
      <NavBar/>
      <div className='container1'>
      <img src={relevantCompany.logo} className='company-logo1' alt={relevantCompany.logo} />
      <div style={{ float: 'left' }}>
        <div className="company-field1">
          <u>Establishment Year:</u> {relevantCompany.establishYear}
        </div>
        <div className="company-field1">
        <u>Stock Price:</u> {relevantCompany.stockPrice}
        </div>
        <div className="company-field1">
          <u>Sectors:</u> {relevantCompany.sectors.join(", ")}
        </div>
        <div className="company-field1">
          <u>Description:</u> {relevantCompany.description}
        </div >
        <div className="company-field1">
          <u>Main employees:</u> {relevantCompany.mainEmployees.join(', ')}
        </div >
        <div className="company-field1">
          <u>Number Of Employees:</u> {relevantCompany.NumOfEmployees.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div className="company-field1">
          <u>Location:</u> {relevantCompany.location}
        </div>
      </div>
      <div className='graph-container1'>
          
      </div>
      <div className='googleMaps'>
      <LoadScript googleMapsApiKey="AIzaSyCY-7OeTg37AhbTWYrjD_9XTwTSDsST-YI">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={10}
              center={defaultCenter}
            >
              {/* Add markers or additional map features here if needed */}
            </GoogleMap>
          </LoadScript>
      </div>
      </div>
      </>
    )
};

export default CompanyDetails;