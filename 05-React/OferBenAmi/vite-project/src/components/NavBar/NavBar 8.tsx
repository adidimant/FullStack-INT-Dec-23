import { ReactNode } from "react";
import { Link } from "react-router-dom";
import './NavBar.scss'

export default function NavBar(): ReactNode {
	return (
		<>
			<div className="navbar">
				<ul>
					<li>
                    <Link to='/'>Home</Link>
					</li>
					<li>
                    <Link to='/Companies'>Companies</Link>
					</li>
					<li>
                    <Link to='/About'>About</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
