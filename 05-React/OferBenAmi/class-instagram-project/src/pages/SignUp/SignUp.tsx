import { memo } from "react"
import Navbar from "../generalComponents/NavBar/Navbar"
import Footer from '../generalComponents/Footer/Footer'

function SignUp() {
    return (
        <>
        <div className="login-page-container">
        <Navbar/>
        <main className="main">
        sign up page
        </main>
        <Footer />
        </div>
        </>
    )
}

export default memo(SignUp)
