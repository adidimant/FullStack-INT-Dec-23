import { Link, useMatch, useResolvedPath } from "react-router-dom"


function NavBar() {
    return (
        <nav className="nav">
            <Link className="link" to="/">Site Name</Link>
            <ul>

                <CustomLink to="/pricing">Pricing</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>

        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath =  useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (

        <li className={isActive ? "active" : ""}>
            <Link className="link" to={to}{...props}>{children}</Link>
        </li>
    )
}

export default NavBar;