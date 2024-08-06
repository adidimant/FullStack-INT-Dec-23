import { ReactNode, memo } from "react";
import Stories from "../../components/Stories/Stories";
import './MainPostComp.css';


function MainPostComp(): ReactNode {
  return (
    <div className="MainPostComp">
      <Stories/>

    </div>
  );
}

export default memo(MainPostComp);
