import { memo, ReactNode } from "react";
import LeftNavBar from "../../../leftNavBar/LeftNavBar";
import './GoToPost.css';

function GoToPost(): ReactNode {
    
    return (
        <div style={{ display: "flex" }}>
            <LeftNavBar />
        </div>
    );
}

export default memo(GoToPost);
