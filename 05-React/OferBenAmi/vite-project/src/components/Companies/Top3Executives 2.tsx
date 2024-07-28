export default function Top3Executives({relevantCompany}){
	return (
		<div className="company-field">
		Top 3 Executives: {relevantCompany.executives.map((executive: string[]) => (
			<div>
			Name: <strong>{executive[0]}, </strong>
			Role: <strong>{executive[1]}, </strong>
			</div>
		))}
	</div>
	)
}
