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
	executives: [string, string][];
	NumOfEmployees: number;
}
export const companiesArray: CompanyData[] = [
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
		NumOfEmployees: 1_608_000,
		executives:[['Jeff Bezos','Executive Chair'],['Andy Jassy','President and Chief Executive Officer'],['Brian T. Olsavsky','Senior Vice President and Chief Financial Officer']]
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
		NumOfEmployees: 221_000,
		executives:[['Judson Althoff','Executive Vice President and Chief Commercial Officer'],['Kathleen Hogan','Executive Vice President and Chief Human Resources Officer'],['Amy Hood','Executive Vice President and Chief Financial Officer']],
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
		NumOfEmployees: 7_096,
		executives:[['Rene Haas','Chief Executive Officer'],['Jason Child','Executive Vice President and Chief Financial Officer'],['Kirsty Gill','Chief People Officer']],
	},
	{
		name: "Meta",
		establishYear: 2004,
		stockPrice: 489.79,
		sectors: ["cpus"],
		logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png",
		description:
			"Meta Platforms, Inc., doing business as Meta, and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California",
		location: "Cambridge, Massachusetts, United States",
		NumOfEmployees: 67_317,
		executives:[['Mark Zuckerberg','Founder, Chairman and Chief Executive Officer'],['Nick Clegg','President, Global Affairs'],['Susan Li','Chief Financial Officer']],
	},
	{
		name: "Adobe",
		establishYear: 1982,
		stockPrice: 566.54,
		sectors: ["cpus"],
		logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Adobe_Systems_Logo_002.svg/1280px-Adobe_Systems_Logo_002.svg.png",
		description:
			"Adobe Inc., formerly Adobe Systems Incorporated, is an American computer software company based in San Jose, California. It offers a wide range of programs from web design tools, photo manipulation and vector creation, through to video/audio editing, mobile app development, print layout and animation software.",
		location: "San Jose, California, United States",
		NumOfEmployees: 29_945,
		executives:[['Shantanu Narayen','Chair and Chief Executive Officer'],['Scott Belsky','Chief Strategy Officer and EVP, Design & Emerging Products'],['Anil Chakravarthy','President, Digital Experience Business']],
	},
	{
		name: "MondayCom",
		establishYear: 2014,
		stockPrice: 237.16,
		sectors: ["cpus"],
		logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png",
		description:
			"Monday.com Ltd. is a cloud-based platform that allows users to create their own applications and project management software. ",
		location: "Tel Aviv-Yafo",
		NumOfEmployees: 1_854,
		executives:[['Roy Mann','Co-Founder & Co-CEO'],['Eran Zinman','Co-Founder & Co-CEO'],['Eliran Glazer','CFO']],
	},
	{
		name: "Apple",
		establishYear: 1976,
		stockPrice: 234.82,
		sectors: ["cpus"],
		logo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/apple_logo_icon_168588.png",
		description:
			"Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. ",
		location: "Cupertino, California",
		NumOfEmployees: 154_000,
		executives:[['Tim Cook','Chief Executive Officer'],['Katherine Adams','Senior Vice President and General Counsel'],['Eddy Cue','Senior Vice President Services']],
	},
	{
		name: "Nvidia",
		establishYear: 1993,
		stockPrice: 126.36,
		sectors: ["cpus"],
		logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/NVIDIA_logo.svg",
		description:
			"Nvidia Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California, and incorporated in Delaware.",
		location: "Santa Clara, California, United States",
		NumOfEmployees: 29_600,
		executives:[['Jensen Huang','Founder, President, and CEO'],['Chris A. Malachowsky','Founder and NVIDIA Fellow'],['Colette Kress','EVP and Chief Financial Officer']],
	},
	{
		name: "Google",
		establishYear: 1998,
		stockPrice: 185.50,
		sectors: ["cpus"],
		logo: "https://pngimg.com/d/google_PNG19644.png",
		description:
			"Google LLC is an American multinational corporation and technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, consumer electronics, and artificial intelligence.",
		location: "Mountain View, California, United States",
		NumOfEmployees: 182_502,
		executives:[['Sundar Pichai','Chief Executive Officer'],['Philipp Schindler','Chief Business Officer'],['Don Harrison','President, Corporate Development']],
	},
	{
		name: "Samsung",
		establishYear: 1969,
		stockPrice: 87.100,
		sectors: ["cpus"],
		logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1024px-Samsung_Logo.svg.png",
		description:
			"Samsung specializes in the production of a wide variety of consumer and industry electronics, including appliances, digital media devices, semiconductors, memory chips, and integrated systems.",
		location: "Suwon-si, South Korea",
		NumOfEmployees: 270_372,
		executives:[['Jong-Hee Han','Vice Chairman & CEO'],['Tae-Moon Roh','President & Head of Mobile eXperience'],['Hark-Kyu Park','President & CFO (DX)']],
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
