import { ReactNode } from "react";
import { companiesArray } from "../Companies";
import { CompanyData } from "../Companies";
import MainCompanyDetails from "../MainCompanyDetails";
import CompanyNotFound from "../CompanyNotFound";

export default function Samsung(): ReactNode {
	const relevantCompany: CompanyData | undefined = companiesArray.find(
		(company) => company.name.toLocaleLowerCase() == "samsung"
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
