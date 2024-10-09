import companiesArray from "./CompanyData";
import CompanyBox from "./CompanyBox";
import './Companies.css';
import NavBar from "./NavBar";



/*
 1) Flexbox with many companies & logos
 2) Company page with company details & graph of the stock price
*/
function Companies() {
  return (
    <>
    <NavBar/>
    <div className="container">
      <div className="companies-board">
        <span>The top 100 companies are:</span>
        <div className="companies-flex">
          {companiesArray.map((companyData) => {
            return <CompanyBox data={companyData} />
          })}
        </div>
      </div>
    </div>
    </>
  );
}

export default Companies;

