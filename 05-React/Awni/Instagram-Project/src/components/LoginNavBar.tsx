import { memo } from 'react'
import './LoginNavBar.css'
import { Link } from 'react-router-dom'


function LoginNavBar() {



  return (
    <div className="login-container">
      <div className="insta-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt="Instagram" />
      </div>
      <div className="nav-buttons">
        <button className="login">
          <Link to={'/login'}> Log in</Link>
        </button>
        <button className="signup">
          <Link to={'/register'}>Sign up</Link>
        </button>
      </div>
    </div>
  )
}

export default memo(LoginNavBar)

