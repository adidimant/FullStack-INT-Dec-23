import { memo } from "react";
import "./AuthSideBar.css"


type SidebarButton ={
    iconName: string, 
    text: string, 
    onClick: () => void;
}

function BtnSideBar({ iconName, text, onClick }:SidebarButton) {
  
    return (
        <button className="sidebar-button" onClick={onClick}>
            <span className="material-symbols-outlined icon">{iconName}</span>
            <div className="text"><span>{text}</span></div>
        </button>
     )
}

function AuthSideBar() {
    return (
        <>
        <div className="sidebar-home">
            <BtnSideBar iconName="home" text="Home" onClick={() => {}} />
            <BtnSideBar iconName="home" text="Home" onClick={() => {}} />

        </div>
        <div className="bottom-navbar">
            <BtnSideBar iconName="home" text="Home" onClick={() => {}} />
            <BtnSideBar iconName="home" text="Home" onClick={() => {}} />
        </div>
        </>
        

    )
}

export default memo(AuthSideBar)