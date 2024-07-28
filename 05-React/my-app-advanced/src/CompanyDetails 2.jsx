import './CompanyDetails.css';
import companiesArray from './companyData';

const NotFound = () => {
  return (
    <div style={{textAlign: 'center', fontSize: '24px', animation: 'spin 2s linear infinite'}}>
      <h1>Company not found - 404</h1>
      <span style={{fontSize: '48px', display: 'inline-block'}}>🤪</span>
    </div>
  );
}

function CompanyDetails() {
  const pathParts = window.location.pathname.split('/');
  const companyName = pathParts[pathParts.length-1].toLowerCase();

  const relevantCompany = companiesArray.find((company) => company.name.toLowerCase() === companyName);

  if (!relevantCompany) {
    return <NotFound />;
  }
  
  return (
    <div className="container">
			<img src={relevantCompany.logo} className='company-logo' alt={relevantCompany.logo} />
      <div style={{ float: 'left' }}>
        <div className="company-field">
          <u>Establishment Year:</u> {relevantCompany.establishYear}
        </div>
        <div className="company-field">
        <u>Stock Price:</u> {relevantCompany.stockPrice}
        </div>
        <div className="company-field">
          <u>Sectors:</u> {relevantCompany.sectors.join(", ")}
        </div>
        <div className="company-field">
          <u>Description:</u> {relevantCompany.description}
        </div >
        <div className="company-field">
          <u>Number Of Employees:</u> {relevantCompany.NumOfEmployees.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div className="company-field">
          <u>Location:</u> {relevantCompany.location}
        </div>
      </div>
      <div className='graph-container'>
          
      </div>
			<iframe
					src={relevantCompany.mapLocation}
          title='company-map'
					width="1100px"
					height="700"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
		</div>
  );
};

export default CompanyDetails;