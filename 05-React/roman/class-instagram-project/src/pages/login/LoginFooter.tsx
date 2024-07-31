import { Link } from "react-router-dom";


function LoginFooter() {
    const links = [{
        name: "Meta",
        link: "https://about.meta.com/"
    }, {
        name: "About",
        link: "https://about.instagram.com/"
    }, {
        name: "Blog",
        link: ""
    }, {
        name: "Jobs",
        link: ""
    }, {
        name: "Help",
        link: ""
    }, {
        name: "API",
        link: ""
    }, {
        name: "Privacy",
        link: ""
    }, {
        name: "Terms",
        link: ""
    }, {
        name: "Locations",
        link: ""
    }, {
        name: "Instagram Lite",
        link: ""
    }, {
        name: "Threads",
        link: ""
    }, {
        name: "Contact",
        link: ""
    }, {
        name: "Uploading & Non-Users",
        link: ""
    }, {
        name: "Meta Verified",
        link: ""
    }, {
        name: " Settlement Agreements",
        link: ""

    }

    ]


    return (
        <footer className="login-footer">
        <div className="login-footer-top">
            {links.map((link, index) => (
                <div key={index}>
                    <Link to={link.link}>{link.name}</Link>
                </div>
            ))}
        </div>
        <div className="login-footer-bottom">
          <select name="lang" id="lang">
            <option value="en">English</option>
          </select>
          <div className="footer-copyright-text">© 2024 Instagram from Meta</div>
        </div>
        </footer>
    );
}

    export default LoginFooter