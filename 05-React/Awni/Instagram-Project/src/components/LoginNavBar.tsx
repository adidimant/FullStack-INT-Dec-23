import { memo } from 'react'
import './LoginNavBar.css'


function LoginNavBar() {
  return (
    <div className="login-container">
      <div className="insta-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt="Instagram" />
      </div>
      <div className="nav-buttons">
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>
    </div>
  )
}

export default memo(LoginNavBar)
