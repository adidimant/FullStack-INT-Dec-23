import Login from "./LoginForms/Login"
import LogingPage from "./LoginPage/LogingPage"
import './HomeLogin-Sigup.css'



function HomeLoginSigup() {

  return (
    <>
    <div className="App">
      <LogingPage />
    </div>

    <div className="form-container">
        
      <Login />
    </div>
    </>
  )
}

export default HomeLoginSigup


