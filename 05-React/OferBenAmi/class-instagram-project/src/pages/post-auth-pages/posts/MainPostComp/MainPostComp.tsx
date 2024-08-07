import { ReactNode, memo } from "react";
import Stories from "../components/Stories/Stories";
import Suggested from "../components/Suggested/Suggested";
import "./MainPostComp.css";

function MainPostComp(): ReactNode {
	return (
		<div className="MainPostComp">
			<div className="story-and-feed">
				<Stories />
			</div>
			
      <Suggested/>


		</div>
	);
}

export default memo(MainPostComp);
