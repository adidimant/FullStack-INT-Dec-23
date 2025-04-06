import { Link } from "react-router-dom";
export default function LinkToCompanies() {
	return (
		<Link to={"/companies"}>
			<button className="back-btn">Go back to the companies page</button>
		</Link>
	);
}
