import { memo } from "react";
import { Link } from "react-router-dom";
import GooglePlay from "../../../assets/google-play.png";
import Microsoft from "../../../assets/microsoft.png";
import "./UnderForm.css";

type UnderFormProps = {
  text: string;
  linkText: string;
  linkPath: string;
};

function UnderForm({ text, linkText, linkPath }: UnderFormProps) {
  return (
    <div className="under-form-container">
      <div className="prompt-section">
        <div className="prompt-text">
          {`${text} `}
          <Link to={linkPath} className="prompt-link">
            {linkText}
          </Link>
        </div>
      </div>
      <div className="get-app-section">
        <div className="get-app-text">Get the app.</div>
        <div className="get-app-img-container">
          <div className="google-play">
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
