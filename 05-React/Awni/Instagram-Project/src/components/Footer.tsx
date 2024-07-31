import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <a href='#'>Meta</a>
                <a href='#'>About</a>
                <a href='#'>Blog</a>
                <a href='#'>Jobs</a>
                <a href='#'>Help</a>
                <a href='#'>API</a>
                <a href='#'>Privacy</a>
                <a href='#'>Terms</a>
                <a href='#'>Locations</a>
                <a href='#'>Instagram Lite</a>
                <a href='#'>Threads</a>
                <a href='#'>Contact Uploading & Non-Users</a>
                <a href='#'>Meta Verified</a>
            </div>
            <div className="lang-select">
                <select>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="de">German</option>
                </select>
                <div className='footer-copy'>
                    <p>© 2024 Instagram from Meta</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
