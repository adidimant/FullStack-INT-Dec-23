import { ReactNode } from "react";
import { companiesArray } from "./Companies";
import { CompanyData } from "./Companies";
import MainCompanyDetails from "./MainCompanyDetails";
import CompanyNotFound from "./CompanyNotFound";

export default function CompanyDetails(): ReactNode {
    const pathParts = window.location.pathname.split('/');
    const companyName = pathParts[pathParts.length-1].toLowerCase();
    console.log(companyName)
	const relevantCompany: CompanyData | undefined = companiesArray.find(
		(company) => company.name.toLocaleLowerCase() == companyName
	);
	if (!relevantCompany) {
		return <CompanyNotFound/>
	}
	return 	<MainCompanyDetails relevantCompany={relevantCompany}/>
}
