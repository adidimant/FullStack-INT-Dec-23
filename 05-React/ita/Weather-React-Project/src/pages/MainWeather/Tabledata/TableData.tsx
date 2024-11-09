import { memo, ReactNode } from "react";
import "./TableData.css";

type Box = {
    title: string;
    children: ReactNode
}

function TableData( { title, children }:Box ) {
    return (
        <div className="containerBox">
            <div className="title">{title}</div>
            {children}
        </div>
    )
}

export default memo(TableData)