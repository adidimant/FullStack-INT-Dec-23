import { memo } from "react";
import "./AuthPageFooter.css";

function AuthPageFooter() {
  return (
    <>
      <footer className="auth-footer">
        <div className="auth-footer-top">
          <a href="">Meta</a>
          <a href="">About</a>
          <a href="">Blog</a>
          <a href="">Jobs</a>
          <a href="">Help</a>
          <a href="">API</a>
          <a href="">Privacy</a>
          <a href="">Terms</a>
          <a href="">Locations</a>
          <a href="">Instagram Lite</a>
          <a href="">Threads</a>
          <a href="">Contact Uploading & Non-Users</a>
          <a href="">Meta Verified</a>
        </div>
        <div className="auth-footer-bottom">
          <select name="lang" id="lang">
            <option value="en">English</option>
          </select>
          <div className="footer-copyright-text">© 2024 Instagram from Meta</div>
        </div>
      </footer>
    </>
  );
}

export default memo(AuthPageFooter);
