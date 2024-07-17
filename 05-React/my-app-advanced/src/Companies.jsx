import { Link } from "react-router-dom";
import CompanyBox from "./CompanyBox";
import companiesArray from "./companyData";
import "./Companies.css";

/*
 1) Flexbox with many companies & logos
 2) Company page with company details & graph of the stock price
*/
function Companies() {
	return (
		<div className="container">
			<div className="header">
				<div className="back-link">
					<Link to={"/"}>Back</Link>
				</div>
			</div>
			<div className="companies-board">
				<span>The top 100 companies are:</span>
				<div className="companies-flex">
					{companiesArray.map((companyData) => {
						return <CompanyBox data={companyData} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Companies;
