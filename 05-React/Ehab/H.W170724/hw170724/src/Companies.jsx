import { Link } from "react-router-dom";
import CompanyBox from "./CompanyBox";
import companiesArray from './companyData';
import './Companies.css';



/*
 1) Flexbox with many companies & logos
 2) Company page with company details & graph of the stock price
*/
function Companies() {
  return (
    <div className="container">
      <div className="header">
        <div className="back-link"><Link to={'/'}></Link></div>
      </div>
      <div className="companies-board">
        <div className="title">The top 100 companies are:</div>
        <div className="companies-flex">
          {companiesArray.map((companyData, index) => {
            return <CompanyBox key={index} data={companyData} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Companies;

