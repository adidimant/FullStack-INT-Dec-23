import { memo, useMemo } from "react";
import { useThemeContext } from "../../../../contexts/theme-context";
import './AuthPageFooter.css';
import '../../../../contexts/theme-style.css'

function AuthPageFooter() {
  const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);
  const customStyle = useMemo(()=>{
    return ({
      backgroundColor: isDark ? '#000000':'#ffffff',
      color: isDark ? '#ffffff':'#737373'
    })
  },[isDark])
  return (
    <>
      <footer className={isDark ? 'auth-footer dark' : 'auth-footer light'}>
        <div className= {isDark ? 'auth-footer-top dark' : 'auth-footer-top light'}>
          <a href="" style={customStyle}>Meta</a>
          <a href="" style={customStyle}>About</a>
          <a href="" style={customStyle}>Blog</a>
          <a href="" style={customStyle}>Jobs</a>
          <a href="" style={customStyle}>Help</a>
          <a href="" style={customStyle}>API</a>
          <a href="" style={customStyle}>Privacy</a>
          <a href="" style={customStyle}>Terms</a>
          <a href="" style={customStyle}>Locations</a>
          <a href="" style={customStyle}>Instagram Lite</a>
          <a href="" style={customStyle}>Threads</a>
          <a href="" style={customStyle}>Contact Uploading & Non-Users</a>
          <a href=""style={customStyle}>Meta Verified</a>
        </div>
        <div className= {isDark ? 'auth-footer-bottom dark' : 'auth-footer-bottom light'}>
          <select name="lang" id="lang">
            <option value="en" style={customStyle}>English</option>
          </select>
          <div className= {isDark ? 'footer-copyright-text dark' : 'footer-copyright-text light'}>© 2024 Instagram from Meta</div>
        </div>
      </footer>
    </>
  );
}

export default memo(AuthPageFooter);
