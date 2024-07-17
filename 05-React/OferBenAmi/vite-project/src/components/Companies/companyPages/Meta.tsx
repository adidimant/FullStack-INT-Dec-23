import { ReactNode } from "react";
import { companiesArray } from "../Companies";
import { CompanyData } from "../Companies";
import MainCompanyDetails from "../MainCompanyDetails";
import CompanyNotFound from "../CompanyNotFound";

export default function Meta(): ReactNode {
	const relevantCompany: CompanyData | undefined = companiesArray.find(
		(company) => company.name.toLocaleLowerCase() == "meta"
	);
	if (relevantCompany) {
		return (
			<MainCompanyDetails relevantCompany={relevantCompany}/>
		);
	} else {
		return (
			<CompanyNotFound/>
		);
	}
}
