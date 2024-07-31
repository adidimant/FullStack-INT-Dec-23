import Footer from "../components/Footer"
import LoginForms from "../components/LoginForms"
import LoginNavBar from "../components/LoginNavBar"
import { memo } from "react"
function HomePage() {
  return (
    <div>
      <LoginNavBar />
      <LoginForms />
      <Footer />
    </div>
  )
}

export default memo(HomePage)
