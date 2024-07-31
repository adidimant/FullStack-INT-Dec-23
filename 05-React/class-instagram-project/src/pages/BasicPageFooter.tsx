import { memo } from "react";

function BasicPageFooter() {
  return (
    <>
      <footer className="login-footer">
        <div className="login-footer-top">
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
        <div className="login-footer-bottom">
          <select name="lang" id="lang">
            <option value="en">English</option>
          </select>
          <div className="footer-copyright-text">© 2024 Instagram from Meta</div>
        </div>
      </footer>
    </>
  );
}

export default memo(BasicPageFooter);
