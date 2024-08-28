import LinkToCompanies from "./LinkToCompanies";
import NavBar from "../NavBar/NavBar";
export default function CompanyNotFound() {
	return (
		<>
			<NavBar />
			<div className="container">
				404 Company Page is not found
				<LinkToCompanies />
			</div>
		</>
	);
}
