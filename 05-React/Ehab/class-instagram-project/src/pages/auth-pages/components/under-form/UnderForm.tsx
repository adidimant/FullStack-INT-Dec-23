import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import GooglePlay from "../../../assets/google-play.png";
import Microsoft from "../../../assets/microsoft.png";
import { useThemeContext } from "../../../../contexts/theme-context";
import "./UnderForm.css";
import '../../../../contexts/theme-style.css'


type UnderFormProps = {
  text: string;
  linkText: string;
  linkPath: string;
};

function UnderForm({ text, linkText, linkPath }: UnderFormProps) {
  const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);

  return (
    <div className={isDark ? 'under-form-container dark' : 'under-form-container light'} >
      <div className={isDark ? 'prompt-section dark' : 'prompt-section light'}>
        <div className={isDark ? 'prompt-text dark' : 'prompt-text light'} >
          {`${text} `}
          <Link to={linkPath} className= {isDark ? 'prompt-link dark' : 'prompt-link light'}>
            {linkText}
          </Link>
        </div>
      </div>
      <div className={isDark ? 'get-app-section dark' : 'get-app-section light'}>
        <div className={isDark ? 'get-app-text dark' : 'get-app-text light'}>Get the app.</div>
        <div className={isDark ? 'get-app-img-container dark' : 'get-app-img-container light'}>
          <div className={isDark ? 'google-play dark' : 'google-play light'}>
            <img src={GooglePlay} alt="google play" />
          </div>
          <div className="microsoft">
            <img src={Microsoft} alt="microsoft" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(UnderForm);
