import NavBar from "../NavBar/NavBar"
import Top3Executives from "./Top3Executives"
import LinkToCompanies from "./LinkToCompanies"
import { CompanyData } from "./Companies"

export default function MainCompanyDetails({relevantCompany}: {relevantCompany:CompanyData}){
	return (
		<>
		<NavBar />
		<div className="container">
			<img src={relevantCompany.logo} alt={relevantCompany.logo} />
			<div className="company-field">
				Establishment Year: {relevantCompany.establishYear}
			</div>
			<div className="company-field">
				Stock Price: {relevantCompany.stockPrice}
			</div>
			<div className="company-field">
				Sectors: {relevantCompany.sectors.join(", ")}
			</div>
			<div className="company-field">
				Description: {relevantCompany.description}
			</div >
			<div className="company-field">
				Number Of Employees: {relevantCompany.NumOfEmployees.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
			</div>
			<Top3Executives relevantCompany={relevantCompany}/>
			<div className="company-field">
				Location: {relevantCompany.location}
			</div>
			<iframe
					src={relevantCompany.mapLocation}
					width="1300px"
					height="700"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			<LinkToCompanies/>
		</div>
	</>
	)
}
