import { ReactNode } from "react";
import NavBar from "../NavBar/NavBar";
import CompanyBox from "./CompaniesBox/CompaniesBox";
import "./Companies.scss";

export interface CompanyData {
	name: string;
	establishYear: number;
	stockPrice: number;
	sectors: string[];
	logo: string;
	description: string;
    location: string;
}
const companiesArray: CompanyData[] = [
	{
		name: "Amazon",
		establishYear: 1994,
		stockPrice: 194.49,
		sectors: [
			"e-commerce",
			"cloud computing",
			"online advertising",
			"digital streaming",
		],
		logo: "https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png",
		description:
			"Amazon.com, Inc., doing business as Amazon, is an American multinational technology company",
		location: "Seattle, Washington, United States",
	},
	{
		name: "Microsoft",
		establishYear: 1985,
		stockPrice: 453.55,
		sectors: ["cpus"],
		logo: "https://bellosound.com/content/uploads/Microsoft-Logo-PNG-Transparent.png",
		description:
			"Microsoft Corporation is an American multinational corporation and technology company headquartered in Redmond, Washington. Its best-known software products are the Windows line of operating systems, the Microsoft 365 suite of productivity applications, the Azure cloud computing platform and the Edge web browser",
		location: "Redmond, Washington, United States",
	},
	{
		name: "Arm",
		establishYear: 1990,
		stockPrice: 181.18,
		sectors: ["cpus"],
		logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png",
		description:
			"Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.",
		location: "United Kingdom, Cambridge, United Kingdom",
	},
	{
		name: "Arm",
		establishYear: 1990,
		stockPrice: 181.18,
		sectors: ["cpus"],
		logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png",
		description:
			"Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.",
		location: "United Kingdom, Cambridge, United Kingdom",
	},
	{
		name: "Arm",
		establishYear: 1990,
		stockPrice: 181.18,
		sectors: ["cpus"],
		logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png",
		description:
			"Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.",
		location: "United Kingdom, Cambridge, United Kingdom",
	},
];

async function getCompanyData() {
	const data = await fetch("https://api.thecompaniesapi.com/v1/companies");
	const companies = await data.json();
	console.log(companies);
	return companies;
}
getCompanyData()

export default function Companies(): ReactNode {
	return (
		<>
			<NavBar />
			<h1>This is the Companies Page</h1>
			<div className="companies-board">
				The top 10 companies are:
				<div className="companies-flex">
                    {companiesArray.map((companie) => {
                        return (
                            <CompanyBox data= {companie}/>
                        )
                    })}
                </div>
			</div>
		</>
	);
}
